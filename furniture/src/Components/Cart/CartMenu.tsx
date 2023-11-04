import CartHeader from "../CartHeader/CartHeader";
import CartMenuItem from "../CartMenuItem/CartMenuItem";
import styles from "./Cart.module.css";
import CartItems from "./CartItems/CartItems";

interface CartMenuProps {
  closeMenu: () => void;
}

const CartMenu = ({ closeMenu }: CartMenuProps) => {
  return (
    <div className={styles.cartMenu}>
      <CartHeader closeMenu={() => closeMenu()} />
      <CartItems>
        <CartMenuItem />
        <CartMenuItem />
      </CartItems>
    </div>
  );
};

export default CartMenu;
