import { useState } from "react";
import { Img } from "react-image";
import { AnimatePresence, motion } from "framer-motion";
import HomeFurniture from "../Components/HomeFurniture/HomeFurniture";
import { useMousePosition } from "../hooks/useMousePosition";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import HomeFurnContent from "../Components/HomeFurnContent/HomeFurnContent";
import styles from "./home.module.css";
import bgWEBP from "/00.webp";
import bgJPG from "/00.jpg";
import bgWEBPbw from "/00BW.webp";

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
    if (key === 1) return setRugs(false);
    if (key === 2) return setDecor(false);
  };
  const { x, y } = useMousePosition();
  const size = isHovered ? 350 : 75;

  return (
    <>
      <div className={styles.homeBg}>
        <Img
          className={`${styles.colorBG} ${
            furnitureHovered || rugsHovered || decorHovered
              ? styles.brightness
              : ""
          }`}
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

        <AnimatePresence mode="wait">
          {furnitureHovered && (
            <HomeFurniture>
              <HomeFurnContent />
            </HomeFurniture>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
