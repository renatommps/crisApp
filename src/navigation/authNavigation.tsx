import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";

import Splash from "../screens/Splash";
import Login from "../screens/Login";

import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerShown: false,
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "",
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: "",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
