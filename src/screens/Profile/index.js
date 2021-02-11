import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import KnowledgeArea from "../KnowledgeArea";
import TalkToCris from "../TalkToCris";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
      <Text style={styles.pontuationText}>Sua pontuação</Text>
      <Text style={styles.pontuationValue}>17pts</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("KnowledgeArea")}>
          <Text style={styles.bottomText}>Área do Conhecimento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("TalkToCris")}>
          <Text style={styles.bottomText}>#FaleComOCris</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
