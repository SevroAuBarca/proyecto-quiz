import React from "react";
import { useField } from "../../hooks/useField";
import { FormSelection } from "../Principal/FormSelection";
import { MenuSelection } from "../Principal/MenuSelection";
import { MenuTltle } from "../Principal/MenuTitle";
import { Button, H2, Input } from "../styled-components";

export const LoginPage = ({ handleLogin, setUserData }) => {
  const { onChangeMany } = useField(setUserData);

  return (
    <section>
      <MenuTltle>
        <H2>Cuenta Nueva</H2>
      </MenuTltle>
      <MenuSelection>
        <FormSelection hg={50} submit={handleLogin}>
          <Input
            type="text"
            placeholder="Correo"
            name="email"
            onChange={onChangeMany}
          />
          <Input
            type="password"
            placeholder="Contraseña"
            name="password"
            onChange={onChangeMany}
          />
          <Button>Crear</Button>
        </FormSelection>
      </MenuSelection>
    </section>
  );
};
