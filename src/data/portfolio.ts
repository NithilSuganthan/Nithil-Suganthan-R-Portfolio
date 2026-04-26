import { Code2, Cpu, Wrench, Database, FileTerminal } from "lucide-react";

export const siteMetadata = {
    title: "Nithil Suganthan | Full Stack & Robotics Developer",
    description: "Portfolio of Nithil Suganthan R, a developer specializing in scalable web architectures, APIs, and real-world robotics integrations.",
    keywords: ["Nithil Suganthan", "Software Engineer", "Full Stack Developer", "Robotics", "Web Developer", "React", "Next.js", "Backend Developer"],
};

export const heroData = {
    name: "Nithil Suganthan R",
    roles: ["Software Engineer", "Full Stack Developer"],
    description: "I build scalable full-stack web applications and robust embedded systems. Passionate about solving complex problems by bridging modern cloud architectures with hardware-level logic.",
};

export const aboutData = {
    title: "Engineering Solutions, End-to-End",
    paragraphs: [
        "I am a developer focused on shipping high-performance software and robust physical systems. As a B.Tech IT undergraduate (CGPA 9.74/10), my foundation lies in writing clean, scalable code that solves real-world problems.",
        "My technical expertise spans across the entire stack—from developing responsive React and Next.js frontends to architecting secure Node.js APIs, down to programming microcontrollers like Arduino and ESP32 using C/C++.",
        "I pride myself on my ability to quickly adapt to new technologies and deliver production-ready solutions. Whether it's building a complex SaaS dashboard or integrating AI into embedded devices (resulting in a published patent), my goal is always to build things that work seamlessly at scale."
    ]
};

export const impactData = [
    { label: "Engineering Projects", value: "15+" },
    { label: "Tech Domains", value: "Web, API, Robotics" },
    { label: "Patents Published", value: "3" },
    { label: "Papers Published", value: "1" }
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
        title: "Quantum AI Nanomaterial Discovery",
        award: "Patent Published",
        iconName: "FileBadge2",
        description: "Co-invented a system of quantum-inspired AI-based nanomaterial discovery for healthcare applications (App No. 202641016448 A). The system predicts key properties including toxicity, drug delivery rate, stability, and bio-compatibility using QAOA, VQE-inspired simulation, and LoRA-enhanced regression models.",
    },
    {
        title: "Academic Excellence Scholarship",
        award: "9.74/10 CGPA",
        iconName: "Award",
        description: "Awarded scholarship for outstanding academic performance, maintaining top-tier grades in B.Tech IT while balancing startup and engineering projects.",
    }
];

export const startupData = {
    name: "Otomatiks",
    role: "Web Developer & Curriculum Designer",
    suffix: "Inventobots Academy",
    mission: "Designing and developing digital experiences and structured coding curricula for the next generation of engineers at Otomatiks - Inventobots Academy, Chennai.",
    details: "From building the academy's web presence to crafting hands-on study materials in C, Python, and Java — I bridge technical communication and mentorship to make complex concepts accessible and engaging for 100+ students.",
    roadmap: [
        {
            title: "Innovation Lab",
            desc: "Building interactive web platforms and tools that enhance the learning experience for students exploring robotics and coding.",
        },
        {
            title: "Tech Stack Mastery",
            desc: "Leveraging React, Next.js, and modern web technologies to create production-grade educational tools and academy infrastructure.",
        },
        {
            title: "Community Impact",
            desc: "Mentoring 100+ students through structured curriculum design, hands-on workshops, and one-on-one coding sessions.",
        },
    ],
};

export const projects = [
    {
        title: "EHR - Electronic Health Records",
        tagline: "AI-Powered Medical Record Management System",
        problem: "Healthcare providers struggle with fragmented patient data and lack of automated insights, leading to slower diagnosis and administrative overhead.",
        role: "Full-Stack Developer. Engineered the Spring Boot backend, React frontend, and integrated AI-driven health analytics.",
        solution: "Developed a comprehensive EHR system featuring AI-powered patient diagnostics, secure Spring Security/JWT authentication, and integrated Razorpay for healthcare payments.",
        result: "Successfully deployed a production-ready healthcare platform that unifies patient history, appointments, and diagnostic tools.",
        tech: ["React", "Spring Boot", "Supabase", "PostgreSQL", "Tailwind CSS", "Razorpay", "Docker"],
        github: "https://github.com/NithilSuganthan/Electronic-health-records",
        demo: "https://electronic-health-records-xi.vercel.app/",
        color: "from-teal-500/10 to-emerald-900/10",
        border: "group-hover:border-teal-500/50"
    },
    {
        title: "MVPrep",
        tagline: "CA Exam Revision Planner & Tracker",
        problem: "CA aspirants face a critical 1.5-day gap between exams with no structured tool to prioritize high-value chapters and track marks coverage efficiently.",
        role: "Solo Full-Stack Developer. Designed and built the entire platform end-to-end — from the React frontend to the Express API and SQLite database.",
        solution: "Built a marks-coverage-first revision planner using ABC analysis prioritization — featuring a real-time dashboard with Chart.js visualizations, a smart 1.5-day planner engine with PDF export, an embedded Pomodoro focus timer, and secure multi-user JWT authentication.",
        result: "Delivered a production-ready tool deployed on Vercel that transforms chaotic pre-exam cramming into a data-driven, prioritized revision strategy.",
        tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "SQLite", "Chart.js", "JWT"],
        github: "https://github.com/NithilSuganthan/MVPrep",
        demo: "https://mv-prep.vercel.app",
        color: "from-blue-500/10 to-indigo-900/10",
        border: "group-hover:border-blue-500/50"
    },

    {
        title: "SHPA",
        tagline: "Structured Hallucination Pathway Analyzer",
        problem: "AI language models frequently produce confident but fabricated outputs (hallucinations), and there's no accessible tool to systematically detect, trace, and visualize where these hallucination pathways originate.",
        role: "Full-Stack Developer. Architected the analysis pipeline and built the interactive visualization frontend.",
        solution: "Developed a web-based analyzer that deconstructs AI-generated text, identifies structured hallucination patterns, maps their logical pathways, and presents findings through an intuitive visual interface for researchers and developers.",
        result: "Built a practical tool for AI safety research — enabling users to trace hallucination propagation and improve prompt engineering strategies.",
        tech: ["JavaScript", "Vite", "CSS", "HTML"],
        github: "https://github.com/NithilSuganthan/SHPA",
        demo: "https://shpa-nine.vercel.app/",
        color: "from-rose-500/10 to-pink-900/10",
        border: "group-hover:border-rose-500/50"
    },
    {
        title: "Legally.ai",
        tagline: "AI-Powered Legal Document Decoder",
        problem: "Legal documents are dense, jargon-heavy, and inaccessible to the average person, creating barriers to understanding contracts, agreements, and policies.",
        role: "Full-Stack Developer. Built the AI integration pipeline and the frontend interface.",
        solution: "Developed LegalDecoder — a web application that uses AI to simplify and decode complex legal documents into plain, human-readable language in seconds.",
        result: "Empowered users to understand legal content without a lawyer, reducing comprehension time and increasing accessibility to legal literacy.",
        tech: ["JavaScript", "HTML", "CSS", "AI/LLM APIs"],
        github: "https://github.com/NithilSuganthan/Legally.ai",
        demo: "https://legally-ai-tau.vercel.app",
        color: "from-cyan-500/10 to-cyan-900/10",
        border: "group-hover:border-cyan-500/50"
    },
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
        demo: "https://secure-77.vercel.app/",
        color: "from-emerald-500/10 to-emerald-900/10",
        border: "group-hover:border-emerald-500/50"
    },
    {
        title: "AI-Integrated Watch Embedded System",
        tagline: "IoT Medical Device (Patented)",
        problem: "Lack of discreet, continuous, algorithm-driven health monitoring for targeted demographics (post-menstrual health).",
        role: "Embedded Systems Engineer. Wrote the firmware bridging sensor data with the processing unit.",
        solution: "Developed the embedded logic and hardware integration for an AI-based digital watch that processes health tracking data directly at the edge.",
        result: "Successfully published a patent (App No. 202541090585 A) proving the feasibility of edge-calculated health alerts.",
        tech: ["C/C++", "Microcontrollers", "I2C/SPI", "Sensors"],
        github: "https://github.com/NithilSuganthan/",
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
