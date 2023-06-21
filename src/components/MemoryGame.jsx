import React, { useState } from "react";

const cardImages = [
  { src: "/img/memory/meditation-sillhouette.png" },
  { src: "/img/memory/moon-reflection.png" },
  { src: "/img/memory/pink-flowers.png" },
  { src: "/img/memory/zen-stones-in-water.png" },
  { src: "/img/memory/winter-city.png" },
  { src: "/img/memory/tree-sky.png" },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards --> runs at the start to initialize game.
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    // Map above: ...card --> each card's properties (src), id --> add this property to each card
    setCards(shuffledCards);
    setTurns(0);
  };

  console.log("cards-->", cards);
  console.log("turns-->", turns);

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
            <button
              onClick={shuffleCards}
              className="justify-center border border-white rounded-md p-2 text-white bg-[#3730a3] hover:bg-[#6366f1] cursor-pointer"
            >
              New Game
            </button>
          </div>
          <div>
            {cards.map((card) => (
              <div key={card.id}>
                <div>
                  <img src={card.src} alt="card front" />
                  <img src="/img/memory/back-of-card.png" alt="card back" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryGame;
