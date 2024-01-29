import { useContext, useState } from "react";
import styles from "./delivPrice.module.css";
import { CartContext } from "../../Data/CartContext";

const DeliveryPrice = () => {
  const cart = useContext(CartContext);
  const [activeDelivery, setActiveDelivery] = useState(0);
  const prices = [
    { type: "Standard", detail: "", price: 99 },
    { type: "Express", detail: "", price: 299 },
    { type: "Premium", detail: "", price: 599 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.delivery}>
        {prices.map((price, idx) => (
          <>
            <div
              onClick={() => setActiveDelivery(idx)}
              className={styles.priceOptions}
              key={idx}
            >
              <div className={styles.deliverytype}>{price.type}</div>
              <div className={styles.deliveryPrice}>£{price.price / 100}</div>
            </div>
          </>
        ))}
      </div>
      <button
        onClick={() => cart.setDeliveryPrice(prices[activeDelivery].price)}
      >
        save
      </button>
    </div>
  );
};

export default DeliveryPrice;
