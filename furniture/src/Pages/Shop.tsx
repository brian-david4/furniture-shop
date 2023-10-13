import { Link } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar/MainNavBar";
import ProductCard from "../Components/ProductCard/ProductCard";
import ProductLayout from "../Components/ProductLayout/ProductLayout";
import { products } from "../Data/data";

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
          <ProductCard product={product} key={index} />
        ))}
      </ProductLayout>
    </>
  );
};

export default Shop;
