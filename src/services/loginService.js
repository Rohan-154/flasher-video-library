import axios from "axios";

const loginService = (email, password) => {
  return axios.post("/api/auth/login", {
    email: email,
    password: password,
  });
};
export {loginService}