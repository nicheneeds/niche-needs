import image_8f6be7b68e68a2609748da5c52b620473c945cda from '../assets/8f6be7b68e68a2609748da5c52b620473c945cda.png';

export function About() {
    return (
        <section className="w-full px-6 py-18 md:py-20 md:px-12 lg:px-20" aria-label="Hero section">
            <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Left Column - Content */}
                <div className="flex flex-col gap-6 lg:gap-6">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-[#2c2c2c]">
                        NicheNeeds is building {" "}
                        <span className="font-['Playfair_Display',sans-serif] italic font-normal">
                            magic
                        </span> in Amsterdam.
                    </h1>

                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-base md:text-lg tracking-[0.3px] leading-relaxed">
                        Launched in 2025, we're a creative lab blending 15+ years of product design experience with the speed of agentic AI.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://instagram.com/nicheneeds.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#2c2c2c] text-neutral-100 px-[32px] py-[16px] rounded-full border border-[#2c2c2c] hover:bg-[#1e1e1e] transition-colors whitespace-nowrap cursor-pointer inline-block text-center"
                            aria-label="Follow NicheNeeds on Instagram"
                        >
                            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm text-[16px]">Learn About Our Studio Journey</span>
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