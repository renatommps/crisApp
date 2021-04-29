/* eslint-disable @typescript-eslint/ban-types */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../utils/api";

interface SignInCredntials {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string,
  name: string,
  pontuation?: number,
  'created at': string,
  'updated at': string
 }

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: SignInCredntials): Promise<void>;
  signOut(): void;
  loading: boolean;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log('[auth useEffect  called]');
    async function loadStoreData(): Promise<void> {
      // console.log('[auth useEffect loadStoreData called]');
      const [token, user] = await AsyncStorage.multiGet([
        "@Cris:token",
        "@Cris:user",
      ]);
      if (token[1] && user[1]) {
        // console.log('[auth useEffect will set data]');
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
      setLoading(false);
    }
    loadStoreData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    // console.log('[auth signIn  called]');

    const response = await api.post("sessions", {
      email,
      password,
    });
    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ["@Cris:token", token],
      ["@Cris:user", JSON.stringify(user)],
    ]);

    setData({ token, user });

    // console.log('[auth signIn  data set]');
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(["Cris:user", "@Cris:token"]);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, token: data.token, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
export { AuthContext, AuthProvider, useAuth };
