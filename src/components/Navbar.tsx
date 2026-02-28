"use client";

import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Impact", href: "#impact" },
    { name: "Tech Stack", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const handleLinkClick = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="text-xl font-bold tracking-tighter">
                            Nithil<span className="text-muted-foreground"> Suganthan R</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-[60] p-2 -mr-2 text-foreground focus:outline-none"
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {isOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Full-Screen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 md:hidden"
                    >
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                            onClick={handleLinkClick}
                        />

                        {/* Menu Content */}
                        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
                            {/* Nav Links */}
                            <nav className="flex flex-col items-center gap-2 w-full max-w-xs">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{
                                            delay: index * 0.05,
                                            duration: 0.3,
                                            ease: "easeOut",
                                        }}
                                        className="w-full text-center px-6 py-4 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-xl transition-colors active:scale-95 transform"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Decorative Bottom Line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{ delay: 0.3, duration: 0.4 }}
                                className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                            />

                            {/* Mini Brand */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mt-4 text-xs text-muted-foreground/50 tracking-widest uppercase"
                            >
                                Portfolio
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
