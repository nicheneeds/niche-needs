import { useRef, useEffect } from "react";

export function ChallengeSection() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const weeks = [
        { id: 1, title: "Magic Edit", active: true },
        { id: 2, title: "?", active: false },
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
        <section className="w-full bg-[#000] py-4 pt-0 pl-6 pr-0 md:px-12 lg:px-20 select-none">
            <div className="max-w-[1200px] mx-auto">
                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="overflow-x-auto hide-scrollbar py-5 -my-4 touch-pan-x"
                >
                    <div className="flex gap-3 min-w-max items-center">
                        {weeks.map((week) => (
                            <div
                                key={week.id}
                                className={`
                                    relative flex flex-col items-center justify-center
                                    w-24 h-24 md:w-28 md:h-28 rounded-full border transition-all duration-300
                                    ${week.active
                                        ? "bg-white border-white  z-10 "
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
                                    className={`text-sm md:text-base font-['Plus_Jakarta_Sans',sans-serif] font-bold text-center leading-tight px-1 ${week.active ? "text-[#000]" : "text-white/60"
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
