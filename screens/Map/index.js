import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View style={styles.container}>
      <Text>This is the Map screen!</Text>
      <MapView
        initialRegion={{
          latitude: -8.063169,
          longitude: -34.871139,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
    </View>
  );
};

export default Map;
