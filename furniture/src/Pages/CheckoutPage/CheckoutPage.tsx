import { useContext } from "react";
import { CartContext } from "../../Data/CartContext";
import styles from "./Checkout.module.css";
import BagItem from "../../Components/BagItem/BagItem";

const CheckoutPage = () => {
  const cart = useContext(CartContext);
  return (
    <>
      <div className={styles.checkoutContainer}>
        <div className={styles.bagSummaryFlex}>
          <div className={styles.bag}>
            {cart.items.map((cartItem, idx) => (
              <BagItem
                key={idx}
                id={cartItem.id}
                quantity={cartItem.quantity}
              />
            ))}
          </div>
          <div className={styles.summary}></div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
