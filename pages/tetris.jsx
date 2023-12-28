import Tetris from "../components/tetris";

const TetrisPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-screen-lg w-full p-2 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tetris</h1>
        <h2 className="text-2xl font-bold mb-4">It is a work in progress dont sue me</h2>
        <Tetris />
      </div>
    </div>
  );
};

export default TetrisPage;
