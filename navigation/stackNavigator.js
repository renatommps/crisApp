import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image } from "react-native";
import BottomTabNavigator from "./tabNavigator";
import Login from "../screens/Login";
import Quiz from "../screens/Quiz";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerTransparent: true,
          headerLeft: () => <Image source={require("../assets/favicon.png")} />,
          title: "",
          headerRight: () => (
            <Image
              source={require("../assets/favicon.png")}
              style={{ marginHorizontal: 20, marginTop: 40 }}
            />
          ),
        }}
      />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
