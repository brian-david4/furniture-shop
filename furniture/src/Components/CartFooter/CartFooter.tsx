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
      <div className={styles.checkoutContainer}>
        <div className={styles.toCartBtn}></div>
        <Link className={styles.link} to="/checkout">
          To Checkout
        </Link>
        <div className={styles.backSlide}></div>
      </div>
    </div>
  );
};

export default CartFooter;
