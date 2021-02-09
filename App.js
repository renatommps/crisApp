import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./navigation/stackNavigator";
import BottomTabNavigator from "./navigation/tabNavigator";

// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image } from 'react-native';
import Login from './screens/login';
import Home from './screens/home';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends React.Component {

  // createDrawer = () =>
  //   <Drawer.Navigator>
  //     <Stack.Screen name="Login" component={Login}/>
  //     <Drawer.Screen name="Home" component={Home}/>
  //   </Drawer.Navigator>

  render() {
    return (
      <NavigationContainer>
        <MainStackNavigator/>
      </NavigationContainer>
    );
  }
}
