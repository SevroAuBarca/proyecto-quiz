import { ButtonQuiz, DivQuiz, H2, Label, Radio } from "../styled-components";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useField } from "../../hooks/useField";
import axios from "axios";
import { useQuery } from "react-query";

export const QuizPage = ({
  handleNext,
  getQuery,
  count,
  setCount,
  checkAnswer,
  setcheckAnswer,
}) => {
  const navigate = useNavigate();
  /* const [data, setData] = useState([]); */
  const [getSelectAnswer, setGetSelectAnswer] = useState("");
  const { onChange } = useField(setGetSelectAnswer);
  const { isLoading, error, data } = useQuery("repoData", async () => {
    const response = await axios.get(getQuery);
    const filteredData = filterData(response.data);
    return filteredData;
  });
  console.log(checkAnswer);
  const restartQuiz = () => {
    setCount(0);
    navigate("/");
  };

  const nextQuestion = () => {
    console.log(data);

    if (count !== data.questions.length - 1) {
      isCorrect();
      const next = count + 1;
      setCount(next);
    } else {
      isCorrect();
      setCount(0);
      navigate("/results");
    }
  };

  const isCorrect = () => {
    console.log(getSelectAnswer + "" + data?.questions[count]?.correct_answer);
    if (getSelectAnswer === data?.questions[count]?.correct_answer) {
      setcheckAnswer({ ...checkAnswer, correct: checkAnswer.correct + 1 });
    } else {
      setcheckAnswer({ ...checkAnswer, incorrect: checkAnswer.incorrect + 1 });
    }
  };

  const filterData = ({ results }) => {
    const questions = {
      category: results[0].category,
      difficulty: results[0].difficulty,
      questions: [],
    };

    results.forEach((element) => {
      questions.questions.push({
        question: element.question,
        correct_answer: element.correct_answer,
        answers: resolve(element.correct_answer, element.incorrect_answers),
      });
    });
    console.table(questions);
    return questions;
  };

  const resolve = (correct, incorrect) => {
    const answers = [correct, ...incorrect];
    const randomAnswer = answers.sort(() => {
      return Math.random() - 0.5;
    });
    return [...randomAnswer];
  };

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      {data && (
        <>
          <H2>{data?.questions[count]?.question}</H2>
          <div>
            <div onChange={onChange}>
              {data?.questions[count]?.answers.map((answer, index) => (
                <Label htmlFor={`question ${index + 1}`}>
                  {" "}
                  <Radio
                    type="radio"
                    id={`question ${index + 1}`}
                    name="question"
                    value={answer}
                  />
                  <span>{`${answer}`}</span>
                </Label>
              ))}
            </div>

            <DivQuiz>
              <ButtonQuiz onClick={nextQuestion} bg={"fff"}>
                Siguiente
              </ButtonQuiz>
              <ButtonQuiz bg={"418EB9"} onClick={restartQuiz}>
                Reiniciar
              </ButtonQuiz>
            </DivQuiz>
          </div>
        </>
      )}
    </>
  );
};
