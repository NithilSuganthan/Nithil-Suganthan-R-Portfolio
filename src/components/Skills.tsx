"use client";

import SectionWrapper from "./SectionWrapper";
import * as Icons from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "./ui/Motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <FadeIn direction="up" className="text-center mb-16">
                <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Technical Ecosystem</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Technical Arsenal</h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    A comprehensive toolkit spanning high-level web frameworks down to low-level microcontroller programming.
                </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => {
                    // Explicit casting to satisfy TypeScript that this variable represents a proper React Component
                    const IconComponent = Icons[category.iconName as keyof typeof Icons] as React.ElementType;

                    return (
                        <StaggerItem key={index}>
                            <div
                                className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:bg-accent/20 transition-all duration-300 relative overflow-hidden"
                            >
                                {/* Decorative background blast */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors" />

                                <div className="flex flex-col mb-6 relative z-10">
                                    <div className="p-3 w-max bg-primary/10 text-primary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {IconComponent && <IconComponent className="w-6 h-6" />}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2 relative z-10">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1.5 bg-accent text-accent-foreground text-sm rounded-md font-medium border border-border/50 hover:border-primary/30 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </StaggerItem>
                    );
                })}
            </StaggerContainer>
        </SectionWrapper>
    );
}
