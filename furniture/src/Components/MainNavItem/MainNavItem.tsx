import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

interface MainNavItemProps {
  title: string;
  to: string;
}

const MainNavItem = ({ title, to }: MainNavItemProps) => {
  const titleSplit = title.split("");
  return (
    <div className={styles.navItemWrapper}>
      <Link className={styles.navItem} to={to}>
        {titleSplit.map((char, index) => (
          <span className={styles.ltrWrap} key={index} data-ltr={char}>
            {char}
          </span>
        ))}
      </Link>
    </div>
  );
};

export default MainNavItem;
