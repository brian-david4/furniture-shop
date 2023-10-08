import { Link } from "react-router-dom";
import MainNavBar from "../Components/MainNavBar/MainNavBar";

const Shop = () => {
  return (
    <>
      <MainNavBar />
      <Link to="/products/shaggyRug">shaggy rug</Link>
    </>
  );
};

export default Shop;
