import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { useKeepAwake } from 'expo-keep-awake';
import { useLocalSearchParams } from 'expo-router';
import { useAppStore } from '@/store/app-store';
import { styles } from '@/constants/styles';
import { SliderControl } from '@/components/slider-control';
import { palette } from '@/constants/theme';

export function TeleprompterScreen() {
  useKeepAwake();
  const { id } = useLocalSearchParams<{ id: string }>();
  const script = useAppStore((s) => s.scripts.find((item) => item.id === id));
  const [paused, setPaused] = useState(true);
  const [fontSize, setFontSize] = useState(38);
  const [speed, setSpeed] = useState(1.2);

  const content = useMemo(() => script?.content ?? 'No script found.', [script]);

  return (
    <View style={styles.screen}>
      <Text style={[styles.sectionTitle, { marginBottom: 8 }]}>Teleprompter Mode</Text>
      <View style={[styles.card, { marginBottom: 12 }]}>
        <Text style={{ color: palette.muted }}>Countdown: 3s • Mirror: Off • Progress: 0%</Text>
      </View>
      <ScrollView style={[styles.card, { flex: 1 }]}>
        <Text style={{ color: palette.text, fontSize, lineHeight: fontSize * 1.4 }}>{content}</Text>
      </ScrollView>
      <View style={{ marginTop: 12 }}>
        <SliderControl label="Font Size" value={fontSize} />
        <SliderControl label="Scroll Speed" value={speed} />
      </View>
      <View style={[styles.row, { marginTop: 8 }]}>
        <Pressable onPress={() => setFontSize((v) => Math.max(24, v - 2))}><Text style={{ color: palette.accent }}>A-</Text></Pressable>
        <Pressable onPress={() => setPaused((p) => !p)}><Text style={{ color: palette.accent }}>{paused ? 'Play' : 'Pause'}</Text></Pressable>
        <Pressable onPress={() => setFontSize((v) => Math.min(56, v + 2))}><Text style={{ color: palette.accent }}>A+</Text></Pressable>
      </View>
    </View>
  );
}
