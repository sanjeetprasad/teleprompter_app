import { Pressable, Text, View } from 'react-native';
import { Script } from '@/models/types';
import { styles } from '@/constants/styles';
import { palette } from '@/constants/theme';

export function ScriptCard({ script, onPress }: { script: Script; onPress: () => void }) {
  return (
    <Pressable style={[styles.card, { marginBottom: 10 }]} onPress={onPress}>
      <Text style={styles.cardTitle}>{script.title}</Text>
      <Text numberOfLines={2} style={styles.body}>{script.content || 'Start writing your script...'}</Text>
      <View style={[styles.row, { marginTop: 12 }]}>
        <Text style={{ color: palette.muted }}>{script.wordCount} words</Text>
        <Text style={{ color: palette.muted }}>{script.estimatedDuration}s</Text>
      </View>
    </Pressable>
  );
}
