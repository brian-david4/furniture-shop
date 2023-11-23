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
      <div className={styles.prodImgContainer}>
        <img src={product?.image} alt="Product Image" />
      </div>
      <div className={styles.detailFlex}>
        <h5>{product?.id.name}</h5>
        <h5>Quantity: {quantity}</h5>
        <div
          onClick={() => cart.deleteFromCart(id)}
          className={styles.removeCart}
        >
          remove from cart
        </div>
      </div>
    </div>
  );
};

export default BagItem;
