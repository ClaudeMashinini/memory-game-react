import React from "react";
import PropTypes from "prop-types";
import Card from "../game-cards";
import "./styles.css";

export default function Grid({
  dimension,
  disabled,
  cards,
  flipped,
  handleClick,
}) {
  return (
    <div className="grid">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={dimension / 6.5}
          height={dimension / 5.5}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

Grid.PropTypes = {
  dimension: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).number,
  handleClick: PropTypes.func.isRequired,
};
