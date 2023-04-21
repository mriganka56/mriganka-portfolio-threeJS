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
    angular,
    spring,
    bootstrap,
    canva,
    firebase,
    meta,
    HacktoberFest,
    tesla,
    shopify,
    carrent,
    HMS,
    jobit,
    tripguide,
    threejs,
    starbucks,
    GCCP,
    iic,
    todo,
    tindog
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
      title: "Front-End",
      icon: web,
    },
    {
      title: "Databases",
      icon: mobile,
    },
    {
      title: "Back-End",
      icon: backend,
    },
    {
      title: "Web-APIs",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "spring",
      icon: spring,
    },
    {
      name: "canva",
      icon: canva,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    {
      name: "firebase",
      icon: firebase,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "HacktoberFest",
      icon: HacktoberFest,
      iconBg: "#E6DEDD",
      date: "October 2022 - October 2022",
      points: [
        "Participated in the biggest open-source tech-fest",
        "Collaborated with team and contributed on a full-stack project",
        "Tech Stack-> FrontEnd: ReactJS, and Backend: Java Spring Boot",
        // "Developing and maintaining web applications using React.js and other related technologies.",
        // "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        // "Implementing responsive design and ensuring cross-browser compatibility.",
        // "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Google Cloud Practitioner",
      company_name: "GCCP",
      icon: GCCP,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Jan 2023",
      points: [
        "Created virtual labs and made instances.",
        "Deployed pre-made projects into google-cloud using CMD",
        "Learnt about the basics of Google-Cloud",
      ],
    },
    {
      title: "Web Developement Intern",
      company_name: "IIC-IEM",
      icon: iic,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - May 2023",
      points: [
        "Learned Hands-On development guided by developers",
        "Enhanced my web-development skillsets with multiple technologies",
        "Participated in GFGHackathon and created a Hospital Management System"
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Collaborating with Mriganka was an amazing experience. He develops fast websites and is a good team player.",
      name: "Arpan Ghosh",
      designation: "Developer",
      company: "Deloitte",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mriganka does.",
      name: "Supratim Majumder",
      designation: "Developer",
      company: "Cisco",
    },
    {
      testimonial:
        "Mriganka has a good development skills and is very fast, effective and Professional at work!",
      name: "Avijit Das",
      designation: "Management Consultant",
      company: "SAP Labs",
    },
  ];
  
  const projects = [
    {
      name: "E-Hospital Management System",
      description:
        "E-Hospital-Management-System is a console based application which is built using Java and JDBC. This application helps in management of Patients, Doctors, Admin in a easy and comfortable way.",
      tags: [
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "JDBC",
          color: "pink-text-gradient",
        },
      ],
      image: HMS,
      source_code_link: "https://github.com/GFG-Hackathon/E-Hospital-Management-System",
    },
    {
      name: "To-Do List",
      description:
        "This is a To-Do List made using NodeJS and ExpressJs and MongoDB as a database that performs CRUD operations in the list. It also has custom API routes, meaning you can create a custom list by just adding the custom url.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/mriganka56/To-Do-List-db",
    },
    {
      name: "TinDog",
      description:
        "A fun webiste, fully mobile responsive website made using HTML, CSS & Bootstrap. Tindog means tinder for dog, and I created this project to learn more about mobile responsiveness.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",  
        },
      ],
      image: tindog,
      source_code_link: "https://github.com/mriganka56/TinDog",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };