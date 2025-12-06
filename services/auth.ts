import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiPost, setToken } from "./api";

const LOGIN_PATH = "/auth/login";

export async function login(email: string, senha: string) {
  try {
    const payload = {
      email: email,         // campo correto
      password: senha,      // 👈 backend usa "password", não "senha"
    };

    const data = await apiPost(LOGIN_PATH, payload);

    if (data?.token) {
      await setToken(data.token);

      // salva os dados do usuário
      await AsyncStorage.setItem(
        "@siob:user",
        JSON.stringify(data.user ?? {})
      );

      return { success: true, data };
    }

    return { success: false, data };
  } catch (error) {
    console.log("❌ Erro AUTH:", error);
    return { success: false, error };
  }
}

export async function logout() {
  await setToken(null);
  await AsyncStorage.removeItem("@siob:user");
}
