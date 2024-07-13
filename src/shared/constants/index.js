import { sarvadhi, freshcodes } from "../../assets/images";

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  react2,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../../assets/icons";

export const skills = [
  //   {
  //     imageUrl: git,
  //     name: "Git",
  //     type: "Version Control",
  //   },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react2,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  //   {
  //     imageUrl: mongodb,
  //     name: "MongoDB",
  //     type: "Database",
  //   },
  //   {
  //     imageUrl: express,
  //     name: "Express",
  //     type: "Backend",
  //   },
  //   {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  //   },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  //   {
  //     imageUrl: nextjs,
  //     name: "Next.js",
  //     type: "Frontend",
  //   },
  //   {
  //     imageUrl: nodejs,
  //     name: "Node.js",
  //     type: "Backend",
  //   },

  //   {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  //   },
];

export const experiences = [
  {
    title: "ReactJs Developer - Sarvadhi",
    project_name: "Chrome Extention",
    icon: sarvadhi,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developed a LinkedIn Chrome Extension: Created a user interface for a Chrome extension that allows users to fetch LinkedIn profile data and generate personalized messages using ChatGPT.",
      "Implemented Data Fetching Mechanism: Added a Fetch User button on LinkedIn profiles to send the profile link to an API, retrieving user data for message generation.",
      "Collaborated with Backend Developer: Worked alongside a backend developer who handled API creation and data processing, ensuring seamless integration between frontend and backend.",
      "Utilized Modern Web Technologies: Leveraged Typescript, React.js, and bootstrap to build a responsive and user-friendly extension interface. ",
    ],
  },
  {
    title: "ReactJs Developer - Sarvadhi",
    project_name: "Crm - Customer Relation Management",
    icon: sarvadhi,
    iconBg: "#accbe1",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed Dynamic Tables: Utilized React JS and TypeScript to create dynamic and interactive tables for managing customer data efficiently. Ensured seamless data storage and retrieval, providing a user-friendly interface for data manipulation.",
      "Role-Based Routing Management: Implemented routing logic using React Router, tailored to user roles (Admin and User). Ensured that specific routes and features were accessible based on role permissions, enhancing security and usability.",
      "Styled Components with Tailwind CSS: Leveraged Tailwind CSS to design responsive and aesthetically pleasing UI components. Maintained consistency across the application by adhering to design standards, improving overall user experience.",
    ],
  },
  {
    title: "ReactJs Developer - Sarvadhi",
    project_name: "Stock Market",
    icon: sarvadhi,
    iconBg: "#accbe1",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Implemented Real-Time Data Updates: Configured Socket.IO to fetch and display real-time stock market data. Ensured that the user interface dynamically updates with the latest information, providing users with accurate and timely data listings.",
      "Developed Global Search Functionality: Created a global search feature that efficiently searches and filters data within the stock market tables. Enhanced user experience by enabling quick and easy access to specific stock information through an intuitive search interface.",
    ],
  },
  {
    title: "ReactJs Developer - Sarvadhi",
    project_name: "Pure You Jewellery",
    icon: sarvadhi,
    iconBg: "#accbe1",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Implemented Interactive Image Carousel: Developed a carousel feature to display images dynamically. Enabled smooth auto-scrolling functionality upon clicking, ensuring a seamless and engaging user experience while navigating through product images.",
      "Managed Persistent Filter Data: Participated in the filtration process by implementing Redux and Redux Persist to handle filter data. Ensured that filter settings remain intact even after page refreshes, providing a consistent and reliable user experience.",
    ],
  },
  {
    title: "ReactJs Developer - Freshcodes",
    project_name: "Hind Money - Mutal Funds",
    icon: freshcodes,
    iconBg: "#5399f6",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developed Interactive Charts: Utilized the ApexCharts library to create dynamic and interactive charts displaying mutual fund performance across fiscal years. Provided users with clear and insightful visual representations of financial data.",
      "Optimized API Usage: Implemented strategies to minimize API calls across the application, enhancing performance and reducing server load. Ensured efficient data fetching and management to improve overall user experience.",
      "Ensured Data Persistence: Managed dynamic table data using Redux Persist, ensuring that data remains consistent and intact even after page refreshes. Enhanced reliability and usability by maintaining a stable data state throughout user interactions.",
    ],
  },
  {
    title: "ReactJs Developer - Freshcodes",
    project_name: "Hrms- Human Resource Management System",
    icon: freshcodes,
    iconBg: "#5399f6",
    date: "Jul 2024 - Present",
    points: [
      "Developed Core HRMS Features: Designed and implemented essential HR functionalities such as employee management, attendance tracking, and leave management using React and Redux. Ensured a user-friendly interface to streamline HR processes.",
      "Enhanced Data Security and Accessibility: Implemented role-based access controls and secure data management practices to protect sensitive HR data. Ensured that data is easily accessible to authorized users while maintaining high security standards.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
