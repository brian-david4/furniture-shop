import { Link } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar/MainNavBar";

const Shop = () => {
  return (
    <>
      <MainNavBar />
      <Link
        style={{ position: "relative", top: "10 vh" }}
        to="/products/shaggyRug"
      >
        shaggy rug
      </Link>
    </>
  );
};

export default Shop;
