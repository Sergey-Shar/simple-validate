import { useState, useCallback, useMemo } from "react";
import { emailRegex, passwordRegex } from "../constants";

const chekValidate = (ruleName, value, pass) => {
  switch (ruleName) {
    case "isRequired":
      return Boolean(value.trim());
    case "isEmail":
      return emailRegex.test(value);
    case "isPassword":
      return passwordRegex.test(value);
    case "isCheckPassword":
      return value.trim() === pass.trim();
    default:
      return true;
  }
};

export const useValidate = () => {
  const [errors, setErrors] = useState({
    email: null,
    password: null,
    confirmPassword: null
  });

  const validate = useCallback((formData, config, name) => {
    const validationRules = config[name];
    for (const rule in validationRules) {
      const { message } = validationRules[rule];
      const hasError = !chekValidate(rule, formData[name], formData.password);
      if (hasError) {
        setErrors((prev) => ({ ...prev, [name]: message }));
        break;
      } else {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  }, []);

  const isValid = useMemo(() => Object.values(errors).every((i) => i === ""), [
    errors
  ]);

  return {
    errors,
    validate,
    isValid
  };
};
