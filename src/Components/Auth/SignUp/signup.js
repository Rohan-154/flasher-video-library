import "../SignUp/signup.css";
import { useForm } from "../../../custom-hooks/useForm";
import { useAuth } from "../../../Context/authContext";
import { useTheme } from "../../../Context/themeContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { usePasswordToggle } from "../../../custom-hooks/passwordToggle";
const SignUp = () => {
  const { formData, errors, formHandler } = useForm();
  const { signUpHandler } = useAuth();
  const { theme } = useTheme();
  const { passwordToggle, togglePassword } = usePasswordToggle();
  return (
    <>
      <div
        class="container-signup"
        style={{
          color: theme === "light" ? "black" : "#fff",
          backgroundColor: theme === "light" ? "#e0e0eb" : "#191921",
          boxShadow:
            theme === "light"
              ? "0.5rem 0.5rem 0 0 black"
              : "rgba(179, 179, 0) 5px 5px",
        }}
      >
        <div class="left">
          <h1>Sign Up</h1>
          <p>create a new account</p>
          <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
            <label for="firstName" className="lable">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="signup-input"
              onChange={formHandler}
              required
            />
            <label for="firstName" className="lable">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="signup-input"
              onChange={formHandler}
              required
            />
            <label for="email" className="lable">
              Email
            </label>
            <input
              type="email"
              name="name"
              id="email"
              className="signup-input"
              onChange={formHandler}
              required
            />

            <label for="password" className="lable">
              Password
            </label>
            <input
             type={passwordToggle.type}
              name="password"
              id="password"
              className="signup-input"
              onChange={formHandler}
              required
            />
            <div className="hide-show-password-pass">
              {passwordToggle.eyeIcon ? (
                <FaRegEye onClick={togglePassword} />
              ) : (
                <FaRegEyeSlash onClick={togglePassword} />
              )}
            </div>
            <label for="confirm" className="lable">
              Confirm Password
            </label>
            <input
            type={passwordToggle.type}
              name="confirmPassword"
              id="confirm"
              className="signup-input"
              onChange={formHandler}
              required
            />
            <div className="hide-show-password-c-pass">
              {passwordToggle.eyeIcon ? (
                <FaRegEye onClick={togglePassword} />
              ) : (
                <FaRegEyeSlash onClick={togglePassword} />
              )}
            </div>
            <button
              className="button"
              type="submit"
              onClick={() => signUpHandler(formData)}
              disabled={
                Object.entries(errors).length === 0 &&
                Object.entries(formData).length === 5
                  ? false
                  : true
              }
            >
              {" "}
              Sign Up{" "}
            </button>
          </form>
        </div>

        <div class="right"></div>
      </div>
    </>
  );
};

export { SignUp };
