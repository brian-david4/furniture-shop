import Accordion from "../../Components/Accordion/Accordion";
import TestComponent from "../../Components/TestComponent/TestComponent";
import { AccordionData } from "../../types";
import styles from "./TestPage.module.css";

const TestPage = () => {
  const items: AccordionData[] = [
    { title: "Delivery", content: <TestComponent /> },
    { title: "Delivery Price", content: <TestComponent /> },
    { title: "Title", content: <TestComponent /> },
  ];
  return (
    <div className={styles.container}>
      <Accordion items={items} />
    </div>
  );
};

export default TestPage;
