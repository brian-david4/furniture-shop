import CartHeader from "../CartHeader/CartHeader";
import styles from "./Cart.module.css";

interface CartMenuProps {
  closeMenu: () => void;
}

const CartMenu = ({ closeMenu }: CartMenuProps) => {
  return (
    <div className={styles.cartMenu}>
      <CartHeader closeMenu={() => closeMenu()} />
    </div>
  );
};

export default CartMenu;
