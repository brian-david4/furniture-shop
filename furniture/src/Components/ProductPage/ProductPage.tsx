import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { products } from "../../Data/data";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { productName } = useParams();
  const product = products.find((prod) => prod.id.slug === productName);
  const pr = JSON.stringify(product);

  useEffect(() => {
    window.document.body.style.overflow = "hidden";
    return () => {
      window.document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <>
      <div className={styles.productPage}>{pr}</div>
    </>
  );
};

export default ProductPage;

// useNavigate to redirect to 404 page if productName not in product.id.slug
