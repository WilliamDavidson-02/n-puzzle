import styles from "./Grid.module.css";
import puzzleConfig from "@lib/puzzleConfig";

const { rows, columns } = puzzleConfig;

const Grid = ({ children }) => {
  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
