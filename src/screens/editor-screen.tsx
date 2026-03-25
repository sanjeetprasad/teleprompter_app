import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { useAppStore } from '@/store/app-store';
import { styles } from '@/constants/styles';
import { palette } from '@/constants/theme';

export function EditorScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const script = useAppStore((s) => s.scripts.find((item) => item.id === id));
  const updateScript = useAppStore((s) => s.updateScript);
  const duplicateScript = useAppStore((s) => s.duplicateScript);
  const deleteScript = useAppStore((s) => s.deleteScript);
  const [title, setTitle] = useState(script?.title ?? '');
  const [content, setContent] = useState(script?.content ?? '');

  useEffect(() => {
    if (id) updateScript(id, { title, content });
  }, [content, id, title, updateScript]);

  const meta = useMemo(() => `${script?.wordCount ?? 0} words • ${script?.estimatedDuration ?? 0}s`, [script]);

  return (
    <View style={styles.screen}>
      <View style={[styles.row, { marginBottom: 14 }]}>
        <Pressable onPress={() => router.back()}><Text style={{ color: palette.accent }}>Back</Text></Pressable>
        <Text style={{ color: palette.muted }}>{meta}</Text>
      </View>
      <TextInput value={title} onChangeText={setTitle} style={[styles.input, { fontSize: 24, fontWeight: '700', marginBottom: 12 }]} />
      <TextInput
        value={content}
        onChangeText={setContent}
        multiline
        placeholder="Write your script..."
        placeholderTextColor={palette.muted}
        style={[styles.input, { minHeight: 320, textAlignVertical: 'top', lineHeight: 28 }]}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 12 }}>
        <View style={[styles.row, { gap: 10 }]}>
          <Action label="Preview" onPress={() => router.push(`/teleprompter/${id}`)} />
          <Action label="Record" onPress={() => router.push(`/record/${id}`)} />
          <Action label="Duplicate" onPress={() => id && duplicateScript(id)} />
          <Action label="Delete" onPress={() => id && (deleteScript(id), router.back())} />
          <Action label="Upgrade" onPress={() => router.push('/premium')} />
        </View>
      </ScrollView>
    </View>
  );
}

function Action({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.card, { paddingVertical: 10, paddingHorizontal: 14 }]}>
      <Text style={{ color: palette.text, fontWeight: '600' }}>{label}</Text>
    </Pressable>
  );
}
