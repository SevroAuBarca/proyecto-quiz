import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../services/loginServive";
import { setToken } from "../services/quizService";

export const useLogin = (setActualUser) => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);
  const history = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const log = await login(userData);
      console.log(log);
      localStorage.setItem("loggedBlogAppUser", JSON.stringify(log));
      setUserData({ username: "", password: "" });
      setActualUser(log);
      setUser(log.username);
      setToken(log.token);
      history("/");
    } catch (exception) {}
  };

  const handleLogout = (event) => {
    event.preventDefault();
    localStorage.removeItem("loggedBlogAppUser");
    setActualUser({
      username: "",
      email: "",
      name: "",
    });
    setUser(null);
    history("/");
  };

  return { handleLogin, handleLogout, userData, setUserData, user, setUser };
};
