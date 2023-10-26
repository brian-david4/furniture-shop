import styles from "./Carheader.module.css";

interface CartHeaderProps {
  closeMenu: () => void;
}

const CartHeader = ({ closeMenu }: CartHeaderProps) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.cartTitle}>cart</h1>
      <button onClick={() => closeMenu()} className={styles.closeBtn}>
        close
      </button>
    </div>
  );
};

export default CartHeader;
