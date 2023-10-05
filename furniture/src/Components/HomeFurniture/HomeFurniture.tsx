import { motion } from "framer-motion";
import styles from "./homeFurn.module.css";

interface HomeFurnitureProps {
  children: React.ReactNode;
}

const HomeFurniture = ({ children }: HomeFurnitureProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.76, 0.24, 0, 1] }}
        className={styles.furnitureSection}
      >
        {children}
      </motion.div>
    </>
  );
};

export default HomeFurniture;
