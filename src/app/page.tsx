import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Certifications from "@/components/Certifications";
import ProofOfWork from "@/components/ProofOfWork";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProofOfWork />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

// Fixed import cache
