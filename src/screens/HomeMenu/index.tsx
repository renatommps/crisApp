import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

const HomeMenu: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.Title}>HOME</Text>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Profile")}
        >
          <Text style={styles.bottomText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Map")}
        >
          <Text style={styles.bottomText}>Mapa de Calor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("KnowledgeArea")}
        >
          <Text style={styles.bottomText}>Área do Conhecimento</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Text style={styles.bottomText}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            Linking.openURL(
              "https://docs.google.com/forms/d/e/1FAIpQLSedsUZp-Yx59O0LfSkxYzwfW-9hKXru7u_xojOob_5wuQxCzg/viewform"
            );
          }}
        >
          <Text style={styles.bottomText}>#FaleComOCris</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.btn} onPress={signOut}>
          <Text style={styles.bottomText}>Logout</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
export default HomeMenu;
