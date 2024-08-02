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
