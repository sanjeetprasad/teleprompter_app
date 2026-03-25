import { Pressable, Text } from 'react-native';
import { Folder } from '@/models/types';
import { styles } from '@/constants/styles';

export function FolderCard({ folder, count, onPress }: { folder: Folder; count: number; onPress?: () => void }) {
  return (
    <Pressable style={[styles.card, { marginRight: 10, minWidth: 170 }]} onPress={onPress}>
      <Text style={styles.cardTitle}>{folder.name}</Text>
      <Text style={styles.body}>{count} scripts</Text>
    </Pressable>
  );
}
