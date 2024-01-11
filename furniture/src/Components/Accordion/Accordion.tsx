import { useState } from "react";
import { AccordionData } from "../../types";
import AccordionItem from "../AccordionItem/AccordionItem";
import styles from "./accordion.module.css";

const Accordion = ({ items }: { items: AccordionData[] }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const onClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <ul className={styles.accordion}>
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          onClick={() => onClick(idx)}
        />
      ))}
    </ul>
  );
};

export default Accordion;
