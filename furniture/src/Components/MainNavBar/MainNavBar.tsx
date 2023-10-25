import { motion } from "framer-motion";
import Cart from "../Cart/Cart";
import MainNavItem from "../MainNavItem/MainNavItem";
import NavbarTitle from "../NavbarTitle/NavbarTitle";
import { mainNavAnim } from "./Anims";
import styles from "./mainNav.module.css";

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
      <Cart />
    </motion.div>
  );
};

export default MainNavBar;
