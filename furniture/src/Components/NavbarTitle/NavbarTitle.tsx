import styles from "./navTitle.module.css";

const NavbarTitle = () => {
  return (
    <>
      <div className={styles.navTitle}>
        <h1>perch &</h1>
        <div id={styles.highland}>highland</div>
      </div>
    </>
  );
};

export default NavbarTitle;
