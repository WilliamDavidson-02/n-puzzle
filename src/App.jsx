import Cell from "@components/Cell";
import styles from "./App.module.css";
import Button from "@components/Button";
import Grid from "@components/Grid";
import Typography from "@components/Typography";
import usePuzzle from "@hooks/usePuzzle";

const App = () => {
  const { grid, setGrid, shuffle, move } = usePuzzle();

  const handleShuffle = () => {
    setGrid((prev) => shuffle(prev));
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img
          src={"/puzzle_icon.svg"}
          alt="puzzle icon"
          className={styles.icon}
        />
        <Typography variant="h1">Puzzle</Typography>
      </header>
      <Grid>
        {grid.map((row, rIndex) =>
          row.map((col, cIndex) => (
            <Cell
              key={col.id}
              onClick={() => move({ rIndex, cIndex })}
              isEmpty={!col.number}
            >
              {col.number}
            </Cell>
          ))
        )}
      </Grid>
      <Button
        onClick={handleShuffle}
        size="lg"
        style={{ marginTop: "var(--s-md)" }}
      >
        Shuffle
      </Button>
    </main>
  );
};

export default App;
