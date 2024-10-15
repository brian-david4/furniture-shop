import { motion } from "framer-motion";
import styles from "./styles.module.css";
import { loadImg, shopLoad } from "./anims";

const ShopLoading = () => {
  return (
    <motion.div
      variants={shopLoad}
      initial="initial"
      exit="exit"
      transition={{ duration: 1, ease: [0.68, 0.21, 0.65, 0.97] }}
      className={styles.loadingPage}
    >
      <motion.img
        variants={loadImg}
        initial="initial"
        animate="enter"
        className={styles.img}
        src="/owl.svg"
      />
    </motion.div>
  );
};

export default ShopLoading;
