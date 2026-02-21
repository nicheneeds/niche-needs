import image_8f6be7b68e68a2609748da5c52b620473c945cda from '../assets/8f6be7b68e68a2609748da5c52b620473c945cda.png';

export function About() {
    return (
        <section className="w-full px-6 py-18 md:py-20 md:px-12 lg:px-20" aria-label="Hero section">
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Left Column - Content */}
                <div className="flex flex-col gap-6 lg:gap-6">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-4xl md:text-5xl lg:text-5xl text-[#2e2e2e] leading-[1.1]">
                        We're Building {" "}
                        <span className="font-['Playfair_Display',sans-serif] italic font-normal">
                            Magic
                        </span> In Amsterdam.
                    </h1>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed max-w-xl">
                        Launched in 2025, NicheNeeds is a creative lab blending 15+ years of product design experience with the speed of agentic AI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://instagram.com/nicheneeds.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2e2e2e] hover:bg-[#2e2e2e] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-4 px-10 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black-500/20 flex items-center justify-center gap-2 text-lg w-full sm:w-fit cursor-pointer"
                        >
                            Learn More About Our Story
                        </a>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden transform rotate-180 scale-y-[-1]">
                        <img
                            src={image_8f6be7b68e68a2609748da5c52b620473c945cda}
                            alt="AI Creative Studio in Amsterdam - Two business professionals discussing AI solutions with Amsterdam canal houses in the background"
                            className="w-full h-full object-contain scale-[1]"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}