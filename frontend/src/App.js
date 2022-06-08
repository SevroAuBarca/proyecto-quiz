import { useEffect, useState } from "react";
import { Menu } from "./components/Principal/Menu";
import { MenuPage } from "./components/Principal/MenuPage";
import { Routes, Route, useLocation } from "react-router-dom";
import { SignUpPage } from "./components/LoginPage/SignUpPage";
import { QuizPage } from "./components/QuizPage/QuizPage";
import { GblgalStyle } from "./components/styled-components";
import { UserPage } from "./components/UserPsge/UserPage";
import { ResultPage } from "./components/Principal/ResultPage";
import { useNavigateData } from "./hooks/useNavigateData";
import { useUser } from "./hooks/useUser";
import { useLogin } from "./hooks/useLogin";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { setToken } from "./services/quizService";
import { StatsQuizes } from "./components/UserPsge/StatsQuizes";

function App() {
  const [
    { selectCategorie, setSelectCategorie },
    { selectDificulty, setSelectDificulty },
    { getQuery },
    { handleInit, handleSignUp, handleNext },
  ] = useNavigateData();
  const location = useLocation();
  const { actualUser, setActualUser } = useUser();
  const { handleLogin, handleLogout, userData, setUserData, user, setUser } =
    useLogin(setActualUser);
  const [count, setCount] = useState(0);
  const [checkAnswer, setcheckAnswer] = useState({
    correct: 0,
    incorrect: 0,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogAppUser");
    if (loggedUserJSON) {
      const userStorage = JSON.parse(loggedUserJSON);
      setUser(userStorage.username);
      setActualUser(userStorage);
      setToken(userStorage.token);
    }
  }, []);

  return (
    <div>
      <GblgalStyle />
      <Menu location={location} user={user} handleLogout={handleLogout} />

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
          element={<SignUpPage handleSignUp={handleSignUp} />}
        />
        <Route
          path="/login"
          element={
            <LoginPage setUserData={setUserData} handleLogin={handleLogin} />
          }
        />
        <Route path="/user" element={<UserPage />} />
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
              data={data}
              setData={setData}
            />
          }
        />
        <Route
          path="/results"
          element={
            <ResultPage
              checkAnswer={checkAnswer}
              setCheckAnswer={setcheckAnswer}
              data={data}
            />
          }
        />
        <Route
          path="/leatherboards"
          element={<StatsQuizes id={actualUser.id} />}
        />
      </Routes>
    </div>
  );
}

export default App;
