import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>This is the home screen!</Text>
      <MapView style={styles.map} />
      <Button
        title="Go to Quiz Screen!"
        onPress={() => navigation.navigate("Quiz")}
      />
    </View>
  );
};

export default Home;
