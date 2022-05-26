import { useState } from "react";
import { FormSelection } from "./components/Principal/FormSelection";
import { Menu } from "./components/Principal/Menu";
import { MenuPage } from "./components/Principal/MenuPage";
import { MenuSelection } from "./components/Principal/MenuSelection";
import { MenuTltle } from "./components/Principal/MenuTitle";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { SignUpPage } from "./components/LoginPage/SignUpPage";
import { QuizPage } from "./components/QuizPage/QuizPage";
import { GblgalStyle, H2, Input, Button } from "./components/styled-components";
import { UserPage } from "./components/UserPsge/UserPage";
import { ResultPage } from "./components/Principal/ResultPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectCategorie, setSelectCategorie] = useState("");
  const [selectDificulty, setSelectDificulty] = useState("second");
  const [getQuery, setGetQuery] = useState("");
  const [count, setCount] = useState(0);
  const [checkAnswer, setcheckAnswer] = useState({
    correct: 0,
    incorrect: 0,
  });

  const handleInit = (event) => {
    event.preventDefault();
    switch (selectDificulty) {
      case "easy":
        getQuestions("10", selectCategorie, selectDificulty);
        break;
      case "medium":
        getQuestions("15", selectCategorie, selectDificulty);
        break;
      case "hard":
        getQuestions("20", selectCategorie, selectDificulty);
        break;
      default:
    }
    console.log("entro");
    navigate("/quiz");
  };

  const getQuestions = (amount, category, difficult) => {
    setGetQuery(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficult}&type=multiple`
    );
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleNext = (event) => {
    event.preventDefault();
    navigate("/quiz");
  };

  console.log(location);
  return (
    <div>
      <GblgalStyle />
      <Menu location={location} />

      <Routes>
        <Route
          path="/"
          element={
            <MenuPage
              handleInit={handleInit}
              selectCategorie={selectCategorie}
              selectDifficult={selectDificulty}
              setSelectCategorie={setSelectCategorie}
              setSelectDificulty={setSelectDificulty}
            />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUpPage>
              <MenuTltle>
                <H2>Cuenta Nueva</H2>
              </MenuTltle>
              <MenuSelection>
                <FormSelection hg={50} submit={handleSignUp}>
                  <Input type="text" placeholder="Usuario" />
                  <Input type="text" placeholder="Correo" />
                  <Input type="password" placeholder="Contraseña" />
                  <Button>Crear</Button>
                </FormSelection>
              </MenuSelection>
            </SignUpPage>
          }
        />
        <Route
          path="/quiz"
          element={
            <QuizPage
              handleNext={handleNext}
              getQuery={getQuery}
              count={count}
              setCount={setCount}
              checkAnswer={checkAnswer}
              setcheckAnswer={setcheckAnswer}
            />
          }
        />
        <Route
          path="/results"
          element={
            <ResultPage
              checkAnswer={checkAnswer}
              setCheckAnswer={setcheckAnswer}
            />
          }
        />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
