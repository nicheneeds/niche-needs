import { Link } from "react-router-dom";
import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-[#000] text-black px-6 py-6 pb-4 md:px-12 lg:px-20">
      <div className="max-w-[1000px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
          <div className="flex">
            <div className="w-5 h-5">
              <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                <path d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135" stroke="white" strokeLinecap="round" strokeWidth="3.20886" />
              </svg>
            </div>
            <div className="w-5 h-5 ml-1">
              <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                <path d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135" stroke="white" strokeLinecap="round" strokeWidth="3.20886" />
              </svg>
            </div>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm md:text-base tracking-[0.3px] text-white">NicheNeeds: 15-Week MVP Challenge</h1>
        </Link>

        {/* Navigation */}
        <nav className="md:flex items-center gap-2">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[white] text-sm"> </span>
          <a
            href="https://instagram.com/nicheneeds.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#fff] text-sm tracking-[0.28px] hover:text-white transition-colors cursor-pointer flex items-center gap-2"
          >
            <Bell className="w-4 h-4" strokeWidth={2} />
          </a>
          {/* <Link
            to="/assistants"
            className="px-4 py-2 rounded-full hover:bg-black/5 transition-colors cursor-pointer"
          >
            <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1e1e1e] text-sm">Assistant Showcase</span>
          </Link> */}
        </nav>
      </div>
    </header>
  );
}