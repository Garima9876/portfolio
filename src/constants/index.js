import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  npm,
  html,
  css,
  reactjs,
  bootstrap,
  tailwind,
  nodejs,
  mongodb,
  git,
  vuetify,
  vuejs,
  aptcoder,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fontend Developer",
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
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "npm",
    icon: npm,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vuejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Bootstrap CSS",
    icon: bootstrap,
  },
  {
    name: "Vuetify",
    icon: vuetify,
  },
];

const experiences = [
  {
    title: "Content Creater",
    company_name: "Aptcoder",
    icon: aptcoder,
    iconBg: "#ffffff",
    date: "Mar 2022 - Sept 2022",
    points: [
      "Created comprehensive code-related assignments tailored to course requirements, enhancing students' practical programming skills.",
      "Produced detailed and accessible documents for students, explaining complex coding concepts and course materials.",
      "Designed assignments and documentation to meet diverse learning needs and levels, ensuring content was engaging and effective for students.",
    ],
  },
  {
    title: "Teacher",
    company_name: "Aptcoder",
    icon: aptcoder,
    iconBg: "#ffffff",
    date: "June 2022 - Sept 2022",
    points: [
      "Served as a teacher, delivering coding lessons and guiding students through complex programming topics to foster a deeper understanding.",
      "Created tailored lessons and learning materials for students, aligning with course objectives and ensuring an engaging educational experience.",
      "Produced detailed and accessible documents for students, explaining complex coding concepts and course materials.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Aptcoder",
    icon: aptcoder,
    iconBg: "#ffffff",
    date: "Oct 2022 - Feb 2024",
    points: [
      "Developing and maintaining their LMS using Vue.js and Vuetify.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Aptcoder",
    icon: aptcoder,
    iconBg: "#ffffff",
    date: "Mar 2024 - Present",
    points: [
      "Currently working as a Full Stack Developer, creating and maintaining both frontend and backend components their LMS.",
      "Utilized MongoDB for effective database management, implementing efficient data storage and retrieval systems to support application functionality.",
      "Developed robust APIs to support seamless data communication between frontend applications and the backend, ensuring optimal performance and user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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

export { services, technologies, experiences, testimonials, projects };
