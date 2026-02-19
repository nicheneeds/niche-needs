import { Play, ArrowRight } from "lucide-react";

export function ActiveWeek() {
    return (
        <section className="w-full bg-[#2e2e2e] py-12 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <div className="space-y-2">
                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/50 text-sm md:text-base font-medium">
                                Week 2/15: <span className="text-white">Live Now.</span>
                            </p>
                            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
                                One Click Editing For Busy Professionals.
                            </h2>
                        </div>

                        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
                            Transcription pipeline for UXers. Visualize your ideas with one click, skip the render wait.
                        </p>

                        <div className="space-y-4">
                            <button className="bg-[#ff3385] hover:bg-[#ff1f7a] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold py-4 px-10 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 text-lg w-fit">
                                Secure Your Research Spot $9
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/40 text-sm tracking-wide">
                                Risk Free: 10 spots only. Refunded if the goal is hit by Friday.
                            </p>
                        </div>
                    </div>

                    {/* Video Player Mockup */}
                    <div className="relative group order-1 lg:order-2">
                        <div className="bg-[#1a1a1a] rounded-[2rem] aspect-video w-full shadow-2xl overflow-hidden relative border border-white/5">
                            {/* Window Controls */}
                            <div className="absolute top-6 left-6 flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                        <Play className="w-5 h-5 text-black fill-current ml-0.5" />
                                    </div>
                                </div>
                            </div>

                            {/* Pink Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-black/40">
                                <div className="h-full bg-[#ff3385] w-[40%]" />
                            </div>
                        </div>

                        {/* Shadow/Glow effect */}
                        <div className="absolute -inset-4 bg-[#ff3385]/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* Problem & Proof Section */}
                <div className="mt-20 pt-12 border-t border-white/5">
                    <div className="max-w-4xl">
                        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-xl md:text-2xl text-white mb-6">
                            Problem & Proof
                        </h3>
                        <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/70 text-lg md:text-xl mb-10 leading-relaxed">
                            Instead of a generic features list, we use a <span className="text-white font-bold">Before vs. After</span> comparison that highlights the engineering lifecycle reduction achieved:
                        </p>

                        <div className="space-y-0 relative">
                            <div className="flex gap-5 items-start bg-white/5 p-6 rounded-2xl border border-white/5 relative z-10">
                                <div className="mt-3 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/50 text-lg md:text-xl leading-relaxed">
                                    <span className="text-white font-bold">The Old Way:</span> 20-minute render times, tedious captioning, context switching.
                                </p>
                            </div>

                            {/* Connection Arrow */}
                            <div className="flex justify-start pl-12 py-4 relative z-0">
                                <div className="w-px h-8 bg-gradient-to-b from-white/10 to-[#ff3385]/30 ml-0.5" />
                                <ArrowRight className="w-5 h-5 text-[#ff3385] -ml-2.5 mt-8 rotate-90" />
                            </div>

                            <div className="flex gap-5 items-start bg-[#ff3385]/10 p-6 rounded-2xl border border-[#ff3385]/20 relative z-10">
                                <div className="mt-3 w-1.5 h-1.5 rounded-full bg-[#ff3385] shrink-0" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/50 text-lg md:text-xl leading-relaxed">
                                    <span className="text-white font-bold">The Agentic Way:</span> One-click transcription, automated styling, and "Draft Mode" for instant validation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
