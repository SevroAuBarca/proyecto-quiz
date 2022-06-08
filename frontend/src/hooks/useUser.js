import { useState } from "react";
import { postUser } from "../services/userService";

export const useUser = () => {
  const [actualUser, setActualUser] = useState({
    username: "",
    email: "",
    name: "",
  });

  return { actualUser, setActualUser };
};
