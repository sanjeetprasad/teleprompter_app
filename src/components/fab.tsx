import { Pressable, Text } from 'react-native';
import { palette } from '@/constants/theme';

export function Fab({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        position: 'absolute',
        right: 20,
        bottom: 26,
        backgroundColor: palette.accent,
        borderRadius: 24,
        paddingHorizontal: 18,
        paddingVertical: 14,
      }}>
      <Text style={{ color: '#fff', fontWeight: '700' }}>{label}</Text>
    </Pressable>
  );
}
