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
            <div className="max-w-[800px] mx-auto flex flex-col gap-24 md:gap-32">

                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <div className="aspect-[1/1] rounded-[40px] overflow-hidden">
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
                                {/* <a
                                href={project.buttonLink} target="_blank"
                                className="bg-[#2e2e2e] hover:bg-[#2e2e2e] text-white font-['Plus_Jakarta_Sans',sans-serif] font-medium py-4 px-10 rounded-full transition-[transform,box-shadow,background-color] duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black-500/20 flex items-center justify-center gap-2 text-lg w-full sm:w-fit cursor-pointer leading-none"
                            ></a> */}
                                {project.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
