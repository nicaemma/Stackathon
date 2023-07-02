import React from "react";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = (card) => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div key={card.id} className="relative">
      <div>
        <img
          className={
            flipped
              ? "w-[100%] block border-2 absolute [transform:rotateY(0deg)] transition delay-200"
              : "w-[100%] block border-2 absolute [transform:rotateY(90deg)] ease-in duration-200"
          }
          src={card.src}
          alt="card front"
        />
        <img
          className={
            flipped
              ? "w-[100%] block border-2 [transform:rotateY(90deg)] transition delay-0"
              : "w-[100%] block border-2 [transform:rotateY(0deg)] ease-in duration-200 transition delay-200"
          }
          src="/img/memory/back-of-card.png"
          alt="card back"
          onClick={() => handleClick(card)}
        />
      </div>
    </div>
  );
};

export default SingleCard;
