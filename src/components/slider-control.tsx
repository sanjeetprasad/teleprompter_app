import { Text, View } from 'react-native';
import { palette } from '@/constants/theme';

export function SliderControl({ label, value }: { label: string; value: number }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text style={{ color: palette.muted, marginBottom: 6 }}>{label}</Text>
      <View style={{ height: 42, borderRadius: 12, backgroundColor: palette.surface, justifyContent: 'center', paddingHorizontal: 14 }}>
        <Text style={{ color: palette.text }}>{value.toFixed(1)}</Text>
      </View>
    </View>
  );
}
