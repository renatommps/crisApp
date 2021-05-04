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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  bottomContainer: {
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  avatar: {
    marginTop: 15,
    marginBottom: 6,
    backgroundColor: "#EDC951"
  },
  btnUpdateAvatar: {
    width: "auto",
    backgroundColor: "#EDC951",
    borderRadius: 50,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 20
  },
  btnUpdateAvatarText: {
    color: "white",
    fontSize: 17
  },
  pontuationText: {
    color: "#EDC951",
    fontSize: 24
  },
  pontuationValue: {
    color: "#EDC951",
    fontSize: 72
  },
  btn: {
    width: "100%",
    backgroundColor: "#EDC951",
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 35
  },
  bottomText: {
    color: "white",
    fontSize: 17
  },
});
