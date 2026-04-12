export function ChallengeBanner() {
    const weeks = [
        { id: 1, title: "Magic Edit", active: false },
        { id: 2, title: "Draft Mode", active: true },
        { id: 3, title: "?", active: false },
        { id: 4, title: "?", active: false },
        { id: 5, title: "?", active: false },
        { id: 6, title: "?", active: false },
        { id: 7, title: "?", active: false },
        { id: 8, title: "?", active: false },
        { id: 9, title: "?", active: false },
        { id: 10, title: "?", active: false },
        { id: 11, title: "?", active: false },
        { id: 12, title: "?", active: false },
        { id: 13, title: "?", active: false },
        { id: 14, title: "?", active: false },
        { id: 15, title: "?", active: false },
    ];

    return (
        <div className="bg-[#2e2e2e] py-4 border-b border-white/5">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                {/* Scrollable Container */}
                <div className="overflow-x-hidden hide-scrollbar py-5 -my-4 px-4">
                    <div className="flex gap-3 min-w-max items-center">
                        {weeks.map((week) => (
                            <div
                                key={week.id}
                                className={`
                                    relative flex flex-col items-center justify-center
                                    w-20 h-20 md:w-24 md:h-24 rounded-xl border transition-all duration-300
                                    ${week.active
                                        ? "bg-white border-white scale-105 z-10 shadow-lg shadow-white/10"
                                        : "bg-white/5 border-white/10 text-white/50"
                                    }
                                `}
                            >
                                <span
                                    className={`text-[10px] md:text-xs font-['Plus_Jakarta_Sans',sans-serif] tracking-wider mb-1 ${week.active ? "text-[#2e2e2e]/60" : "text-white/40"
                                        }`}
                                >
                                    WEEK {week.id}
                                </span>
                                <span
                                    className={`text-sm md:text-md font-['Plus_Jakarta_Sans',sans-serif] font-bold text-center leading-tight px-1 ${week.active ? "text-[#2e2e2e]" : "text-white/60"
                                        }`}
                                >
                                    {week.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
