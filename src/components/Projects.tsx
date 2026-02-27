"use client";

import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/Motion";

export default function Projects() {
    return (
        <SectionWrapper id="projects" className="bg-accent/5">
            <FadeIn direction="up" className="mb-16">
                <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Case Studies</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">Featured Projects</h3>
            </FadeIn>

            <StaggerContainer className="space-y-24">
                {projects.map((project, index) => (
                    <StaggerItem key={index}>
                        <div className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>

                            {/* Image / Graphic Side */}
                            <div className={`col-span-1 lg:col-span-6 relative z-10 ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                                <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${project.color} border border-border shadow-2xl overflow-hidden relative group transition-all duration-500 hover:scale-[1.02] ${project.border}`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <h3 className="text-4xl font-black text-foreground/20 uppercase tracking-tighter opacity-50 select-none group-hover:opacity-10 transition-opacity">
                                            {project.title}
                                        </h3>
                                    </div>
                                    {/* Subtle sweep animation on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className={`col-span-1 lg:col-span-6 flex flex-col justify-center relative z-20 ${index % 2 !== 0 ? "lg:order-1 lg:text-right" : "lg:text-left"}`}>
                                <p className="text-primary font-mono text-sm mb-2">{project.tagline}</p>
                                <h3 className="text-3xl font-extrabold mb-6 tracking-tight">{project.title}</h3>

                                <div className={`bg-card border border-border/50 p-6 md:p-8 rounded-2xl shadow-xl mb-6 relative z-30 transition-colors hover:border-primary/30 ${index % 2 !== 0 ? "lg:-mr-12" : "lg:-ml-12"}`}>
                                    <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                                        <p><strong className="text-foreground">Problem:</strong> {project.problem}</p>
                                        <p><strong className="text-foreground">Solution:</strong> {project.solution}</p>
                                        <p><strong className="text-foreground">My Role:</strong> {project.role}</p>
                                        <p className="text-primary font-medium">{project.result}</p>
                                    </div>
                                </div>

                                <div className={`flex flex-wrap gap-3 mb-8 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                                    {project.tech.map((techItem, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-accent/50 text-accent-foreground text-xs md:text-sm rounded-full font-medium border border-border/50"
                                        >
                                            {techItem}
                                        </span>
                                    ))}
                                </div>

                                <div className={`flex items-center gap-6 ${index % 2 !== 0 ? "lg:justify-end" : ""}`}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group/link"
                                    >
                                        <Github size={20} />
                                        <span className="font-medium group-hover/link:underline underline-offset-4">Source</span>
                                    </a>

                                    {project.demo !== "#" && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group/link"
                                        >
                                            <ExternalLink size={20} />
                                            <span className="font-medium group-hover/link:underline underline-offset-4">Live Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </SectionWrapper>
    );
}
