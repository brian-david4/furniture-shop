import { useState } from "react";
import styles from "./delivInput.module.css";
import { useFormContext } from "react-hook-form";

export interface DeliveryInputProps {
  label: string;
  id: string;
}

const DeliveryInput = ({ label, id }: DeliveryInputProps) => {
  const [isTypedIn, setIsTypedIn] = useState(false);
  const { register } = useFormContext();

  return (
    <>
      <div className={styles.inputLabelWrapper}>
        <input
          {...register(id)}
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
    </>
  );
};

export default DeliveryInput;
