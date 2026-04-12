import { useEffect, useState } from 'react';

/**
 * FooterWithCal Component
 * 
 * This version includes the Cal.com booking widget integration in the footer.
 * Use this component when deploying to Netlify/production.
 * 
 * To use this component when deploying:
 * 1. Rename Footer.tsx to Footer-backup.tsx
 * 2. Rename FooterWithCal.tsx to Footer.tsx
 * 
 * OR update HomePage.tsx to import FooterWithCal instead of Footer
 */

export function FooterWithCal() {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;

    script.onload = () => {
      // Initialize Cal.com
      if (typeof window !== 'undefined' && (window as any).Cal) {
        (window as any).Cal("init", "30min", { origin: "https://app.cal.com" });

        setTimeout(() => {
          (window as any).Cal.ns["30min"]("inline", {
            elementOrSelector: "#my-cal-inline-footer",
            config: { layout: "week_view", theme: "dark" },
            calLink: "alex-v-iygco5/30min",
          });

          (window as any).Cal.ns["30min"]("ui", {
            theme: "dark",
            cssVarsPerTheme: { dark: { "cal-brand": "#ECE6E8" } },
            hideEventTypeDetails: true,
            layout: "week_view"
          });

          setCalLoaded(true);
        }, 100);
      }
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <footer id="footer" className="w-full bg-black px-6 py-16 md:py-20 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-1 mb-12">
              <div className="flex">
                <div className="w-5 h-2">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                    <path d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135" stroke="white" strokeLinecap="round" strokeWidth="3.20886" />
                  </svg>
                </div>
                <div className="w-5 h-2">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                    <path d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135" stroke="white" strokeLinecap="round" strokeWidth="3.20886" />
                  </svg>
                </div>
              </div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm md:text-base text-white tracking-[0.3px]">
                NicheNeeds
              </h2>
            </div>

            {/* Heading */}
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
              Ready To{" "}
              <span className="font-['Playfair_Display',sans-serif] italic">Streamline</span><br></br>
              {" "}Your Business?
            </h3>
          </div>

          {/* Right Column - Cal.com Widget */}
          <div
            id="my-cal-inline-footer"
            className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-auto bg-white shadow-lg flex items-center justify-center"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
          >
            {!calLoaded && (
              <div className="text-gray-500 font-['Plus_Jakarta_Sans',sans-serif]">
                Loading calendar...
              </div>
            )}
          </div>
        </div>

        {/* Footer Links - Full Width Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center border-t border-white/10 pt-8">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-sm tracking-[0.28px]">
            Based in Amsterdam, NL
          </p>
          <button className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer">
            Terms of Service
          </button>
          <button className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer">
            Privacy Policy
          </button>
        </div>
      </div>
    </footer>
  );
}