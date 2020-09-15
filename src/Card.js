import React from "react";
import "./card.css";
function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} />
      <div className="cardInfo">
        <h2>{title}</h2>
        <p>{description}</p>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default Card;
