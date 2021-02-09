import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";
export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Profile screen!</Text>
      </View>
    );
  }
}
