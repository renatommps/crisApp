import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Quiz from "../screens/Quiz";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      barStyle={{
        backgroundColor: '#ffffff'
      }}
    >
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="play-circle-outline" color={'#343434'} size={26}  />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home-outline" color={'#343434'} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account-circle-outline" color={'#343434'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
