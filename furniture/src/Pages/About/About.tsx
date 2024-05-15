import { useScroll } from "framer-motion";
import AboutSection from "../../Components/AboutSection/AboutSection";
import styles from "./about.module.css";
import { useRef } from "react";
import AboutTitle from "../../Components/AboutTitle/AboutTitle";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <div ref={ref} className={styles.pageWrapper}>
        <AboutSection top scrollProgress={scrollYProgress} colour="#edcdaf">
          <AboutTitle />
        </AboutSection>
        <AboutSection scrollProgress={scrollYProgress} colour="#303852" />
      </div>
    </>
  );
};

export default About;
