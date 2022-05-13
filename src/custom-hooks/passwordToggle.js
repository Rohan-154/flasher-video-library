import { useState } from "react";
const usePasswordToggle = () => {
  const [passwordToggle, setPasswordToggle] = useState({
    type: "password",
    eyeIcon: false,
  });
  const [confirmPasswordToggle, setConfirmPasswordToggle] = useState({
    type: "password",
    eyeIcon: false,
  });
  const togglePassword = () => {
    !passwordToggle.eyeIcon
      ? setPasswordToggle({
          type: "text",
          eyeIcon: true,
        })
      : setPasswordToggle({
          type: "password",
          eyeIcon: false,
        });
  };
  const toggleConfirmPassword = () => {
    !confirmPasswordToggle.eyeIcon
      ? setConfirmPasswordToggle({
          type: "text",
          eyeIcon: true,
        })
      : setConfirmPasswordToggle({ type: "password", eyeIcon: false });
  };
  return {
    passwordToggle,
    confirmPasswordToggle,
    togglePassword,
    toggleConfirmPassword,
  };
};

export { usePasswordToggle };
