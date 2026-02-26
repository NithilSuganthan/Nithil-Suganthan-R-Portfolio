"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Briefcase, Award, FileBadge2 } from "lucide-react";

const experiences = [
    {
        title: "Web Developer & Coding Curriculum Designer",
        company: "Otomatiks",
        date: "Present",
        icon: <Briefcase className="w-5 h-5 text-primary" />,
        description:
            "Spearheading the curriculum design and mentoring programs for aspiring developers. Responsible for live coding sessions, providing intensive debugging guidance, and ensuring high-quality tech education delivery.",
    }
];

const achievements = [
    {
        title: "AI-Integrated Digital Watch (Patent Published)",
        icon: <FileBadge2 className="w-5 h-5 text-green-500" />,
        description: "Successfully designed, developed, and published a patent for a novel approach to embedding AI processing directly within a digital watch form factor.",
    },
    {
        title: "Academic Excellence Scholarship",
        icon: <Award className="w-5 h-5 text-yellow-500" />,
        description: "Awarded scholarship for outstanding academic performance, maintaining a 9.74/10 CGPA in B.Tech IT.",
    }
];

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Experience Column */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-3xl font-bold">Experience</h2>
                        <div className="h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full ml-4"></div>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative pl-8 border-l border-primary/30">
                                <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>

                                <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between">
                                    <h3 className="text-xl font-bold">{exp.title}</h3>
                                    <span className="text-sm text-primary font-medium mt-1 sm:mt-0 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                        {exp.date}
                                    </span>
                                </div>
                                <h4 className="text-lg text-muted-foreground font-medium mb-3">{exp.company}</h4>
                                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Achievements Column */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <h2 className="text-3xl font-bold">Achievements</h2>
                        <div className="h-1 flex-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full ml-4"></div>
                    </div>

                    <div className="space-y-6">
                        {achievements.map((ach, idx) => (
                            <div
                                key={idx}
                                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-accent rounded-lg mt-1">
                                        {ach.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold mb-2 leading-tight">{ach.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{ach.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </SectionWrapper>
    );
}
