import { ButtonQuiz, DivQuiz, H2, Label, Radio } from "../styled-components";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useField } from "../../hooks/useField";
import axios from "axios";
import { filterData, isCorrect } from "../../utils";

export const QuizPage = ({
  handleNext,
  getQuery,
  count,
  setCount,
  checkAnswer,
  setcheckAnswer,
  data,
  setData,
}) => {
  const navigate = useNavigate();
  const [getSelectAnswer, setGetSelectAnswer] = useState("");
  const { onChange } = useField(setGetSelectAnswer);

  /*   const { isLoading, error, data } = useQuery("repoData", async () => {});
   */
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(getQuery);
      const filteredData = filterData(response.data);
      setData([filteredData]);
    };
    fetchData();
  }, []);

  console.log(data);
  const restartQuiz = () => {
    setCount(0);
    navigate("/");
  };

  const nextQuestion = () => {
    console.log(data);

    if (count !== data[0].questions.length - 1) {
      isCorrect(getSelectAnswer, data, checkAnswer, setcheckAnswer, count);
      const next = count + 1;
      setCount(next);
    } else {
      isCorrect(getSelectAnswer, data, checkAnswer, setcheckAnswer, count);
      setCount(0);
      navigate("/results");
    }
  };

  /*   if (error) return "An error has occurred: " + error.message;
   */
  return (
    <>
      {data.length > 0 ? (
        <>
          <H2>{data[0]?.questions[count]?.question}</H2>
          <div>
            <div onChange={onChange}>
              {data[0]?.questions[count]?.answers.map((answer, index) => (
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
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
};
