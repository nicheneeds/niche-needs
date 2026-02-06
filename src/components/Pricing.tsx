export function Pricing() {
  return (
    <section className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-3xl lg:text-4xl text-center mb-16">
          <span className="font-['Playfair_Display',sans-serif] italic font-normal">Transparent</span> Pricing
        </h2>

        <div className="flex justify-center">
          <div className="bg-black rounded-[10px] px-8 md:px-14 py-12 md:py-16 w-full max-w-[631px]">
            {/* Base Pricing */}
            <div className="mb-12">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-[30px]">
                Base*
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white tracking-[0.28px]">
                <span className="text-[60px] tracking-[-5px]">€1,995</span>
                <span className="text-[14px]"> /assistant</span>
              </p>
            </div>

            {/* Maintenance Pricing */}
            <div className="mb-8">
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-[30px]">
                Maintenance
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white tracking-[0.28px]">
                <span className="text-[60px] tracking-[-5px]">€495</span>
                <span className="text-[14px]"> /month/assistant</span>
              </p>
            </div>

            {/* Guarantee Text */}
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-[14px] tracking-[0.28px]">
              *14-Day Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}