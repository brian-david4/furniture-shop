import { ReactNode } from "react";

export type AccordionData = {
  title: String;
  content: ReactNode;
};
export type DeliveryAddress = {
  firstName: string;
  lastName: string;
  addressLine: string;
  town: string;
  postcode: string;
  email: string;
  phoneNumber: string;
};
