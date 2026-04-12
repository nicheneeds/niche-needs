import { useRef, useEffect } from "react";


interface ChallengeSectionProps {
    selectedWeek: number;
    onSelectWeek: (weekId: number) => void;
}
// this is where you set the week names
export function ChallengeSection({ selectedWeek, onSelectWeek }: ChallengeSectionProps) {
    const isDarkMode = false; // Toggle this to false for light mode
    const usePinkActiveWeek = false; // Toggle this to true for #ff1f7a active week style
    const scrollRef = useRef<HTMLDivElement>(null);

    const weeks = [
        { id: 1, title: "Magic Edit", available: true },
        { id: 2, title: "WhatsOn", available: true },
        { id: 3, title: "WoonWijs", available: true },
        { id: 4, title: "Narrate", available: true },
        { id: 5, title: "?", available: true },
        { id: 6, title: "?", available: false },
        { id: 7, title: "?", available: false },
        { id: 8, title: "?", available: false },
        { id: 9, title: "?", available: false },
        { id: 10, title: "?", available: false },
        { id: 11, title: "?", available: false },
        { id: 12, title: "?", available: false },
        { id: 13, title: "?", available: false },
        { id: 14, title: "?", available: false },
        { id: 15, title: "?", available: false },
    ];

    useEffect(() => {
        const slider = scrollRef.current;
        if (!slider) return;

        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            slider.classList.add('active');
            slider.style.cursor = 'grabbing';
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.style.cursor = 'grab';
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.style.cursor = 'grab';
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseleave', handleMouseLeave);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mousemove', handleMouseMove);
        slider.style.cursor = 'grab';

        return () => {
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className={`w-full ${isDarkMode ? "bg-[#000]" : "bg-[#F9F9F3]"} py-0 pt-0 pl-6 pr-0 md:px-12 lg:px-20 select-none antialiased`}>
            <style dangerouslySetInnerHTML={{
                __html: `
                .hide-scrollbar::-webkit-scrollbar { display: none !important; }
                .hide-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
            `}} />
            <div className="max-w-[1000px] mx-auto">
                {/* Scrollable Container */}
                <div className="mb-6">
                    <h2 className={`font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm ${isDarkMode ? "text-white" : "text-[#2e2e2e]/60"}`}>
                        Weekly shipping. Structured validation.
                    </h2>
                </div>
                <div
                    ref={scrollRef}
                    className="overflow-x-auto hide-scrollbar pb-10 pt-3 -my-4 touch-pan-x"
                >
                    <div className="flex gap-3 min-w-max items-center">
                        {weeks.map((week) => {
                            const isActive = week.id === selectedWeek;
                            return (
                                <div
                                    key={week.id}
                                    className={`relative flex flex-col items-center justify-center ${isActive && !isDarkMode && !usePinkActiveWeek ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]" : ""} ${week.available ? "cursor-pointer" : "cursor-not-allowed opacity-80"}`}
                                    onClick={() => week.available && onSelectWeek(week.id)}
                                >
                                    <div
                                        className={`
                                            relative flex flex-col items-center justify-center
                                            w-22 h-22 md:w-28 md:h-28 rounded-full border transition-all duration-300
                                            ${isActive
                                                ? usePinkActiveWeek
                                                    ? "bg-[#ff1f7a] border-[#ff1f7a] text-white shadow-lg shadow-pink-500/20 z-10"
                                                    : isDarkMode
                                                        ? "bg-[#faf9fc] border-white z-10"
                                                        : "bg-white border-white z-10"
                                                : isDarkMode
                                                    ? "bg-gray-200/25 border-white/10 text-white/50"
                                                    : "bg-gray-100 border-gray-200 text-[#2e2e2e]/40"
                                            }
                                        `}
                                    >
                                        <span
                                            className={`text-[10px] md:text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider font-bold mb-1 ${isActive
                                                ? usePinkActiveWeek
                                                    ? "text-white/80"
                                                    : "text-[#2e2e2e]/60"
                                                : isDarkMode ? "text-white/40" : "text-[#2e2e2e]/30"
                                                }`}
                                        >
                                            {week.available ? `WEEK ${week.id}` : ""}
                                        </span>
                                        <span
                                            className={`text-sm md:text-base font-['Plus_Jakarta_Sans',sans-serif] font-bold text-center leading-tight px-1 flex items-center justify-center ${isActive
                                                ? usePinkActiveWeek
                                                    ? "text-white"
                                                    : "text-[#2e2e2e]"
                                                : isDarkMode ? "text-white/60" : "text-[#2e2e2e]/40"
                                                }`}
                                        >
                                            {week.available ? week.title : ""}
                                        </span>
                                    </div>
                                    {isActive && (
                                        <div className={`absolute -bottom-[6px] left-1/2 transform -translate-x-1/2 w-6 h-6 rotate-45 rounded-sm z-0
                                            ${usePinkActiveWeek
                                                ? "bg-[#ff1f7a] border-r border-b border-[#ff1f7a]"
                                                : isDarkMode
                                                    ? "bg-[#faf9fc] border-r border-b border-white"
                                                    : "bg-white border-r border-b border-white"
                                            }
                                        `} />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
