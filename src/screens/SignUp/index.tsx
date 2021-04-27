import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import lines from "./lines.png";
import api from "../../utils/api";

const Splash = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (isValid) handleLogin();
  }, [isValid]);

  const handleLogin = () => {
    if (!isValid) return;
    setIsLoading(true);

    const data = {
      name: name,
      email: email,
      password: password,
    };

    api.post("/users", data)
    .then(() => {
      setIsLoading(false);
      Alert.alert(
        "Cadastro realizado com sucesso!",
        "Você já pode fazer login na aplicação."
      );
      setIsLoading(true);
      navigation.navigate("Login");
    })
    .catch((err) => {
      setIsLoading(false);
      Alert.alert(
        "Erro no cadastro",
        "Ocorreu um erro ao fazer cadastro, tente novamente."
      );
    });
  };

  const checkValidForm = () => {
    let checkValid = true;
    if (!name || !email || !password || !passwordConfirm) {
      Alert.alert("Dados invalidos", "Por favor, preencher todos os campos");
      checkValid = false;
    }
    if (!validateEmail(email)) {
      Alert.alert("Email invalido", "Por favor, preencher com email valido");
      checkValid = false;
    }
    if (password !== passwordConfirm) {
      Alert.alert("Senhas não coincidem", "As senhas diferem uma da outra");
      checkValid = false;
    }
    if (checkValid) {
      setIsValid(true);
    }
  };

  const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image style={styles.lines} resizeMode="stretch" source={lines} />
      </View>

      <View style={styles.bottomContainer}>
        {isLoading && <ActivityIndicator size="large" color="#EDC951" />}
        <View style={styles.inputViewEmail}>
          <TextInput
            style={styles.inputText}
            value={name}
            placeholder="Seu nome"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setName(text.trim())}
          />
        </View>
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
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text.trim())}
          />
        </View>
        <View style={styles.inputViewPassword}>
          <TextInput
            secureTextEntry
            value={passwordConfirm}
            style={styles.inputText}
            placeholder="Confirme sua senha"
            autoCorrect={false}
            autoCapitalize="none"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setPasswordConfirm(text.trim())}
          />
        </View>
        <TouchableOpacity onPress={checkValidForm} style={styles.loginBtn}>
          <Text style={styles.loginText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
