import s from "./Square.module.css";
export default function Square({ value, onSquareClick }) {
  return (
    <>
      <button className={s.square} onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}
