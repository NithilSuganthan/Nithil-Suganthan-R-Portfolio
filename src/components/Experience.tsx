"use client";

import SectionWrapper from "./SectionWrapper";
import * as Icons from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/Motion";
import { experiences, achievements } from "@/data/portfolio";

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Experience Column */}
                <FadeIn direction="right">
                    <div className="flex items-center gap-3 mb-10">
                        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent ml-4"></div>
                    </div>

                    <StaggerContainer className="space-y-8">
                        {experiences.map((exp, idx) => {
                            const IconComponent = Icons[exp.iconName as keyof typeof Icons] as React.ElementType;
                            return (
                                <StaggerItem key={idx}>
                                    <div className="relative pl-8 border-l border-primary/20 hover:border-primary/60 transition-colors duration-300">
                                        <div className="absolute -left-3.5 top-0 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-primary" />
                                        </div>

                                        <div className="mb-2 flex flex-col sm:flex-row sm:items-center justify-between">
                                            <h3 className="text-xl font-bold tracking-tight">{exp.title}</h3>
                                            <span className="text-xs text-primary font-mono mt-1 sm:mt-0 bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                                {exp.date}
                                            </span>
                                        </div>
                                        <h4 className="text-lg text-muted-foreground font-medium mb-4">{exp.company}</h4>
                                        <p className="text-muted-foreground/80 leading-relaxed font-light">{exp.description}</p>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </FadeIn>

                {/* Achievements Column */}
                <FadeIn direction="left">
                    <div className="flex items-center gap-3 mb-10">
                        <h2 className="text-3xl font-bold tracking-tight">Achievements</h2>
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/50 to-transparent ml-4"></div>
                    </div>

                    <StaggerContainer className="space-y-6">
                        {achievements.map((ach, idx) => {
                            const IconComponent = Icons[ach.iconName as keyof typeof Icons] as React.ElementType;
                            return (
                                <StaggerItem key={idx}>
                                    <div className="group bg-card border border-border/50 rounded-2xl p-6 hover:bg-accent/20 hover:border-primary/50 transition-all duration-300 cursor-default">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-primary/10 text-primary rounded-xl mt-1 group-hover:scale-110 transition-transform duration-300">
                                                {IconComponent && <IconComponent className="w-5 h-5" />}
                                            </div>
                                            <div>
                                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                                                    <h3 className="text-lg font-bold leading-tight">{ach.title}</h3>
                                                    <span className="text-xs font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-sm whitespace-nowrap">
                                                        {ach.award}
                                                    </span>
                                                </div>
                                                <p className="text-muted-foreground/80 text-sm leading-relaxed font-light">{ach.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </StaggerItem>
                            );
                        })}
                    </StaggerContainer>
                </FadeIn>

            </div>
        </SectionWrapper>
    );
}
