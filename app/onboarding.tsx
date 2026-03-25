import { Pressable, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useAppStore } from '@/store/app-store';
import { styles } from '@/constants/styles';

export default function OnboardingScreen() {
  const completeOnboarding = useAppStore((s) => s.completeOnboarding);

  return (
    <View style={[styles.screen, { justifyContent: 'space-between', paddingVertical: 48 }]}>
      <View>
        <Text style={styles.hero}>Teleprompter Pro</Text>
        <Text style={styles.subtitle}>Create, prompt, and record with studio-level control.</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Made for creators</Text>
        <Text style={styles.body}>Write scripts, auto-save drafts, and go live in one tap.</Text>
      </View>
      <Pressable
        accessibilityRole="button"
        style={styles.primaryButton}
        onPress={() => {
          completeOnboarding();
          router.replace('/(tabs)/library');
        }}>
        <Text style={styles.primaryButtonText}>Start Creating</Text>
      </Pressable>
    </View>
  );
}
