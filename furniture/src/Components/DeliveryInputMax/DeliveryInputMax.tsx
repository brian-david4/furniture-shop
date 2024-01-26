import { useState } from "react";
import styles from "./delMaxInput.module.css";
import { DeliveryInputProps } from "../DeliveryInput/DeliveryInput";

const DeliveryInputMax = ({ label, id }: DeliveryInputProps) => {
  const [isTypedIn, setIsTypedIn] = useState(false);
  return (
    <div className={styles.inputLabelWrapper}>
      <input
        autoComplete="off"
        onKeyDown={() => setIsTypedIn(true)}
        className={styles.inputText}
        type="text"
        id={id}
      />
      <label data-input-valid={isTypedIn} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default DeliveryInputMax;
