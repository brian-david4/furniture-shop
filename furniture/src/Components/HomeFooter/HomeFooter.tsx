import styles from "./footer.module.css";

const HomeFooter = () => {
  const footerItems = ["furniture", "rugs", "decorrr"];
  return (
    <>
      <div className={styles.footer}>
        {footerItems.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </>
  );
};

export default HomeFooter;
