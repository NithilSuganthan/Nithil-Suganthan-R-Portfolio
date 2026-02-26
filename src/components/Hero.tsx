"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/50 border border-border mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-sm font-medium text-muted-foreground">Available for work</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
                >
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">Nithil</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl md:text-3xl font-medium text-muted-foreground mb-4 max-w-3xl mx-auto"
                >
                    Engineer | Educator | Founder
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground/80 mb-10 max-w-2xl mx-auto"
                >
                    Building scalable web solutions, designing complex robotics systems, and inspiring the next generation of engineers through education.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <span>View Projects</span>
                        <ArrowRight size={18} />
                    </a>
                    <a
                        href="https://github.com/Nithil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-transparent border border-border text-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                        <span>GitHub</span>
                        <ArrowRight size={18} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
