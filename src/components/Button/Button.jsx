import styles from "./Button.module.css";

const Button = ({ children, size = "md", ...props }) => {
  return (
    <button className={`${styles.button} ${styles[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
