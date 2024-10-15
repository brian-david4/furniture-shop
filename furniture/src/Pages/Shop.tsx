import MainNavBar from "../Components/MainNavBar/MainNavBar";
import { lazy, Suspense, useEffect, useState } from "react";

import ProductLayout from "../Components/ProductLayout/ProductLayout";
import { products } from "../Data/data";
import ProductCardFallback from "../Components/ProductCardFallback/ProductCardFallback";
import ShopLoading from "../Components/ShopLoading/ShopLoading";
import { AnimatePresence } from "framer-motion";

const ProductCard = lazy(() => import("../Components/ProductCard/ProductCard"));

const Shop = () => {
  const [pageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsPageLoading(false), 2000);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {pageLoading && <ShopLoading />}
      </AnimatePresence>
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
