import { Img } from "react-image";
import styles from "./HomeFurn.module.css";

import footer00 from "/footer-hovers/00.webp";
import footer00JPG from "/footer-hovers/00.jpg";

import footer01 from "/footer-hovers/01.webp";
import footer01JPG from "/footer-hovers/01.jpg";

import footer02 from "/footer-hovers/02.webp";
import footer02JPG from "/footer-hovers/02.jpg";

const HomeFurnContent = () => {
  return (
    <div className={styles.homeFurnWrapper}>
      <div className={styles.imgWrapper}>
        <Img src={[footer00, footer00JPG]} />
      </div>
      <div className={styles.imgWrapper}>
        <Img src={[footer01, footer01JPG]} />
      </div>
      <div className={styles.imgWrapper}>
        <Img src={[footer02, footer02JPG]} />
      </div>
    </div>
  );
};

export default HomeFurnContent;
