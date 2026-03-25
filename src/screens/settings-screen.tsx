import { Pressable, ScrollView, Text, View } from 'react-native';
import { styles } from '@/constants/styles';
import { useAppStore } from '@/store/app-store';
import { palette } from '@/constants/theme';
import { syncService } from '@/services/sync-service';

export function SettingsScreen() {
  const user = useAppStore((s) => s.user);
  const togglePremium = useAppStore((s) => s.togglePremium);

  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={[styles.card, { marginBottom: 10 }]}>
        <Text style={styles.cardTitle}>Account & Sync</Text>
        <Text style={styles.body}>{user.email} • {user.planType.toUpperCase()}</Text>
        <Pressable style={{ marginTop: 8 }} onPress={() => syncService.syncNow()}><Text style={{ color: palette.accent }}>Sync now</Text></Pressable>
      </View>
      <View style={[styles.card, { marginBottom: 10 }]}>
        <Text style={styles.cardTitle}>Prompt defaults</Text>
        <Text style={styles.body}>Font {user.settings.defaultFontSize}, Speed {user.settings.defaultScrollSpeed}</Text>
        <Text style={styles.body}>Mirror default: {user.settings.mirrorModeDefault ? 'On' : 'Off'}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Subscription</Text>
        <Pressable onPress={togglePremium}><Text style={{ color: palette.accent }}>Toggle dummy premium</Text></Pressable>
      </View>
    </ScrollView>
  );
}
