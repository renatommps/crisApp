import React from 'react';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CommonActions, NavigationContainer } from '@react-navigation/native';
import { styles } from "./styles";
export default class Login extends React.Component {
  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/logo-placeholder.png')}/>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="senha..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

{/* <View style={styles.container}>
  <Text>This is the login screen!</Text>
  <Button
    title='Go to Home screen'
    onPress={() =>
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: 'Home' },
          ],
        })
      )}
  />
</View> */}

