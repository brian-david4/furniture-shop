import { Link } from "react-router-dom";
import styles from "./navItem.module.css";

interface MainNavItemProps {
  children: React.ReactNode;
  to: string;
}

const MainNavItem = ({ children, to }: MainNavItemProps) => {
  return (
    <div className={styles.navItemWrapper}>
      <Link className={styles.navItem} to={to}>
        {children}
      </Link>
    </div>
  );
};

export default MainNavItem;
