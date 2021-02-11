import React, { Fragment } from "react";
import { View, Text, Keyboard } from "react-native";
import StyledButton from "../../components/Button";
import { AnswerObject } from "../../screens/QuizQuestions";
interface AnswersProps {
  answers: string[];
  setAnswer: any;
  checkAnswer: () => void;
  userAnserws: AnswerObject | undefined;
}

export default function Answers({
  answers,
  setAnswer,
  checkAnswer,
  userAnserws,
}: AnswersProps) {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 14,
        paddingHorizontal: 24.5,
        marginTop: 30,
      }}
    >
      {answers.map((answer, key) => (
        <Fragment>
          <StyledButton
            {...{ key, answer }}
            correct={userAnserws?.correctAnswer === answer}
            disabled={userAnserws ? true : false}
            onPress={() => {
              setAnswer.current = answer;
              checkAnswer();
            }}
          ></StyledButton>
        </Fragment>
      ))}
    </View>
  );
}
