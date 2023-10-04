import { Link } from "react-router-dom";
import styles from "./homeNav.module.css";

const HomeNavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.homeBtn}>HOME</div>
        <div className={styles.navLinks}>
          <Link className={styles.navLink} to="/products">
            shop
          </Link>
          <Link className={styles.navLink} to="/about">
            about
          </Link>
          <div className={styles.navLink}>cart</div>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;

// cart opens cart modal
