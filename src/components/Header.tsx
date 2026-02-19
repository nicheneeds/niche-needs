import { Link } from "react-router-dom";
// import { Bell } from "lucide-react";
// import { BellDot } from "lucide-react";

export function Header() {
  const isDarkMode = false; // Toggle this to false for light mode

  return (
    <header className={`w-full ${isDarkMode ? "bg-[#000]" : "bg-[#faf9fc]"} px-6 py-6 pb-4 md:px-12 lg:px-20`}>
      <div className="max-w-[1000px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity cursor-pointer">
          <div className="flex">
            <div className="w-5 h-5">
              <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                <path
                  d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135"
                  stroke={isDarkMode ? "white" : "#2e2e2e"}
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <div className="w-5 h-5 ml-1">
              <svg className="w-full h-full" fill="none" viewBox="0 0 22 12">
                <path
                  d="M20.3229 9.88135C18.9334 -1.15029 2.92562 -1.1587 1.60459 9.88135"
                  stroke={isDarkMode ? "white" : "#2e2e2e"}
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          <h1 className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm md:text-base tracking-[0.3px] ${isDarkMode ? "text-white" : "text-[#2e2e2e]"}`}>
            NicheNeeds
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="md:flex items-center gap-2">
          <a
            href="https://instagram.com/nicheneeds.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-['Plus_Jakarta_Sans',sans-serif] font-medium text-sm tracking-[0.28px] hover:opacity-70 transition-opacity cursor-pointer flex items-center gap-2 ${isDarkMode ? "text-[#fff]" : "text-[#2e2e2e]"}`}
          >

            {/* <Bell className="w-4 h-4" strokeWidth={3.20886} /> */}
            {/* <BellDot
              className="[&>circle]:fill-red-500 [&>circle]:stroke-red-500" strokeWidth={3.20886}
              size={16}
            /> */}
          </a>
        </nav>
      </div>
    </header>
  );
}