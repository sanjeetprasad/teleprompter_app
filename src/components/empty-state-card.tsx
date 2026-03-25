import { Text, View } from 'react-native';
import { styles } from '@/constants/styles';

export function EmptyStateCard({ title, message }: { title: string; message: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.body}>{message}</Text>
    </View>
  );
}
