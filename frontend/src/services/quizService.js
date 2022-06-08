import axios from "axios";
const baseUrl = "/api/quiz";
let token = null;

export const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

export const getAllQuiz = () => {};

export const getOneQuiz = (id) => {};

export const postQuiz = async (data) => {
  const config = {
    headers: { Authorization: token },
  };
  console.log(token);
  console.log(data);
  const response = await axios.post(baseUrl, data, config);
  return response.data;
};

export const putUser = (id, data) => {};

export const deleteUser = (id) => {};
