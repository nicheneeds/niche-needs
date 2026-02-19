import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="w-full bg-[#ece6e8] text-black px-6 py-10 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
          <div className="flex">
            <div className="w-5 h-5">
              <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                <path d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135" stroke="black" strokeLinecap="round" strokeWidth="3.20886" />
              </svg>
            </div>
            <div className="w-5 h-5 ml-1">
              <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                <path d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135" stroke="black" strokeLinecap="round" strokeWidth="3.20886" />
              </svg>
            </div>
          </div>
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm md:text-base tracking-[0.3px] text-black">NicheNeeds: Week 1 of 15-Week MVP Challenge</h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2">
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