import { useContext } from "react";
import { CartContext } from "../../Data/CartContext";
import styles from "./Checkout.module.css";
import BagItem from "../../Components/BagItem/BagItem";
import CheckoutNavbar from "../../Components/CheckoutNavbar/CheckoutNavbar";
import SummaryBox from "../../Components/SummaryBox/SummaryBox";

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

          <SummaryBox />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
