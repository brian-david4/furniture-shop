import { AnimatePresence, motion } from "framer-motion";
import { AccordionData } from "../../types";
import styles from "./accordionItem.module.css";
import { contentHeight } from "./anims";

interface AccordionItemProps {
  data: AccordionData;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ data, isOpen, onClick }: AccordionItemProps) => {
  return (
    <li className={styles.accordionItem}>
      <h2 className={styles.accordionItemTitle}>
        <button onClick={onClick} className={styles.accordionItemBtn}>
          {data.title}
        </button>
      </h2>
      <div className={styles.accordionItemContainer}>
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              variants={contentHeight}
              initial="initial"
              animate="enter"
              exit="exit"
              className={styles.accordionItemContent}
            >
              {data.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};

export default AccordionItem;
