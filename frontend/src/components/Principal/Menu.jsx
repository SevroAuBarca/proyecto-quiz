import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "../styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Menu = ({ location }) => {
  return (
    <Header>
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
    </Header>
  );
};
