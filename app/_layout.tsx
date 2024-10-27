import { Stack } from 'expo-router';
import { AppProvider } from '@/context/appContext';

export default function SettingsLayout() {
  return (
    <AppProvider>
      <Stack
        screenOptions={{
            headerShown: false,
            animation: 'fade',
        }}
    />
    </AppProvider>
  );
}
