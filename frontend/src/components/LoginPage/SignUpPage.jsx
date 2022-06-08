import { useState } from "react";
import { useNavigate } from "react-router";
import { useField } from "../../hooks/useField";
import { postUser } from "../../services/userService";
import { FormSelection } from "../Principal/FormSelection";
import { MenuSelection } from "../Principal/MenuSelection";
import { MenuTltle } from "../Principal/MenuTitle";
import { ButtonQuiz, H2, Input } from "../styled-components";

export const SignUpPage = ({ handleSignUp }) => {
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });
  console.log(registerUser);
  const { onChangeMany } = useField(setRegisterUser);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("../login");
  };
  const signUp = async (e) => {
    e.preventDefault();
    const user = await postUser(registerUser);
    console.log(user);
    navigate("../login");
  };

  return (
    <section>
      <MenuTltle>
        <H2>Cuenta Nueva</H2>
      </MenuTltle>
      <MenuSelection>
        <FormSelection hg={50} submit={signUp}>
          <Input
            type="text"
            placeholder="Usuario"
            onChange={onChangeMany}
            name="username"
          />
          <Input
            type="text"
            placeholder="Nombre"
            onChange={onChangeMany}
            name="email"
          />
          <Input
            type="text"
            placeholder="Correo"
            onChange={onChangeMany}
            name="name"
          />
          <Input
            type="password"
            placeholder="Contraseña"
            onChange={onChangeMany}
            name="password"
          />
          <ButtonQuiz>Sign Up</ButtonQuiz>
          <ButtonQuiz onClick={handleClick}>Log in</ButtonQuiz>
        </FormSelection>
      </MenuSelection>
    </section>
  );
};
