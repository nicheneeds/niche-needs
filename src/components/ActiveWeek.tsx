import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { usePostHog } from "@posthog/react";
// import videoAsset from "../assets/content.mp4";
// import videoPoster from "../assets/content-cover.webp";

interface ActiveWeekProps {
    selectedWeek: number;
}

export function ActiveWeek({ selectedWeek }: ActiveWeekProps) {
    const posthog = usePostHog();
    // const videoRef = useRef<HTMLVideoElement>(null);
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple validation
        if (!email.trim()) {
            return;
        }

        setStatus("loading");

        try {
            // This URL will be the Google Apps Script Web App URL
            // For now, we'll try to submit to a placeholder that the user can update
            const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAte2-N-YAqfZueZlqu1METEzuiAw-h-O5_J1XflyuGTX_VOCeXkDmURgTEM1xe1CkOw/exec";

            // Prepare form data for submission
            const queryParams = new URLSearchParams({
                name: `Week ${selectedWeek}`, // Using name field to ensure it gets captured if script only looks for name/email
                email: email,
                week: `Week ${selectedWeek}`, // Adding explicit week param
                timestamp: new Date().toISOString()
            });

            // Using fetch with no-cors if needed, but normally Apps Script supports CORS if set up correctly
            await fetch(`${SCRIPT_URL}?${queryParams.toString()}`, {
                method: 'POST',
                mode: 'no-cors' // This is a common workaround for simple Apps Script submissions
            });

            setStatus("success");

            // Track successful submission in PostHog
            if (posthog) {
                posthog.capture("lead_submitted", {
                    email: email,
                    week: selectedWeek,
                    source: "active_week_form"
                });
                // Also identify the user so future events are linked to this email
                posthog.identify(email, {
                    email: email
                });
            }

            setEmail("");

            // Revert success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Submission error:", error);
            setStatus("error");
        }
    };

    if (selectedWeek !== 1 && selectedWeek !== 2 && selectedWeek !== 3) {
        return null;
    }

    const isWeek1 = selectedWeek === 1;
    const isWeek2 = selectedWeek === 2;
    const isWeek3 = selectedWeek === 3;

    return (
        <section className="w-full bg-[#F9F9F3] pt-0 pb-20 px-6 md:px-12 lg:px-20 lg:pt-0 lg:pb-20 overflow-hidden">
            <div className="max-w-[1000px] mx-auto">
                <div key={selectedWeek} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-in fade-in duration-500">
                    {/* Content */}
                    <div className="flex flex-col gap-3">
                        <div className="space-y-2">
                            {/* <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-sm md:text-base font-medium">
                                Week 1 Is <span className="text-[red]">Live</span>
                            </p> */}
                            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-4xl md:text-5xl lg:text-5xl text-[#2e2e2e] leading-[1.1]">
                                {isWeek1 ? (
                                    <>You Recorded It. <span className="font-['Playfair_Display',sans-serif] italic">Now Post It.</span></>
                                ) : isWeek2 ? (
                                    <>Amsterdam's Best Gigs.<span className="font-['Playfair_Display',sans-serif] italic"> Already In Your Calendar.</span></>
                                ) : (
                                    <>What is <span className="font-['Playfair_Display',sans-serif] italic">Week 3's problem?</span></>
                                )}
                            </h2>
                        </div>

                        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed max-w-xl">
                            {isWeek1 ? (
                                "Turn raw footage into a captioned, trimmed post in one click."
                            ) : isWeek2 ? (
                                "The best Amsterdam gigs added to your calendar in one click."
                            ) : (
                                "Be the first to know when Week 3 is live"
                            )}
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
                                <form onSubmit={handleSubmit} className="relative w-full max-w-lg">
                                    <div className="relative flex flex-col sm:block gap-3 sm:gap-0">
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                            className="w-full bg-white border border-gray-200 py-5 px-5 sm:pr-48 rounded-2xl font-['Plus_Jakarta_Sans',sans-serif] text-lg focus:outline-none transition-all placeholder:text-gray-400"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full sm:w-auto sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:right-2.5 bg-[#141414] hover:bg-[#141414] text-white px-5 py-4 sm:py-3.5 rounded-2xl sm:rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2 mt-2 sm:mt-0"
                                        >
                                            {status === "loading" ? (
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                                            ) : (
                                                <>
                                                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-base sm:text-sm whitespace-nowrap">
                                                        {isWeek3 ? "Get notified" : "Send me access"}
                                                    </span>
                                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                    {status === "error" && (
                                        <p className="absolute -bottom-6 left-4 text-red-500 text-xs font-['Plus_Jakarta_Sans',sans-serif]">
                                            Something went wrong. Please try again.
                                        </p>
                                    )}
                                </form>
                            )}

                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-400 text-sm tracking-wide">
                                Free to try · Access via email
                            </p>

                            <div className="pt-0 max-w-xl">
                                <div className="h-[1px] w-full bg-gray-200/50 mb-4" />
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
                    {isWeek1 ? (
                        <div className="relative group">
                            <div className="   w-full  overflow-hidden relative">
                                <img
                                    src="/week1-hero.png"
                                    alt="Studio Pass Hero"
                                    className="w-full h-auto block"
                                />
                            </div>

                            {/* Shadow/Glow effect */}
                            <div className="absolute -inset-4 bg-[#ff3385]/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ) : isWeek2 ? (
                        <div className="relative group">
                            <div className="w-full overflow-hidden relative">
                                <img
                                    src="/week2-hero.png"
                                    alt="WhatsOn Hero"
                                    className="w-full h-auto block"
                                />
                            </div>

                            {/* Shadow/Glow effect */}
                            <div className="absolute -inset-4 bg-[#ff3385]/5 blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    ) : (
                        <div className="relative group">
                            <div className="w-full aspect-video bg-gray-100 rounded-3xl flex items-center justify-center border border-gray-200 border-dashed">
                                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-400 font-medium">Coming Soon</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
