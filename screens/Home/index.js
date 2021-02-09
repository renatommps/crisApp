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
      <MapView
        initialRegion={{
          latitude: -8.063169,
          longitude: -34.871139,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
      <Button
        title="Go to Quiz Screen!"
        onPress={() => navigation.navigate("Quiz")}
      />
    </View>
  );
};

export default Home;
