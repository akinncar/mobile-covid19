import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.1.100:3333"
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

export const apiLogin = async user => {
  try {
    const url = "session";
    const { email, password } = user;
    return await api.post(url, { email, password });
  } catch (error) {
    throw error;
  }
};
