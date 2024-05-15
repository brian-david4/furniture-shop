import { MotionValue, motion, useTransform } from "framer-motion";
import styles from "./aboutSec.module.css";

interface AboutSectionProps {
  children?: React.ReactNode;
  colour: string;
  top?: boolean;
  scrollProgress: MotionValue<number>;
}

const AboutSection = ({
  children,
  colour,
  top,
  scrollProgress,
}: AboutSectionProps) => {
  const scaleParam = top ? [1, 0.9] : [0.9, 1];
  const scale = useTransform(scrollProgress, [0, 1], scaleParam);
  return (
    <motion.div
      style={{ backgroundColor: colour, scale }}
      className={`${styles.aboutSection} ${top ? styles.top : ""}`}
    >
      {children}
    </motion.div>
  );
};

export default AboutSection;
