import { Link } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar/MainNavBar";
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductLayout from "../Components/ProductLayout/ProductLayout";

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductLayout>
    </>
  );
};

export default Shop;
