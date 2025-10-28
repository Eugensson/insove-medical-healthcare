import icon1 from "@/public/assets/icons/services/icon-1.svg";
import icon2 from "@/public/assets/icons/services/icon-2.svg";
import icon3 from "@/public/assets/icons/services/icon-3.svg";
import icon4 from "@/public/assets/icons/services/icon-4.svg";

import { NavItem, Service, Stat, Testimonial } from "@/types";

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

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Olivia Turner",
    position: "Patient",
    message:
      "An exceptional experience from the very first moment. The clinic blends advanced medical expertise with genuine care, creating a space where every detail feels truly considered.",
  },
  {
    id: "2",
    name: "Ethan Walker",
    position: "Patient",
    message:
      "Impeccable service and professionalism. The team ensured I felt valued and informed throughout. Every stage of my treatment reflected precision and exceptional attention.",
  },
  {
    id: "3",
    name: "Charlotte Evans",
    position: "Patient",
    message:
      "From consultation to recovery, the entire process was seamless. The specialists showed deep expertise and empathy, making me feel fully confident in their capable hands.",
  },
  {
    id: "4",
    name: "George Hughes",
    position: "Patient",
    message:
      "A perfect harmony of innovation and compassion. The clinic’s modern technology and refined approach to care truly redefine what premium healthcare feels like today.",
  },
  {
    id: "5",
    name: "Amelia Green",
    position: "Patient",
    message:
      "Every visit exceeds expectations. The calm environment, equipment, and attentive staff create a sense of comfort and trust rare in modern medical care.",
  },
  {
    id: "6",
    name: "Henry Cooper",
    position: "Patient",
    message:
      "This clinic sets a new benchmark for medical excellence. Every aspect — from the welcoming staff to precise diagnosis — reflects expertise, integrity, and genuine care.",
  },
];
