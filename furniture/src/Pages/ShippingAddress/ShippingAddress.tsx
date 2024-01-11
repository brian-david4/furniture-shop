import Accordion from "../../Components/Accordion/Accordion";
import CheckoutNavbar from "../../Components/CheckoutNavbar/CheckoutNavbar";
import DeliveryForm from "../../Components/DeliveryForm/DeliveryForm";
import SummaryBox from "../../Components/SummaryBox/SummaryBox";
import TestComponent from "../../Components/TestComponent/TestComponent";
import { AccordionData } from "../../types";
import styles from "./shipaddress.module.css";

const ShippingAddress = () => {
  const items: AccordionData[] = [
    { title: "Address", content: <DeliveryForm /> },
    { title: "Delivery", content: <TestComponent /> },
  ];

  return (
    <>
      <CheckoutNavbar />
      <div className={styles.bodyPlacement}>
        {/* <DeliveryForm /> */}
        <Accordion items={items} />
        <SummaryBox disabled={false} />
      </div>
    </>
  );
};

export default ShippingAddress;
