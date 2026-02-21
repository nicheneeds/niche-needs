import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import videoAsset from "../assets/content.mp4";
import videoPoster from "../assets/content-cover.webp";

export function ActiveWeek() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
            });
        }
    }, []);

    return (
        <section className="w-full bg-[#faf9fc] pt-0 pb-20 px-6 md:px-12 lg:px-20 lg:pt-0 lg:pb-20 overflow-hidden">
            <div className="max-w-[1000px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-6">
                        <div className="space-y-2">
                            {/* <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-sm md:text-base font-medium">
                                Week 1 Is <span className="text-[red]">Live</span>
                            </p> */}
                            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-4xl md:text-5xl lg:text-5xl text-[#2e2e2e] leading-[1.1]">
                                No Frills Video Editing For <span className="font-['Playfair_Display',sans-serif] italic">Busy</span> People
                            </h2>
                        </div>

                        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed max-w-xl">
                            Turn your recorded videos into high-impact posts in one step.
                        </p>

                        <div className="space-y-4">
                            <a
                                href="https://chat.whatsapp.com/DdTSkUBHOES6H1lll88u9S"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#ff3385] hover:bg-[#ff1f7a] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-4 px-10 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 text-lg w-fit cursor-pointer"
                            >
                                Get Early Access For Free
                            </a>

                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-400 text-sm tracking-wide">
                                Try now, pay later for Magic Edit.
                            </p>
                        </div>
                    </div>

                    {/* Video Player Section */}
                    <div className="relative group">
                        <div className="bg-[#1a1a1a] rounded-[1rem] w-full  overflow-hidden relative border border-white/5">
                            <video
                                ref={videoRef}
                                src={videoAsset}
                                poster={videoPoster}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="w-full h-auto block"
                            />
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
                            <div className="flex-1 flex gap-4 items-start bg-white p-6 rounded-2xl border border-gray-200 w-full">
                                <div className="" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-lg leading-relaxed">
                                    <span className="text-[#2e2e2e] font-bold">The Old Way:</span> Time-consuming manual captioning, trimming, and assembly.
                                </p>
                            </div>

                            {/* Connection Arrow */}
                            <div className="flex items-center justify-center">
                                <ArrowRight className="w-6 h-6 text-[#ff3385]/60 rotate-90 md:rotate-0" />
                            </div>

                            {/* The Agentic Way */}
                            <div className="flex-1 flex gap-4 items-start bg-white p-6 rounded-2xl border border-[#ff3385] w-full ring-1 ring-[#ff3385]/10">
                                <div className="" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-lg leading-relaxed">
                                    <span className="text-[#ff3385] font-bold">The Agentic Way:</span> One-click transcription, styling, and trimming.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
