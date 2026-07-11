import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Card, MD3Theme, Text, TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  const theme = useTheme();
  const [username, setUsername] = useState("");
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.containerScreen}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.containerScreen}
        keyboardVerticalOffset={0}
        contentContainerStyle={styles.containerScreen}
      >
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Content style={styles.content}>
              <Text variant="headlineSmall" style={styles.title}>
                Bem-vindo ao Chat com WebSocket
              </Text>

              <TextInput
                label="Nome de usuário"
                mode="outlined"
                value={username}
                onChangeText={setUsername}
                left={<TextInput.Icon icon="account" />}
              />
            </Card.Content>

            <Card.Actions style={styles.actions}>
              <Button
                mode="contained"
                style={styles.button}
                labelStyle={{ fontSize: 16, letterSpacing: 1.5 }}
                contentStyle={styles.buttonContent}
                onPress={() => router.navigate("/chat")}
              >
                ENTRAR
              </Button>
            </Card.Actions>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const createStyles = (theme: MD3Theme) => StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },

  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    borderRadius: 16,
    paddingVertical: 12,
    elevation: 4,
    backgroundColor: theme.colors.background,
    boxShadow: '7px 7px 20px rgba(0, 0, 0, 0.3)',
  },

  content: {
    gap: 20,
  },

  title: {
    textAlign: "center",
    marginBottom: 8,
    fontWeight: "bold",
    letterSpacing: 1,
  },

  actions: {
    padding: 16,
  },

  button: {
    width: "100%",
    backgroundColor: theme.colors.primary,
  },

  buttonContent: {
    height: 48,
  },

});