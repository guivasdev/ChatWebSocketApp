import { useMemo } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { IconButton, MD3Theme, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardVerticalOffset={0}
        contentContainerStyle={styles.container}
      >
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            style={styles.scrollContent}
            keyboardShouldPersistTaps="always"
          >
          </ScrollView>

          <View style={styles.footer}>
            <TextInput mode='outlined' style={styles.input} placeholder='Digite a mensagem aqui...' />
            <IconButton icon={"send"} size={33} style={styles.IconButton}></IconButton>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },

    scrollContent: {
      flex: 1,
      padding: 0,
      paddingBottom: 0,
    },

    footer: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingVertical: 0,
      paddingBottom:4,

    },
    input: {
      flex: 4,
      elevation: 4,
      boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
    },

    IconButton: {
      flex: 1,
      height: 'auto',
      padding: 0,
      marginVertical: 0,
      elevation: 4,
      boxShadow: '4px 4px 6px rgba(0, 0, 0, 0.3)',
      backgroundColor: theme.colors.onPrimary,
      borderRadius: 8,
    },

  });
