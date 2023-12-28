// pages/index.js
import { useEffect, useRef, useState } from "react";

const ROWS = 20;
const COLS = 10;
const BLOCK_SIZE = 30;
const MOVE_DOWN_INTERVAL = 500; // Adjust the interval based on your preference

const Tetris = () => {
  const canvasRef = useRef(null);
  let context;

  // Tetromino shapes
  const tetrominoes = [
    [[1, 1, 1, 1]],
    [[1, 1, 1, 0], [1]],
    [[1, 1, 1, 0], [0, 0, 1]],
    [[1, 1, 1, 0], [0, 1]],
    [[1, 1, 1, 1]],
    [[1, 1, 0, 0], [1, 1]],
    [[0, 1, 1, 0], [1, 1]],
  ];

  const [gameIsResetting, setGameIsResetting] = useState(false);

  // Game state
  const board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  let currentTetromino;
  let currentPosition;
  let lastTimestamp = 0;

  useEffect(() => {
    context = canvasRef.current.getContext("2d");
    spawnTetromino();
    gameLoop();
  }, []);

  const draw = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawBoard();
    drawTetromino();
  };

  const drawBoard = () => {
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        if (board[row][col]) {
          drawBlock(col, row);
        }
      }
    }
  };

  const drawTetromino = () => {
    if (!currentTetromino) return;
    currentTetromino.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell) {
          drawBlock(currentPosition.x + j, currentPosition.y + i);
        }
      });
    });
  };

  const drawBlock = (x, y) => {
    context.fillStyle = "blue";
    context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    context.strokeStyle = "white";
    context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  };

  const rotateTetromino = () => {
    const rotatedTetromino = currentTetromino[0].map((_, i) =>
      currentTetromino.map((row) => row[i])
    );
  
    // Reverse the order of rows to get the proper rotation
    rotatedTetromino.forEach((row) => row.reverse());
  
    if (!isCollision(rotatedTetromino, currentPosition)) {
      currentTetromino = rotatedTetromino;
    }
  };
  
  const moveDown = (timestamp) => {
    const elapsed = timestamp - lastTimestamp;
  
    if (elapsed > MOVE_DOWN_INTERVAL) {
      lastTimestamp = timestamp;
      currentPosition.y++;
  
      if (isCollision(currentTetromino, currentPosition)) {
        currentPosition.y--;
        mergeTetromino();
        clearRows();
        spawnTetromino();
        if (isCollision(currentTetromino, currentPosition)) {
          resetGame();
        }
      }
  
      draw();
    }
    requestAnimationFrame((nextTimestamp) => moveDown(nextTimestamp));
  };
  

  const moveLeft = () => {
    currentPosition.x--;
    if (isCollision(currentTetromino, currentPosition)) {
      currentPosition.x++;
    }
    draw();
  };

  const moveRight = () => {
    currentPosition.x++;
    if (isCollision(currentTetromino, currentPosition)) {
      currentPosition.x--;
    }
    draw();
  };

  const isCollision = (tetromino, position) => {
    for (let i = 0; i < tetromino.length; i++) {
      for (let j = 0; j < tetromino[i].length; j++) {
        if (
          tetromino[i][j] &&
          (board[position.y + i] && board[position.y + i][position.x + j]) !== 0
        ) {
          return true;
        }
      }
    }
    return false;
  };

  const mergeTetromino = () => {
    currentTetromino.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell) {
          board[currentPosition.y + i][currentPosition.x + j] = 1;
        }
      });
    });
  };

  const clearRows = () => {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row].every((cell) => cell)) {
        board.splice(row, 1);
        board.unshift(Array(COLS).fill(0));
      }
    }
  };

  const spawnTetromino = () => {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    currentTetromino = tetrominoes[randomIndex];
    currentPosition = { x: Math.floor(COLS / 2) - 1, y: 0 };
  };


  const resetGame = () => {
    setGameIsResetting(true);
    board.forEach((row) => row.fill(0));
    setGameIsResetting(false);
    spawnTetromino();
  };
  
  const gameLoop = (timestamp) => {
    if (!gameIsResetting) {
      moveDown(timestamp);
      requestAnimationFrame(gameLoop);
    }
  };

  const handleKeyDown = (event) => {
    switch (event.code) {
      case "ArrowUp":
        rotateTetromino();
        break;
      case "ArrowDown":
        moveDown(performance.now());
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
    }
  };

  useEffect(() => {
    // Add event listener for keydown
    window.addEventListener("keydown", handleKeyDown);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Welcome to Tetris</h1>
      <canvas
        ref={canvasRef}
        width={COLS * BLOCK_SIZE}
        height={ROWS * BLOCK_SIZE}
        tabIndex="0"
        style={{ border: "1px solid black" }}
      />
    </div>
  );
};

export default Tetris;
