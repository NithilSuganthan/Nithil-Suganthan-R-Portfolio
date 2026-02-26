"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Code2, Cpu, Wrench, Database, FileTerminal } from "lucide-react";

const skillCategories = [
    {
        title: "Programming",
        icon: <FileTerminal className="w-6 h-6 text-primary" />,
        skills: ["C", "C++", "Java", "Python", "JavaScript"],
    },
    {
        title: "Web Development",
        icon: <Code2 className="w-6 h-6 text-primary" />,
        skills: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Databases",
        icon: <Database className="w-6 h-6 text-primary" />,
        skills: ["MongoDB", "SQL"],
    },
    {
        title: "Hardware & Robotics",
        icon: <Cpu className="w-6 h-6 text-primary" />,
        skills: ["Arduino", "ESP32"],
    },
    {
        title: "Tools",
        icon: <Wrench className="w-6 h-6 text-primary" />,
        skills: ["Git", "GitHub"],
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

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    A comprehensive toolkit spanning high-level web frameworks down to low-level microcontroller programming.
                </p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{category.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </SectionWrapper>
    );
}
