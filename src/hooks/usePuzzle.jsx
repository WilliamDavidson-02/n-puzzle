import puzzleConfig from "@lib/puzzleConfig";
import { useEffect, useState } from "react";

const usePuzzle = () => {
  const { rows, columns } = puzzleConfig;
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const newGrid = Array.from({ length: rows }).map((_, rIndex) =>
      Array.from({ length: columns }).map((_, cIndex) => {
        const num = rIndex * columns + cIndex + 1;

        return {
          id: `${num}-puzzle`,
          number: isLast(num) ? null : num,
          position: num,
        };
      })
    );

    setGrid(shuffle(newGrid));
  }, []);

  const isLast = (position) => position === rows * columns;

  const shuffle = (grid) => {
    return grid;
  };

  return { grid };
};

export default usePuzzle;
