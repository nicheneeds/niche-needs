import { useState } from "react";
// import { ArrowRight } from "lucide-react";
// import videoAsset from "../assets/content.mp4";
// import videoPoster from "../assets/content-cover.webp";

export function ActiveWeek() {
    // const videoRef = useRef<HTMLVideoElement>(null);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!formData.name.trim() || !formData.email.trim()) {
            return;
        }

        setStatus("loading");

        try {
            // This URL will be the Google Apps Script Web App URL
            // For now, we'll try to submit to a placeholder that the user can update
            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAte2-N-YAqfZueZlqu1METEzuiAw-h-O5_J1XflyuGTX_VOCeXkDmURgTEM1xe1CkOw/exec";

            // Prepare form data for submission
            const queryParams = new URLSearchParams({
                name: formData.name,
                email: formData.email,
                timestamp: new Date().toISOString()
            });

            // Using fetch with no-cors if needed, but normally Apps Script supports CORS if set up correctly
            await fetch(`${SCRIPT_URL}?${queryParams.toString()}`, {
                method: 'POST',
                mode: 'no-cors' // This is a common workaround for simple Apps Script submissions
            });

            setStatus("success");
            setFormData({ name: "", email: "" });

            // Revert success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    // useEffect(() => {
    //     if (videoRef.current) {
    //         videoRef.current.play().catch(error => {
    //             console.log("Autoplay prevented:", error);
    //         });
    //     }
    // }, []);

    return (
        <section className="w-full bg-[#faf9fc] pt-0 pb-20 px-6 md:px-12 lg:px-20 lg:pt-0 lg:pb-20 overflow-hidden">
            <div className="max-w-[1000px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="flex flex-col gap-3">
                        <div className="space-y-2">
                            {/* <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-sm md:text-base font-medium">
                                Week 1 Is <span className="text-[red]">Live</span>
                            </p> */}
                            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-4xl md:text-5xl lg:text-5xl text-[#2e2e2e] leading-[1.1]">
                                You Recorded It. <span className="font-['Playfair_Display',sans-serif] italic">Now Post It.</span>
                            </h2>
                        </div>

                        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed max-w-xl">
                            Turn raw footage into a captioned, trimmed post in one click.
                        </p>

                        <div className="space-y-4">
                            {status === "success" ? (
                                <div className="bg-[#ff3385]/10 border border-[#ff3385]/20 p-6 rounded-2xl flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#ff3385] rounded-full animate-pulse" />
                                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#ff3385] font-medium">
                                        Got it! Expect access within the hour.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            required
                                            className="flex-1 bg-white border border-gray-200 py-4 px-6 rounded-full font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#ff3385]/20 focus:border-[#ff3385] transition-all"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            required
                                            className="flex-1 bg-white border border-gray-200 py-4 px-6 rounded-full font-['Plus_Jakarta_Sans',sans-serif] focus:outline-none focus:ring-2 focus:ring-[#ff3385]/20 focus:border-[#ff3385] transition-all"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="bg-[#ff3385] hover:bg-[#ff1f7a] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-4 px-10 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-500/20 flex items-center justify-center gap-2 text-lg w-full md:w-fit cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === "loading" ? (
                                            <span className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send me access"
                                        )}
                                    </button>
                                    {status === "error" && (
                                        <p className="text-red-500 text-sm px-4 font-['Plus_Jakarta_Sans',sans-serif]">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}
                                </form>
                            )}

                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-400 text-sm tracking-wide">
                                Free to try · No credit card · I'll send you access within the hour
                            </p>

                            <div className="pt-2 max-w-xl">
                                <div className="h-[1px] w-full bg-gray-200/50 mb-5" />
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/alok.JPG"
                                        alt="Alok"
                                        className="w-10 h-10 rounded-full object-cover  opacity-90"
                                    />
                                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-[13px] leading-relaxed">
                                        Built by <span className="text-[#2e2e2e] font-medium">Alok</span> · 15 years UX at Booking.com & NYC agencies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Video Player Section */}
                    <div className="relative group">
                        <div className="   w-full  overflow-hidden relative">
                            {/* <video
                                ref={videoRef}
                                src={videoAsset}
                                poster={videoPoster}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="w-full h-[318px] block"
                            /> */}
                            <img
                                src="/hero.png"
                                alt="Studio Pass Hero"
                                className="w-full h-auto block"
                            />
                        </div>

                        {/* Shadow/Glow effect */}
                        <div className="absolute -inset-4 bg-[#ff3385]/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>

                {/* Problem & Proof Section */}
                {/* <div className="mt-10 pt-6">
                    <div className="max-w-[1000px]">
                        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <div className="flex-1 flex gap-4 items-start bg-white p-6 rounded-2xl border border-gray-200 w-full">
                                <div className="" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-lg leading-relaxed">
                                    <span className="text-[#2e2e2e] font-bold">The Old Way:</span> You spent 2 hours editing. You posted nothing.
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <ArrowRight className="w-6 h-6 text-[#ff3385]/60 rotate-90 md:rotate-0" />
                            </div>

                            <div className="flex-1 flex gap-4 items-start bg-white p-6 rounded-2xl border border-[#ff3385] w-full ring-1 ring-[#ff3385]/10">
                                <div className="" />
                                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-lg leading-relaxed">
                                    <span className="text-[#ff3385] font-bold">The Agentic Way:</span> Drop it in. Done in 3 minutes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
