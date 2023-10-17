import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductMenu from "../ProductMenu/ProductMenu";
import { products } from "../../Data/data";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { productName } = useParams();
  const product = products.find((prod) => prod.id.slug === productName);
  const pr = JSON.stringify(product);

  useEffect(() => {
    window.document.body.style.overflow = "hidden";
    window.document.body.style.position = "fixed";
    return () => {
      window.document.body.style.overflow = "visible";
      window.document.body.style.position = "static";
    };
  }, []);

  return (
    <>
      <ProductMenu />
      <div className={styles.productPage}>
        <section className={styles.imgContainer}>
          <img src={product?.image} />
        </section>

        <section className={styles.prodDetails}>
          <div className={styles.namePrice}>
            <div>{product?.id.name}</div>
            <div>{`£${product?.price}`}</div>
          </div>

          <div className={styles.description}>
            <div className={styles.desc}>{product?.description}</div>
          </div>

          <div className={styles.measurements}>
            <div>
              <span className={styles.title}>width:</span>{" "}
              {product?.measurement.width}
            </div>

            <span className={styles.measure}>X</span>

            <div>
              <span className={styles.title}>height:</span>{" "}
              {product?.measurement.height}
            </div>
            <div>(cm)</div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;

// useNavigate to redirect to 404 page if productName not in product.id.slug
