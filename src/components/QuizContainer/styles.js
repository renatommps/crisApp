import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  oval: {
    width: (width * 90) / 100,
    borderRadius: 20,
    backgroundColor: "green",
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    margin: 15,
    color: "white",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
