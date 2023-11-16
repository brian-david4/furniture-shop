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
  const stock = product === undefined ? 0 : product.stock;
  const currentQuantity = cart.getProductQuantity(id);
  const src = product === undefined ? "" : product.image;

  return (
    <>
      <div className={styles.itemContainer}>
        {product === undefined && <></>}

        <div className={styles.prodInfo}>
          <div className={styles.cartImageWrapper}>
            <img className={styles.cartImage} src={src} alt="product image" />
          </div>
          <h2 className={styles.cartFont}>{product?.id.name}</h2>
        </div>

        <div className={styles.quantityWrapper}>
          <button
            disabled={currentQuantity <= 1 ? true : false}
            onClick={() => cart.removeOneFromCart(id)}
          >
            -
          </button>
          <h3 className={styles.cartFont}>{quantity} in cart</h3>
          <button
            disabled={currentQuantity >= stock ? true : false}
            onClick={() => cart.addToCart(id, 1, stock)}
          >
            +
          </button>
        </div>

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
