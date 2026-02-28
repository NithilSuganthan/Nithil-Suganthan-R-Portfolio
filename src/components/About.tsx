import SectionWrapper from "./SectionWrapper";
import { FadeIn, StaggerContainer, StaggerItem } from "./ui/Motion";
import { aboutData } from "@/data/portfolio";

export default function About() {
    return (
        <SectionWrapper id="about" className="bg-accent/10 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 bg-primary/20 blur-[120px] rounded-full z-0 pointer-events-none" />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center relative z-10">
                <FadeIn direction="right" className="w-full lg:w-1/2">
                    <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-3">About Me</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 md:mb-8 text-foreground">
                        {aboutData.title}
                    </h3>

                    <StaggerContainer className="space-y-4 md:space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                        {aboutData.paragraphs.map((para, index) => (
                            <StaggerItem key={index}>
                                <p>{para}</p>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </FadeIn>

                <FadeIn direction="left" className="w-full lg:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md rounded-2xl md:rounded-3xl bg-card border border-border/50 shadow-2xl p-5 md:p-8 overflow-hidden group">
                        {/* Inner Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-80" />

                        <div className="flex flex-col gap-3 md:gap-4 z-10 relative">
                            <div className="flex items-center gap-2 border-b border-border/50 pb-3 md:pb-4">
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-xs text-muted-foreground font-mono">engineer.config.ts</span>
                            </div>

                            <div className="space-y-1.5 md:space-y-3 font-mono text-xs md:text-sm text-foreground/80 leading-relaxed md:leading-loose">
                                <p><span className="text-purple-400 font-medium">const</span> <span className="text-yellow-400 font-medium">developer</span> = {"{"}</p>
                                <p className="pl-4 md:pl-6"><span className="text-blue-400">name</span>: <span className="text-emerald-400">&quot;Nithil Suganthan&quot;</span>,</p>
                                <p className="pl-4 md:pl-6"><span className="text-blue-400">role</span>: <span className="text-emerald-400">&quot;Software Engineer&quot;</span>,</p>
                                <p className="pl-4 md:pl-6"><span className="text-blue-400">cgpa</span>: <span className="text-orange-400">9.74</span>,</p>
                                <p className="pl-4 md:pl-6"><span className="text-blue-400">focus</span>: [<br />
                                    <span className="pl-8 md:pl-10 text-emerald-400">&quot;Web Architectures&quot;</span>,<br />
                                    <span className="pl-8 md:pl-10 text-emerald-400">&quot;Embedded Systems&quot;</span>,<br />
                                    <span className="pl-8 md:pl-10 text-emerald-400">&quot;EdTech Innovation&quot;</span><br />
                                    <span className="pl-4 md:pl-6">]</span></p>
                                <p>{"}"}</p>

                                <p className="mt-3 md:mt-6"><span className="text-purple-400 font-medium">function</span> <span className="text-yellow-400 font-medium">buildFuture</span>() {"{"}</p>
                                <p className="pl-4 md:pl-6"><span className="text-purple-400 font-medium">return</span> developer.focus.map(<span className="text-orange-400">execute</span>);</p>
                                <p>{"}"}</p>
                            </div>
                        </div>

                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-700" />
                    </div>
                </FadeIn>
            </div>
        </SectionWrapper>
    );
}
