import { Link } from "react-router-dom";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";

const Home = () => {
  return (
    <>
      <HomeNavBar />
      <Link to="/products">Shop</Link>
    </>
  );
};

export default Home;
