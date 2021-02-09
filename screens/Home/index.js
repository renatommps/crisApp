import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the home screen!</Text>
        <Button
        title="Go to Quiz Screen!"
        onPress={() => this.props.navigation.navigate("Quiz")}
      />
      </View>
    );
  }
}


