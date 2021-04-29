import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Questions from "../../components/Questions";
import Answers from "../../components/Answers";
import { getQuizQuestions, QuestionsState } from "../../utils/utils";
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
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [TOTAL_QUESTIONS] = useState(10);
  const [number, setNumber] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<any>({
    isCorrect: false,
    justification: "",
  });
  const setAnswer = useRef(null);

  const startQuiz = async () => {
    // console.log('[startQuiz] start quiz called.');
    setLoading(true);
    setGameOver(false);

    const newQuestions = await (await getQuizQuestions())
      .slice(32)
      .sort(() => (Math.random() > 0.5 ? 1 : -1));

    setQuestions(newQuestions);
    console.log(questions.length);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  useEffect(() => {
    // console.log('[useEffect] will start quiz');
    startQuiz();
  }, []);

  const checkAnswer = () => {
    const answer = setAnswer.current;
    const correct = questions[number].correct_answer === answer;
    // console.log('[checkAnswer] number:', number, ', gameover:', gameOver, ', score:', score, ', correct:', correct, ', answer:', answer);

    if (!gameOver) {
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };

      //@ts-ignore
      setUserAnswers((prev) => [...prev, answerObject]);

      if (correct) {
        setScore((prev) => prev + 1);
      }

      setTimeout(() => {
        showJustification(questions[number], answerObject);
      }, 800);
    } else {
      console.log("game over!");
    }
  };

  const showJustification = (question: any, answer: any) => {
    // console.log('[showJustification] question:', question, ', answer:', answer);
    setModalData({
      isCorrect: answer.correct,
      justification: question.justification,
    });
    setModalVisible(true);
  };

  const nextQuestion = () => {
    setModalVisible(false);
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
        backgroundColor: "#6C6C6C",
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
          <Text style={{ fontSize: 16, color: "#FFF" }}>Pontos: {score}</Text>
          <Text
            style={{
              fontSize: 16,
              color: "#EDC951",
            }}
          >
            {number + 1}/10
          </Text>
        </View>

        <View style={{ marginVertical: 2 }}></View>
        {questions.length > 0 ? (
          <>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#FFF",
                }}
              >
                Categoria:
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#FFF",
                }}
              >
                {questions[number].category}
              </Text>
            </View>
            <Questions
              questionNumber={number + 1}
              question={questions[number].question}
            />
            {questions[number].image != "" && (
              <Image
                style={{
                  width: 100,
                  height: 100,
                  marginTop: 15,
                  marginLeft: 125,
                }}
                source={{
                  uri: `${questions[number].image}`,
                }}
              ></Image>
            )}

            <Answers
              answers={questions[number].answers}
              {...{ setAnswer, checkAnswer }}
              //@ts-ignore
              userAnserws={userAnswers ? userAnswers[number] : undefined}
            />
          </>
        ) : null}
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: "#EDC951",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 300,
          width: 60,
          height: 60,
          position: "absolute",
          marginTop: 15,
          bottom: 20,
          right: 20,
        }}
      >
        <TouchableWithoutFeedback>
          {!gameOver && !loading && number != TOTAL_QUESTIONS - 1 ? (
            <MaterialCommunityIcons
              name="play"
              color="#fff"
              size={22}
              onPress={() => nextQuestion()}
            />
          ) : (
            <MaterialCommunityIcons
              name="arrow-right"
              color="#fff"
              size={22}
              onPress={() => nextQuestion()}
            />
          )}
        </TouchableWithoutFeedback>
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Resposta {modalData.isCorrect ? "correta!" : "incorreta!"}
            </Text>
            <Text style={styles.modalText}>{modalData.justification}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                nextQuestion();
              }}
            >
              <Text style={styles.textStyle}>Continuar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default Quiz;
