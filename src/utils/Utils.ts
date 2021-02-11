import { questions } from "../screens/QuizQuestions/questions";

export const _ = (array: any[]) => [...array].sort(() => Math.random() - 0.7);

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionsState = Question & { answers: string[] };

export const getQuizQuestions = async () => {
  const endpoint = `https://opentdb.com/api.php?amount=10`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((questions: Question) => ({
    ...questions,
    answers: _([...questions.incorrect_answers, questions.correct_answer]),
  }));
};
