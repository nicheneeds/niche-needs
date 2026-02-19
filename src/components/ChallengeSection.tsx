export function ChallengeSection() {
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
        <section className="w-full bg-[#2e2e2e] py-12 px-6 md:px-12 lg:px-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-white/40 text-sm tracking-[0.2em] uppercase">
                        15-Week Studio Challenge
                    </h2>
                </div>

                {/* Scrollable Container */}
                <div className="overflow-x-auto hide-scrollbar py-5 -my-4">
                    <div className="flex gap-3 min-w-max items-center">
                        {weeks.map((week) => (
                            <div
                                key={week.id}
                                className={`
                                    relative flex flex-col items-center justify-center
                                    w-24 h-24 md:w-28 md:h-28 rounded-2xl border transition-all duration-300
                                    ${week.active
                                        ? "bg-white border-white scale-105 z-10 shadow-xl shadow-white/5"
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
                                    className={`text-sm md:text-base font-['Plus_Jakarta_Sans',sans-serif] font-bold text-center leading-tight px-1 ${week.active ? "text-[#2e2e2e]" : "text-white/60"
                                        }`}
                                >
                                    {week.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
