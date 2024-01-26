import DeliveryInput from "../DeliveryInput/DeliveryInput";
import DeliveryInputMax from "../DeliveryInputMax/DeliveryInputMax";
import styles from "./deliveryform.module.css";

const DeliveryForm = () => {
  return (
    <div className={styles.addressForm}>
      {/* <h1 className={styles.deliveryTitle}>Delivery</h1> */}
      <div className={styles.inputs}>
        <div className={styles.nameField}>
          <DeliveryInput id="first-name" label="First Name*" />

          <DeliveryInput id="last-name" label="Last Name*" />
        </div>
        <div className={styles.deliveryAddress}>
          <div className={styles.addressLine1}>
            <DeliveryInputMax id="address-line1" label="Address Line 1*" />
          </div>
          <div className={styles.townPostcode}>
            <DeliveryInput id="town-city" label="Town/City*" />{" "}
            <DeliveryInput id="postcode" label="Postcode*" />
          </div>
          <div className={styles.emailPhone}>
            <DeliveryInput id="email" label="Email*" />{" "}
            <DeliveryInput id="phone-number" label="Phone Number*" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
