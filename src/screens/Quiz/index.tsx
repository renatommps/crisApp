import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { RowItem } from "../../components/RowItem";
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
      </View>
    </View>
  );
};
export default Quiz;
