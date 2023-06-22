import React from "react";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = (card) => {
    console.log("flipped-->", flipped);
    if (!disabled) {
      handleChoice(card);
      console.log("flipped-->", flipped);
    }
  };

  return (
    <div key={card.id} className="relative">
      <div className="">
        <img
          className={
            flipped
              ? "w-[100%] block border-2 absolute [transform:rotateY(0deg)]"
              : "w-[100%] block border-2 absolute [transform:rotateY(90deg)]"
          }
          src={card.src}
          alt="card front"
        />

        <img
          className={
            flipped
              ? "w-[100%] block border-2 [transform:rotateY(90deg)]"
              : "w-[100%] block border-2 [transform:rotateY(0deg)]"
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
