import React, { useEffect, useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Leaderboard from "./leaderboard";
import { db } from "./firebase";

const ROWS = 20;
const COLS = 20;
const BLOCK_SIZE = 20;
const MOVE_DOWN_INTERVAL = 500;

const Tetris = () => {

  // Set all variables before the game starts

  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [startGame, setGameStart] = useState(false);
  const [gameIsActive, setGameIsActive] = useState(false);
  const [paused, setIsPaused] = useState(false);
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");

  const tetrominoes = [
    [[1, 1, 1, 1]],
    [[1, 1, 1, 0], [1]],
    [[1, 1, 1, 0], [0, 0, 1]],
    [[1, 1, 1, 0], [0, 1]],
    [[1, 1, 1, 1]],
    [[1, 1, 0, 0], [1, 1]],
    [[0, 1, 1, 0], [1, 1]],
  ];

  let board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  let currentTetromino;
  let currentPosition;
  let currentTetrominoColor;
  let lastTimestamp = 0;

  //Runs once game is started is true to make the canvas
  useEffect(() => {
    if(startGame){
      const canvas = canvasRef.current;
      contextRef.current = canvas.getContext("2d");
      initGame();
      window.addEventListener("keydown", handleKeyDown);

      // Set canvas size when the component mounts
      setCanvasSize();

      // Add resize event listener to update canvas size
      window.addEventListener("resize", setCanvasSize);

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("resize", setCanvasSize);
      };
    }
  }, [startGame]);

   // Inititalize game once called
   const initGame = () => {
    setGameIsActive(true)
    console.log("in initgame")
    board = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    spawnTetromino();
    gameLoop();
  };

// These functions are only called once setCanvasSize is called #######################
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
  
    // Draw the game elements only if the game is not over
    if (!paused) {
      drawBoard();
      drawTetromino();
    } else {
      drawPauseOverlay();
    }
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

//#######################################################################################

  // Movement functions

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
          setGameIsActive(false);
        }
      }
    }

    draw();
  };

  const moveLeft = () => move(-1, 0);
  const moveRight = () => move(1, 0);
  const moveDown = (timestamp) => {
    if(!paused){
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
            
            if (isGameOver()) {
              setGameIsActive(false);
            }
          }
        }
    
        draw();
      }
    
      requestAnimationFrame((nextTimestamp) => moveDown(nextTimestamp));
    }
  };
  
  const isGameOver = () => {
    // Check if the current tetromino reaches the top border
    return currentPosition.y <= 0;
    
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
          // Update the board at the position of the current tetromino with the color of the tetromino once a row is cleared
          board[currentPosition.y + i][currentPosition.x + j] = { color: currentTetrominoColor };
        }
      });
    });
  };

  const clearRows = () => {
    let rowsCleared = 0;
    for (let row = ROWS - 1; row >= 0; row--) {
      if (board[row].every((cell) => cell)) {
        board.splice(row, 1);
        board.unshift(Array(COLS).fill(0));
        rowsCleared++;
      }
    }
    // Update score based on the number of cleared rows
    calculateScore(rowsCleared);
  };

  const spawnTetromino = () => {
    const randomIndex = Math.floor(Math.random() * tetrominoes.length);
    currentTetromino = tetrominoes[randomIndex];
    currentPosition = { x: Math.floor(COLS / 2) - 1, y: 0 };
    currentTetrominoColor = getRandomColor();
  };

  const gameLoop = (timestamp) => {
    if (gameIsActive && !paused) {
      moveDown(timestamp);
      requestAnimationFrame(gameLoop);
    } else {
      // Game is either not active or paused.
      if (!gameIsActive) {
        // Additional logic when the game is not active (e.g., game over).
        console.log("Game over");
      } else if (paused) {
        // Additional logic when the game is paused.
        console.log("Game paused");
        drawPauseOverlay();
        
      }
    }
  };


  const startGameFunction = () => {
    setGameStart(true);
    setGameIsActive(true);
  }

  const pauseGame = () => {
    if (!gameIsActive) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

  const restartGame = () => {
    setIsPaused(false);
    setUsername("");
    setScore("");
    setGameIsActive(true); 
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        board[i][j] = 0;
      }
    }
    initGame();
  };
  
  
// Other misc fucntions for leaderboard and color randomization  

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

  const drawPauseOverlay = () => {
    const context = contextRef.current;
    context.fillStyle = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }
  const getRandomColor = () => {
    const colors = ["blue", "red", "green", "purple", "orange"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const saveToLeaderboard = async () => {
    if (username) {
      try {
        const leaderboardRef = collection(db, "user-scores");
        await addDoc(leaderboardRef, { username, score });
        console.log("Score saved to leaderboard!");
      } catch (error) {
        console.error("Error saving to leaderboard:", error);
      }
    } else {
      alert("Please enter a username before saving your score.");
    }
  };


  const calculateScore = (rowsCleared) => {
    score = rowsCleared * 100;
    setScore(score)
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
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
        </div>
        {/* Display the score here */}
        <p>Score: {score}</p>
        <button onClick={saveToLeaderboard}>Save Score</button>
      </div>
      
      <div className="tetris-column">
        <button onClick={startGameFunction}>Start Game</button>
        <button onClick={pauseGame}>Pause Game</button>
        <button onClick={restartGame}>Restart Game</button>
        <Leaderboard />
      </div>
    </div>
  );
};

export default Tetris;
