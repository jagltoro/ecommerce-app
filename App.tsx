import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/Components/useCachedResources';
import Navigation from './src/Components/Navigation';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './src/Components/Theme';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar />
        </SafeAreaProvider>
      </ThemeProvider>
    );
  }
}
