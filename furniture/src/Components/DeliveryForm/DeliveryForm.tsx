import styles from "./deliveryform.module.css";

const DeliveryForm = () => {
  return (
    <div className={styles.addressForm}>
      <h1 className={styles.deliveryTitle}>Delivery</h1>
      <div className={styles.inputs}>
        <div className={styles.nameField}>
          <input className={styles.inputText} type="text" id="first-name" />

          <input
            className={styles.inputText}
            type="text"
            placeholder="Last Name*"
          />
        </div>
        <div className={styles.deliveryAddress}>
          <div className={styles.addressLine1}>
            <input
              className={styles.inputText}
              type="text"
              placeholder="Address Line 1*"
            />
          </div>
          <div className={styles.townPostcode}>
            <input
              className={styles.inputText}
              type="text"
              placeholder="Town/City*"
            />{" "}
            <input
              className={styles.inputText}
              type="text"
              placeholder="Postcode*"
            />
          </div>
          <div className={styles.emailPhone}>
            <input
              className={styles.inputText}
              type="text"
              placeholder="Email*"
            />{" "}
            <input
              className={styles.inputText}
              type="text"
              placeholder="Phone Number*"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
