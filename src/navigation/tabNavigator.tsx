import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Configuration from "../screens/Configuration";
import Contact from "../screens/Contact";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#343434"
      inactiveColor="#6c6c6c"
      barStyle={{ backgroundColor: "#edc951" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color={"#343434"} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account"
              color={"#343434"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Configuration"
        component={Configuration}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="hammer-wrench"
              color={"#343434"}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: "Contact",
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="account-group"
              color={"#343434"}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
