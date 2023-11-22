import { useContext } from "react";
import { CartContext } from "../../Data/CartContext";
import styles from "./CartFooter.module.css";
import { Link } from "react-router-dom";

const CartFooter = () => {
  const cart = useContext(CartContext);
  const totalPrice = cart.getTotalCost();
  return (
    <div className={styles.cartFooter}>
      <div className={styles.grandTotal}>
        <div className={styles.totalTitle}>TOTAL</div>
        <div className={styles.total}>£{totalPrice}</div>
      </div>
      <Link className={styles.link} to="/checkout">
        <div className={styles.checkoutContainer}>
          <div className={styles.toCartBtn}>To Checkout</div>
          To Checkout
          <div className={styles.backSlide}>To Checkout</div>
        </div>
      </Link>
    </div>
  );
};

export default CartFooter;
