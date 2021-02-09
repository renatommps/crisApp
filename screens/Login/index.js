import React, { useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import logo from "../../assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' },
        ],
      })
    )
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="center" source={logo} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          value={email}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          value={password}
          style={styles.inputText}
          placeholder="senha..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
        <Text style={styles.loginText}>Logar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
