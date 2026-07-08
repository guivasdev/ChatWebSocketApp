import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import { Button, Card, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView style={styles.containerScreen}>
      <View style={styles.containerScreen}>
        <KeyboardAvoidingView
          behavior={'height'}
          style={styles.containerScreen}
          keyboardVerticalOffset={0}
          contentContainerStyle={styles.containerScreen}
        >
          <View style={styles.container}>
            <Card style={styles.card}>
              <Card.Content style={styles.content}>
                <Text variant="headlineSmall" style={styles.title}>Bem-vindo ao Chat com WebSocket  </Text>

                <TextInput
                  label="Nome de usuário"
                  mode="outlined"
                  style={{backgroundColor:'#fff'}}
                  value={username}
                  onChangeText={setUsername}
                  left={<TextInput.Icon icon="account" />}
                />
              </Card.Content>

              <Card.Actions style={styles.actions}>
                <Button
                  mode="contained"
                  style={styles.button}
                  contentStyle={styles.buttonContent}
                  onPress={() => router.navigate("/explore")}
                >
                  Entrar
                </Button>
              </Card.Actions>
            </Card>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
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
    backgroundColor: '#ccc'
  },
  content: {
    gap: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 8,
  },
  actions: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  button: {
    width: "100%",
  },
  buttonContent: {
    height: 48,
  },
});