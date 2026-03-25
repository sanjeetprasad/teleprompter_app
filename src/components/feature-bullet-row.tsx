import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { palette } from '@/constants/theme';

export function FeatureBulletRow({ text }: { text: string }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 }}>
      <Ionicons name="checkmark-circle" size={18} color={palette.success} />
      <Text style={{ color: palette.text, flex: 1 }}>{text}</Text>
    </View>
  );
}
