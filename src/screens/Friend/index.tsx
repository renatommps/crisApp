import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Image, TextInput, TouchableOpacity, Text,  Alert } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../hooks/auth";
import api from "../../utils/api";

const Friend = () => {
  const { token } = useAuth();
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (isValid) handleAddFriend();
  }, [isValid]);


  const checkValidFriend = () => {
    if (!email) {
      Alert.alert("Insira o email do(a) amigo(a) que quer adicionar");
      return;
    }
    setIsValid(true);
  };

  const handleAddFriend = () => {
    if (!isValid) return;
    setIsLoading(true);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const bodyParameters = {
      email: email
    };

    api.post("/profile/addfriend", bodyParameters, config)
    .then(() => {
      setIsLoading(false);
      Alert.alert(
        "Amigo(a) adicionado(a) com sucesso!",
        "Você já pode ver a pontuação dele(a) no ranque!."
      );
      setIsLoading(true);
      navigation.navigate("Quiz");
    })
    .catch((err) => {
      setIsLoading(false);
      console.log('err:', err);
      Alert.alert(
        "Erro ao tentar localizar o(a) amigo(a)",
        "Verifique se o email inserido está correto e se a conexão com a internet está estável."
      );
    });
  };

  return (
    <View style={styles.container}>
      {isLoading && <ActivityIndicator size="large" color="#EDC951" />}
      <View style={styles.topContainer}>
        <Text style={styles.titleText}>Aqui você pode adicionar amigos(as) para ver quem faz mais pontos!</Text>
        <Text style={styles.titleText}>Assim você aprende e ainda se diverte competindo!</Text>
        <Text style={styles.titleText}>
          Basta apenas informar qual email seu imigo ou amiga usou para se cadastrar no App,
        se não sabe, entre em contato para confirmar qual é!
        </Text>
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
        <TouchableOpacity onPress={checkValidFriend} style={styles.addBtn}>
          <Text style={styles.loginText}>Adicionar Amigo(a)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Friend;
