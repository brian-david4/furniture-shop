import styles from "./ProdCard.module.css";
import { Product } from "../../Data/Product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.prodImage} src={product.images[1]} />
      <div className={styles.prodCaption}>{product.id.name}</div>
    </div>
  );
};

export default ProductCard;
