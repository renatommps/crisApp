import React from "react";
import { View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Quiz from "../screens/Quiz";
import Home from "../screens/Home";
import Profile from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      labeled={false}
      initialRouteName="Home"
      activeColor="#EDC951"
      inactiveColor="#6C6C6C"
      barStyle={{
        backgroundColor: "#ffffff",
      }}
    >
      <Tab.Screen
        name="Jogar"
        component={Quiz}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                top: -5,
                right: 0,
                bottom: 0,
                left: 0,
                height: 100,
                width: 100,
                padding: 0,
                margin: 0,
              }}
            >
              <MaterialCommunityIcons
                name="play-circle-outline"
                color={color}
                size={45}
                style={{
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                top: -5,
                right: 0,
                bottom: 0,
                left: 0,
                height: 100,
                width: 100,
                padding: 0,
                margin: 0,
              }}
            >
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={45}
                style={{
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                position: "absolute",
                top: -5,
                right: 0,
                bottom: 0,
                left: 0,
                height: 100,
                width: 100,
                padding: 0,
                margin: 0,
              }}
            >
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={45}
                style={{
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  margin: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
