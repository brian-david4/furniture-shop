import MainNavItem from "../MainNavItem/MainNavItem";
import styles from "./mainNav.module.css";

const MainNavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <MainNavItem to="/">home</MainNavItem>
      <MainNavItem to="/products">shop</MainNavItem>
      <MainNavItem to="/about">about</MainNavItem>
    </div>
  );
};

export default MainNavBar;
