import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import DeliveryInput from "../DeliveryInput/DeliveryInput";
import DeliveryInputMax from "../DeliveryInputMax/DeliveryInputMax";
// import { DeliveryAddress } from "../../types";
import styles from "./deliveryform.module.css";
import { motion } from "framer-motion";

const postcodeRegex = new RegExp(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i);

const schema = z.object({
  firstName: z.string().min(1, { message: "Field cannot be empty" }),
  lastName: z.string().min(1, { message: "Field cannot be empty" }),
  addressLine: z.string().min(1, { message: "Field cannot be empty" }),
  town: z.string().min(1, { message: "Field cannot be empty" }),
  postcode: z.string().regex(postcodeRegex, { message: "Inavild postcode" }),
  email: z.string().email(),
  phoneNumber: z.string().length(11, { message: "Enter Valid Number" }),
});

type DeliveryAddress = z.infer<typeof schema>;

const DeliveryForm = () => {
  const methods = useForm<DeliveryAddress>({ resolver: zodResolver(schema) });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;
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
              <DeliveryInput id="town" label="Town/City*" />
              <DeliveryInput id="postcode" label="Postcode*" />
            </div>
            <div className={styles.emailPhone}>
              <DeliveryInput id="email" label="Email*" />
              <DeliveryInput id="phoneNumber" label="Phone Number*" />
            </div>
          </div>
        </div>
        <button type="submit">submit</button>

        {errors && (
          <div className={styles.errorMessage}>
            *All inputs must be complete and valid
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default DeliveryForm;
