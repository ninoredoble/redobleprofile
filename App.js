import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/pages/Profile';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);  // Track if fonts are loaded
  const systemTheme = useColorScheme();  // Detect system theme
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');  // Track manual toggle

  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();  // Load fonts on app start
  }, []);

  // Listen for system theme changes and apply if no manual toggle
  useEffect(() => {
    setIsDarkMode(systemTheme === 'dark');
  }, [systemTheme]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  if (!fontsLoaded) {
    // Show loading spinner until fonts are loaded
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Profile isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
