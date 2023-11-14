import styles from "./CartmenuItem.module.css";
import { products } from "../../Data/data";

interface CartMenuItemProps {
  id: number;
  quantity: number;
}

const CartMenuItem = ({ id, quantity }: CartMenuItemProps) => {
  const product = products.find((prod) => prod.id.id === id);

  return (
    <>
      <div className={styles.itemContainer}>
        {product === undefined && <></>}
        <h2>{product?.id.name}</h2>
        <h3>{quantity} in cart</h3>
      </div>
    </>
  );
};

export default CartMenuItem;
