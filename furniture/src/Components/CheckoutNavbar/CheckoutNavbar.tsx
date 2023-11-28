import { Link } from "react-router-dom";
import styles from "./checknav.module.css";

const CheckoutNavbar = () => {
  const links = [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Shop",
      to: "/products",
    },
    {
      title: "About",
      to: "/about",
    },
  ];
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.title}>perch& highland</div>
        <div className={styles.navLinks}>
          {links.map((link, idx) => (
            <Link className={styles.navLink} to={link.to} key={idx}>
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CheckoutNavbar;
