import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";

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

export type Social = {
  icon: IconType;
  link: string;
  ariaLabel: string;
};

export type TeamItem = {
  id: string;
  name: string;
  position: string;
  description: string;
  imageSrc: StaticImageData;
  socials: Social[];
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Department = {
  id: string;
  name: string;
  description1: string;
  description2: string;
  list: string[];
  link: string;
};
