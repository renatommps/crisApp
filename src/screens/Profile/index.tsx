import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

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
        <TouchableOpacity style={styles.btn} onPress={ ()=>{ Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSedsUZp-Yx59O0LfSkxYzwfW-9hKXru7u_xojOob_5wuQxCzg/viewform')}}>
          <Text style={styles.bottomText}>#FaleComOCris</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Profile;
