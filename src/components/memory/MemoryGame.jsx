import React, { useState, useEffect } from "react";
import SingleCard from "./SingleCard";

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

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards --> runs at the start to initialize game.
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    // Map above: ...card --> each card's properties (src), id --> add this property to each card
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        // Return --> spread card properties with matched property changed to 'true'.
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // Wait 1000ms (1sec) and then call resetTurn()
        setTimeout(() => resetTurn(), 1300);
      }
    }
  }, [choiceOne, choiceTwo]);

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  // Above: if choiceOne is true, we setChoiceTwo

  // start new game right away
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="font-fira w-full h-screen top-20 bg-cover bg-no-repeat bg-[url('https://img.freepik.com/premium-vector/dark-green--watercolor-texture-background_65186-958.jpg?w=2000')]">
      <div className="p-20 max-w-[800px] max-h-[90%] m-auto flex flex-col items-center">
        <h1 className="text-white text-2xl text-center">Memory Game</h1>
        <div className="max-w-[40%] w-fit h-fit m-5">
          <button
            onClick={shuffleCards}
            className="justify-center border border-white rounded-md p-2 text-white bg-[#3730a3] hover:bg-[#6366f1] cursor-pointer"
          >
            New Game
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              disabled={disabled}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
        <p className="mt-5 text-white">Turns: {turns}</p>
      </div>
    </div>
  );
};

export default MemoryGame;
