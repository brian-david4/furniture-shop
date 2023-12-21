import CheckoutNavbar from "../../Components/CheckoutNavbar/CheckoutNavbar";
import DeliveryForm from "../../Components/DeliveryForm/DeliveryForm";
import SummaryBox from "../../Components/SummaryBox/SummaryBox";
import styles from "./shipaddress.module.css";

const ShippingAddress = () => {
  return (
    <>
      <CheckoutNavbar />
      <div className={styles.bodyPlacement}>
        <DeliveryForm />
        <SummaryBox disabled={false} />
      </div>
    </>
  );
};

export default ShippingAddress;
