import { StyleSheet, Dimensions } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    position: "absolute",
    height: "125%",
    width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
  },
  mapLabelContainer: {
    position: "absolute",
    height: "auto",
    width: "auto",
    alignItems: "center",
    top: 100,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EDC951',
    backgroundColor: "#EDC951"
  },
  mapLabel: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  trafficIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
