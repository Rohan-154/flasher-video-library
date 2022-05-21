import { useState } from "react";
import { omit } from "lodash";

const useForm = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    validateForm(name, value);
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = (name, value) => {
    switch (name) {
      case "confirmPassword":
        if (value !== formData.password) {
          setErrors({
            ...errors,
            match: "Password not matched.",
          });
        } else {
          const newObj = omit(errors, "match");
          setErrors(newObj);
        }
        break;
    }
  };

  return { formData, errors, formHandler };
};

export { useForm };
