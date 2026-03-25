import { Pressable, Text, View } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { styles } from '@/constants/styles';
import { palette } from '@/constants/theme';
import { cameraService } from '@/services/camera-service';
import { useAppStore } from '@/store/app-store';

export function RecordScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const script = useAppStore((s) => s.scripts.find((item) => item.id === id));
  const premium = useAppStore((s) => s.subscriptionActive);

  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>Video Recording</Text>
      <View style={[styles.card, { flex: 1, marginBottom: 12, justifyContent: 'center' }]}>
        <Text style={[styles.body, { marginBottom: 12 }]}>Camera preview placeholder (Expo Camera integration point)</Text>
        <Text style={{ color: palette.text }}>{script?.content.slice(0, 160)}...</Text>
      </View>
      <View style={[styles.row, { marginBottom: 12 }]}>
        <Text style={{ color: palette.muted }}>{premium ? 'No watermark' : 'Watermark enabled (free plan)'}</Text>
        <Pressable onPress={() => router.push('/premium')}><Text style={{ color: palette.accent }}>Upgrade</Text></Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.primaryButton} onPress={() => cameraService.startRecording()}><Text style={styles.primaryButtonText}>Start</Text></Pressable>
        <Pressable style={[styles.primaryButton, { marginLeft: 10 }]} onPress={() => cameraService.stopRecording()}><Text style={styles.primaryButtonText}>Stop</Text></Pressable>
      </View>
    </View>
  );
}
