import styled from "styled-components";

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
