import styles from "./ProdCard.module.css";
import { Product } from "../../Data/Product";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link className={styles.link} to={`/products/${product.id.slug}`}>
      <div className={styles.cardContainer}>
        <img
          draggable={false}
          className={styles.prodImage}
          src={product.image}
        />
        <div className={styles.prodCaption}>{product.id.name}</div>
        <div className={styles.prodCaption}>{`£${product.price}`}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
