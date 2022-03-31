import { FormSelection } from "./components/Principal/FormSelection";
import { Menu } from "./components/Principal/Menu";
import { MenuPage } from "./components/Principal/MenuPage";
import { MenuSelection } from "./components/Principal/MenuSelection";
import { MenuTltle } from "./components/Principal/MenuTitle";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { SignUpPage } from "./components/LoginPage/SignUpPage";
import { QuizPage } from "./components/QuizPage/QuizPage";
import {
  GblgalStyle,
  Icon,
  H1,
  H2,
  IconLarge,
  Input,
  Select,
  Button,
  Radio,
  Label,
  ButtonQuiz,
  DivQuiz,
} from "./components/styled-components";
import { UserPage } from "./components/UserPsge/UserPage";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleInit = (event) => {
    event.preventDefault();
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

  console.log(location);
  return (
    <div>
      <GblgalStyle />
      <Menu>
        {location.pathname === "/" ? (
          <>
            <Link to={"/user"}>
              <Icon
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </Icon>
            </Link>
            <Link to={"/signup"}>
              <Icon
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </Icon>
            </Link>
          </>
        ) : (
          <Link to={"/"}>
            <Icon
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </Icon>
          </Link>
        )}
      </Menu>
      <Routes>
        <Route
          path="/"
          element={
            <MenuPage>
              <MenuTltle>
                <IconLarge
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </IconLarge>
                <H1>Quiz Game</H1>
              </MenuTltle>
              <MenuSelection>
                <FormSelection hg={30} submit={handleInit}>
                  <Input type="text" placeholder="Usuario" />
                  <Select name="select">
                    <option>Select Category</option>
                    <option class="option" value="9">
                      General Knowledge
                    </option>
                    <option class="option" value="10">
                      Entertainment: Books
                    </option>
                    <option class="option" value="11">
                      Entertainment: Film
                    </option>
                    <option class="option" value="12">
                      Entertainment: Music
                    </option>
                    <option class="option" value="13">
                      Entertainment: Musicals &amp; Theatres
                    </option>
                    <option class="option" value="14">
                      Entertainment: Television
                    </option>
                    <option class="option" value="15">
                      Entertainment: Video Games
                    </option>
                    <option class="option" value="16">
                      Entertainment: Board Games
                    </option>
                    <option class="option" value="17">
                      Science &amp; Nature
                    </option>
                    <option class="option" value="18">
                      Science: Computers
                    </option>
                    <option class="option" value="20">
                      Mythology
                    </option>
                    <option class="option" value="21">
                      Sports
                    </option>
                    <option class="option" value="22">
                      Geography
                    </option>
                    <option class="option" value="23">
                      History
                    </option>
                    <option class="option" value="24">
                      Politics
                    </option>
                    <option class="option" value="25">
                      Art
                    </option>
                    <option class="option" value="26">
                      Celebrities
                    </option>
                    <option class="option" value="27">
                      Animals
                    </option>
                    <option class="option" value="28">
                      Vehicles
                    </option>
                    <option class="option" value="29">
                      Entertainment: Comics
                    </option>
                    <option class="option" value="30">
                      Science: Gadgets
                    </option>
                    <option class="option" value="31">
                      Entertainment: Japanese Anime &amp; Manga
                    </option>
                    <option value="32">
                      Entertainment: Cartoon &amp; Animations
                    </option>
                  </Select>
                  <Select name="select" id="select" class="select">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </Select>

                  <Button>Iniciar</Button>
                </FormSelection>
              </MenuSelection>
            </MenuPage>
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
            <QuizPage>
              <H2>---Pregunta---</H2>
              <FormSelection submit={handleNext}>
                <Label for="question 1">
                  {" "}
                  <Radio
                    type="radio"
                    id="question 1"
                    name="question"
                    value="question 1"
                  />
                  question 1
                </Label>

                <Label for="question 2">
                  <Radio
                    type="radio"
                    id="question 2"
                    name="question"
                    value="question 2"
                  />
                  question 2
                </Label>

                <Label for="question 3">
                  {" "}
                  <Radio
                    type="radio"
                    id="question 3"
                    name="question"
                    value="question 3"
                  />
                  question 3
                </Label>
                <Label for="question 4">
                  {" "}
                  <Radio
                    type="radio"
                    id="question 4"
                    name="question"
                    value="question 4"
                  />
                  question 3
                </Label>

                <DivQuiz>
                  <ButtonQuiz bg={"fff"}>Siguiente</ButtonQuiz>
                  <ButtonQuiz bg={"418EB9"} onClick={() => navigate("/")}>
                    Reiniciar
                  </ButtonQuiz>
                </DivQuiz>
              </FormSelection>
            </QuizPage>
          }
        />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
