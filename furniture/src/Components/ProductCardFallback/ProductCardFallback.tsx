import fallbackStyles from "./styles.module.css";
import { motion } from "framer-motion";
import cardStyles from "../ProductCard/ProdCard.module.css";
import { fallbackAnims } from "./anims";
import { Product } from "../../Data/Product";

interface ProductCardFallbackProps {
  product: Product;
}

const ProductCardFallback = ({ product }: ProductCardFallbackProps) => {
  return (
    <motion.div
      variants={fallbackAnims}
      initial="initial"
      exit="exit"
      className={`${cardStyles.cardContainer} ${fallbackStyles.card}`}
    >
      <div className={fallbackStyles.prodTitle}>{product.id.name}</div>
    </motion.div>
  );
};

export default ProductCardFallback;
