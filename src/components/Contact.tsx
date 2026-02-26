"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <SectionWrapper id="contact" className="bg-accent/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg">
                        Currently looking for new opportunities. Whether you have a question or just want to say hi,
                        my inbox is always open. I'll try my best to get back to you!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-6 p-8 bg-card border border-border rounded-xl"
                    >
                        <h3 className="text-2xl font-bold mb-2">Contact Info</h3>

                        <a
                            href="mailto:@nithilsuganthan@gmail.com"
                            className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">Email</p>
                                <p>contact@nithilsuganthan@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/nithil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/20 transition-colors">
                                <Linkedin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">LinkedIn</p>
                                <p>linkedin.com/in/nithil</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/Nithil"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                        >
                            <div className="p-3 bg-accent rounded-lg group-hover:bg-primary/20 transition-colors">
                                <Github className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">GitHub</p>
                                <p>github.com/NithilSuganthan</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 text-muted-foreground mt-2">
                            <div className="p-3 bg-accent rounded-lg">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">Location</p>
                                <p>Open for Relocation / Remote</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center h-full p-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's build something</h3>
                        <p className="text-muted-foreground mb-8">
                            I am interested in full-stack web development roles, robotics engineering, embedded systems orchestration, and hardware-software integration. If you think I would be a fast learner and a great fit for an engineering or developer role, I would love to connect!
                        </p>

                        <a
                            href="mailto:contact@nithil.dev"
                            className="inline-flex w-full sm:w-auto self-start items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                        >
                            Say Hello
                        </a>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
}
