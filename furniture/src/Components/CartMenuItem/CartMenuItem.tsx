import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./CartmenuItem.module.css";
import { products } from "../../Data/data";
import { CartContext } from "../../Data/CartContext";
import { cartItemAnim } from "./CartAnim";

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
  const price = product === undefined ? 0 : product.price * currentQuantity;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div variants={cartItemAnim} className={styles.itemContainer}>
          {product === undefined && <></>}
          <div className={styles.prodInfo}>
            <div className={styles.cartImageWrapper}>
              <img className={styles.cartImage} src={src} alt="product image" />
            </div>
            <h4 className={styles.cartFont}>{product?.id.name}</h4>
          </div>

          <div className={styles.quantityTotal}>
            <div className={styles.quantityWrapper}>
              <button
                disabled={currentQuantity <= 1 ? true : false}
                onClick={() => cart.removeOneFromCart(id)}
              >
                -
              </button>
              <div className={styles.cartFont}>{quantity} in cart</div>
              <button
                disabled={currentQuantity >= stock ? true : false}
                onClick={() => cart.addToCart(id, 1, stock)}
              >
                +
              </button>
            </div>

            <div className={styles.total}>£{price}</div>
          </div>

          <button
            className={styles.deleteBtn}
            onClick={() => cart.deleteFromCart(id)}
          >
            delete
          </button>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CartMenuItem;
