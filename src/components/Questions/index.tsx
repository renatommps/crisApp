import React from "react";
import { View, Text } from "react-native";
interface QuestionProps {
  questionNumber: number;
  question: string;
}

const Questions = ({ questionNumber, question }: QuestionProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 33,
        paddingRight: 10,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: "#EDC951",
          marginRight: 10,
        }}
      >
        {questionNumber}
      </Text>
      <Text
        style={{
          color: "#EDC951",

          textAlign: "left",
          fontSize: 16,
        }}
      >
        {question}
      </Text>
    </View>
  );
};

export default Questions;
