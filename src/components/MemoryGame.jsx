import React from "react";

const MemoryGame = () => {
  return (
    <div>
      <img
        className="w-full h-screen top-20 object-cover object-left"
        src="https://img.freepik.com/premium-vector/dark-green-abstract-watercolor-texture-background_65186-958.jpg?w=2000"
      />
      <div className="absolute w-full h-screen top-20 left-0 font-fira">
        <div className="p-20 m-auto flex flex-col items-center">
          <h1 className="text-white text-2xl text-center">Memory Game</h1>
          <div className="max-w-[40%] w-fit h-fit m-5">
            <button className="justify-center border border-white rounded-md p-2 text-white bg-[#3730a3] hover:bg-[#6366f1] cursor-pointer">
              New Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
