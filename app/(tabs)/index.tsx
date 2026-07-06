import { useRouter } from "expo-router";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.screen} behavior={"height"}
      >
        <Card style={styles.card}>
          <Card.Content style={styles.content}>
            <Text variant="titleLarge" style={styles.title} >
              Bem-vindo ao Chat com WebSocket
            </Text>

            <TextInput
              label="Nome de usuário" mode="outlined"
              left={<TextInput.Icon icon="account" />}
            />
          </Card.Content>

          <Card.Actions style={styles.actions}>
            <Button
              mode="contained"
              onPress={() => router.navigate("/(tabs)/explore")}
            >
              ENTRAR
            </Button>
          </Card.Actions>
        </Card>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    paddingVertical: 10,
  },
  content: {
    gap: 20,
  },

  title: {
    textAlign: "center",
  },
  actions: {
    justifyContent: "center",
    paddingBottom: 16,
  },
});