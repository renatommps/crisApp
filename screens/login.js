import React from 'react';
import { AsyncStorage, Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { CommonActions, NavigationContainer } from '@react-navigation/native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  async storeToken(user) {
    try {
       await AsyncStorage.setItem("userData", JSON.stringify(user));
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  async getToken(user) {
    try {
      let userData = await AsyncStorage.getItem("userData");
      let data = JSON.parse(userData);
      console.log(data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  }

  handleEmail = text => {
    this.setState({ email: text });
  };

  handlePassword = text => {
    this.setState({ password: text });
  };

  login = (email, pass) => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' },
        ],
      })
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} resizeMode="center" source={require('../assets/logo.png')}/>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            onChangeText={this.handleEmail}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="senha..."
            placeholderTextColor="#003f5c"
            autoCapitalize="none"
            onChangeText={this.handlePassword}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={styles.loginText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.subscribeText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 0
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot:{
    color: "white",
    fontSize: 11
  },
  loginBtn:{
    width: "80%",
    backgroundColor: "#edc951",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "#343434"
  },
  subscribeText: {
    color: "white"
  }
});
