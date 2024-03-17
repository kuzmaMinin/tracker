import FontAwesome from '@expo/vector-icons/FontAwesome';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Drawer } from 'expo-router/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import '../../locales/i18n';

const queryClient = new QueryClient();

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'transport',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer screenOptions={{ headerShown: true, headerStatusBarHeight: 0 }}>
          <Drawer.Screen
            name="(stack)"
            options={{
              drawerLabel: t('transportList.title'),
              title: t('transportList.drawerLabel'),
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: t('settings.title'),
              title: t('settings.drawerLabel'),
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
