import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "SF-Bold": require("#/fonts/SF-Pro-Display-Bold.otf"),
          "SF-Semibold": require("#/fonts/SF-Pro-Display-Semibold.otf"),
          "SF-Medium": require("#/fonts/SF-Pro-Display-Medium.otf"),
          "SF-Regular": require("#/fonts/SF-Pro-Display-Regular.otf"),
          "SF-Light": require("#/fonts/SF-Pro-Display-Light.otf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
