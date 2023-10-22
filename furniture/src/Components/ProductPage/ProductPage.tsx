import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductMenu from "../ProductMenu/ProductMenu";
import { products } from "../../Data/data";
import styles from "./ProductPage.module.css";
import MainNavBar from "../MainNavBar/MainNavBar";
import ProdDetails from "../ProdDetails/ProdDetails";
import ProductImage from "../ProductImage/ProductImage";
import QuantityAddCart from "../QuantityAddCart/QuantityAddCart";

const ProductPage = () => {
  const { productName } = useParams();
  const [isDesktop, setDesktop] = useState(true);
  const [menuClicked, setMenuClicked] = useState(false);

  const product = products.find((prod) => prod.id.slug === productName);

  useEffect(() => {
    window.document.body.style.overflow = "hidden";
    window.document.body.style.position = "fixed";
    return () => {
      window.document.body.style.overflow = "visible";
      window.document.body.style.position = "static";
    };
  }, []);

  useEffect(() => {
    window.innerWidth >= 768 ? setDesktop(true) : setDesktop(false);
    window.addEventListener("resize", () => {
      window.innerWidth >= 768 ? setDesktop(true) : setDesktop(false);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setDesktop(false);
      });
    };
  }, []);

  return (
    <>
      {isDesktop && <MainNavBar />}
      <ProductMenu
        clicked={menuClicked}
        setClicked={() => setMenuClicked(!menuClicked)}
      />

      <div
        className={`${styles.productPage} ${menuClicked ? styles.bright : ""}`}
        onClick={() => setMenuClicked(false)}
      >
        <ProductImage src={product?.image} />
        {/* <div className={styles.divTwo}></div> */}

        <div className={styles.prodDetailsLayout}>
          <ProdDetails product={product} />
          <QuantityAddCart />
        </div>
      </div>
    </>
  );
};

export default ProductPage;

// useNavigate to redirect to 404 page if productName not in product.id.slug
