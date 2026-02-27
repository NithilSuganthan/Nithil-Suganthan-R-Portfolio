"use client";

import { impactData } from "@/data/portfolio";
import SectionWrapper from "./SectionWrapper";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/Motion";

export default function ProofOfWork() {
    return (
        <SectionWrapper id="impact" className="bg-accent/5 border-y border-border/50">
            <FadeIn direction="up" className="text-center mb-12">
                <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">Developer Impact</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight">Proof of Work</h3>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {impactData.map((stat, index) => (
                    <StaggerItem key={index}>
                        <div className="flex flex-col items-center justify-center p-6 bg-card border border-border/50 rounded-2xl shadow-sm hover:border-primary/50 transition-colors h-full">
                            <span className="text-4xl md:text-5xl font-black text-foreground mb-2">{stat.value}</span>
                            <span className="text-sm text-muted-foreground font-medium text-center">{stat.label}</span>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
        </SectionWrapper>
    );
}
