import React from "react";
import { ScrollView, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

import { RowItem } from "../../components/RowItem";
const Quiz = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <StatusBar barStyle="dark-content" />
      <RowItem
        name="Space"
        color="#36b1f0"
        onPress={() =>
          navigation.navigate("QuizQuestions", {
            title: "Space",

            color: "#36b1f0",
          })
        }
      />
      <RowItem
        name="Westerns"
        color="#799496"
        onPress={() =>
          navigation.navigate("QuizQuestions", {
            title: "Westerns",

            color: "#799496",
          })
        }
      />
      <RowItem
        name="Computers"
        color="#49475B"
        onPress={() =>
          navigation.navigate("QuizQuestions", {
            title: "Computers",

            color: "#49475B",
          })
        }
      />
    </ScrollView>
  );
};
export default Quiz;
