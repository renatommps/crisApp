import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";
export default class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Quiz screen!</Text>
      </View>
    );
  }
}
