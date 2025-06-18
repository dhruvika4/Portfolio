import emerge from "../assets/projects/emerge.jpg";
import banksathi from "../assets/projects/banksathi.jpg";
import lifecell from "../assets/projects/lifecell.jpg";
import project3 from "../assets/projects/porfolio.jpg";


export const HERO_CONTENT = `I am a passionate Frontend Developer with 2+ years of experience building responsive, scalable, and user-centric web applications. My expertise includes Next.js, React.js, Tailwind CSS, JavaScript, TypeScript, and UI libraries like Material UI, Mantine UI, and Bootstrap. Skilled in Redux, WebSocket, GIT, REST API integration, and development tools such as Jira and Docker, I deliver high-quality interfaces that meet modern design and performance standards. Driven by curiosity and a pursuit of technical excellence, I thrive in fast-paced, collaborative environments, solving complex frontend challenges with clean, maintainable code. Outside coding, I enjoy exploring emerging technologies and contributing to open-source projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Frontend Developer with over 2 years of experience, specializing in frontend technologies like Next.js, React.js, Tailwind CSS, JavaScript, TypeScript, Redux, and modern UI libraries such as Material UI and Mantine. I have a strong track record of building clean, scalable, and responsive web applications. Proficient with Git, Jira, and other development tools, I focus on delivering high-quality, maintainable solutions. I’ve also taken on team leadership roles, managing planning, coordination, and successful delivery. Passionate about creating efficient, user-friendly digital experiences.`;

export const EXPERIENCES = [
  {
    year: "June 2023 - May 2025",
    role: "Front End Developer",
    company: "BitFront Infotech",
    description: `Developed responsive and interactive user interfaces using React JS, ensuring modern design compliance and optimal user experience across devices.
    Integrated RESTful APIs and managed scalable application state with Redux, promoting consistent and efficient data flow.
    Built and maintained reusable component libraries and custom hooks to standardize development patterns and enhance productivity.
    Collaborated with backend teams to define API contracts and consume endpoints effectively for seamless full-stack integration.
    Work environment was good there, learnt how to manage & how to build good relationship with Manager and colleagues.`,
    technologies: ["Javascript", "TypeScript", "Next JS", "React.js", "HTML", "CSS", "Tailwind", "Bootstrap", "Redux", "Material UI", "Mantine UI", "REST API", "GIT", "Jira", "monday.com", "Websocket"],
  },
  {
    year: "Dec 2022 - May 2023",
    role: "Junior Front End Developer",
    company: "BitFront Infotech",
    description: `I completed a 6-month internship as a Frontend Developer Trainee at BitFront Infotech. During this time, I worked on building responsive single-page applications using React.js and styled components using CSS3, SASS, and Bootstrap. I also contributed to backend API development with Node.js and MySQL, and implemented secure authentication using JWT. The experience helped me understand Agile workflows, improve my teamwork skills, and build strong professional relationships.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS", "Tailwind", "Bootstrap", "Note.js", "MySQL", "Express"],
  },
];

export const PROJECTS = [
  {
    title: "Emerge",
    image: emerge,
    description: "Built a robust workflow and appointment management platform using Next.js, React, and TypeScript. Implemented secure authentication (Google OAuth, Facebook Login), real-time communication via Twilio, and payment processing with NMI. Developed advanced scheduling with FullCalendar and drag-and-drop functionality. Enhanced UX with interactive data visualization (ApexCharts, Highcharts) and efficient state management using Redux Toolkit and React Query.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "MUI", "Twilio", "NMI", "React Hook Form", "FullCalendar", "ApexCharts", "Framer Motion"],
    link: "https://alpha.ehr.software/",
  },
  {
    title: "Banksathi",
    image: banksathi,
    description: "Developed a modern financial platform using Next.js 13 with server-side rendering and TypeScript. Created responsive, mobile-friendly UI with Tailwind CSS and implemented features like OTP-based authentication, real-time notifications, and interactive components (ratings, date pickers). Optimized performance through code splitting, lazy loading, and Next.js image optimization.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux", "React Player", "ESLint", "Prettier", "Animate.css"],
    link: "https://www.banksathi.com/",
  },
  {
    title: "Lifecell E-Commerce Platform",
    image: lifecell,
    description: "Developed responsive e-commerce features including address management with CRUD functionality, dynamic product pages with Buy Now options, and FAQ sections with accordion UI. Ensured mobile responsiveness and design consistency across all components while integrating REST APIs.",
    technologies: ["React.js", "JavaScript", "CSS3", "Responsive Design", "Accordion UI", "REST API"],
    link: "https://www.lifecell.in/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "Tailwind"],
    link: "https://portfolio-dhruvikas-projects-83ad2735.vercel.app/",
  }
];

export const CONTACT = {
  address: "Mota varachha, Surat, Gujarat - 394101 ",
  phoneNo: "+91 93136 80738 ",
  email: "dhruvikanakrani1504@gmail.com",
};
