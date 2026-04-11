export function HomeHero() {
    return (
        <section className="w-full pt-10 pb-8 px-6 md:px-12 lg:px-20 text-center">
            <div className="max-w-[700px] mx-auto">
                {/* <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl md:text-5xl lg:text-4xl text-[#2e2e2e] leading-[1.15] px-10 tracking-tight">
                    NicheNeeds is a creative studio crafting{" "}
                    <span className="font-['Playfair_Display',sans-serif] italic">
                        AI magic
                    </span>{" "}
                    in Amsterdam.
                </h2> */}
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl md:text-4xl lg:text-4xl text-[#2e2e2e] leading-[1.15] px-0 md:px-25 lg:px-20 tracking-[-0.5px]">
                    A creative studio building{" "}
                    <span className="font-['Playfair_Display',sans-serif] italic">
                        magic
                    </span>{" "}
                    in Amsterdam.
                </h2>
            </div>
        </section>
    );
}