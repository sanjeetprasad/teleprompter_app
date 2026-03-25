import { FlatList, Text, View } from 'react-native';
import { useAppStore } from '@/store/app-store';
import { styles } from '@/constants/styles';
import { EmptyStateCard } from '@/components/empty-state-card';

export function VideosScreen() {
  const recordings = useAppStore((s) => s.recordings);

  return (
    <View style={styles.screen}>
      <Text style={styles.sectionTitle}>Recordings</Text>
      <FlatList
        data={recordings}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<EmptyStateCard title="No recordings yet" message="Record with teleprompter overlay to build your library." />}
        renderItem={({ item }) => (
          <View style={[styles.card, { marginBottom: 10 }]}>
            <Text style={styles.cardTitle}>{item.id}</Text>
            <Text style={styles.body}>{item.duration}s • {new Date(item.createdAt).toDateString()}</Text>
          </View>
        )}
      />
    </View>
  );
}
