import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C6C6C',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  HelloMessageContainer: {
    flex: 8,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    marginTop: 100,
    marginLeft: 50
  },
  ButtonsContainer: {
    flex: 4,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 50
  },
  HelloMessageBig: {
    color: "white",
    fontSize: 50
  },
  HelloMessage: {
    color: "white",
    fontSize: 11
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 0
  },
  enterBtn: {
    width: "70%",
    backgroundColor: "#EDC951",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  enterText: {
    color: "white",
    fontSize: 11
  },
  createAccountText: {
    color: "white",
    textDecorationLine: 'underline',
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#edc951",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  }
});
