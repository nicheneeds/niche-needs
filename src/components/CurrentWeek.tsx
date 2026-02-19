export function About() {
  return (
    <section className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20" aria-labelledby="about-heading">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 id="about-heading" className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-3xl lg:text-4xl text-center mb-16">
          About <span className="font-['Playfair_Display',sans-serif] italic font-normal">NicheNeeds</span>
        </h2>

        <div className="w-full max-w-[750px] border border-[#767676] border-dashed rounded-[10px] px-12 py-12 md:px-14 md:py-14">
          <div className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-base text-center tracking-[0.28px] leading-relaxed">
            <p className="mb-4 text-[18px]">
              Launched in 2025, NicheNeeds is a creative studio blending 15+ years of product design sensibility with the speed of frontier AI.
            </p>
            <p className="text-[18px]">
              NicheNeeds is run by Alok, ex-Booking.com and NYC agency veteran, and drives both business efficiency and social connection through hand-crafted experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}