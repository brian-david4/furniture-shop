import MainNavItem from "../MainNavItem/MainNavItem";
import NavbarTitle from "../NavbarTitle/NavbarTitle";
import styles from "./mainNav.module.css";

const MainNavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <NavbarTitle />
      <MainNavItem to="/" title="home" />
      <MainNavItem to="/products" title="shop" />
      <MainNavItem to="/about" title="about" />
    </div>
  );
};

export default MainNavBar;
