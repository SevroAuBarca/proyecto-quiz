import { Link } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";
import { useNavigate } from "react-router-dom";
import { Children } from "react";

const Form = styled.form`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: ${(props) => props.hg}vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const FormSelection = ({ submit, children, hg }) => {
  return (
    <Form hg={hg} onSubmit={submit}>
      {children}
    </Form>
  );
};
