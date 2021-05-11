import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: 'center',
    paddingTop: "20%",
    width: "90%"
  },
  bottomContainer: {
    flex: 2,
    alignItems: "center",
    alignSelf: "stretch",
    // marginTop: "20%"
  },
  titleText: {
    color: "white",
    fontSize: 20,
    marginBottom: "4%"
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
  inputText: {
    height: 50,
    color: "#6C6C6C",
  },
  addBtn: {
    width: "90%",
    backgroundColor: "#EDC951",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  loginText: {
    color: "white",
    fontSize: 12,
  },
  subscribeText: {
    color: "white",
  },
});
