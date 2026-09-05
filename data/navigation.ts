import type { NavLink } from "@/types/navigation";

export const links: NavLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Work",
    path: "/work",
  },
  {
    name: "Services",
    path: "/services",
  },
];

export const mobileLinks: NavLink[] = [
  ...links,
  {
    name: "Contact",
    path: "/contact",
  },
];
