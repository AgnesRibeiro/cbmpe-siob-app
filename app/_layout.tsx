import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter, useSegments } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { OccurrenceProvider } from '../contexts/OccurrenceContext';
import { UserProvider } from '../contexts/UserContext';

export default function RootLayout() {
  const router = useRouter();
  const segments = useSegments();

  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  // 🔍 Verifica se existe token salvo no AsyncStorage
  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      setLogged(!!token);
    } catch (error) {
      console.warn("Erro ao verificar token:", error);
    } finally {
      setLoading(false);
    }
  };

  // Executa ao iniciar
  useEffect(() => {
    checkAuth();
  }, []);

  // Redireciona baseado no login
  useEffect(() => {
    if (loading) return;

    const inLoginPage = segments.includes('login');

    if (!logged && !inLoginPage) {
      router.replace('/login');
    }

    if (logged && inLoginPage) {
      router.replace('/DashboardScreen');
    }
  }, [loading, logged]);

  // Tela de carregamento inicial
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
        }}
      >
        <ActivityIndicator size="large" color="#AE1A16" />
      </View>
    );
  }

  return (
    <UserProvider>
      <OccurrenceProvider>
        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="DashboardScreen" options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" options={{ headerShown: false }} />
          <Stack.Screen name="OcorrenciasScreen" options={{ headerShown: false }} />
          <Stack.Screen name="NovaOcorrenciaScreen" options={{ headerShown: false }} />
          <Stack.Screen name="DetalhesOcorrenciaScreen" options={{ headerShown: false }} />
          <Stack.Screen name="MenuScreen" options={{ headerShown: false }} />
          <Stack.Screen name="ConfigScreen" options={{ headerShown: false }} />
          <Stack.Screen name="DetalhesNaturezaScreen" options={{ headerShown: false }} />
        </Stack>
      </OccurrenceProvider>
    </UserProvider>
  );
}
