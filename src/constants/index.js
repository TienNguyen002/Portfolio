import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  scss,
  git,
  figma,
  titan,
  scientificresearch,
  ecommerce,
} from "../assets";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "experiences",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socials = [
  { icon: FaGithub, path: "https://github.com/TienNguyen002" },
  { icon: FaLinkedin, path: "https://linkedin.com/in/tiennguyen002" },
  { icon: FaFacebook, path: "https://facebook.com/Junn.Nguy3n" },
];

const info = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    description: "(+84) 819 104 319",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    description: "tiennguyenn002@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    description: "Da Lat, Lam Dong Province",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const categories = ["all", "frontend", "backend", "tools"];

const softSkills = [
  "Strong collaboration & communication",
  "Self-driven & quick learner",
  "Attention to detail in UI/UX",
  "Able to document and explain complex logic clearly",
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    category: "frontend",
  },
  {
    name: "CSS 3",
    icon: css,
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "frontend",
  },
  {
    name: "TypeScript",
    icon: typescript,
    category: "frontend",
  },
  {
    name: "React JS",
    icon: reactjs,
    category: "frontend",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    category: "frontend",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    category: "frontend",
  },
  {
    name: "SASS",
    icon: scss,
    category: "frontend",
  },
  {
    name: "Node JS",
    icon: nodejs,
    category: "backend",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    category: "backend",
  },
  {
    name: "Git/Github",
    icon: git,
    category: "tools",
  },
  {
    name: "Figma",
    icon: figma,
    category: "tools",
  },
];

const experiences = [
  {
    title: "Back-end Developer",
    company_name: "Titan Technology Corporation",
    icon: titan,
    iconBg: "#fff",
    date: "February 2024 - July 2024",
    points: [
      "Developing and maintaining web applications using .NET Core and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Scientific Research Management System",
    description:
      "The Scientific Research Management System is a full-stack web application for multiple user roles — including students, lecturers, and department administrators — to manage and track research topics, assignments, approvals, and reports in one centralized platform.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: scientificresearch,
    source_code_link:
      "https://github.com/TienNguyen002/Scientific_Research_Management_System",
  },
  {
    name: "E-Commerce Web App",
    description:
      "The E-Commerce Web App is a full-stack web application designed to simulate a real-world online shopping experience. It supports features such as product browsing, cart management, order placement, user authentication, and admin product control",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Core",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/TienNguyen002/E-Commerce_Web_App",
  },
];

export {
  socials,
  services,
  categories,
  technologies,
  experiences,
  projects,
  info,
  softSkills,
};
