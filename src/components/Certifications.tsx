"use client";

import SectionWrapper from "./SectionWrapper";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/Motion";

export default function Certifications() {
    return (
        <SectionWrapper id="certifications" className="bg-accent/5">
            <FadeIn direction="up" className="text-center mb-16">
                <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Continuous Learning</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">Certifications</h3>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Formal training and verified credentials spanning databases, algorithms, and computer architecture.
                </p>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {certifications.map((cert, index) => (
                    <StaggerItem key={index}>
                        <div className="group relative bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:bg-accent/20 transition-all duration-300 h-full flex flex-col justify-between">
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="p-2.5 bg-primary/10 text-primary rounded-xl group-hover:scale-110 transition-transform duration-300">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                                <h3 className="text-lg font-bold leading-tight mb-2 tracking-tight group-hover:text-primary transition-colors">{cert.title}</h3>
                            </div>
                            <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{cert.issuer}</span>
                            </div>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </SectionWrapper>
    );
}
