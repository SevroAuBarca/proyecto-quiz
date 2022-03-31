import styled from "styled-components";

const Div = styled.div`
  width: 60%;
  margin: 30px auto 0 auto;
  background: #3b6a84;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MenuTltle = ({ children }) => {
  return <Div>{children}</Div>;
};
