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
      // activeColor="#EDC951"
      // inactiveColor="#6C6C6C"
      // showLabel="false"
      barStyle={{ backgroundColor: '#ffffff', showLabel: "false" }}
      tabBarOptions={{
        showLabel: "false",
        activeTintColor: '#EDC951',
        inactiveTintColor: '#6C6C6C',
      }}
    >
      <Tab.Screen
        name="Quiz"
        component={Quiz}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={'#343434'} size={26}  />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={'#343434'} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={'#343434'} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
