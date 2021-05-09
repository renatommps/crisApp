import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C6C6C",
    alignItems: "center",
    justifyContent: "center",
  },
  topContainer: {
    flex: 5,
    marginTop: -150,
    marginBottom: -140,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  bottomContainer: {
    flex: 5,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "stretch",
  },

  Title: {
    color: "#FFF",
    fontSize: 72,
  },
  btn: {
    width: "100%",
    backgroundColor: "#EDC951",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35,
  },
  bottomText: {
    color: "white",
    fontSize: 17,
  },
});
