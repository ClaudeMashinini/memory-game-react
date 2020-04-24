import React from 'react';

const GameOver = ({ restartGame }) => (
    <div className="justify-center">
        <h1>Congratulations! You're done!</h1>
        <button className="restart-button" onClick={restartGame}>Play Again</button>
    </div>
);

export default GameOver;