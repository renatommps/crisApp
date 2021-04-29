import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { UrlTile } from "react-native-maps";
import { Heatmap, Marker, PROVIDER_DEFAULT } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { IconButton, Colors } from "react-native-paper";
import * as Location from "expo-location";

const Home = () => {
  const navigation = useNavigation();
  const [trafficView, setTrafficView] = useState<boolean>(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [acidentes, setAcidentes] = useState<any[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // const { status } = await Location.requestPermissionsAsync();
      // if (status !== "granted") {
      //   setErrorMsg("Permission to access location was denied");
      //   return;
      // }
      // const location = await Location.getCurrentPositionAsync({});

      // Recife location.
      const location = {
        coords: {
          latitude: -8.05941514041652,
          longitude: -34.90712403164804,
          altitude: null,
          accuracy: null,
          altitudeAccuracy: null,
          heading: null,
          speed: null,
        },
        timestamp: Date.now(),
      };
      setLocation(location);
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       let result = await Location.geocodeAsync("EST DOS REMEDIOS, 2328, MADALENA");
  //       console.log('results:', result);
  //       setAccident( result[0] );
  //     } catch (e) {
  //       console.log("Errror getting accident location: " + e.message);
  //       setErrorMsg("Errror getting accident location: " + e.message);
  //       return;
  //     }
  //   })();
  // }, []);

  // const toggleMapTrafficView = () => {
  //   ...
  // }

  useEffect(() => {
    (async () => {
      try {
        fetch("https://cris.seplag.pe.gov.br/geolocations")
          .then((response) => response.json())
          .then((json) => {
            if (Array.isArray(json)) setAcidentes(json.slice(100));
          })
          .catch((error) => {
            setErrorMsg("Errror getting accident location: " + error.message);
          });
      } catch (e) {
        console.log("Errror getting accident location: " + e.message);
        setErrorMsg("Errror getting accident location: " + e.message);
        return;
      }
    })();
  }, []);

  const getLocations = () => {
    return acidentes.map((acidente: any) => {
      return {
        latitude: acidente.latitude,
        longitude: acidente.longitude,
        weight: 1,
      };
    });
  };

  return (
    <View style={styles.container}>
      {!location && <ActivityIndicator size="large" color="#edc951" />}
      {location && (
        <MapView
          provider={null}
          mapType="none"
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.2,
            longitudeDelta: 0.0,
          }}
          showsTraffic={trafficView}
          style={styles.map}
          loadingEnabled={true}
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
          moveOnMarkerPress={false}
          showsUserLocation={true}
          showsCompass={true}
          showsPointsOfInterest={false}
          animationEnabled={false}
          minPoints={1}
          tracksViewChanges={false}
          clusterColor={Colors.red700}
        >
          <UrlTile
            urlTemplate={`https://mapas.pe.gov.br/hot/{z}/{x}/{y}.png`}
            maximumZ={19}
            flipY={false}
          />
          {acidentes[0] != null && (
            <Heatmap points={getLocations()} radius={50} opacity={0.5} />
          )}

          {acidentes[0] != null &&
            acidentes.map((acidente: any) => {
              return (
                <Marker
                  key={acidente.id}
                  coordinate={{
                    latitude: acidente.latitude,
                    longitude: acidente.longitude,
                  }}
                  title="Acidente!"
                  description={acidente.descricao}
                >
                  <IconButton icon={"alert"} color={Colors.red700} size={30} />
                </Marker>
              );
            })}
        </MapView>
      )}
      <IconButton
        icon={trafficView ? "road-variant" : "car-multiple"}
        style={styles.trafficIcon}
        color={Colors.grey900}
        size={50}
        onPress={() => setTrafficView(!trafficView)}
      />
    </View>
  );
};

export default Home;
