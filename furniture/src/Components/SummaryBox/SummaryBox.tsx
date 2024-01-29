import { useContext } from "react";
import styles from "./summBox.module.css";
import { CartContext } from "../../Data/CartContext";
import Divider from "../Divider/Divider";

interface SummaryBoxProps {
  disabled: boolean;
  children?: React.ReactNode;
}

const SummaryBox = ({ children }: SummaryBoxProps) => {
  const cart = useContext(CartContext);
  const deliveryPrice = cart.deliveryPrice;
  const total = cart.getTotalCost() > 0 ? cart.getTotalCost() : 0;
  const grandTotal = +total + +deliveryPrice;
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
          <div className={styles.deliveryPrice}>£{deliveryPrice}</div>
        </div>
        <Divider />
      </div>

      <div className={styles.grandTotal}>
        <div className={styles.grandTotalTitle}>TOTAL</div>
        <div className={styles.grandTotalPrice}>£{grandTotal}</div>
      </div>

      {children}
    </div>
  );
};

export default SummaryBox;
