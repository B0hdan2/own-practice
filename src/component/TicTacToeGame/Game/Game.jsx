import { useState } from "react";
import Board from "../Board/Board";

import s from "./Game.module.css";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isReversed, setIsReversed] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  let moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Ви на ході №" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move} className={s.item}>
        <p onClick={() => jumpTo(move)} className={s.text}>
          {description}
        </p>
      </li>
    );
  });

  if (isReversed) {
    moves = [...moves].reverse();
  }

  const handleClick = () => {
    setIsReversed(!isReversed);
  };

  return (
    <div className='container'>
      <div className={s.game}>
        <div className={s.board_box}>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div>
          <div className={s.box}>
            <button onClick={handleClick}>сортування</button>
          </div>
          <ol className={s.game_info}>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
