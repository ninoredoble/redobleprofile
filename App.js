import React, { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/pages/Profile';

export default function App() {
  const systemTheme = useColorScheme();  // Detect system theme
  const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');  // Track manual toggle

  // Listen for system theme changes and apply if no manual toggle
  useEffect(() => {
    setIsDarkMode(systemTheme === 'dark');
  }, [systemTheme]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Profile isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
