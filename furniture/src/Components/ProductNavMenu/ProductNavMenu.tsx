import { Link } from "react-router-dom";
import styles from "./navmenu.module.css";

const ProductNavMenu = () => {
  return (
    <>
      <div className={styles.navMenu}>
        <Link to="/">home</Link>
        <Link to="/products">shop</Link>
        <Link to="/about">about</Link>
      </div>
    </>
  );
};

export default ProductNavMenu;
