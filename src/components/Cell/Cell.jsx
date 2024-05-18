import styles from "./Cell.module.css";

const Cell = ({ children, isEmpty, ...props }) => {
  return (
    <div {...props} className={`${styles.cell} ${isEmpty ? styles.empty : ""}`}>
      {children}
    </div>
  );
};

export default Cell;
