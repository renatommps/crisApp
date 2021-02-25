import React, { useState, useEffect } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import lines from "./lines.png";

const Splash = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: "Home" }],
      })
    );
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
            placeholder="Seu nome"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputViewEmail}>
          <TextInput
            style={styles.inputText}
            value={email}
            placeholder="Email"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputViewEmail}>
          <TextInput
            style={styles.inputText}
            value={email}
            placeholder="Data de Nascimento"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputViewPassword}>
          <TextInput
            secureTextEntry
            value={password}
            style={styles.inputText}
            placeholder="Senha"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputViewPassword}>
          <TextInput
            secureTextEntry
            value={password}
            style={styles.inputText}
            placeholder="Confirme sua senha"
            placeholderTextColor="#6C6C6C"
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
