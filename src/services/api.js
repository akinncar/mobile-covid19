import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.106:3333"
});

export const apiSignUp = async user => {
  try {
    const url = "users";
    const { email, cpf, password } = user;
    return await api.post(url, { email, cpf, password });
  } catch (error) {
    throw error;
  }
};
