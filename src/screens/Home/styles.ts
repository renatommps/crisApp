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
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  trafficIcon: {
    position: "absolute",
    bottom: 0,
    right: 0
  }
});
