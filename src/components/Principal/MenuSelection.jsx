import styled from "styled-components";

const Div = styled.div`
  width: 80%;
  height: auto;
  margin: 30px auto 0 auto;
  background: #3b6a84;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuSelection = ({ children }) => {
  return <Div>{children}</Div>;
};
