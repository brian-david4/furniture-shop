import { Link } from "react-router-dom";
import styles from "./homeNav.module.css";

const HomeNavBar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div>HOME</div>
        <div className={styles.navLinks}>
          <Link to="/products">shop</Link>
          <Link to="/about">about</Link>
          <div>cart</div>
        </div>
      </div>
    </>
  );
};

export default HomeNavBar;

// cart opens cart modal
