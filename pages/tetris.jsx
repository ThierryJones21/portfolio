import Tetris from "../components/tetris/tetris";

const TetrisPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-screen-lg w-full p-2 text-center">
        <h1 className="text-4xl font-bold mb-2">Tetris</h1>

        <Tetris />
      </div>
    </div>

  );
};

export default TetrisPage;
