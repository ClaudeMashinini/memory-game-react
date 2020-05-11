import React, { useState, useEffect } from "react";
import Grid from "./src/components/game-grid";
import formStack from "./cardStack";

export default function Presentation() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [dimension, setDimension] = useState(400);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    resizeGrid();
    setCards(formStack());
  }, []);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", resizeGrid);
    return () => window.removeEventListener("resize", resizeListener);
  });

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id])
      setDisabled(false)
    } else {
      if (repeatClick(id)) return
      setFlipped([flipped[0], id])
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id])
        resetCards()
      } else {
        setTimeout(resetCards, 1500)
      }
    }
  }

  const isMatch = (id) => {
    const clickedCard = cards.find(card) => card.id === id)
    const flipped = cards.find((card) => flipped[0] === id)
    return flippedCard.type === clickedCard.type
}
const resetCards = () => {
  setFlipped([])
  setDisabled(false)
  }
  
  const repeatClick = (id) => flipped.includes(id);
  const resizeGrid = () => {
    setDimension(
      Math.min(
        document.documentElement.clientWidth,
        document.documentElement.clientHeight
      )
    );
  };

  return (
    <div>
      <h2>How Good is Your Memory</h2>
      <Grid
        disabled={disabled}
        cards={cards}
        dimension={dimension}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  );
}
