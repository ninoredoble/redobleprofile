import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/pages/Profile';

export default function App() {
  // State to track if custom fonts are loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);  
  // Get the current system color scheme (light/dark)
  const systemTheme = useColorScheme();  
  // State to track if dark mode is enabled
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');  

  // Function to load custom fonts asynchronously
  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });
    setFontsLoaded(true);  // Update state when fonts are loaded
  };

  // Load fonts when the app starts
  useEffect(() => {
    loadFonts();
  }, []);

  // Effect to listen for changes in the system theme
  useEffect(() => {
    setIsDarkMode(systemTheme === 'dark');
  }, [systemTheme]);  // Re-run this effect when systemTheme changes

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  // If fonts are not loaded yet, display a loading spinner
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Render the main application interface once fonts are loaded
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Profile isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
