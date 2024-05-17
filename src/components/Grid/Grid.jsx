import styles from "./Grid.module.css";
import puzzleConfig from "@lib/puzzleConfig";

const { rows, columns } = puzzleConfig;

const Grid = ({ grid }) => {
  if (!grid) return <div>Empty</div>;

  return (
    <div
      className={styles.grid}
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {grid.map((row) =>
        row.map((col) => (
          <div
            key={col.id}
            className={`${styles.cell} ${!col.number ? styles.empty : ""}`}
          >
            {col.number}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
