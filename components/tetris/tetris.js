import React, { useEffect, useRef, useState } from "react";
import { collection, addDoc, getDocs, updateDoc } from "firebase/firestore";
import Leaderboard from "./leaderboard";
import { db } from "./firebase";

const ROWS = 20;
const COLS = 20;
const BLOCK_SIZE = 20;
const MOVE_DOWN_INTERVAL = 500;

const Tetris = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [gameIsResetting, setGameIsResetting] = useState(false);


  let currentTetromino;
  let currentPosition;
  let currentTetrominoColor;
  let lastTimestamp = 0;
  let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

  const tetrominoes = [
    [[1, 1, 1, 1]],
    [[1, 1, 1, 0], [1]],
    [[1, 1, 1, 0], [0, 0, 1]],
    [[1, 1, 1, 0], [0, 1]],
    [[1, 1, 1, 1]],
    [[1, 1, 0, 0], [1, 1]],
    [[0, 1, 1, 0], [1, 1]],
  ];

  const initGame = () => {
    setUsername("");
    setScore(0);
    setGameIsResetting(false);
  
    currentTetromino = null;
    currentPosition = null;
    currentTetrominoColor = null;
    lastTimestamp = 0;
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    spawnTetromino();
    gameLoop();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d");
    
    window.addEventListener("keydown", handleKeyDown);
    initGame();

    // Set canvas size when the component mounts
    setCanvasSize();

    // Add resize event listener to update canvas size
    window.addEventListener("resize", setCanvasSize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  const setCanvasSize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const maxWidth = COLS * BLOCK_SIZE; // 10:20 ratio
      const maxHeight = ROWS * BLOCK_SIZE;
      const width = window.innerWidth > maxWidth ? maxWidth : window.innerWidth - 20;
      const height = window.innerHeight > maxHeight ? maxHeight : window.innerHeight - 20;

      canvas.width = width;
      canvas.height = height;
      draw(); // Redraw the canvas when size changes
    }
  };
  

  const draw = () => {
    const context = contextRef.current;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    drawBoard();
    drawTetromino();
  };

  const drawBoard = () => {
    board.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell) {
          drawBlock(j, i, cell.color);
        }
      });
    });
  };

  const drawTetromino = () => {
    if (!currentTetromino) return;
    currentTetromino.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell) {
          drawBlock(currentPosition.x + j, currentPosition.y + i, currentTetrominoColor);
        }
      });
    });
  };

  const drawBlock = (x, y, color) => {
    const context = contextRef.current;
    context.fillStyle = color;
    context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    context.strokeStyle = "white";
    context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
  };

  const rotateTetromino = () => {
    const rotatedTetromino = currentTetromino[0].map((_, i) =>
      currentTetromino.map((row) => row[i])
    );

    rotatedTetromino.forEach((row) => row.reverse());

    if (!isCollision(rotatedTetromino, currentPosition)) {
      currentTetromino = rotatedTetromino;
    }
  };

  const move = (x, y) => {
    currentPosition.x += x;
    currentPosition.y += y;

    if (isCollision(currentTetromino, currentPosition)) {
      currentPosition.x -= x;
      currentPosition.y -= y;

      if (y !== 0) {
        mergeTetromino();
        clearRows();
        spawnTetromino();
        if (isCollision(currentTetromino, currentPosition)) {
          resetGame();
        }
      }
    }

    draw();
  };

  const moveLeft = () => move(-1, 0);
  const moveRight = () => move(1, 0);
  const moveDown = (timestamp) => {
    const elapsed = timestamp - lastTimestamp;
  
    if (elapsed > MOVE_DOWN_INTERVAL) {
      lastTimestamp = timestamp;
      const newPosition = { x: currentPosition.x, y: currentPosition.y + 1 };
  
      if (!isCollision(currentTetromino, newPosition)) {
        currentPosition = newPosition;
      } else {
        mergeTetromino();
        clearRows();
        spawnTetromino();
  
        // Check collision with the bottom border
        if (isCollision(currentTetromino, currentPosition)) {
          // Move the tetromino up until it's no longer colliding
          while (isCollision(currentTetromino, currentPosition)) {
            currentPosition.y--;
          }
  
          // Redraw the board after repositioning the tetromino
          draw();
          
          if (currentPosition.y <= 0) {
            calculateScore();
            console.log("gameover")
            resetGame();
          }
        }
      }
  
      draw();
    }
  
    requestAnimationFrame((nextTimestamp) => moveDown(nextTimestamp));
  };
  
  
  const isCollision = (tetromino, position) => {
    for (let i = 0; i < tetromino.length; i++) {
      for (let j = 0; j < tetromino[i].length; j++) {
        if (tetromino[i][j]) {
          // Check collision with other blocks on the board
          if (
            (board[position.y + i] && board[position.y + i][position.x + j]) !== 0 ||
            position.x + j < 0 || // Left edge
            position.x + j >= board[0].length || // Right edge
            position.y + i >= board.length // Bottom edge
          ) {
            return true;
          }
        }
      }
    }
    return false;
  };
  
  
  

  const mergeTetromino = () => {
    currentTetromino.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell) {
          board[currentPosition.y + i][currentPosition.x + j] = { color: currentTetrominoColor };
        }
      });
    });
  };

  const clearRows = () => {
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row].every((cell) => cell)) {
        setScore((score) => score + 100);
        board.splice(row, 1);
        board.unshift(Array(COLS).fill(0));
      }
    }
  };

  const spawnTetromino = () => {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    currentTetromino = tetrominoes[randomIndex];
    currentPosition = { x: Math.floor(COLS / 2) - 1, y: 0 };
    currentTetrominoColor = getRandomColor();
  };

  const resetGame = () => {
    setGameIsResetting(true);
    initGame();
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
        move(0, 1);
        break;
      case "ArrowLeft":
        moveLeft();
        break;
      case "ArrowRight":
        moveRight();
        break;
      default:
        break;
    }
  };

  const getRandomColor = () => {
    const colors = ["blue", "red", "green", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const saveToLeaderboard = async () => {
    if (username) {
      try {
        const leaderboardRef = collection(db, "user-scores");
        const querySnapshot = await getDocs(leaderboardRef);
  
        let userExists = false;
        querySnapshot.forEach(async (doc) => {
          const data = doc.data();
          if (data.username === username) {
            userExists = true;
            // If the user already exists, update their score
            const docRef = doc.ref;
            if (score > data.score) {
              // Only update if the new score is higher
              await updateDoc(docRef, { score });
              console.log("Score updated in leaderboard!");
            }
            else{
              console.log("score is lower not added")
            }
          }
        });
  
        // If the user doesn't exist, add a new document
        if (!userExists) {
          await addDoc(leaderboardRef, { username, score });
          console.log("Score saved to leaderboard!");
        }
      } catch (error) {
        console.error("Error saving to leaderboard:", error);
      }
    } else {
      alert("Please enter a username before saving your score.");
    }
  };
  

  const calculateScore = async (rowsCleared) => {
    const newScore = rowsCleared * 100;
    setScore((prevScore) => prevScore + newScore);
    console.log("Score updated:", score);
  };

  return (
    <div className="tetris-container">
      <div className="tetris-column">
        <canvas
          ref={canvasRef}
          tabIndex="0"
          style={{ border: "1px solid black", display: "inline-block" }}
        />
        <div>
          <label>
            Enter your username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <p>Score: {score}</p>
        <button onClick={saveToLeaderboard}>Save Score</button>
      </div>

      <div className="tetris-column">
        <button onClick={resetGame}>Restart Game</button>
        <Leaderboard />
      </div>
    </div>
  );
};

export default Tetris;
