
const svgPaths = {
  p3b9edac0: "M48 9.6C26.8 9.6 9.6 26.8 9.6 48s17.2 38.4 38.4 38.4 38.4-17.2 38.4-38.4S69.2 9.6 48 9.6zm0 71.04c-18.05 0-32.64-14.59-32.64-32.64S29.95 15.36 48 15.36 80.64 29.95 80.64 48 66.05 80.64 48 80.64zM50.88 28.8h-5.76v21.12l18.24 10.94 2.88-4.7-15.36-9.12V28.8z",
  p180f0f00: "M47.5 9.5C26.55 9.5 9.5 26.55 9.5 47.5S26.55 85.5 47.5 85.5 85.5 68.45 85.5 47.5 68.45 9.5 47.5 9.5zm0 71.25C29.15 80.75 14.25 65.85 14.25 47.5S29.15 14.25 47.5 14.25 80.75 29.15 80.75 47.5 65.85 80.75 47.5 80.75z",
  p18f5500: "M47.5 23.75c-13.11 0-23.75 10.64-23.75 23.75s10.64 23.75 23.75 23.75 23.75-10.64 23.75-23.75-10.64-23.75-23.75-23.75zm0 42.75c-10.49 0-19-8.51-19-19s8.51-19 19-19 19 8.51 19 19-8.51 19-19 19z",
  pce09e00: "M47.5 38c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5zm0 14.25c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75z",
  p6dff990: "M40 8C17.9 8 0 22.3 0 40c0 10.8 6.6 20.3 16.6 26.2-0.8 3-3.1 10.2-3.3 10.8-0.6 1.9 1 3.5 2.5 2.3 0.6-0.5 13.9-9.1 16.2-10.6 2.6 0.4 5.3 0.6 8 0.6 22.1 0 40-14.3 40-32S62.1 8 40 8z"
};

function ClockIcon() {
  return (
    <div className="w-16 h-16">
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 96 96"
      >
        <path
          d={svgPaths.p3b9edac0}
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

function TargetIcon() {
  return (
    <div className="w-24 h-16">
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 95 95"
      >
        <path
          d={svgPaths.p180f0f00}
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d={svgPaths.p18f5500}
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d={svgPaths.pce09e00}
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

function MessageIcon() {
  return (
    <div className="w-16 h-16">
      <svg
        className="w-full h-full"
        fill="none"
        viewBox="0 0 80 80"
      >
        <path
          d={svgPaths.p6dff990}
          stroke="#1E1E1E"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}

export function Features() {
  return (
    <section className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-3xl lg:text-4xl text-center mb-16">
          How We{" "}
          <span className="font-['Playfair_Display',sans-serif] italic font-normal">
            Grow
          </span>{" "}
          Your Business With AI
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center gap-6">
            <TargetIcon />
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(0,0,0)] text-lg tracking-[0.28px]">
              24/7 Voice AI
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] tracking-[0.28px] leading-relaxed text-[16px]">
              Never miss a call or booking again. Our AI answers every customer, every time.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center gap-6">
            <ClockIcon />
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(44,44,44)] text-lg tracking-[0.28px]">
              Smarter Workflows
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] tracking-[0.28px] leading-relaxed text-[16px]">
              Cut out the busywork. We automate your repetitive admin so you can focus on growth.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center gap-6">
            <MessageIcon />
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[rgb(44,44,44)] text-lg tracking-[0.28px]">
              Effortless Growth
            </h3>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] tracking-[0.28px] leading-relaxed text-[16px]">
              Get the tech-edge of a big corporation on a local business budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}