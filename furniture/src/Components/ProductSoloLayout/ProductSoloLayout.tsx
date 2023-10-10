import styles from "./ProdSoloLayout.module.css";

interface ProductSoloLayoutProps {
  children: React.ReactNode;
}

const ProductSoloLayout = ({ children }: ProductSoloLayoutProps) => {
  return <div className={styles.productLayout}>{children}</div>;
};

export default ProductSoloLayout;
