import styles from "./Typography.module.css";

const Typography = ({ variant, children, ...props }) => {
  const Variant = variant ? variant : "p";

  return (
    <Variant className={styles[variant]} {...props}>
      {children}
    </Variant>
  );
};

export default Typography;
