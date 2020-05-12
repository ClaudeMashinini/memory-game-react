import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

export default function Card({
  handleClick,
  id,
  flipped,
  solved,
  height,
  width,
  type,
  disabled,
}) {
  return (
    <div
      className={`flip - container ${flipped ? "flipped" : ""}`}
      style={{
        height,
        width,
      }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="flipper">
        <img
          style={{
            height,
            width,
          }}
          className={flipped ? "front" : "back"}
          src={
            flipped || solved
              ? `/img/${type}.*g`
              : `../../../public/images/questionmark.svg`
          }
        />
      </div>
    </div>
  );
}

Card.PropTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  flipped: PropTypes.bool.isRequired,
  solved: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};
