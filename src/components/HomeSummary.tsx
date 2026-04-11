export function HomeSummary() {
    return (
        <section className="w-full py-24 px-6 md:px-12 lg:px-20 text-center">
            <div className="max-w-[800px] mx-auto space-y-12 flex flex-col items-center">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-3xl lg:text-3xl text-[#2e2e2e] leading-[1.15] tracking-tight">
                    About Us
                </h2>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed text-center px-2 md:px-20 lg:px-20 mt-[-30px]">
                    First launched in 2025, NicheNeeds is run entirely by Alok, 15 Yr UXer (Ex-Booking.com, R/GA and Rokkan). NicheNeeds works with a curated roster of folks at any given time.
                </p>

                <a
                    href="mailto:hello@nicheneeds.com?subject=Hello"
                    className="bg-[#2e2e2e] hover:bg-[#2e2e2e] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-4 px-10 rounded-full hover:opacity-90 active:opacity-80 shadow-lg shadow-black-500/20 flex items-center justify-center gap-2 text-lg w-full sm:w-fit cursor-pointer mt-[-20px] outline-none"
                >
                    Get In Touch
                </a>

                {/* Amsterdam Canal Houses Image */}
                {/* <div className="aspect-[1/1] rounded-[40px] w-64 h-64 md:w-80 md:h-80 overflow-hidden transform rotate-180 scale-y-[-1]">
                    <img
                        src="/about.png"
                        alt="AI Creative Studio in Amsterdam"
                        className="w-full h-full object-contain scale-[1]"
                    />
                </div> */}

            </div>
        </section>
    );
}