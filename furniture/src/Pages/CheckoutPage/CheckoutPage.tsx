import { useContext } from "react";
import { CartContext } from "../../Data/CartContext";
import styles from "./Checkout.module.css";
import BagItem from "../../Components/BagItem/BagItem";
import { Link } from "react-router-dom";
import CheckoutNavbar from "../../Components/CheckoutNavbar/CheckoutNavbar";

const CheckoutPage = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <CheckoutNavbar />
      <div className={styles.checkoutContainer}>
        <div className={styles.bagSummaryFlex}>
          <div className={styles.bag}>
            <h1 className={styles.bagTitle}>BAG</h1>
            {cart.items.map((cartItem, idx) => (
              <BagItem
                key={idx}
                id={cartItem.id}
                quantity={cartItem.quantity}
              />
            ))}
          </div>

          <div className={styles.summary}>
            <h1 className={styles.summaryTitle}>Summary</h1>

            <div className={styles.totalWrapper}>
              <div className={styles.subtotal}>
                <div className={styles.subtotalTitle}>subtotal</div>
                <div className={styles.subtotalPrice}>£1000</div>
              </div>
              <div className={styles.delivery}>
                <div>delivery</div>
                <div className={styles.deliveryPrice}>£0.00</div>
              </div>
              <div className={styles.divider}></div>
            </div>

            <div className={styles.grandTotal}>
              <div className={styles.grandTotalTitle}>TOTAL</div>
              <div className={styles.grandTotalPrice}>£1000</div>
            </div>

            <Link className={styles.link} to="/checkout/shipping-address">
              <button className={styles.checkoutButton}>Guest Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
