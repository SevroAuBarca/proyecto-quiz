import { createGlobalStyle } from "styled-components";
import styled, { css } from "styled-components";

const GblgalStyle = createGlobalStyle`
body{
  box-sizing: border-box;
  background: #4F8F9D;
  font-family: 'Inknut Antiqua', serif;
  }
`;

const Icon = styled.svg`
  color: #faf6f6;
  width: 50px;
  height: 50px;
`;

const H1 = styled.h1`
  font-size: 25px;
  color: #fff;
`;

const H2 = styled.h2`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;
const IconLarge = styled.svg`
  margin-top: 15px;
  color: #faf6f6;
  width: 100px;
  height: 100px;
  background: #003656;
  border-radius: 50%;
`;

const styles = css`
  width: 80%;
  height: 34px;
  border-radius: 20px;
  border: none;
  font-family: "Inknut Antiqua", serif;
  text-align: center;
  &::placeholder {
    font-size: 18px;
  }
`;

const Input = styled.input`
  ${styles}

  background-image: url(../../assets/joystick.png);
  background-repeat: no-repeat;
  background-position: 7px 7px;
  background-size: 20px;
`;

const Select = styled.select`
  ${styles}
  background: #ffffff;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;

const Button = styled.button`
  ${styles}
  width: 40%;
  position: absolute;
  top: 110%;
`;

const Radio = styled.input`
  width: 30px;
  height: 30px;
  margin-right: 40px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const ButtonQuiz = styled.button`
  ${styles}
  width: 40%;

  background: #${(props) => props.bg};
`;

const DivQuiz = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
  width: 80%;
`;
export {
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
};
