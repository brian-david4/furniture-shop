import { Link } from "react-router-dom";
import styles from "./homeNav.module.css";

const HomeNavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navLinks}>
          <Link className={styles.navLink} to="/products">
            shop
          </Link>
          <Link className={styles.navLink} to="/about">
            about
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;
