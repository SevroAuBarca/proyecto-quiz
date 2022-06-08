import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getOneUser } from "../../services/userService";
import { H2 } from "../styled-components";

const Div = styled.div`
  width: 90%;
  background: #cdf0ea;
  border-radius: 10px;
  font-size: 0.7rem;
  padding: 10px;
  display: flex;
  margin: 10px auto;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background: #4b5d67;
`;

export const StatsQuizes = ({ id }) => {
  const [userQuizes, setUserQuizes] = useState([]);
  console.log(userQuizes);
  useEffect(() => {
    const fetchData = async () => {
      const { quizes } = await getOneUser(id);
      setUserQuizes(quizes);
    };
    fetchData();
  }, [id]);

  return (
    <>
      {userQuizes.length > 0 ? (
        <>
          <H2>Stats Quizes</H2>
          {userQuizes.map((quiz) => (
            <Div>
              <div>
                <p>{quiz.categoryQuiz}</p>
                <p>{quiz.firstAttempDate.split(" ")[0]}</p>
              </div>
              <div>
                <p>{quiz.dificult}</p>
              </div>
            </Div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
