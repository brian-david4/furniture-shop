import { Link } from "react-router-dom";
import styles from "./navmenu.module.css";
import NavbarTitle from "../NavbarTitle/NavbarTitle";

const ProductNavMenu = () => {
  return (
    <>
      <div className={styles.navMenu}>
        <NavbarTitle />
        <div className={styles.navLinks}>
          <Link className={styles.link} to="/">
            home
          </Link>
          <Link className={styles.link} to="/products">
            shop
          </Link>
          <Link className={styles.link} to="/about">
            about
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductNavMenu;
