import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Furniture Store</h1>
      <Link to="/products">Shop</Link>
    </>
  );
};

export default Home;
