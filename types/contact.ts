import { IconType } from "react-icons";

export interface ContactInfo {
  icon: IconType;
  title: string;
  description: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedService: string;
  description: string;
}

export interface ServiceOption {
  label: string;
  value: string;
}
