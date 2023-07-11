import { forwardRef } from "react";
import styles from "./styles.module.scss";

export const BaseButton = forwardRef(({ children, ...props }, ref) => {
  return (
    <button ref={ref} className={styles.btn} {...props}>
      {children}
    </button>
  );
});
