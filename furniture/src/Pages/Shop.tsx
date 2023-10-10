import { Link } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar/MainNavBar";
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductSoloLayout from "../Components/ProductSoloLayout/ProductSoloLayout";

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

      <ProductSoloLayout>
        <ProductCard />
      </ProductSoloLayout>
    </>
  );
};

export default Shop;
