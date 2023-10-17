import { useState } from "react";
import styles from "./prodmenu.module.css";

const ProductMenu = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div onClick={() => setClicked(!clicked)} className={styles.menuBtn}>
      <div data-menu-clicked={clicked} className={styles.menuContent}>
        <div className={styles.burger}></div>
        <div className={styles.close}>close</div>
      </div>
    </div>
  );
};

export default ProductMenu;
