import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeMenu from "../screens/HomeMenu";
import Profile from "../screens/Profile";
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import QuizQuestions from "../screens/QuizQuestions";
import KnowledgeArea from "../screens/KnowledgeArea";
import Friend from "../screens/Friend";
import Rank from "../screens/Rank";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerShown: false,
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomeMenu}
        options={{
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="Profile" component={Profile}></Stack.Screen>
      <Stack.Screen name="Map" component={Home}></Stack.Screen>
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizQuestions" component={QuizQuestions} />
      <Stack.Screen name="Friend" component={Friend}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitle: "",
        }}
      />
      <Stack.Screen name="Rank" component={Rank}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#fff',
          headerTitle: "",
        }}
      />
      <Stack.Screen name="KnowledgeArea" component={KnowledgeArea} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
