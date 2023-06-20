import React from "react";

const MemoryGame = () => {
  return (
    <div className="p-20 bg-[#831843] w-full h-screen m-auto flex flex-col items-center">
      <h1 className="text-white text-2xl text-center">Memory Game</h1>
      <div className="max-w-[40%] w-fit h-fit m-5">
        <button className="justify-center border border-white rounded-md p-2 text-white bg-[#3730a3] hover:bg-[#6366f1] cursor-pointer">
          New Game
        </button>
      </div>
    </div>
  );
};

export default MemoryGame;
