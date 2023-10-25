import { useState } from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <div onClick={() => setCartOpen(!isCartOpen)} className={styles.cartTitle}>
      cart(0)
    </div>
  );
};

export default Cart;
