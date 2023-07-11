import { useState, useRef, useMemo, useEffect } from "react";
import { Field } from "../../components/field/field";
import { BaseButton } from "../../components/button/button";
import { useValidate } from "../../hooks";
import { validationSchema } from "../../constants";
import styles from "./styles.module.scss";

const initialData = {
  email: "",
  password: "",
  confirmPassword: ""
};

export const Auth = () => {
  const [formData, setFormData] = useState(initialData);
  const { errors, validate, isValid } = useValidate();
  const submitRef = useRef(null);

  useEffect(() => {
    if (isValid) {
      submitRef.current.focus();
    }
  }, [isValid]);

  const handleChange = ({ target: { value, name } }) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData(initialData);
  };

  const handleBlur = ({ target }) => {
    validate(formData, validationSchema, target.name);
  };

  return (
    <div className={styles.authPage}>
      <form onBlur={handleBlur} className={styles.form} onSubmit={handleSubmit}>
        <Field
          id="email"
          name="email"
          type="email"
          placeholder="email..."
          labelText="Ваш Email"
          value={formData.email}
          onChange={handleChange}
          errorMessage={errors?.email}
        />
        <Field
          type="text"
          id="password"
          name="password"
          placeholder="пароль..."
          labelText="Ваш пароль"
          value={formData.password}
          onChange={handleChange}
          errorMessage={errors?.password}
        />
        <Field
          type="text"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Повторить пароль..."
          labelText="Повторите пароль"
          value={formData.confirmPassword}
          onChange={handleChange}
          errorMessage={errors?.confirmPassword}
        />
        <BaseButton ref={submitRef} type="submit" disabled={!isValid}>
          Зарегистрироваться
        </BaseButton>
      </form>
    </div>
  );
};
