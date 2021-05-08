import React, { useEffect, useState } from "react";
import { Alert, ActivityIndicator, Modal, View, Text, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { UrlTile } from "react-native-maps";
import { Heatmap, Marker } from "react-native-maps";
import MapView from "react-native-map-clustering";
import { IconButton, Colors } from "react-native-paper";
import * as Location from "expo-location";

type Accident = {
  data: string,
  date: Date,
  descrivao?: string,
  detalhes?: string,
  id: string,
  latitude: string,
  longitude: string
};

const MAX_ACCIDENTS_VALUE: number = 100;

const Home = () => {
  const [trafficView, setTrafficView] = useState<boolean>(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [accidents, setAccidents] = useState<Accident[]>([]);
  const [filteredAccidents, setFilteredAccidents] = useState<Accident[]>([]);
  const [filterText, setFilterText] = useState<string>("all");
  const [filterValue, setFilterValue] = useState<number | null>(null);

  // This will filter the accidentes when the filter value change.
  useEffect(() => {
    (async () => {
      let newFilteredAccidents: Accident[] = JSON.parse(JSON.stringify(accidents));

      if (filterValue == null) {
        // We allow at most 100 accidents (for performance reasons)
        setFilteredAccidents(newFilteredAccidents);
        return;
      };

      const endDate: Date = new Date();
      endDate.setHours(0, 0, 0, 0);

      newFilteredAccidents = accidents.filter((accident: Accident) => {
        const startDate: Date | undefined = accident.date;

        // If the accident date is not defined we filter the accident by default.
        if (!startDate) return false;

        // If the accident date is bigger than the current date we also filter it
        // (this case should never happen, and is probably an invalid date).
        if (startDate.getTime() > endDate.getTime()) return false;

        // get total seconds between the times
        const timeDiffInSeconds: number = ((endDate.getTime() - startDate.getTime()) / 1000);

        // calculate number of whole days. OBS: 86400 is the amount of seconds in one day.
        const daysPassed = Math.floor(timeDiffInSeconds / 86400);

        return daysPassed <= filterValue;
      });

      // We allow at most 100 accidents (for performance reasons)
      setFilteredAccidents(newFilteredAccidents);
    })();
  }, [filterValue]);

  // Get permission to get user location.
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão para acessar a localização negada!");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});

      // Recife location.
      // const location = {
      //   coords: {
      //     latitude: -8.05941514041652,
      //     longitude: -34.90712403164804,
      //     altitude: null,
      //     accuracy: null,
      //     altitudeAccuracy: null,
      //     heading: null,
      //     speed: null,
      //   },
      //   timestamp: Date.now(),
      // };
      setLocation(location);
    })();
  }, []);

  // Fetch accidentes from server.
  useEffect(() => {
    (async () => {
      try {
        fetch("https://cris.seplag.pe.gov.br/geolocations")
          .then((response) => response.json())
          .then((json) => {
            if (!Array.isArray(json)) return;

            // Filter all accidentes that has no "data".
            let accidents = json.filter(accident => accident.data != null);

            // Add Date to all the accidents.
            accidents.forEach((accident: Accident) => {
              const stringDate: string | undefined = accident.data;

              // convert string date to array of number.
              const splitedDate: number[] = stringDate.split('/').map((date: string) => Number.parseInt(date));

              // create a date passing on the constructor yyyy, mm - 1, dd.
              const date: Date = new Date(splitedDate[2], splitedDate[1] - 1, splitedDate[0]);
              date.setHours(0, 0, 0, 0);

              // save the date on the accident object.
              accident['date'] = date;
            });

            // Sorte the accidents descending by Date.
            accidents = accidents.sort(sortAccidentsDescendentByDate);

            setAccidents(accidents);
            setFilteredAccidents(accidents.slice(0, MAX_ACCIDENTS_VALUE));
          })
          .catch((error) => {
            console.log("Errror getting accident location: " + error.message);
          });
      } catch (e) {
        console.log("Errror getting accident location: " + e.message);
        return;
      }
    })();
  }, []);

  const sortAccidentsDescendentByDate = (a: Accident, b: Accident) => {
    if (!b.date || !a.date) return 0;
    return b.date.getTime() - a.date.getTime();
  };

  const getLocations = () => {
    return filteredAccidents.map((acidente: any) => {
      return {
        latitude: acidente.latitude,
        longitude: acidente.longitude,
        weight: 1,
      };
    });
  };

  const showFilterModal = () => {
    setModalVisible(true);
    // console.log('filter modal called!');
  };

  const filterAccidents = (text: string, value: number | null) => {
    console.log('filter accidentes called. text:', text, ', value:', value);
    setFilterText(text);
    setFilterValue(value);
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
          {filteredAccidents[0] != null && (
            <Heatmap points={getLocations()} radius={50} opacity={0.5} />
          )}

          {filteredAccidents[0] != null &&
            filteredAccidents.map((acidente: any) => {
              return (
                <Marker
                  key={acidente.id}
                  coordinate={{
                    latitude: acidente.latitude,
                    longitude: acidente.longitude,
                  }}
                  title="Local com ocorrência de acidente"
                  description={"Redobre a atenção por aqui e, se possível, troque de rota!"}
                >
                  <IconButton icon={"alert"} color={Colors.red700} size={30} />
                </Marker>
              );
            })}
        </MapView>
      )}
      <View style={styles.mapLabelContainer}>
        <Text style={styles.mapLabel} >
        Mapa de calor de ocorrência de acidentes
        </Text>
      </View>
      <IconButton
        icon={trafficView ? "road-variant" : "car-multiple"}
        style={styles.trafficIcon}
        color={Colors.grey900}
        size={50}
        onPress={() => setTrafficView(!trafficView)}
      />
      <IconButton
        icon={"filter"}
        style={styles.filterIcon}
        color={Colors.grey900}
        size={40}
        onPress={showFilterModal}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Filtro de acidentes por período</Text>
            <TouchableHighlight
              style={(filterText == "all") ? styles.active : styles.inactive}
              onPress={() => filterAccidents("all", null)}
            >
              <Text style={(filterText == "all") ? styles.modalTextActive : styles.modalTextInactive}>
                Todos os acidentes
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={(filterText == "currentMonth") ? styles.active : styles.inactive}
              onPress={() => filterAccidents("currentMonth", 30)}
            >
              <Text style={(filterText == "currentMonth") ? styles.modalTextActive : styles.modalTextInactive}>
                Acidentes dos ultimos 30 dias
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={(filterText == "currentWeek") ? styles.active : styles.inactive}
              onPress={() => filterAccidents("currentWeek", 7)}
            >
              <Text style={(filterText == "currentWeek") ? styles.modalTextActive : styles.modalTextInactive}>
              Acidentes dos ultimos 7 dias
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={(filterText == "currentDay") ? styles.active : styles.inactive}
              onPress={() => filterAccidents("currentDay", 1)}
            >
              <Text style={(filterText == "currentDay") ? styles.modalTextActive : styles.modalTextInactive}>
              Acidentes do dia
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.exitModalBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalTextActive}>
              Fechar Filtro
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Home;
