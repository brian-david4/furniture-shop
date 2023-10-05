import styles from "./footer.module.css";

interface HomeFooterProps {
  activeWrap: (key: number) => void;
  inactiveWrap: (key: number) => void;
}

const HomeFooter = ({ activeWrap, inactiveWrap }: HomeFooterProps) => {
  const footerItems = ["furniture", "rugs", "decorrr"];
  return (
    <>
      <div className={styles.footer}>
        {footerItems.map((item, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => activeWrap(index)}
              onMouseLeave={() => inactiveWrap(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeFooter;
