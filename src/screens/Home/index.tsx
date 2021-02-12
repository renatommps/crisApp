import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import * as Location from "expo-location";

const Home = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {!location && <ActivityIndicator size="large" color="#edc951" />}
      {location && (
        <MapView
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0,
            longitudeDelta: 0.0,
          }}
          style={styles.map}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            pinColor={"#edc951"}
            title="Você"
            description="Você está aqui !!"
          />
        </MapView>
      )}
    </View>
  );
};

export default Home;
