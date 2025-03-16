import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const signIn = async (username: string, password: string) => {
  try {
    const res = await axios.post(`${API_URL}/sign-in`, { username, password });
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.error("Sign in error", err);
  }
};

export const signUp = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const res = await axios.post(`${API_URL}/sign-up`, {
      username,
      email,
      password,
    });
    console.log(res.data);
  } catch (err) {
    console.error("Sign up error", err);
  }
};
