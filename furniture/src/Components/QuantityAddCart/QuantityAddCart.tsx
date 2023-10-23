import { useState } from "react";
import styles from "./quAddCart.module.css";

interface QuantityAddCartProps {
  addToCart: (quantity: number) => void;
  stock: number | undefined;
}

const QuantityAddCart = ({ addToCart, stock }: QuantityAddCartProps) => {
  const [quantity, setQuantity] = useState(1);
  const stockQuantity: number = typeof stock === "number" ? stock : 0;

  return (
    <div className={styles.cartAddContainer}>
      <div className={styles.quantityWrapper}>
        <div className={styles.quantityTitle}>quantity</div>
        <button
          className={styles.incrementBtn}
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1 ? true : false}
        >
          -
        </button>
        <div className={styles.quantity}>{quantity}</div>
        <button
          disabled={quantity >= stockQuantity ? true : false}
          className={styles.incrementBtn}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={() => addToCart(quantity)} className={styles.addCart}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default QuantityAddCart;
