import Tetris from "../components/tetris/tetris";

const TetrisPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center padding-top: 10px">
      <div className="max-w-screen-lg w-full p-2 text-center">

        <h1 className="text-4xl font-bold mb-4">Tetris</h1>


        <Tetris />
      </div>
    </div>
  );
};

export default TetrisPage;
