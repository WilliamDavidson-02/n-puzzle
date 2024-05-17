import styles from "./App.module.css";
import Button from "@components/Button";
import Grid from "@components/Grid";
import Typography from "@components/Typography";
import usePuzzle from "@hooks/usePuzzle";

const App = () => {
  const { grid, setGrid, shuffle } = usePuzzle();

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
      <Grid grid={grid} />
      <Button onClick={handleShuffle} style={{ marginTop: "var(--s-md)" }}>
        Shuffle
      </Button>
    </main>
  );
};

export default App;
