import axios from "axios";
const baseUrl = "/api/users";
export const getAllUsers = () => {};

export const getOneUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export const postUser = async (data) => {
  console.log(data);
  const response = await axios.post(baseUrl, data);
  return response.data;
};

export const putUser = (id, data) => {};

export const deleteUser = (id) => {};
