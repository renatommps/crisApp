import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is the home screen!</Text>
      <Button
        title="Vá para o Quiz!"
        onPress={() => navigation.navigate("Quiz")}
      />
      <Button
        title="Vá para o mapa de calor!"
        onPress={() => navigation.navigate("Map")}
      />
    </View>
  );
};

export default Home;
