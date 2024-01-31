import { useContext, useState } from "react";
import styles from "./delivPrice.module.css";
import { CartContext } from "../../Data/CartContext";

const DeliveryPrice = () => {
  const cart = useContext(CartContext);
  const [activeDelivery, setActiveDelivery] = useState(0);
  const prices = [
    {
      type: "Standard",
      detail: "Delivery expected in 7 business days.",
      price: 99,
    },
    { type: "Express", detail: "3 - 5 business days", price: 299 },
    { type: "Premium", detail: "Same day delivery", price: 599 },
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
              <div className={styles.typeDescription}>
                <h4 className={styles.deliveryType}>{price.type}</h4>
                <div className={styles.deliveryDescription}>{price.detail}</div>
              </div>
              <div className={styles.deliveryPrice}>£{price.price / 100}</div>
            </div>
          </>
        ))}
      </div>
      <button
        className={styles.saveButton}
        onClick={() => cart.setDeliveryPrice(prices[activeDelivery].price)}
      >
        save
      </button>
    </div>
  );
};

export default DeliveryPrice;
