import { useState, useEffect } from "react";
import { useAuth } from "../../../Context/authContext";
import { useNavigate, useLocation } from "react-router-dom";
import "../Login/login.css";
import { Link } from "react-router-dom";
const Login = () => {
  const { loginAuth, token } = useAuth();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    loginAuth(loginForm.email, loginForm.password)
  }, [loginForm.email, loginForm.password]);
  const navigate = useNavigate();
  const location = useLocation();
  if (token) navigate(location?.state?.from || "/", { replace: true });
  const loginHandler = ()=>{
      setLoginForm ((loginForm)=> ({
          ...loginForm,
          email:"rohandubey154@gmail.com",
          password:"rohan12345"
      }))
  }
  return (
    <div className="wrapper">
      <div className="container-login">
        <div className="col-left">
          <div className="login-text">
            <h2>Welcome Back</h2>
            <p>Create your account now. </p>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </div>
        </div>
        <div className="col-right">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={(e)=> e.preventDefault()}>
              <p>
                <label>
                  email address<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="naruto@rasengan.com"
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm((loginForm) => ({
                      ...loginForm,
                      email: e.target.value,
                    }))
                  }
                  required
                />
              </p>
              <p>
                <label>
                  Password<span>*</span>
                </label>
                <input
                  type="password"
                  placeholder="********"
                  required
                  value={loginForm.email}
                  onChange={(e) =>
                    setLoginForm((loginForm) => ({
                      ...loginForm,
                      password: e.target.value,
                    }))
                  }
                />
              </p>
              <p>
                <input type="submit" value="Test Login" onClick={()=> loginHandler()} />
              </p>
              <p>
                <a href="">Forget Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
