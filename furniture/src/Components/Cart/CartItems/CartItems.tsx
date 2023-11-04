import styles from "./cartitems.module.css";

interface CartItemsProps {
  children: React.ReactNode;
}

const CartItems = ({ children }: CartItemsProps) => {
  return <div className={styles.cartItems}>{children}</div>;
};

export default CartItems;
