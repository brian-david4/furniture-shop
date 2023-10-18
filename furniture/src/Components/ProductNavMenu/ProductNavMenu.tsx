import { motion } from "framer-motion";
import styles from "./navmenu.module.css";
import NavbarTitle from "../NavbarTitle/NavbarTitle";
import { navLink, navLinks } from "./anims";

const ProductNavMenu = () => {
  return (
    <>
      <div className={styles.navMenu}>
        <NavbarTitle />
        <motion.div
          variants={navLinks}
          initial="initial"
          animate="enter"
          className={styles.navLinks}
        >
          <motion.a variants={navLink} className={styles.link} href="/">
            home
          </motion.a>
          <motion.a variants={navLink} className={styles.link} href="/products">
            shop
          </motion.a>
          <motion.a variants={navLink} className={styles.link} href="/about">
            about
          </motion.a>
        </motion.div>
      </div>
    </>
  );
};

export default ProductNavMenu;
