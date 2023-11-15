import { useContext } from "react";
import styles from "./CartmenuItem.module.css";
import { products } from "../../Data/data";
import { CartContext } from "../../Data/CartContext";

interface CartMenuItemProps {
  id: number;
  quantity: number;
}

const CartMenuItem = ({ id, quantity }: CartMenuItemProps) => {
  const product = products.find((prod) => prod.id.id === id);
  const cart = useContext(CartContext);

  return (
    <>
      <div className={styles.itemContainer}>
        {product === undefined && <></>}
        <h2 className={styles.cartFont}>{product?.id.name}</h2>
        <h3 className={styles.cartFont}>{quantity} in cart</h3>
        <button
          className={styles.deleteBtn}
          onClick={() => cart.deleteFromCart(id)}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default CartMenuItem;
