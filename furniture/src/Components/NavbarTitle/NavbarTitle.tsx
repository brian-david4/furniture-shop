import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./navTitle.module.css";
import { logoAnim } from "./anims";

const NavbarTitle = () => {
  return (
    <>
      <Link className={styles.link} to="/">
        <motion.div
          variants={logoAnim}
          initial="initial"
          animate="enter"
          className={styles.navTitle}
        >
          <h1>perch &</h1>
          <div id={styles.highland}>highland</div>
        </motion.div>
      </Link>
    </>
  );
};

export default NavbarTitle;
