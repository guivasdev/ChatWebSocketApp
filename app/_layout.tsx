import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { PaperProvider, ThemeProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <ThemeProvider>
          <StatusBar hidden />
          <Stack screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="chat" />
          </Stack>
        </ThemeProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
