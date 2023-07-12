import { useState, useRef, useEffect } from "react";
import { Field } from "../../components/field";
import { BaseButton } from "../../components/button";
import { useValidate } from "../../hooks";
import { validationSchema } from "../../constants";
import styles from "./styles.module.scss";

const initialValue = {
  email: "",
  password: "",
  confirmPassword: ""
};

export const Auth = () => {
  const [dataForm, setDataForm] = useState(initialValue)
  const { errors, validate, isValid } = useValidate();
  const submitBtnRef = useRef(null);

  useEffect(() => {
    if (isValid) {
      submitBtnRef.current.focus()
    }
  }, [isValid]);

  const handleChange = ({ target: { value, name } }) => {
    setDataForm((prevState) => {
					return { ...prevState, [name]: value }
				})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataForm)
    setDataForm(initialValue)
  };

  const handleBlur = ({ target }) => {
    validate(dataForm, validationSchema, target.name)
  };

  return (
			<div className={styles.authPage}>
				<form 
        onBlur={handleBlur}
        className={styles.form} 
        onSubmit={handleSubmit}>
					<Field
						id="email"
						name="email"
						type="email"
						placeholder="email..."
						labelText="Ваш Email"
						value={dataForm.email}
						onChange={handleChange}
						errorMessage={errors?.email}
					/>
					<Field
						type="text"
						id="password"
						name="password"
						placeholder="пароль..."
						labelText="Ваш пароль"
						value={dataForm.password}
						onChange={handleChange}
						errorMessage={errors?.password}
					/>
					<Field
						type="text"
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Повторить пароль..."
						labelText="Повторите пароль"
						value={dataForm.confirmPassword}
						onChange={handleChange}
						errorMessage={errors?.confirmPassword}
					/>
					<BaseButton ref={submitBtnRef} type="submit" disabled={!isValid}>
						Зарегистрироваться
					</BaseButton>
				</form>
			</div>
		)
};
