"use client";

import SectionWrapper from "./SectionWrapper";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/Motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { contactData } from "@/data/portfolio";

export default function Contact() {
    const socialLinks = [
        {
            name: "GitHub",
            url: contactData.github,
            icon: <Github className="w-6 h-6" />,
            color: "hover:bg-[#333] hover:border-[#333] hover:text-white"
        },
        {
            name: "LinkedIn",
            url: contactData.linkedin,
            icon: <Linkedin className="w-6 h-6" />,
            color: "hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white"
        },
        {
            name: "Email",
            url: `mailto:${contactData.email}`,
            icon: <Mail className="w-6 h-6" />,
            color: "hover:bg-primary hover:border-primary hover:text-primary-foreground"
        }
    ];

    return (
        <SectionWrapper id="contact" className="pb-32">
            <div className="max-w-4xl mx-auto text-center">

                <FadeIn direction="up">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-8 border border-primary/20">
                        Let's Connect
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Get In Touch
                    </h2>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-12">
                        Whether you have a compelling project, a role that fits my engineering profile, or just want to discuss tech and innovation, my inbox is always open.
                    </p>
                </FadeIn>

                <StaggerContainer className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    {socialLinks.map((link) => (
                        <StaggerItem key={link.name} className="w-full sm:w-auto">
                            <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group flex items-center justify-center md:justify-start gap-4 px-8 py-4 bg-card border border-border/50 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-xl ${link.color}`}
                            >
                                {link.icon}
                                <span className="font-bold tracking-wide">{link.name}</span>
                                <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                            </a>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

            </div>
        </SectionWrapper>
    );
}
