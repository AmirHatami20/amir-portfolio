import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

import type { ContactInfo, ServiceOption } from "@/types/contact";

export const contactInfo: ContactInfo[] = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    description: "Available upon request",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "Available via email",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    description: "Tehran, Iran",
  },
];

export const serviceOptions: ServiceOption[] = [
  {
    label: "Frontend Development",
    value: "frontend",
  },
  {
    label: "Backend Development",
    value: "backend",
  },
  {
    label: "Full-Stack Development",
    value: "fullStack",
  },
  {
    label: "Team Collaboration",
    value: "teamwork",
  },
];
