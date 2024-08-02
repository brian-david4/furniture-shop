import { Link } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar/MainNavBar";
import { lazy, Suspense } from "react";

import ProductLayout from "../Components/ProductLayout/ProductLayout";
import { products } from "../Data/data";
import ProductCardFallback from "../Components/ProductCardFallback/ProductCardFallback";

const ProductCard = lazy(() => import("../Components/ProductCard/ProductCard"));

const Shop = () => {
  return (
    <>
      <MainNavBar />
      <Link
        style={{ position: "absolute", top: "10vh" }}
        to="/products/shaggyRug"
      >
        shaggy rug
      </Link>

      <ProductLayout>
        {products.map((product, index) => (
          <Suspense
            key={`prodC_${index}`}
            fallback={<ProductCardFallback product={product} />}
          >
            <ProductCard product={product} />
          </Suspense>
        ))}
      </ProductLayout>
    </>
  );
};

export default Shop;
