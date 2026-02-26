"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Cuisine",
        description:
            "A comprehensive meal subscription platform built to streamline the ordering process. Features a dynamic React frontend providing a modern user experience for meal selection and subscription management.",
        tech: ["React", "Node.js", "Web Development"],
        github: "https://github.com/Nithil",
        demo: "#",
        image: "bg-gradient-to-br from-orange-500/20 to-orange-900/20",
    },
    {
        title: "Secure-77",
        description:
            "An advanced security application leveraging AES-GCM encryption paired with steganography techniques to ensure high-grade data confidentiality and integrity during file transfers.",
        tech: ["Encryption", "AES-GCM", "Steganography"],
        github: "https://github.com/Nithil",
        demo: "#",
        image: "bg-gradient-to-br from-green-500/20 to-green-900/20",
    },
    {
        title: "React Coding Challenges",
        description:
            "A curated collection of React.js coding challenges with varying difficulties. Designed to help developers practice state management, component architecture, and advanced hooks.",
        tech: ["React.js", "SCSS", "Education"],
        github: "https://github.com/Nithil/react-coding-challenges",
        demo: "#",
        image: "bg-gradient-to-br from-blue-500/20 to-blue-900/20",
    },
    {
        title: "NestJS School Management",
        description:
            "A scalable backend service utilizing NestJS and TypeScript for managing school operations, including student records, staff management, and administrative task processing.",
        tech: ["NestJS", "TypeScript", "Backend API"],
        github: "https://github.com/Nithil/nestjs-school-management",
        demo: "#",
        image: "bg-gradient-to-br from-purple-500/20 to-purple-900/20",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A selection of projects encompassing software engineering, robotics, and hardware integrations.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors duration-300 group"
                    >
                        {/* Project Image Placeholder */}
                        <div className={`w-full h-48 ${project.image} relative overflow-hidden flex items-center justify-center`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            <span className="text-muted-foreground/50 font-mono text-sm tracking-widest uppercase">Preview</span>
                        </div>

                        <div className="flex flex-col flex-1 p-6">
                            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs font-medium text-foreground bg-accent px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-t border-border">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                                >
                                    <Github size={18} />
                                    <span>Code</span>
                                </a>
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors ml-auto"
                                >
                                    <ExternalLink size={18} />
                                    <span>Live Demo</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
