import styles from "./prodmenu.module.css";

interface ProductMenuProps {
  clicked: boolean;
  setClicked: () => void;
}

const ProductMenu = ({ clicked, setClicked }: ProductMenuProps) => {
  return (
    <div onClick={() => setClicked()} className={styles.menuBtn}>
      <div data-menu-clicked={clicked} className={styles.menuContent}>
        <div className={styles.burger}></div>
        <div className={styles.close}>close</div>
      </div>
    </div>
  );
};

export default ProductMenu;
