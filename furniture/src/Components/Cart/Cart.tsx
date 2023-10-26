import { useState } from "react";
import styles from "./Cart.module.css";
import CartMenu from "./CartMenu";

const Cart = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setCartOpen(!isCartOpen)}
        className={styles.cartTitle}
      >
        cart(0)
      </div>
      {isCartOpen && <CartMenu closeMenu={() => setCartOpen(false)} />}
    </>
  );
};

export default Cart;
