import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import DeliveryInput from "../DeliveryInput/DeliveryInput";
import DeliveryInputMax from "../DeliveryInputMax/DeliveryInputMax";
import styles from "./deliveryform.module.css";
import { DeliveryAddress } from "../../types";

const DeliveryForm = () => {
  const methods = useForm<DeliveryAddress>();
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<DeliveryAddress> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.addressForm}>
        <div className={styles.inputs}>
          <div className={styles.nameField}>
            <DeliveryInput id="firstName" label="First Name*" />
            <DeliveryInput id="lastName" label="Last Name*" />
          </div>
          <div className={styles.deliveryAddress}>
            <div className={styles.addressLine1}>
              <DeliveryInputMax id="addressLine" label="Address Line 1*" />
            </div>
            <div className={styles.townPostcode}>
              <DeliveryInput id="town" label="Town/City*" />{" "}
              <DeliveryInput id="postcode" label="Postcode*" />
            </div>
            <div className={styles.emailPhone}>
              <DeliveryInput id="email" label="Email*" />{" "}
              <DeliveryInput id="phoneNumber" label="Phone Number*" />
            </div>
          </div>
        </div>
        <button type="submit">submit</button>
      </form>
    </FormProvider>
  );
};

export default DeliveryForm;
