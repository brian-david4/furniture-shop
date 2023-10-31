import { useState, useContext, useEffect } from "react";
import styles from "./Cart.module.css";
import CartMenu from "./CartMenu";
import { CartContext } from "../../Data/CartContext";

const Cart = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const cart = useContext(CartContext);

  useEffect(() => {
    let quantity: number = cart.getTotalCartQuantity();
    setCartQuantity(quantity);
  }, [cart.items]);

  return (
    <>
      <div
        onClick={() => setCartOpen(!isCartOpen)}
        className={styles.cartTitle}
      >
        cart({cartQuantity})
      </div>
      {isCartOpen && <CartMenu closeMenu={() => setCartOpen(false)} />}
    </>
  );
};

export default Cart;
