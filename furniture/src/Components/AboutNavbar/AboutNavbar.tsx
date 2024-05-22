import { Link } from "react-router-dom";
import styles from "./abtNav.module.css";

const AboutNavbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.links}>
          <Link to="/">home</Link>
          <Link to="/shop">shop</Link>
        </div>
      </div>
    </>
  );
};

export default AboutNavbar;
