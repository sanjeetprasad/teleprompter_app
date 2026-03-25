import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '@/constants/styles';
import { palette } from '@/constants/theme';

export function SearchBar({ value, onChangeText }: { value: string; onChangeText: (text: string) => void }) {
  return (
    <View style={[styles.row, styles.input, { gap: 10 }]}> 
      <Ionicons name="search" color={palette.muted} size={18} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search scripts and folders"
        placeholderTextColor={palette.muted}
        style={{ color: palette.text, flex: 1, fontSize: 16 }}
      />
    </View>
  );
}
