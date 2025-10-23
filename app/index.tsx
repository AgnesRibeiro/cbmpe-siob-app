// app/index.tsx (na raiz do app)
import { Redirect } from 'expo-router';

const isAuthenticated = false; // Mantenha como 'false'

export default function AppRoot() {
  if (!isAuthenticated) {
    // Redireciona para a rota app/LoginScreen.tsx
    return <Redirect href="/LoginScreen" />;
  }
  // Se isAuthenticated fosse true, ele cairia para a próxima rota (o (app) group)
  return <Redirect href="/(app)/index" />;
}