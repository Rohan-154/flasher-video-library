import { useState } from "react";
import { loginService } from "../services/loginService";
const { useContext, createContext } = require("react");

const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("loginToken"));
  const [token, setToken] = useState(localStorageToken?.token || "");
  const [user, setUser] = useState(localStorageToken?.user || "");
  const loginAuth = async (email, password) => {
    try {
      const {
        data: { encodedToken, foundUser },
        status,
      } = await loginService(email, password);
      if (status === 200) {
        localStorage.setItem(
          "loginToken",
          JSON.stringify({
            token: encodedToken,
            user: foundUser,
          })
        );
        setToken(encodedToken);
        setUser(foundUser);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOutHandler = () => {
    setTimeout(() => {
      localStorage.removeItem("loginToken");
      setToken("");
      setuserBio("");
      navigate("/");
    }, 1000);
  };

  return (
    <AuthContext.Provider value={{ loginAuth, token, user, logOutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
