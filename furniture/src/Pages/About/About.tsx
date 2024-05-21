import { motion, useScroll, useTransform } from "framer-motion";
import AboutSection from "../../Components/AboutSection/AboutSection";
import styles from "./about.module.css";
import { useEffect, useRef, useState } from "react";
import AboutTitle from "../../Components/AboutTitle/AboutTitle";

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoaded(true), 2300);
  }, []);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [introPlaying, setIntroPlay] = useState(true);

  const titleAnimLength: number = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroPlay(false);
    }, titleAnimLength * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div ref={ref} className={styles.pageWrapper}>
        <AboutSection
          top
          scrollProgress={scrollYProgress}
          colour="var(--checkout-navbar-colour)"
        >
          <AboutTitle />

          <div
            className={`${styles.desc1} ${!introPlaying ? styles.visible : ""}`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi atque
            velit veniam esse tenetur aperiam sequi libero molestiae optio
            delectus.
          </div>

          <div
            className={`${styles.desc2} ${!introPlaying ? styles.visible : ""}`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur voluptate beatae minus magnam ducimus cum eius itaque
            sit consectetur deserunt.
          </div>

          <motion.div
            style={{ top: imageY, scale: imageScale }}
            className={`${styles.aboutImage} ${loaded ? styles.visible : ""}`}
          >
            <img src="/00BW.jpg" />
          </motion.div>
        </AboutSection>
        <AboutSection scrollProgress={scrollYProgress} colour="#303852" />
      </div>
    </>
  );
};

export default About;
