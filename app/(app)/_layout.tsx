// app/_layout.tsx (ROOT LAYOUT)
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* 1. O arquivo 'index' na raiz (que faz o redirecionamento para Login) */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* 2. A tela de Login: Mantenha fora do grupo (app) e sem cabeçalho */}
      <Stack.Screen name="LoginScreen" options={{ headerShown: false, title: 'Login' }} />

      {/* 3. O grupo de Abas: Esta é a única tela que deve ter as abas visíveis, mas o _layout interno cuida disso. */}
      <Stack.Screen name="(app)" options={{ headerShown: false }} />

      {/* 4. Outras telas */}
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}