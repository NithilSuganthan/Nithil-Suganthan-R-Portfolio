"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Rocket, Lightbulb, Users, Code } from "lucide-react";

export default function Startup() {
    return (
        <SectionWrapper id="startup" className="bg-accent/20">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

                <div className="w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-card border border-border shadow-lg rounded-2xl p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Rocket size={120} />
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Startup Venture
                        </div>

                        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2">Inventobots</h2>
                        <h3 className="text-xl md:text-2xl text-muted-foreground font-medium mb-8 uppercase tracking-widest">Academy</h3>

                        <div className="space-y-6 text-foreground/80 leading-relaxed">
                            <p>
                                As the <strong>Founder and Developer</strong> of Inventobots Academy, my mission is to democratize rigorous technical engineering education. We are building a platform dedicated to teaching robotics, coding, and hardware innovation.
                            </p>
                            <p>
                                From initial concept to full-stack execution, I am architecting the digital infrastructure and core curriculum that will empower students to build real-world physical and digital systems.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                        >
                            <Lightbulb className="w-8 h-8 text-yellow-500 mb-4" />
                            <h4 className="font-bold mb-2">Innovation Focus</h4>
                            <p className="text-sm text-muted-foreground">Merging web software logic with physical robotics engineering.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                        >
                            <Code className="w-8 h-8 text-blue-500 mb-4" />
                            <h4 className="font-bold mb-2">Tech Stack</h4>
                            <p className="text-sm text-muted-foreground">Building the platform infrastructure completely from scratch.</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-colors sm:col-span-2"
                        >
                            <Users className="w-8 h-8 text-primary mb-4" />
                            <h4 className="font-bold mb-2">Future Roadmap</h4>
                            <p className="text-sm text-muted-foreground">Scaling online cohorts, deploying interactive browser-based hardware simulators, and partnering with educational institutions.</p>
                        </motion.div>
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
}
