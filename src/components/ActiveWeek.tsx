import { Play, ArrowRight } from "lucide-react";

export function ActiveWeek() {
    return (
        <section className="w-full bg-[#faf9fc] py-18 px-6 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-[1000px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        <div className="space-y-2">
                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white/50 text-sm md:text-base font-medium">
                                {/* Week 2 of 15 Is Live! <span className="text-white"> Magic Edit</span> */}
                            </p>
                            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-4xl md:text-5xl lg:text-6xl text-[#2e2e2e] leading-[1.1]">
                                One Click Editing For <span className="font-['Playfair_Display',sans-serif] italic">
                                    Busy
                                </span> Professionals.
                            </h2>
                        </div>

                        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed max-w-xl">
                            Save time editing your recorded videos.
                        </p>

                        <div className="space-y-4">
                            <button className="bg-[#ff3385] hover:bg-[#ff1f7a] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold py-4 px-10 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 text-lg w-fit">
                                Try It For Free
                                <ArrowRight className="w-5 h-5" />
                            </button>

                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-400 text-sm tracking-wide">
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
                <div className="mt-10 pt-6">
                    <div className="max-w-[1000px]">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            {/* The Old Way */}
                            <div className="flex-1 flex gap-4 items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm w-full">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-lg leading-relaxed">
                                    <span className="text-[#2e2e2e] font-bold">The Old Way:</span> 20-min render times, tedious captioning, context switching.
                                </p>
                            </div>

                            {/* Connection Arrow */}
                            <div className="flex items-center justify-center">
                                <ArrowRight className="w-6 h-6 text-[#ff3385]/60 rotate-90 md:rotate-0" />
                            </div>

                            {/* The Agentic Way */}
                            <div className="flex-1 flex gap-4 items-start bg-white p-6 rounded-2xl border border-[#ff3385]/20 shadow-sm w-full ring-1 ring-[#ff3385]/10">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff3385] shrink-0" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-lg leading-relaxed">
                                    <span className="text-[#ff3385] font-bold">The Agentic Way:</span> One-click transcription, automated styling, and instant validation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
