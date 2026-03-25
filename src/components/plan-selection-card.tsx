import { Pressable, Text } from 'react-native';
import { palette } from '@/constants/theme';

export function PlanSelectionCard({ title, price, selected, onPress }: { title: string; price: string; selected: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        borderRadius: 14,
        borderWidth: 1,
        borderColor: selected ? palette.accent : palette.border,
        backgroundColor: palette.card,
        padding: 14,
        marginBottom: 10,
      }}>
      <Text style={{ color: palette.text, fontSize: 17, fontWeight: '700' }}>{title}</Text>
      <Text style={{ color: palette.muted, marginTop: 4 }}>{price}</Text>
    </Pressable>
  );
}
