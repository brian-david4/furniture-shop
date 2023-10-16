import { Link } from "react-router-dom";
import styles from "./navTitle.module.css";

const NavbarTitle = () => {
  return (
    <>
      <Link className={styles.link} to="/">
        <div className={styles.navTitle}>
          <h1>perch &</h1>
          <div id={styles.highland}>highland</div>
        </div>
      </Link>
    </>
  );
};

export default NavbarTitle;
