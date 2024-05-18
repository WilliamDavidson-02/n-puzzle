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
      const randomIndex = Math.floor(Math.random() * remainingLength--);

      // And swap it with the current element.
      const temp = newGrid[remainingLength];
      newGrid[remainingLength] = newGrid[randomIndex];
      newGrid[randomIndex] = temp;
    }

    return formatGrid(newGrid);
  };

  const findEmptyCell = (grid) => {
    let row = null;
    let col = null;

    row = grid.findIndex((row) => row.some((col) => !col.number));
    col = grid[row].findIndex((col) => !col.number);

    return { row, col };
  };

  const isMovable = (empty, selected) => {
    const { row, col } = empty;
    const { rIndex, cIndex } = selected;

    if (row !== rIndex && col !== cIndex) return false; // Not in the same row or column
    if (row === rIndex && col === cIndex) return false; // Is empty cell

    return true;
  };

  const isBefore = (empty, selected) => empty > selected;

  const swap = ({ grid, r1, c1, r2, c2 }) => {
    let newGrid = [...grid];
    const temp = newGrid[r1][c1];
    newGrid[r1][c1] = newGrid[r2][c2];
    newGrid[r2][c2] = temp;

    return newGrid;
  };

  const move = ({ rIndex, cIndex }) => {
    const { row, col } = findEmptyCell(grid);

    if (!isMovable({ row, col }, { rIndex, cIndex })) return;

    let newGrid = [...grid];

    /**
     * Swap cells from empty to selected
     */
    if (row === rIndex) {
      if (isBefore(col, cIndex)) {
        for (let c = col; c > cIndex; c--) {
          newGrid = swap({ grid: newGrid, r1: row, c1: c, r2: row, c2: c - 1 });
        }
      } else {
        for (let c = col; c < cIndex; c++) {
          newGrid = swap({ grid: newGrid, r1: row, c1: c, r2: row, c2: c + 1 });
        }
      }
    } else if (col === cIndex) {
      if (isBefore(row, rIndex)) {
        for (let r = row; r > rIndex; r--) {
          newGrid = swap({ grid: newGrid, r1: r, c1: col, r2: r - 1, c2: col });
        }
      } else {
        for (let r = row; r < rIndex; r++) {
          newGrid = swap({ grid: newGrid, r1: r, c1: col, r2: r + 1, c2: col });
        }
      }
    }

    setGrid(newGrid);
  };

  return { grid, setGrid, shuffle, move };
};

export default usePuzzle;
