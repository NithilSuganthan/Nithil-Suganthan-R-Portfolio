"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/Motion";
import { heroData } from "@/data/portfolio";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Premium Background Gradients */}
            <div className="absolute inset-x-0 top-0 h-[500px] opacity-20 bg-gradient-to-b from-primary/20 via-transparent to-transparent z-0 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 bg-primary/30 blur-[100px] rounded-full z-0 pointer-events-none" />

            <StaggerContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">

                <StaggerItem>
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground border border-border/50 backdrop-blur-md mb-8 shadow-sm">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-sm font-medium tracking-wide uppercase">{heroData.roles.join(" • ")}</span>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-4 md:mb-6 leading-tight">
                        Hi, I'm <br className="sm:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50">
                            {heroData.name.split(" ")[0]}
                        </span>
                    </h1>
                </StaggerItem>

                <StaggerItem>
                    <p className="text-lg md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                        {heroData.description}
                    </p>
                </StaggerItem>

                <StaggerItem>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center w-full sm:w-auto overflow-hidden rounded-full p-4 px-8 font-medium bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>View Projects</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a
                            href="https://github.com/NithilSuganthan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center space-x-2 w-full sm:w-auto bg-card text-card-foreground border border-border/50 px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors hover:border-border duration-300"
                        >
                            <span>GitHub</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-muted-foreground" />
                        </a>
                    </div>
                </StaggerItem>

            </StaggerContainer>

            {/* Animated Scroll Indicator */}
            <FadeIn delay={1} direction="down" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </FadeIn>
        </section>
    );
}
