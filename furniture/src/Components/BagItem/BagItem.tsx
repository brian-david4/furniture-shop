import { useContext } from "react";
import { CartContext } from "../../Data/CartContext";
import { products } from "../../Data/data";
import styles from "./BagItem.module.css";

interface BagItemProps {
  id: number;
  quantity: number;
}

const BagItem = ({ id, quantity }: BagItemProps) => {
  const cart = useContext(CartContext);
  const product = products.find((prod) => id === prod.id.id);
  return (
    <div className={styles.bagItem}>
      <h5>{product?.id.name}</h5>
      <h5>quantity: {quantity}</h5>
    </div>
  );
};

export default BagItem;
