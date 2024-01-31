import { useContext, useState } from "react";
import styles from "./delivPrice.module.css";
import { CartContext } from "../../Data/CartContext";
import { motion } from "framer-motion";
import { priceOptions } from "./delivAnims";

const DeliveryPrice = () => {
  const cart = useContext(CartContext);
  // const [activeDelivery, setActiveDelivery] = useState(0);
  const [clickedDelivery, setClickedDelivery] = useState({
    isActive: false,
    index: 0,
  });
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
            <motion.div
              onClick={() => setClickedDelivery({ isActive: true, index: idx })}
              className={styles.priceOptions}
              key={idx}
              variants={priceOptions}
              initial="initial"
              animate={
                clickedDelivery.isActive && clickedDelivery.index === idx
                  ? "active"
                  : "inactive"
              }
            >
              <div className={styles.typeDescription}>
                <h4 className={styles.deliveryType}>{price.type}</h4>
                <div className={styles.deliveryDescription}>{price.detail}</div>
              </div>
              <div className={styles.deliveryPrice}>£{price.price / 100}</div>
            </motion.div>
          </>
        ))}
      </div>
      <button
        className={styles.saveButton}
        onClick={() =>
          cart.setDeliveryPrice(prices[clickedDelivery.index].price)
        }
      >
        save
      </button>
    </div>
  );
};

export default DeliveryPrice;
