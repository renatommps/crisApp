import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import logo from "../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.HelloMessageContainer}>
        <Text style={styles.HelloMessageBig}>Olá.</Text>
        <Text style={styles.HelloMessage}>Seja bem vindo ao CRIS!</Text>
        <Text style={styles.HelloMessage}>Seu aplicativo de trânsito gamificado!</Text>
        <Text style={styles.HelloMessage}>Vamos seguir em frente?</Text>
      </View>
      <View style={styles.ButtonsContainer}>
        <TouchableOpacity style={styles.enterBtn} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.enterText}>Entrar agora</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text style={styles.createAccountText}>Ainda não tenho conta</Text>
        </TouchableOpacity>
        <Image style={styles.logo} resizeMode="center" source={logo} />
      </View>
    </View>
  );
};

export default Login;
