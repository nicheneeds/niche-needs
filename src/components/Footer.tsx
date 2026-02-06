import { Instagram } from "lucide-react";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer
      id="footer"
      className="w-full bg-black px-6 py-16 md:py-20 md:px-12 lg:px-20 -mt-px"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Vertical Layout */}
        <div className="mb-16">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-12">
            <div className="flex">
              <div className="w-5 h-5">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 22 12"
                >
                  <path
                    d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135"
                    stroke="white"
                    strokeLinecap="round"
                    strokeWidth="3.20886"
                  />
                </svg>
              </div>
              <div className="w-5 h-5 ml-1">
                <svg
                  className="w-full h-full"
                  fill="none"
                  viewBox="0 0 22 12"
                >
                  <path
                    d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135"
                    stroke="white"
                    strokeLinecap="round"
                    strokeWidth="3.20886"
                  />
                </svg>
              </div>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm md:text-base text-white tracking-[0.3px]">
              NicheNeeds
            </h2>
          </div>

          {/* Heading */}
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
            Looking for {" "}
            <span className="font-['Playfair_Display',sans-serif] italic">
              AI
            </span>
            <br></br> expertise?
          </h3>

          {/* Email CTA */}
          <a
            href="mailto:hello@nicheneeds.com"
            className="inline-flex items-center gap-2 bg-white text-black font-['Plus_Jakarta_Sans',sans-serif] font-medium px-8 py-4 rounded-full group"
          >
            <span className="tracking-[0.28px]">Email Us</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        {/* Footer Links - Full Width Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center border-t border-white/10 pt-8">
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-sm tracking-[0.28px]">
            Based in Amsterdam, NL
          </p>
          <a
            href="https://instagram.com/nicheneeds.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.75} />
            Instagram
          </a>
          <button
            onClick={() => onNavigate?.('terms')}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => onNavigate?.('refunds')}
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer"
          >
            Refund Policy
          </button>
          <a
            href="https://niche-needs.notion.site/Privacy-Policy-2dcbf22fe25680838282c35a261f1506?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}