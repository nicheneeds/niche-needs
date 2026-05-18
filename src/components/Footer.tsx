import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-black px-6 pt-20 pb-16 md:pt-20 md:pb-20 md:px-12 lg:px-20 -mt-px"
    >
      <div className="max-w-[900px] mx-auto flex flex-col items-center text-center">
        {/* Vertical Layout */}
        <div className="mb-2 flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4 justify-center">
            <div className="flex">
              <div className="w-5 h-5">
                <svg
                  className="w-full h-full"
                  width="22"
                  height="12"
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
                  width="22"
                  height="12"
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
            {/* <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm md:text-base text-white tracking-[0.3px]">
              NicheNeeds
            </h2> */}
          </div>

          {/* Heading */}
          {/* <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-3xl md:text-3xl lg:text-3xl leading-tight mb-0">
            15 Yrs of UX taste + AI speed
            <br></br>
          </h3> */}

          {/* Email CTA */}
          {/* <a
            href="mailto:hello@nicheneeds.com"
            className="inline-flex items-center gap-2 bg-white text-black font-['Plus_Jakarta_Sans',sans-serif] font-medium px-8 py-4 rounded-full group"
          >
            <span className="tracking-[0.28px]">Get In Touch</span>
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
          </a> */}
        </div>

        {/* Footer Links - Full Width Section */}
        <div className="w-full flex flex-col items-center gap-4 pt-2">
          {/* Row 1: Links */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center">
            <a
              href="https://instagram.com/alok.builds"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.75} />
              Instagram
            </a>
            <a
              href="mailto:hello@nicheneeds.com?subject=I have a question"
              className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
            >
              Contact Us
            </a>
            <Link
              to="/terms"
              className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </Link>
          </div>

          {/* Row 2: Location + KVK */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 items-center justify-center">
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px]">
              Based in Amsterdam, NL
            </p>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] font-medium text-sm tracking-[0.28px]">
              KVK: 89911431
            </p>
          </div>

          {/* Row 3: Copyright */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm tracking-[0.28px]">
            Copyright © 2026 Studio Niche Needs
          </p>
        </div>
      </div>
    </footer>
  );
}