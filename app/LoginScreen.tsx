// app/LoginScreen.tsx

import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Importações Críticas:
import { MaterialIcons } from '@expo/vector-icons';
import { SIOB_COLORS } from '../constants/Colors';

// *** CORREÇÃO DO CAMINHO COM BASE NA SUA ESTRUTURA: assets/images/ ***
const SIOB_LOGO = require('../assets/images/SIOBlOGO.png');

export default function LoginScreen() {
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.log(`Tentativa de Login: ${matricula}/${senha}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.centeredContent}>

        <View style={styles.logoArea}>
          <View style={styles.logoContainer}>
            {/* *** LOGO INSERIDA AQUI *** */}
            <Image
              source={SIOB_LOGO}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.title}>Sistema Integrado de Ocorrências</Text>
        </View>

        <View style={styles.formCard}>
          {/* Inputs Matrícula e Senha */}
          <View style={styles.inputContainer}>
            <MaterialIcons name="person" size={24} color="#999" style={styles.inputIcon} />
            <TextInput style={styles.inputField} placeholder="Matrícula" placeholderTextColor="#777" keyboardType="numeric" value={matricula} onChangeText={setMatricula} />
          </View>
          <View style={styles.inputContainer}>
            <MaterialIcons name="lock" size={24} color="#999" style={styles.inputIcon} />
            <TextInput style={styles.inputField} placeholder="Senha" placeholderTextColor="#777" secureTextEntry value={senha} onChangeText={setSenha} />
          </View>

          {/* Botão de Login */}
          <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: SIOB_COLORS.primary,
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoArea: {
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: SIOB_COLORS.primary,
  },
  formCard: {
    backgroundColor: SIOB_COLORS.white,
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  logoContainer: {
    width: 100,
    height: 100,
    backgroundColor: SIOB_COLORS.white,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  // *** ESTILO PARA A LOGO AGORA É OBRIGATÓRIO ***
  logoImage: {
    width: '80%',
    height: '80%',
  },

  title: {
    fontSize: 18,
    color: SIOB_COLORS.white,
    fontWeight: '500',
    marginBottom: 10,
  },

  // ESTILOS PARA INPUT COM ÍCONE
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: SIOB_COLORS.background,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    paddingVertical: 15,
    fontSize: 16,
    color: SIOB_COLORS.text,
  },

  button: {
    width: '100%',
    backgroundColor: SIOB_COLORS.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: SIOB_COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 10,
  },
  buttonText: {
    color: SIOB_COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});