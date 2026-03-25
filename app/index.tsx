import { Redirect } from 'expo-router';
import { useAppStore } from '@/store/app-store';

export default function Index() {
  const seenOnboarding = useAppStore((s) => s.seenOnboarding);
  return <Redirect href={seenOnboarding ? '/(tabs)/library' : '/onboarding'} />;
}
