import React, { useState, useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Questions from "../../components/Questions";
import Answers from "../../components/Answers";
import { getQuizQuestions, QuestionsState } from "../../utils/Utils";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Quiz: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [userAnserws, setUserAnserws] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const [number, setNumber] = useState(0);
  const setAnswer = useRef(null);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await getQuizQuestions();
    setQuestions(newQuestions);
    setScore(0);
    setUserAnserws([]);
    setNumber(0);
    setLoading(false);
  };

  useEffect(() => {
    startQuiz();
  }, []);

  const checkAnswer = () => {
    if (!gameOver) {
      const answer = setAnswer.current;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnserws((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQ = number + 1;
    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-end",
        position: "relative",
        padding: 20,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 70,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16 }}>Questions</Text>
          <Text
            style={{
              fontSize: 16,
              color: "#006996",
            }}
          >
            1/10
          </Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#006996",
            }}
          >
            Pontos: {score}
          </Text>
        </View>
        {questions.length > 0 ? (
          <>
            <Questions
              questionNumber={number + 1}
              question={questions[number].question}
            />
            <Answers
              answers={questions[number].answers}
              {...{ setAnswer, checkAnswer }}
              userAnswer={userAnserws ? userAnserws[number] : undefined}
            />
          </>
        ) : null}
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: "#006996",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 300,
          width: 60,
          height: 60,
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        <TouchableWithoutFeedback>
          {!gameOver && !loading && number != TOTAL_QUESTIONS - 1 ? (
            <MaterialCommunityIcons
              name="play-circle"
              color="#fff"
              size={22}
              onPress={() => nextQuestion()}
            />
          ) : (
            <MaterialCommunityIcons
              name="play-circle"
              color="#fff"
              size={22}
              onPress={() => startQuiz()}
            />
          )}
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
export default Quiz;
