import { useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import s from "./AccordionItem.module.css";

export default function AccordionItem({ info, title, onClick, isOpen }) {
  const itemRef = useRef(null);

  return (
    <>
      <div className={s.titleBox}>
        <h3 className={s.title}>{title}</h3>
        <span className={s.span} onClick={onClick}>
          <AiFillCaretDown />
        </span>
      </div>
      <div
        className={s.infoBox}
        style={{
          height: isOpen ? `${itemRef.current.scrollHeight}px` : "0px",
        }}
      >
        <p ref={itemRef}>{info}</p>
      </div>
    </>
  );
}
