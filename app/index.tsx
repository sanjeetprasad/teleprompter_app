
import { useEffect } from 'react';
import { router } from 'expo-router';
import { View } from 'react-native';
import { useAppStore } from '@/store/app-store';
import { styles } from '@/constants/styles';

export default function Index() {
  const seenOnboarding = useAppStore((s) => s.seenOnboarding);

  useEffect(() => {
    router.replace(seenOnboarding ? '/(tabs)/library' : '/onboarding');
  }, [seenOnboarding]);

  return <View style={styles.screen} />;
=======
import { Redirect } from 'expo-router';
import { useAppStore } from '@/store/app-store';

export default function Index() {
  const seenOnboarding = useAppStore((s) => s.seenOnboarding);
  return <Redirect href={seenOnboarding ? '/(tabs)/library' : '/onboarding'} />;
>>>>>>> origin/main
}
