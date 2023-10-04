import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import { Img } from "react-image";
import styles from "./home.module.css";
import bgWEBP from "/00.webp";
import bgJPG from "/00.jpg";

const Home = () => {
  return (
    <>
      <div className={styles.homeBg}>
        <Img
          style={{ userSelect: "none", zIndex: -1 }}
          draggable={false}
          src={[bgWEBP, bgJPG]}
        />
        <div className={styles.homeTitle}>
          <h1>perch &</h1>
          <div id={styles.highland}>highland</div>
        </div>
        <HomeNavBar />
      </div>
    </>
  );
};

export default Home;
