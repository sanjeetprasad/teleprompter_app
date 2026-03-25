import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { styles } from '@/constants/styles';
import { useAppStore } from '@/store/app-store';
import { SearchBar } from '@/components/search-bar';
import { ScriptCard } from '@/components/script-card';
import { FolderCard } from '@/components/folder-card';
import { Fab } from '@/components/fab';
import { EmptyStateCard } from '@/components/empty-state-card';
import { palette } from '@/constants/theme';

export function LibraryScreen() {
  const [query, setQuery] = useState('');
  const [grid, setGrid] = useState(false);
  const scripts = useAppStore((s) => s.scripts);
  const folders = useAppStore((s) => s.folders);
  const createScript = useAppStore((s) => s.createScript);

  const filtered = useMemo(
    () => scripts.filter((s) => `${s.title} ${s.content}`.toLowerCase().includes(query.toLowerCase())),
    [query, scripts]
  );

  return (
    <View style={styles.screen}>
      <SearchBar value={query} onChangeText={setQuery} />
      <View style={[styles.row, { marginVertical: 14 }]}>
        <Text style={styles.sectionTitle}>Recent scripts</Text>
        <Pressable onPress={() => setGrid((g) => !g)}>
          <Text style={{ color: palette.accent }}>{grid ? 'List view' : 'Grid view'}</Text>
        </Pressable>
      </View>
      <FlatList
        data={filtered}
        numColumns={grid ? 2 : 1}
        key={grid ? 'grid' : 'list'}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={grid ? { gap: 10 } : undefined}
        renderItem={({ item }) => (
          <View style={{ flex: grid ? 1 : undefined }}>
            <ScriptCard script={item} onPress={() => router.push(`/editor/${item.id}`)} />
          </View>
        )}
        ListEmptyComponent={<EmptyStateCard title="No scripts yet" message="Tap Add New to create your first teleprompter script." />}
        ListHeaderComponent={
          <View>
            <Text style={[styles.sectionTitle, { marginTop: 4 }]}>Folders</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
              {folders.map((f) => (
                <FolderCard key={f.id} folder={f} count={scripts.filter((s) => s.folderId === f.id).length} />
              ))}
            </ScrollView>
          </View>
        }
      />
      <Fab
        label="+ Add New"
        onPress={() => {
          const id = createScript();
          router.push(`/editor/${id}`);
        }}
      />
    </View>
  );
}
