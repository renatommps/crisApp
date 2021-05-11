import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

const Quiz = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.pontuationText}>Quiz</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("QuizQuestions")}
        >
          <Text style={styles.bottomText}>Jogar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Friend")}
        >
          <Text style={styles.bottomText}>Adicionar Amigos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Rank")}
        >
          <Text style={styles.bottomText}>Ranque de Amigos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Quiz;
