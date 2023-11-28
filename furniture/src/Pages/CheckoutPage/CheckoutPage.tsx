import { useContext } from "react";
import { CartContext } from "../../Data/CartContext";
import styles from "./Checkout.module.css";
import BagItem from "../../Components/BagItem/BagItem";
import CheckoutNavbar from "../../Components/CheckoutNavbar/CheckoutNavbar";
import SummaryBox from "../../Components/SummaryBox/SummaryBox";

const CheckoutPage = () => {
  const cart = useContext(CartContext);
  const cartLengthZero = cart.getTotalCartQuantity() > 0 ? false : true;

  return (
    <>
      <CheckoutNavbar />
      <div className={styles.checkoutContainer}>
        <div className={styles.bagSummaryFlex}>
          <div className={styles.bag}>
            <h1 className={styles.bagTitle}>BAG</h1>
            {cartLengthZero && (
              <div className={styles.noCartItems}>
                <div>
                  visit the shop for
                  <div className={styles.cool}>
                    <span
                      style={{ transitionDelay: "0s" }}
                      className={styles.ltr}
                    >
                      c
                    </span>
                    <span
                      style={{ transitionDelay: "0.05s" }}
                      className={styles.ltr}
                    >
                      o
                    </span>
                    <span
                      style={{ transitionDelay: "0.1s" }}
                      className={styles.ltr}
                    >
                      o
                    </span>
                    <span
                      style={{ transitionDelay: "0.15s" }}
                      className={styles.ltr}
                    >
                      l
                    </span>
                  </div>
                  <span>new</span> products
                </div>
              </div>
            )}
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
