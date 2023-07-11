import styles from "./styles.module.scss";

export const Field = ({
  id,
  labelText,
  errorMessage,
  ...props
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.label} htmlFor={id}>
        {labelText}
      </label>
      <input
        className={styles.field}
        id={id}
        {...props}
      />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
};
