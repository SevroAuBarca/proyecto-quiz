import React from "react";
import { H2, DivQuiz, ButtonQuiz } from "../styled-components";
import { useNavigate } from "react-router";
import { postQuiz } from "../../services/quizService";

export const ResultPage = ({ checkAnswer, setCheckAnswer, data }) => {
  const navigate = useNavigate();
  const newQuiz = () => {
    setCheckAnswer({ correct: 0, incorrect: 0 });
    navigate("/");
  };
  const total = checkAnswer.correct + checkAnswer.incorrect;

  const saveQuiz = async () => {
    const dataQuiz = {
      category: data[0].category,
      difficulty: data[0].difficulty,
      firstAttemp: new Date().toLocaleString(),
      quizData: [...data[0].questions],
      firstAttempScore: checkAnswer.correct / total,
      othersAttempsScore: [],
    };
    await postQuiz(dataQuiz);
    setCheckAnswer({ correct: 0, incorrect: 0 });
    navigate("/");
  };

  return (
    <div>
      <H2>Total</H2>
      <p>Passed: {checkAnswer.correct}</p>
      <p>Failed: {checkAnswer.incorrect}</p>
      <p>Score: {checkAnswer.correct / total} </p>
      <h3>
        {checkAnswer.correct > checkAnswer.incorrect
          ? "CONGRATULATIONS, YOU WON"
          : "SORRY, TRY AGAIN"}
      </h3>
      <DivQuiz>
        <ButtonQuiz onClick={newQuiz}>New Quiz</ButtonQuiz>
        <ButtonQuiz onClick={saveQuiz}>Save Quiz</ButtonQuiz>
      </DivQuiz>
    </div>
  );
};
