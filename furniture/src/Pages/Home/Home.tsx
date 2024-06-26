import { useState, useEffect } from "react";
import { Img } from "react-image";
import { motion } from "framer-motion";

import { useMousePosition } from "../../hooks/useMousePosition";
import HomeNavBar from "../../Components/HomeNavBar/HomeNavBar";
import HomeFooter from "../../Components/HomeFooter/HomeFooter";

import styles from "./home.module.css";
import bgWEBP from "/00.webp";
import bgJPG from "/00.jpg";
import bgWEBPbw from "/00BW.webp";

const Home = () => {
  const [isHovered, setHovered] = useState(false);

  const { x, y } = useMousePosition();
  const size = isHovered ? 350 : 75;

  useEffect(() => {
    document.body.style.position = "fixed";
    return () => {
      document.body.style.position = "static";
    };
  });

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
        <HomeFooter />
      </div>
    </>
  );
};

export default Home;
