import styles from "./ProdCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.prodImage}></div>
      <div className={styles.prodCaption}></div>
    </div>
  );
};

export default ProductCard;
