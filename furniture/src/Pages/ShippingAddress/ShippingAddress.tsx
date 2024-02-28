import Accordion from "../../Components/Accordion/Accordion";
import CheckoutNavbar from "../../Components/CheckoutNavbar/CheckoutNavbar";
import DeliveryForm from "../../Components/DeliveryForm/DeliveryForm";
import DeliveryPrice from "../../Components/DeliveryPrice/DeliveryPrice";
import SummaryBox from "../../Components/SummaryBox/SummaryBox";
import { AccordionData } from "../../types";
import styles from "./shipaddress.module.css";

const ShippingAddress = () => {
  const items: AccordionData[] = [
    { title: "Address", content: <DeliveryForm /> },
    { title: "Delivery", content: <DeliveryPrice /> },
  ];

  return (
    <>
      <CheckoutNavbar />
      <div className={styles.bodyPlacement}>
        <Accordion items={items} />
        <SummaryBox disabled={false}>
          <button className={styles.orderButton}>Place Order</button>
        </SummaryBox>
      </div>
    </>
  );
};

export default ShippingAddress;
