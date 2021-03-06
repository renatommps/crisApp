import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/navigation";
import AppProvider from "./src/hooks";
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const MaterialBottomTabs = createMaterialBottomTabNavigator();
// const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    );
  }
}
