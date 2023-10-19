import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./navItem.module.css";
import { mainNavItemAnim } from "./anim";

interface MainNavItemProps {
  title: string;
  to: string;
}

const MainNavItem = ({ title, to }: MainNavItemProps) => {
  const titleSplit = title.split("");
  return (
    <motion.div variants={mainNavItemAnim} className={styles.navItemWrapper}>
      <Link className={styles.navItem} to={to}>
        {titleSplit.map((char, index) => (
          <span className={styles.ltrWrap} key={index} data-ltr={char}>
            {char}
          </span>
        ))}
      </Link>
    </motion.div>
  );
};

export default MainNavItem;
