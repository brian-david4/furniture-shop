import { motion, useInView, useScroll, useTransform } from "framer-motion";
import AboutSection from "../../Components/AboutSection/AboutSection";
import styles from "./about.module.css";
import { useEffect, useRef, useState } from "react";
import AboutTitle from "../../Components/AboutTitle/AboutTitle";
import AboutNavbar from "../../Components/AboutNavbar/AboutNavbar";

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

  // motion styles
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const desc = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const desc2 = useTransform(scrollYProgress, [0, 1], [1, 0.75]);
  const fontSize = useTransform(scrollYProgress, [0, 1], [2.5, 3]);

  const [introPlaying, setIntroPlay] = useState(true);
  const titleAnimLength: number = 4;

  // image2 anims
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true, amount: 0.7 });

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
          <AboutTitle scrollProgress={scrollYProgress} />

          <motion.div
            style={{ scale: desc }}
            className={`${styles.desc1} ${!introPlaying ? styles.visible : ""}`}
          >
            We sarted in <b>1894</b>, a small family business making bespoke
            furniture for a small catalonian village. News about us got around
            fast, spreading from town to city, we never forgot our roots nor the
            spirit of our work.
          </motion.div>

          <motion.div
            style={{ scale: desc2, fontSize: `${fontSize}vw` }}
            className={`${styles.desc2} ${!introPlaying ? styles.visible : ""}`}
          >
            Fast forward to now we are still creating quality furniture. Still
            handmade. Still elegant. Still modern.
          </motion.div>

          {/* images */}
          <motion.div
            style={{ top: imageY, scale: imageScale }}
            className={`${styles.aboutImage} ${styles.image1} ${
              loaded ? styles.visible : ""
            }`}
          >
            <img src="/about-images/about-image2.jpg" />
          </motion.div>

          <motion.div
            className={`${styles.aboutImage} ${styles.image2} ${
              loaded ? styles.visible : ""
            }`}
          >
            <img src="/about-images/about-image1.jpg" />
          </motion.div>
        </AboutSection>

        <AboutSection scrollProgress={scrollYProgress} colour="#ffffe6">
          <div ref={imgRef} className={styles.bg}>
            <AboutNavbar />
            <h1 className={styles.contactTitle}>
              We continue to strive for the highest quality. To keep up with
              that we need your help.
            </h1>
            <h3 className={styles.contactEmail}>
              <a href="mailto:perch@highland.com">perch@highland.com</a>
            </h3>
            <div
              className={`${styles.imageWrapper2} ${
                isInView ? styles.clipMax : ""
              }`}
            >
              <img src="00.jpg" className={styles.imgAbout2} />
              <motion.img
                animate={{
                  top: isInView ? "100%" : 0,
                  rotate: isInView ? 150 : 0,
                }}
                src="00.jpg"
                className={styles.imgAbout1}
                transition={{
                  duration: 2.5,
                  ease: [0.76, 0, 0.24, 1],
                }}
              />
            </div>
          </div>
        </AboutSection>
      </div>
    </>
  );
};

export default About;
