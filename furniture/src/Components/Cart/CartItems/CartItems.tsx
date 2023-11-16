import { motion } from "framer-motion";
import styles from "./cartitems.module.css";
import { CartItemsAnims } from "./CartItemsAnim";

interface CartItemsProps {
  children: React.ReactNode;
}

const CartItems = ({ children }: CartItemsProps) => {
  return (
    <motion.div
      variants={CartItemsAnims}
      initial="initial"
      animate="enter"
      className={styles.cartItems}
    >
      {children}
    </motion.div>
  );
};

export default CartItems;
