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
  filterIcon: {
    position: "absolute",
    bottom: 0,
    left: 0,
    borderWidth: 3,
    borderColor: "black"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  active: {
    backgroundColor: "#EDC951",
    borderRadius: 10,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  inactive: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#EDC951",
    borderWidth: 2,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 8
  },
  modalTextActive: {
    color: "#000000",
    fontWeight: "bold"
  },
  modalTextInactive: {
    color: "#000000",
  },
  exitModalBtn: {
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 8
  }
});
