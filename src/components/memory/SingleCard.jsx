import React from "react";

const SingleCard = ({ card }) => {
  return (
    <div key={card.id}>
      <div>
        <img src={card.src} alt="card front" />
        <img src="/img/memory/back-of-card.png" alt="card back" />
      </div>
    </div>
  );
};

export default SingleCard;
