import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack  screenOptions={{
      headerTitle: "",
      headerShown:false,
      headerStyle: { backgroundColor: 'white', },
      contentStyle:{flex:1,zIndex:0, position:'fixed'},

    }}
    
    >
      <Stack.Screen name="index" options={{ title: 'index' }} />
      <Stack.Screen name="explore" options={{ title: 'explore' }} />

    </Stack>
  );
}
