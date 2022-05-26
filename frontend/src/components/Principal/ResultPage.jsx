import React from "react";
import { H2, Button } from "../styled-components";
import { useNavigate } from "react-router";

export const ResultPage = ({ checkAnswer, setCheckAnswer }) => {
  const navigate = useNavigate();
  const newQuiz = () => {
    setCheckAnswer({ correct: 0, incorrect: 0 });
    navigate("/");
  };

  return (
    <>
      <H2>Total</H2>
      <p>Passed: {checkAnswer.correct}</p>
      <p>Failed: {checkAnswer.incorrect}</p>
      <h3>
        {checkAnswer.correct > checkAnswer.incorrect
          ? "CONGRATULATIONS, YOU WON"
          : "SORRY, TRY AGAIN"}
      </h3>
      <Button onClick={newQuiz}>New Quiz</Button>
    </>
  );
};
