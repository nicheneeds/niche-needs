import { Project } from "../data/projects";

interface ProjectShowcaseProps {
    projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
    return (
        <section className="w-full px-6 md:px-12 lg:px-20">
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-4xl md:text-4xl lg:text-4xl text-[#2e2e2e] leading-[1.1] pb-10 text-center">
                ↡
            </h3>
            <div className="flex flex-col gap-24 md:gap-32">

                {projects.map((project, index) => {
                    if (project.video) {
                        return (
                            <div key={project.id} className="w-full max-w-[900px] mx-auto flex flex-col items-center gap-8">
                                <div className="w-full rounded-[20px] overflow-hidden">
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="auto"
                                        className="w-full h-auto block pointer-events-none scale-125 origin-center -translate-y-[6%]"
                                    />
                                </div>
                                <div className="w-full max-w-[640px] flex flex-col gap-6 items-center">
                                    <div className="space-y-4">
                                        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-4xl lg:text-4xl text-[#2e2e2e] leading-[1.1] px-5 text-center">
                                            {project.title}
                                        </h3>
                                        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed text-center">
                                            {project.description}
                                        </p>
                                    </div>
                                    <a
                                        href={project.buttonLink} target="_blank"
                                        className="bg-[#2e2e2e] hover:bg-[#2e2e2e] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-4 px-10 rounded-full hover:opacity-90 active:opacity-80 shadow-lg shadow-black-500/20 flex items-center justify-center gap-2 text-lg w-full sm:w-fit cursor-pointer outline-none"
                                    >
                                        {project.buttonText}
                                    </a>
                                </div>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={project.id}
                            className={`max-w-[900px] mx-auto w-full flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Image Section */}
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[1/1] rounded-[20px] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover pointer-events-none"
                                        draggable={false}
                                    />
                                </div>
                            </div>

                            {/* Text Section */}
                            <div className="w-full md:w-1/2 flex flex-col gap-6 md:items-center">
                                <div className="space-y-4">
                                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-4xl lg:text-4xl text-[#2e2e2e] leading-[1.1] px-5 text-center">
                                        {project.title}
                                    </h3>
                                    <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-lg md:text-xl leading-relaxed text-center">
                                        {project.description}
                                    </p>
                                </div>

                                <a
                                    href={project.buttonLink} target="_blank"
                                    className="bg-[#2e2e2e] hover:bg-[#2e2e2e] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-4 px-10 rounded-full hover:opacity-90 active:opacity-80 shadow-lg shadow-black-500/20 flex items-center justify-center gap-2 text-lg w-full sm:w-fit cursor-pointer outline-none"
                                >
                                    {project.buttonText}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
