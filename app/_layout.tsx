// app/_layout.tsx (ROOT LAYOUT - na RAIZ da pasta app)

import { Stack } from 'expo-router'; // *** Importe Stack, NÃO Tabs! ***

export default function RootLayout() {
  return (
    <Stack>
      {/* 1. A rota inicial, que decide se vai para Login ou Abas */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* 2. A tela de Login (que não deve ter cabeçalho ou abas) */}
      <Stack.Screen name="LoginScreen" options={{ headerShown: false, title: 'Login' }} />

      {/* 3. O grupo de Abas (o nome da pasta que você criou) */}
      <Stack.Screen name="(app)" options={{ headerShown: false }} />

      {/* 4. Outras telas */}
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  );
}