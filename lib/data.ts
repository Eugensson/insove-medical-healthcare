import {
  RiYoutubeFill,
  RiFacebookCircleFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

import icon1 from "@/public/assets/icons/services/icon-1.svg";
import icon2 from "@/public/assets/icons/services/icon-2.svg";
import icon3 from "@/public/assets/icons/services/icon-3.svg";
import icon4 from "@/public/assets/icons/services/icon-4.svg";
import doctor1 from "@/public/assets/img/team/doctor-1.png";
import doctor2 from "@/public/assets/img/team/doctor-2.png";
import doctor3 from "@/public/assets/img/team/doctor-3.jpg";
import doctor4 from "@/public/assets/img/team/doctor-4.jpg";
import doctor5 from "@/public/assets/img/team/doctor-5.jpg";
import doctor6 from "@/public/assets/img/team/doctor-6.jpg";
import doctor7 from "@/public/assets/img/team/doctor-7.jpg";
import doctor8 from "@/public/assets/img/team/doctor-8.jpg";

import {
  FaqItem,
  NavItem,
  Service,
  Stat,
  TeamItem,
  Testimonial,
} from "@/types";

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

export const teamData: TeamItem[] = [
  {
    id: "1",
    name: "Dr. Emma Clark",
    position: "Pediatrician",
    description:
      "Dedicated to providing gentle, expert care focused on every patient’s comfort and well-being.",
    imageSrc: doctor1,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. Emma Clark's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. Emma Clark's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. Emma Clark's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. Emma Clark's Instagram account",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. Liam Harris",
    position: "General Practitioner",
    description:
      "Committed to delivering trusted healthcare with empathy, precision, and a strong patient connection.",
    imageSrc: doctor2,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. Liam Harris's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. Liam Harris's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. Liam Harris's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. Liam Harris's Instagram account",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Ethan Walker",
    position: "Neurologist",
    description:
      "Focused on innovative treatments and compassionate support for each individual’s unique needs.",
    imageSrc: doctor3,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. Ethan Walker's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. Ethan Walker's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. Ethan Walker's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. Ethan Walker's Instagram account",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. William Turner",
    position: "Radiologist",
    description:
      "Skilled in diagnostic imaging, ensuring clarity, accuracy, and personalized attention in every case.",
    imageSrc: doctor4,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. William Turner's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. William Turner's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. William Turner's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. William Turner's Instagram account",
      },
    ],
  },
  {
    id: "5",
    name: "Dr. Isabella Scott",
    position: "Gynecologist",
    description:
      "Provides women’s health care with professionalism, compassion, and a focus on lasting wellness.",
    imageSrc: doctor5,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. Isabella Scott's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. Isabella Scott's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. Isabella Scott's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. Isabella Scott's Instagram account",
      },
    ],
  },
  {
    id: "7",
    name: "Dr. Mason Adams",
    position: "Dentist",
    description:
      "Brings expertise and a caring touch to dental health, helping every patient smile with confidence.",
    imageSrc: doctor7,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. Mason Adams's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. Mason Adams's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. Mason Adams's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. Mason Adams's Instagram account",
      },
    ],
  },
  {
    id: "6",
    name: "Dr. Mia Nelson",
    position: "Nutrition Specialist",
    description:
      "Promotes balanced nutrition and healthy habits to support long-term vitality and overall wellness.",
    imageSrc: doctor6,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. Mia Nelson's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. Mia Nelson's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. Mia Nelson's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. Mia Nelson's Instagram account",
      },
    ],
  },
  {
    id: "8",
    name: "Dr. John Martinez",
    position: "Dermatologist",
    description:
      "Specializes in skin health, offering advanced treatments with care, precision, and lasting results.",
    imageSrc: doctor8,
    socials: [
      {
        icon: RiLinkedinBoxFill,
        link: "https://linkedin.com",
        ariaLabel: "Link to Dr. John Martinez's Linkedin account",
      },
      {
        icon: RiFacebookCircleFill,
        link: "https://facebook.com",
        ariaLabel: "Link to Dr. John Martinez's Facebook account",
      },
      {
        icon: RiYoutubeFill,
        link: "https://youtube.com",
        ariaLabel: "Link to Dr. John Martinez's Youtube channel",
      },
      {
        icon: RiInstagramFill,
        link: "https://instagram.com",
        ariaLabel: "Link to Dr. John Martinez's Instagram account",
      },
    ],
  },
];

export const faqsData: FaqItem[] = [
  {
    id: "1",
    question: "Why choose Insove Medical Healthcare?",
    answer:
      "Insove Medical Healthcare offers personalized treatment, advanced diagnostic technology, and a compassionate team of professionals dedicated to your long-term well-being. We combine expertise with comfort to provide truly patient-centered care.",
  },
  {
    id: "2",
    question: "How can I book an appointment with a doctor?",
    answer:
      "You can schedule an appointment easily through our website, by phone, or by visiting our reception desk. Same-day and urgent appointments are also available depending on the doctor’s schedule.",
  },
  {
    id: "3",
    question: "Does Insove Medical Healthcare accept insurance?",
    answer:
      "Yes, we work with most major insurance providers. Our administrative team will assist you in confirming coverage and handling the necessary paperwork to ensure a smooth experience.",
  },
  {
    id: "4",
    question: "What types of medical services do you offer?",
    answer:
      "We provide a wide range of services including general practice, diagnostics, cardiology, gynecology, dermatology, pediatrics, physiotherapy, and preventive health check-ups.",
  },
  {
    id: "5",
    question: "Are your doctors certified specialists?",
    answer:
      "All our doctors are board-certified experts with years of experience in their respective fields. Continuous education and international training ensure they provide the highest medical standards.",
  },
];
