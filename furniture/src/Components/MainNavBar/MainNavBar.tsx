import { motion } from "framer-motion";
import MainNavItem from "../MainNavItem/MainNavItem";
import NavbarTitle from "../NavbarTitle/NavbarTitle";
import styles from "./mainNav.module.css";
import { mainNavAnim } from "./Anims";

const MainNavBar = () => {
  return (
    <motion.div
      variants={mainNavAnim}
      initial="initial"
      animate="enter"
      className={styles.navbarContainer}
    >
      <NavbarTitle />
      <MainNavItem to="/" title="home" />
      <MainNavItem to="/products" title="shop" />
      <MainNavItem to="/about" title="about" />
    </motion.div>
  );
};

export default MainNavBar;
