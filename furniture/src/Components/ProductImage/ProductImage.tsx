import styles from "./prodimg.module.css";

interface ProductImageProps {
  src: string | undefined;
}

const ProductImage = ({ src }: ProductImageProps) => {
  return (
    <div className={styles.imgContainer}>
      <img src={src} />
    </div>
  );
};

export default ProductImage;
