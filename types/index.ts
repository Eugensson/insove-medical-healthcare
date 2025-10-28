import { StaticImageData } from "next/image";

export type NavItem = {
  name: string;
  href: string;
};

export type Stat = {
  title: string;
  value: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: StaticImageData;
};

export type Testimonial = {
  id: string;
  name: string;
  position: string;
  message: string;
};
