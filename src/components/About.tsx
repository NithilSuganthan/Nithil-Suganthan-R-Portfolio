import SectionWrapper from "./SectionWrapper";

export default function About() {
    return (
        <SectionWrapper id="about" className="bg-accent/20">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                    <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>

                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            I am a high-achieving B.Tech IT undergraduate (CGPA 9.74/10) with a relentless problem-solving mindset. Recognized with an academic excellence scholarship, my approach bridges advanced software engineering with hardware-level logic.
                        </p>
                        <p>
                            My technical ecosystem spans from full-stack web architectures using React, Next.js, and Node.js, down to the metal with Arduino, ESP32, and custom robotics. I believe the best engineers operate at the intersection of bits and atoms, optimizing systems for scale, performance, and real-world impact.
                        </p>
                        <p>
                            Recently, my innovative approach to embedded systems led to the publication of a patent for an <strong>AI-Integrated Digital Watch</strong>. Beyond building systems, I am deeply committed to education, frequently mentoring students and designing code curriculum to elevate the next generation of engineers.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center">
                    {/* Abstract representation of code/hardware intersection */}
                    <div className="relative w-full max-w-md aspect-square rounded-2xl bg-card border border-border shadow-lg p-8 overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>

                        <div className="flex flex-col gap-4 h-full z-10 relative">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>

                            <div className="space-y-3 font-mono text-sm text-foreground/80">
                                <p><span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span> = {"{"}</p>
                                <p className="pl-4"><span className="text-blue-400">name</span>: <span className="text-green-400">"Nithil"</span>,</p>
                                <p className="pl-4"><span className="text-blue-400">role</span>: <span className="text-green-400">"Software Engineer"</span>,</p>
                                <p className="pl-4"><span className="text-blue-400">focus</span>: [<span className="text-green-400">"Web"</span>, <span className="text-green-400">"Robotics"</span>, <span className="text-green-400">"IoT"</span>]</p>
                                <p>{"}"};</p>
                                <br />
                                <p><span className="text-purple-400">function</span> <span className="text-yellow-300">buildFuture</span>() {"{"}</p>
                                <p className="pl-4"><span className="text-blue-400">return</span> developer.focus.map(<span className="text-orange-400">engineer</span>);</p>
                                <p>{"}"}</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
