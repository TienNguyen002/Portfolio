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
  git,
  figma,
  docker,
  starbucks,
  titan,
  carrent,
  jobit,
  tripguide,
  threejs,
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
  { icon: FaLinkedin, path: "" },
  { icon: FaFacebook, path: "" },
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
    title: "React Native Developer",
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

const softSkills = ["Creative", "Efficient", "Scalable", "Friendly"];

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
    company_name: "TiTan Technology",
    icon: titan,
    iconBg: "#fff",
    date: "February 2024 - May 2024",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
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
