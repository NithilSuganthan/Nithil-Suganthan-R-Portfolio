import { Code2, Cpu, Wrench, Database, FileTerminal } from "lucide-react";

export const siteMetadata = {
    title: "Nithil Suganthan R | Software Engineer & Founder",
    description: "Portfolio of Nithil, an engineering student specialized in Web Development, Robotics, Embedded Systems, and Founder of Inventobots Academy.",
    keywords: ["Nithil Suganthan", "Software Engineer", "Frontend", "Robotics", "Arduino", "React", "Next.js", "EdTech Founder"],
};

export const heroData = {
    name: "Nithil Suganthan R",
    roles: ["Engineer", "Educator", "Founder"],
    description: "Building scalable web solutions, designing complex robotics systems, and inspiring the next generation of engineers through technical education.",
};

export const aboutData = {
    title: "Bridging Bits & Atoms",
    paragraphs: [
        "I am a high-achieving B.Tech IT undergraduate (CGPA 9.74/10) with a relentless problem-solving mindset. Recognized with an academic excellence scholarship, my approach bridges advanced software engineering with hardware-level logic.",
        "My technical ecosystem spans from full-stack web architectures using React, Next.js, and Node.js, down to the metal with Arduino, ESP32, and custom robotics. I believe the best engineers operate at the intersection of digital logic and physical reality, optimizing systems for scale, performance, and real-world impact.",
        "Recently, my innovative approach to embedded systems led to the publication of a patent for an AI-Integrated Digital Watch. Beyond building systems, I am deeply committed to education, frequently mentoring students and designing code curriculum to elevate the next generation of engineers."
    ]
};

export const skillCategories = [
    {
        title: "Programming",
        iconName: "FileTerminal",
        skills: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
    },
    {
        title: "Web Development",
        iconName: "Code2",
        skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "Node.js"],
    },
    {
        title: "Databases",
        iconName: "Database",
        skills: ["MongoDB", "PostgreSQL", "SQL"],
    },
    {
        title: "Hardware & Robotics",
        iconName: "Cpu",
        skills: ["Arduino", "ESP32", "IoT Protocols", "Sensors Integration"],
    },
    {
        title: "Tools & Workflow",
        iconName: "Wrench",
        skills: ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
    },
];

export const experiences = [
    {
        title: "Web Developer & Curriculum Designer",
        company: "Otomatiks",
        date: "Present",
        iconName: "Briefcase",
        description: "Spearheading curriculum design and mentoring programs for aspiring developers. Responsible for live coding sessions, providing intensive debugging guidance, and ensuring high-quality tech education delivery.",
    }
];

export const achievements = [
    {
        title: "AI-Integrated Digital Watch",
        award: "Patent Published",
        iconName: "FileBadge2",
        description: "Successfully designed, developed, and published a patent for a novel approach to embedding AI processing directly within a digital watch form factor.",
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
        title: "E-Cuisine",
        tagline: "Modern Meal Subscription Platform",
        problem: "Meal subscription services often suffer from clunky, outdated interfaces making it difficult for users to manage weekly deliveries and dietary preferences.",
        solution: "Developed a dynamic, highly responsive React frontend that streamlines the entire meal selection and checkout process.",
        outcomes: ["Improved user flow efficiency", "Modernized aesthetic", "Scalable component architecture"],
        tech: ["React", "Node.js", "Tailwind CSS"],
        github: "https://github.com/Nithil",
        demo: "#",
        color: "from-orange-500/10 to-orange-900/10",
        border: "group-hover:border-orange-500/50"
    },
    {
        title: "Secure-77",
        tagline: "Advanced Data Security Application",
        problem: "Transferring highly sensitive files requires guarantees against both interception and tampering, often requiring multiple fragmented tools.",
        solution: "Built a unified application leveraging AES-GCM encryption paired with steganography techniques to hide and encrypt data simultaneously.",
        outcomes: ["High-grade confidentiality", "Data integrity validation", "Seamless encryption UX"],
        tech: ["Encryption", "AES-GCM", "Steganography"],
        github: "https://github.com/Nithil",
        demo: "#",
        color: "from-emerald-500/10 to-emerald-900/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "NetJS School Operations",
        tagline: "Scalable Administrative Backend",
        problem: "Schools manage complex webs of student records, staff details, and administrative tasks often handled by legacy spreadsheets.",
        solution: "Architected a scalable, strongly-typed backend service utilizing NestJS to centralize and secure school operations via robust APIs.",
        outcomes: ["Centralized data management", "Type-safe robust API", "Scalable microservice-ready architecture"],
        tech: ["NestJS", "TypeScript", "REST APIs"],
        github: "https://github.com/Nithil/nestjs-school-management",
        demo: "#",
        color: "from-blue-500/10 to-blue-900/10",
        border: "group-hover:border-blue-500/50"
    },
    {
        title: "React Challenge Hub",
        tagline: "Interactive Developer Education",
        problem: "Junior developers struggle to bridge the gap between basic tutorials and complex, real-world React state management scenarios.",
        solution: "Curated and built a collection of progressive coding challenges focusing on advanced hooks, component architecture, and rendering optimization.",
        outcomes: ["Actionable learning paths", "Open-source contribution", "Demonstrates deep React mastery"],
        tech: ["React.js", "SCSS", "Education"],
        github: "https://github.com/Nithil/react-coding-challenges",
        demo: "#",
        color: "from-purple-500/10 to-purple-900/10",
        border: "group-hover:border-purple-500/50"
    }
];

export const startupData = {
    name: "Inventobots",
    suffix: "Academy",
    role: "Founder & Developer",
    mission: "Democratizing rigorous technical engineering education. Building a platform dedicated to teaching robotics, coding, and hardware innovation.",
    details: "From initial concept to full-stack execution, I am architecting the digital infrastructure and core curriculum that will empower students to build real-world physical and digital systems.",
    roadmap: [
        {
            title: "Innovation Focus",
            desc: "Merging web software logic with physical robotics engineering."
        },
        {
            title: "Tech Stack",
            desc: "Architecting the platform infrastructure completely from scratch using Next.js."
        },
        {
            title: "Future Vision",
            desc: "Scaling online cohorts, deploying interactive browser-based hardware simulators, and partnering with B2B educational institutions."
        }
    ]
};

export const contactData = {
    message: "Currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.",
    email: "nithilsuganthan@gmail.com",
    linkedin: "https://www.linkedin.com/in/nithil-suganthan-r-63b070329/",
    github: "https://github.com/NithilSuganthan",
    location: "Open for Relocation / Remote"
};
