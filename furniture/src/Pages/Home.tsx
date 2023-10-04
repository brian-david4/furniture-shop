import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import { Img } from "react-image";
import styles from "./home.module.css";
import bgWEBP from "/00.webp";
import bgJPG from "/00.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.homeBg}>
        <Img src={[bgWEBP, bgJPG]} />
        <HomeNavBar />
      </div>
    </>
  );
};

export default Home;
