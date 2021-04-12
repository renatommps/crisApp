import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lines: {
    top: -110,
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "88%",
  },
  topContainer: {
    flex: 1,
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  bottomContainer: {
    marginTop: -30,
    marginBottom: 50,
    alignItems: "center",
    alignSelf: "stretch",
  },
  inputViewEmail: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EDC951",
    borderRadius: 15,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputViewPassword: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#6C6C6C",
    borderRadius: 15,
    height: 40,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "#6C6C6C",
  },
  forgot: {
    color: "#6C6C6C",
    fontSize: 11,
    textDecorationLine: "underline",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#EDC951",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    fontSize: 11,
  },
  subscribeText: {
    color: "white",
  },
});
