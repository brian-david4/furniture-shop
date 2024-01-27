import styles from "./delivPrice.module.css";

const DeliveryPrice = () => {
  const prices = [
    { type: "Standard", price: 99 },
    { type: "Express", price: 299 },
    { type: "Premium", price: 599 },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.delivery}>
        {prices.map((price, idx) => (
          <div className={styles.priceOptions} key={idx}>
            <div className={styles.deliverytype}>{price.type}</div>
            <div className={styles.deliveryPrice}>{price.price / 100}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryPrice;
