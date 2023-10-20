import { Product } from "../../Data/Product";
import styles from "./ProdDetail.module.css";

interface ProdDetailsProps {
  product: Product | undefined;
}

const ProdDetails = ({ product }: ProdDetailsProps) => {
  return (
    <div className={styles.prodDetails}>
      <div className={`${styles.namePrice} ${styles.title}`}>
        <div>{product?.id.name}</div>
        <div>{`£${product?.price}`}</div>
      </div>

      <div className={styles.description}>
        <div className={styles.desc}>{product?.description}</div>
      </div>

      <div className={styles.measurements}>
        <div>
          <span className={styles.title}>width:</span>{" "}
          {`${product?.measurement.width} cm`}
        </div>

        <span className={styles.measure}>X</span>

        <div>
          <span className={styles.title}>height:</span>{" "}
          {`${product?.measurement.height} cm`}
        </div>
      </div>
    </div>
  );
};

export default ProdDetails;
