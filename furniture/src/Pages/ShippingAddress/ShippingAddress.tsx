import CheckoutNavbar from "../../Components/CheckoutNavbar/CheckoutNavbar";
import SummaryBox from "../../Components/SummaryBox/SummaryBox";
import styles from "./shipaddress.module.css";

const ShippingAddress = () => {
  return (
    <>
      <CheckoutNavbar />
      <div className={styles.bodyPlacement}>
        <div className={styles.addressForm}>
          <h1 className={styles.deliveryTitle}>Delivery</h1>
          <div className={styles.inputs}>
            <div className={styles.nameField}>
              <div className={styles.firstNameField}>
                <input
                  className={styles.inputText}
                  type="text"
                  name="first-name"
                  placeholder="First Name*"
                />
              </div>
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
        <SummaryBox disabled={false} />
      </div>
    </>
  );
};

export default ShippingAddress;
