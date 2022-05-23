import "../SignUp/signup.css";
import { useForm } from "../../../custom-hooks/useForm";
import { useAuth } from "../../../Context/authContext";
const SignUp = () => {
  const { formData, errors, formHandler } = useForm();
  const { signUpHandler } = useAuth();
  return (
    <>
      <div class="container-signup">
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
            />

            <label for="password" className="lable">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="signup-input"
              onChange={formHandler}
            />

            <label for="confirm" className="lable">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirm"
              className="signup-input"
              onChange={formHandler}
            />

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
