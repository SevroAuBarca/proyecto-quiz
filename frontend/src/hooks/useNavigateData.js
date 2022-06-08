import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getQuestions } from "../utils";

export const useNavigateData = () => {
  const navigate = useNavigate();
  const [selectCategorie, setSelectCategorie] = useState("");
  const [selectDificulty, setSelectDificulty] = useState("");
  const [getQuery, setGetQuery] = useState("");

  const handleInit = (event) => {
    event.preventDefault();
    switch (selectDificulty) {
      case "easy":
        getQuestions("10", selectCategorie, selectDificulty, setGetQuery);
        break;
      case "medium":
        getQuestions("15", selectCategorie, selectDificulty, setGetQuery);
        break;
      case "hard":
        getQuestions("20", selectCategorie, selectDificulty, setGetQuery);
        break;
      default:
    }
    console.log("entro");
    navigate("/quiz");
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleNext = (event) => {
    event.preventDefault();
    navigate("/quiz");
  };

  return [
    { selectCategorie, setSelectCategorie },
    { selectDificulty, setSelectDificulty },
    { getQuery, setGetQuery },
    { handleInit, handleSignUp, handleNext },
  ];
};
