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
          number: isEmpty(num) ? null : num,
          position: num,
        };
      })
    );

    setGrid(shuffle(newGrid));
  }, []);

  const isEmpty = (position) => position === rows * columns;

  const formatGrid = (grid) => {
    // Format grid array to 2d array
    let newGrid = [];

    for (let i = 0; i < rows; i++) {
      const startIndex = i * columns;
      newGrid.push(grid.slice(startIndex, startIndex + columns));
    }

    return newGrid;
  };

  const shuffle = (grid) => {
    /**
     * Fisher–Yates Shuffle
     * https://bost.ocks.org/mike/shuffle/
     */

    let newGrid = grid.flat();
    let remainingLength = newGrid.length;

    while (remainingLength) {
      // Pick a remaining element
      const randomElement = Math.floor(Math.random() * remainingLength--);

      // And swap it with the current element.
      const temp = newGrid[remainingLength];
      newGrid[randomElement].position = remainingLength + 1;
      newGrid[remainingLength] = newGrid[randomElement];
      newGrid[randomElement] = temp;
    }

    return formatGrid(newGrid);
  };

  return { grid, setGrid, shuffle };
};

export default usePuzzle;
