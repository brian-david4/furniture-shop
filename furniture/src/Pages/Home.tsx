import { useState } from "react";
import { Img } from "react-image";
import { AnimatePresence, motion } from "framer-motion";
import HomeFurniture from "../Components/HomeFurniture/HomeFurniture";
import { useMousePosition } from "../hooks/useMousePosition";
import HomeNavBar from "../Components/HomeNavBar/HomeNavBar";
import HomeFooter from "../Components/HomeFooter/HomeFooter";
import styles from "./home.module.css";
import bgWEBP from "/00.webp";
import bgJPG from "/00.jpg";
import bgWEBPbw from "/00BW.webp";

import footer00 from "/footer-hovers/00.webp";
import footer00JPG from "/footer-hovers/00.jpg";

import footer01 from "/footer-hovers/01.webp";
import footer01JPG from "/footer-hovers/01.jpg";

import footer02 from "/footer-hovers/02.webp";
import footer02JPG from "/footer-hovers/02.jpg";

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
          className={`${styles.colorBG} ${
            furnitureHovered ? styles.brightness : ""
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
              <div className={styles.homeFurnWrapper}>
                <div className={styles.imgWrapper}>
                  <Img src={[footer00, footer00JPG]} />
                </div>
                <div className={styles.imgWrapper}>
                  <Img src={[footer01, footer02JPG]} />
                </div>
                <div className={styles.imgWrapper}>
                  <Img src={[footer02, footer02JPG]} />
                </div>
              </div>
            </HomeFurniture>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Home;
