import { useScroll } from "framer-motion";
import AboutSection from "../../Components/AboutSection/AboutSection";
import styles from "./about.module.css";
import { useRef } from "react";

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
          <div
            style={{
              height: "200px",
              width: "200px",
              backgroundColor: "red",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              style={{ height: "95%", width: "95%", objectFit: "cover" }}
              src="/00.jpg"
            />
          </div>
        </AboutSection>
        <AboutSection scrollProgress={scrollYProgress} colour="#303852" />
      </div>
    </>
  );
};

export default About;
