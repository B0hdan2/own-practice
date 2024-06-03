import { useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

import s from "./Accordion.module.css";

export default function Accordion({ infoArray }) {
  const [openId, setId] = useState(null);

  return (
    <div className="container">
      <ul className={s.list}>
        {infoArray.map(({ id, info, title }) => (
          <li className={s.item} key={id}>
            <AccordionItem
              onClick={() => setId(openId === id ? null : id)}
              info={info}
              title={title}
              isOpen={openId === id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
