import { StyleSheet } from 'react-native';
import { palette } from './theme';

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: palette.bg, padding: 16 },
  hero: { color: palette.text, fontSize: 34, fontWeight: '800', marginBottom: 12 },
  subtitle: { color: palette.muted, fontSize: 17, lineHeight: 24 },
  card: { backgroundColor: palette.card, borderRadius: 16, borderWidth: 1, borderColor: palette.border, padding: 16 },
  cardTitle: { color: palette.text, fontSize: 20, fontWeight: '700', marginBottom: 8 },
  body: { color: palette.muted, fontSize: 15, lineHeight: 22 },
  primaryButton: {
    backgroundColor: palette.accent,
    borderRadius: 14,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  sectionTitle: { color: palette.text, fontSize: 20, fontWeight: '700', marginBottom: 12 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  input: {
    backgroundColor: palette.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: palette.border,
    color: palette.text,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
});
