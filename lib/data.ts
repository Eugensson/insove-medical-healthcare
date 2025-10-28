import icon1 from "@/public/assets/icons/services/icon-1.svg";
import icon2 from "@/public/assets/icons/services/icon-2.svg";
import icon3 from "@/public/assets/icons/services/icon-3.svg";
import icon4 from "@/public/assets/icons/services/icon-4.svg";

import { NavItem, Service, Stat } from "@/types";

export const navLinks: NavItem[] = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Doctors",
    href: "#",
  },
  {
    name: "Departments",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export const statsData: Stat[] = [
  {
    title: "Satisfied Patients",
    value: "+5,525",
  },
  {
    title: "Medical Centers Nationwide",
    value: "29",
  },
  {
    title: "Experienced Doctors",
    value: "+73",
  },
  {
    title: "Years of Trusted Care",
    value: "15+",
  },
];

export const servicesData: Service[] = [
  {
    id: "1",
    title: "General Medicine & Family Care",
    description:
      "Comprehensive primary care for families and individuals focused on long-term wellness.",
    icon: icon1,
  },
  {
    id: "2",
    title: "Maternity & Pregnancy Care",
    description:
      "Dedicated support and medical guidance through every stage of pregnancy and motherhood.",
    icon: icon2,
  },
  {
    id: "3",
    title: "Nutrition & Wellness Support",
    description:
      "Personalized diet plans and lifestyle advice to improve energy, health, and overall balance.",
    icon: icon3,
  },
  {
    id: "4",
    title: "Pharmacy & Medication Services",
    description:
      "Safe, reliable prescriptions and consultations to ensure effective and proper treatment.",
    icon: icon4,
  },
];
