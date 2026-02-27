import { Code2, Cpu, Wrench, Database, FileTerminal } from "lucide-react";

export const siteMetadata = {
    title: "Nithil Suganthan | Full Stack & Robotics Developer",
    description: "Portfolio of Nithil Suganthan R, a developer specializing in scalable web architectures, APIs, and real-world robotics integrations.",
    keywords: ["Nithil Suganthan", "Software Engineer", "Full Stack Developer", "Robotics", "Web Developer", "React", "Next.js", "Backend Developer"],
};

export const heroData = {
    name: "Nithil Suganthan R",
    roles: ["Software Engineer", "Full Stack Developer", "Robotics Engineer"],
    description: "I build scalable full-stack web applications and robust embedded systems. Passionate about solving complex problems by bridging modern cloud architectures with hardware-level logic.",
};

export const aboutData = {
    title: "Engineering Solutions, End-to-End",
    paragraphs: [
        "I am a developer focused on shipping high-performance software and robust physical systems. As a B.Tech IT undergraduate (CGPA 9.79/10), my foundation lies in writing clean, scalable code that solves real-world problems.",
        "My technical expertise spans across the entire stack—from developing responsive React and Next.js frontends to architecting secure Node.js APIs, down to programming microcontrollers like Arduino and ESP32 using C/C++.",
        "I pride myself on my ability to quickly adapt to new technologies and deliver production-ready solutions. Whether it's building a complex SaaS dashboard or integrating AI into embedded devices (resulting in a published patent), my goal is always to build things that work seamlessly at scale."
    ]
};

export const impactData = [
    { label: "Engineering Projects", value: "15+" },
    { label: "Tech Domains", value: "Web, API, Robotics" },
    { label: "Patents Published", value: "1" },
    { label: "Students Mentored", value: "100+" }
];

export const skillCategories = [
    {
        title: "Frontend Engineering",
        iconName: "Code2",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion"],
    },
    {
        title: "Backend & APIs",
        iconName: "FileTerminal",
        skills: ["Node.js", "Express", "NestJS", "RESTful APIs", "JWT", "Python"],
    },
    {
        title: "Database Architecture",
        iconName: "Database",
        skills: ["PostgreSQL", "MongoDB", "SQL", "Redis", "Prisma ORM"],
    },
    {
        title: "Robotics & Embedded",
        iconName: "Cpu",
        skills: ["C/C++", "Arduino", "ESP32", "IoT Protocols (MQTT)", "Sensor Integration"],
    },
    {
        title: "DevOps & Tooling",
        iconName: "Wrench",
        skills: ["Git", "Docker", "Vercel", "Linux", "Postman", "CI/CD basics"],
    },
];

export const experiences = [
    {
        title: "Web Developer and Coding Curriculam Designer",
        company: "Otomatiks - Inventobots Academy, Chennai",
        date: "Dec 2024 - Present",
        iconName: "Briefcase",
        description: "Designed and developed the website of the academy and Designed the annual coding curriculum and developed structured study materials aligned with academic goals. Delivered hands-on coding instruction, simplifying complex concepts through practical examples in C, Python, and Java. Strengthened skills in curriculum design, technical communication, and mentoring.",
    }
];

export const achievements = [
    {
        title: "AI-Integrated Digital Watch",
        award: "Patent Published",
        iconName: "FileBadge2",
        description: "Designed and published a patent (App No. 202541090585 A) for an AI-based digital watch to assist women aged 45-55 in post-menstrual health monitoring, integrating AI-driven health tracking and smart alert systems.",
    },
    {
        title: "Academic Excellence Scholarship",
        award: "9.74/10 CGPA",
        iconName: "Award",
        description: "Awarded scholarship for outstanding academic performance, maintaining top-tier grades in B.Tech IT while balancing startup and engineering projects.",
    }
];

export const projects = [
    {
        title: "E-Cuisine Platform",
        tagline: "Full-Stack Meal Subscription System",
        problem: "PG and college students struggle to discover and manage daily catering services efficiently through traditional manual tracking.",
        role: "Lead Full-Stack Developer. Architected the entire platform from UI to backend API.",
        solution: "Developed a comprehensive React-based platform where users browse meal services, view schedules, and subscribe via a centralized checkout flow with a dedicated subscriptions dashboard.",
        result: "Streamlined the subscription lifecycle, providing a highly scalable component architecture and modernizing the food-tech aesthetic.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        github: "https://github.com/NithilSuganthan/E-Cuisine",
        demo: "#",
        color: "from-orange-500/10 to-orange-900/10",
        border: "group-hover:border-orange-500/50"
    },
    {
        title: "Secure-77",
        tagline: "Cryptographic File Storage Application",
        problem: "Transferring sensitive files securely requires multiple fragmented tools, risking interception and tampering.",
        role: "Security Engineer / Developer. Implemented the core encryption logic and steganography pipeline.",
        solution: "Built a web app leveraging AES-GCM & PBKDF2 encryption paired with steganography to invisibly embed encrypted payloads inside cover images, secured by JWT authentication.",
        result: "Ensured high-grade data confidentiality and integrity validation within a seamless UX.",
        tech: ["React", "AES-GCM Crypto", "Steganography", "JWT"],
        github: "https://github.com/NithilSuganthan/Secure-77",
        demo: "#",
        color: "from-emerald-500/10 to-emerald-900/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "NetJS Backend Service",
        tagline: "Scalable Administrative API",
        problem: "Schools manage complex data (students, staff, logic) using legacy systems that lack type safety and API accessibility.",
        role: "Backend Architect. Designed the data schema and implemented robust RESTful endpoints.",
        solution: "Architected a scalable, strongly-typed backend service utilizing NestJS to centralize and secure school operations.",
        result: "Provided a centralized data management system enabling microservice-ready architecture.",
        tech: ["NestJS", "TypeScript", "PostgreSQL", "REST APIs"],
        github: "https://github.com/Nithil/nestjs-school-management",
        demo: "#",
        color: "from-blue-500/10 to-blue-900/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "AI-Integrated Watch Embedded System",
        tagline: "IoT Medical Device (Patented)",
        problem: "Lack of discreet, continuous, algorithm-driven health monitoring for targeted demographics (post-menstrual health).",
        role: "Embedded Systems Engineer. Wrote the firmware bridging sensor data with the processing unit.",
        solution: "Developed the embedded logic and hardware integration for an AI-based digital watch that processes health tracking data directly at the edge.",
        result: "Successfully published a patent (App No. 202541090585 A) proving the feasibility of edge-calculated health alerts.",
        tech: ["C/C++", "Microcontrollers", "I2C/SPI", "Sensors"],
        github: "https://github.com/Nithil",
        demo: "#",
        color: "from-purple-500/10 to-purple-900/10",
        border: "group-hover:border-purple-500/50"
    }
];

export const contactData = {
    message: "I'm actively looking for developer roles (internships and full-time) where I can contribute to complex software or robotics systems. Let's build something impactful together.",
    email: "nithilsuganthan@gmail.com",
    linkedin: "https://www.linkedin.com/in/nithil-suganthan-r-63b070329/",
    github: "https://github.com/NithilSuganthan",
    location: "Chennai, India | Open for Relocation / Remote"
};

export const certifications = [
    {
        title: "MongoDB Basics for Students",
        issuer: "MongoDB",
        link: "#",
    },
    {
        title: "Computer Architecture",
        issuer: "NPTEL",
        link: "#",
    },
    {
        title: "Basics of Data structures and algorithms",
        issuer: "Simplilearn",
        link: "#",
    },
    {
        title: "MongoDB Aggregation in Python",
        issuer: "MongoDB",
        link: "#",
    },
    {
        title: "MongoDB CRUD Operations in Python",
        issuer: "MongoDB",
        link: "#",
    },
    {
        title: "Connecting To MongoDB In Python",
        issuer: "MongoDB",
        link: "#",
    },
    {
        title: "Using MongoDB With Python",
        issuer: "MongoDB",
        link: "#",
    },
    {
        title: "Relational To Document Modal",
        issuer: "MongoDB",
        link: "#",
    }
];
