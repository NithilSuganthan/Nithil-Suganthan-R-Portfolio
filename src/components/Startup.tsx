"use client";

import SectionWrapper from "./SectionWrapper";
import { StaggerItem, StaggerContainer, FadeIn } from "./ui/Motion";
import { Rocket, Lightbulb, Users, Code } from "lucide-react";
import { startupData } from "@/data/portfolio";

export default function Startup() {
    const mapIcon = (title: string) => {
        if (title.includes("Innovation")) return <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />;
        if (title.includes("Stack")) return <Code className="w-8 h-8 text-blue-500 mb-4" />;
        return <Users className="w-8 h-8 text-primary mb-4" />;
    };

    return (
        <SectionWrapper id="startup" className="bg-accent/10 relative overflow-hidden">
            {/* Decorative Blur Effect */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 -translate-x-1/2 opacity-10 bg-primary/40 blur-[100px] rounded-full z-0 pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">

                <FadeIn direction="right" className="w-full lg:w-5/12">
                    <div className="bg-card border border-border/50 shadow-2xl rounded-3xl p-10 relative overflow-hidden group">
                        {/* Background Glow on Card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-80" />

                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                            <Rocket size={140} />
                        </div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 border border-primary/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                {startupData.role}
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-2">
                                {startupData.name}
                            </h2>
                            <h3 className="text-xl md:text-2xl text-muted-foreground font-semibold mb-8 tracking-widest uppercase">
                                {startupData.suffix}
                            </h3>

                            <div className="space-y-6 text-muted-foreground leading-relaxed font-light text-lg">
                                <p>{startupData.mission}</p>
                                <p>{startupData.details}</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                <div className="w-full lg:w-7/12">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {startupData.roadmap.map((item, index) => (
                            <StaggerItem key={index} className={index === 2 ? "sm:col-span-2" : ""}>
                                <div className="h-full bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
                                    {mapIcon(item.title)}
                                    <h4 className="font-bold text-xl tracking-tight mb-3">{item.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>

            </div>
        </SectionWrapper>
    );
}
