import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";

import DeliveryInput from "../DeliveryInput/DeliveryInput";
import DeliveryInputMax from "../DeliveryInputMax/DeliveryInputMax";
import styles from "./deliveryform.module.css";
import { CartContext } from "../../Data/CartContext";

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
  const cart = useContext(CartContext);
  const [isErrorInForm, setIsErrorInForm] = useState(true);

  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const onSubmit: SubmitHandler<DeliveryAddress> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      setError("root", { message: "*All inputs must be complete and valid" });
    }
  };

  const errorCheck = () => {
    if (
      !errors.phoneNumber &&
      !errors.email &&
      !errors.town &&
      !errors.postcode &&
      !errors.addressLine &&
      !errors.lastName &&
      !errors.firstName
    ) {
      setIsErrorInForm(false);
    } else {
      setIsErrorInForm(true);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onChange={() => errorCheck()}
        onSubmit={handleSubmit(onSubmit)}
        className={styles.addressForm}
      >
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
            {errors.postcode && <div>postcode error</div>}
            <div className={styles.emailPhone}>
              <DeliveryInput id="email" label="Email*" />
              <DeliveryInput id="phoneNumber" label="Phone Number*" />
            </div>
          </div>
        </div>
        <button
          disabled={isErrorInForm}
          className={styles.submitButton}
          type="submit"
          onClick={() => cart.setOrderStatus(true)}
        >
          Save details
        </button>
        {isErrorInForm && <div>*All inputs must be complete and valid</div>}

        {cart.orderSubmitStatus && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { duration: 0.4, delay: 1.5 } }}
            className={styles.successMessage}
          >
            saved!
          </motion.div>
        )}
      </form>
    </FormProvider>
  );
};

export default DeliveryForm;
