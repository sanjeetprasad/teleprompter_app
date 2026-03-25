import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@/store/theme-provider';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="editor/[id]" />
        <Stack.Screen name="teleprompter/[id]" />
        <Stack.Screen name="record/[id]" />
        <Stack.Screen name="premium" />
      </Stack>
    </ThemeProvider>
  );
}
