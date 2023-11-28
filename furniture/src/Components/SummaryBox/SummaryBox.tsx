import { Link } from "react-router-dom";
import { useContext } from "react";
import styles from "./summBox.module.css";
import { CartContext } from "../../Data/CartContext";

const SummaryBox = () => {
  const cart = useContext(CartContext);
  const total = cart.getTotalCost() > 0 ? cart.getTotalCost() : "0.00";
  return (
    <div className={styles.summary}>
      <h1 className={styles.summaryTitle}>Summary</h1>

      <div className={styles.totalWrapper}>
        <div className={styles.subtotal}>
          <div className={styles.subtotalTitle}>subtotal</div>
          <div className={styles.subtotalPrice}>£{total}</div>
        </div>
        <div className={styles.delivery}>
          <div>delivery</div>
          <div className={styles.deliveryPrice}>£0.00</div>
        </div>
        <div className={styles.divider}></div>
      </div>

      <div className={styles.grandTotal}>
        <div className={styles.grandTotalTitle}>TOTAL</div>
        <div className={styles.grandTotalPrice}>£{total}</div>
      </div>

      <Link className={styles.link} to="/checkout/shipping-address">
        <button className={styles.checkoutButton}>Guest Checkout</button>
      </Link>
    </div>
  );
};

export default SummaryBox;
