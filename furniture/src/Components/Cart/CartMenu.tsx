import { useContext } from "react";
import CartHeader from "../CartHeader/CartHeader";
import CartMenuItem from "../CartMenuItem/CartMenuItem";
import styles from "./Cart.module.css";
import CartItems from "./CartItems/CartItems";
import { CartContext } from "../../Data/CartContext";

interface CartMenuProps {
  closeMenu: () => void;
}

const CartMenu = ({ closeMenu }: CartMenuProps) => {
  const cart = useContext(CartContext);

  return (
    <div className={styles.cartMenu}>
      <CartHeader closeMenu={() => closeMenu()} />
      <CartItems>
        {cart.items.map((cartItem, idx) => (
          <CartMenuItem
            key={idx}
            id={cartItem.id}
            quantity={cartItem.quantity}
          />
        ))}
      </CartItems>
    </div>
  );
};

export default CartMenu;
