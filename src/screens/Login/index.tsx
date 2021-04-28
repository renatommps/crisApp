import React, { useState } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
//@ts-ignore
import lines from "./lines.png";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";

const Splash = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await signIn({
      email: email,
      password: password,
    }).catch((err) => {
      console.log(err);
      Alert.alert(
        "Erro na autenticação",
        "Ocorreu um erro ao fazer login, cheque as credenciais."
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.lines} resizeMode="stretch" source={lines} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.inputViewEmail}>
          <TextInput
            style={styles.inputText}
            value={email}
            placeholder="Email"
            placeholderTextColor="#6C6C6C"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text.trim())}
          />
        </View>
        <View style={styles.inputViewPassword}>
          <TextInput
            secureTextEntry
            value={password}
            style={styles.inputText}
            placeholder="Senha"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setPassword(text.trim())}
          />
        </View>
        {/* <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Entrar agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
