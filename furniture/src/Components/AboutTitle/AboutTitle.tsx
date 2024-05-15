import { motion } from "framer-motion";
import styles from "./abtTtl.module.css";

const AboutTitle = () => {
  const opacityFade = 0.8;
  const mainDelay = 1 + opacityFade;
  return (
    <>
      <motion.div
        initial={{ gap: "2vw", scale: 2.8, top: "50%", opacity: 0 }}
        animate={{ top: "2vh", gap: "20vw", scale: 1, opacity: 1 }}
        transition={{
          opacity: { duration: opacityFade, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: mainDelay },
          top: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
            delay: mainDelay,
          },
          gap: {
            duration: 0.8,
            ease: [0.87, 0, 0.13, 1],
            delay: mainDelay + 1.4,
          },
        }}
        className={styles.titleWrapper}
      >
        <div className={styles.perch}>perch</div>
        <div className={styles.join}>&</div>
        <div className={styles.highland}>highland</div>
      </motion.div>
    </>
  );
};

export default AboutTitle;
