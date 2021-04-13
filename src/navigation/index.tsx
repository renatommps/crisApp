import React from "react";
import { ActivityIndicator, View } from "react-native";
import AuthStackNavigator from "./authNavigation";
import MainStackNavigator from "./stackNavigator";
import { useAuth } from "../hooks/auth";
const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  // return user ? <MainStackNavigator /> : <AuthStackNavigator />;
  return <MainStackNavigator />;
};

export default Routes;
