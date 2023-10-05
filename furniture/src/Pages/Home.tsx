import { Img } from "react-image";
import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import styles from "./home.module.css";
import bgWEBP from "/00.webp";
import bgJPG from "/00.jpg";
import bgWEBPbw from "/00BW.webp";
import { useState } from "react";
import HomeFurniture from "../Components/HomeFurniture/HomeFurniture";

const Home = () => {
  const [isHovered, setHovered] = useState(false);
  const [furnitureHovered, setFurniture] = useState(false);
  const [rugsHovered, setRugs] = useState(false);
  const [decorHovered, setDecor] = useState(false);

  const activeWrap = (key: number) => {
    if (key === 0) return setFurniture(true);
    if (key === 1) return setRugs(true);
    if (key === 2) return setDecor(true);
  };
  const inactiveWrap = (key: number) => {
    if (key === 0) return setFurniture(false);
    if (key === 1) return setFurniture(false);
    if (key === 2) return setFurniture(false);
  };
  const { x, y } = useMousePosition();
  const size = isHovered ? 350 : 75;

  return (
    <>
      <div className={styles.homeBg}>
        <Img
          className={styles.colorBG}
          draggable={false}
          src={[bgWEBP, bgJPG]}
        />
        <motion.img
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
          className={styles.maskBG}
          src={bgWEBPbw}
          draggable={false}
        />
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={styles.homeTitle}
        >
          <h1>perch &</h1>
          <div id={styles.highland}>highland</div>
        </div>
        <HomeNavBar />
        <HomeFooter
          activeWrap={(key) => activeWrap(key)}
          inactiveWrap={(key) => inactiveWrap(key)}
        />
        {furnitureHovered && <HomeFurniture />}
      </div>
    </>
  );
};

export default Home;
