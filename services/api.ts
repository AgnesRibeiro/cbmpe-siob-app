import AsyncStorage from "@react-native-async-storage/async-storage";

const BASE_URL = "https://siob-back-end.onrender.com/api/v1";

async function getAuthHeaders() {
  const token = await AsyncStorage.getItem("@siob:token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function apiGet(path: string) {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function apiPost(path: string, body: any) {
  const headers = await getAuthHeaders();
  const res = await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export async function setToken(token: string | null) {
  if (token) {
    await AsyncStorage.setItem("@siob:token", token);
  } else {
    await AsyncStorage.removeItem("@siob:token");
  }
}

export default {
  apiGet,
  apiPost,
  setToken,
};
