import { HomeHero } from "./HomeHero";
import { ProjectShowcase } from "./ProjectShowcase";
import { HomeSummary } from "./HomeSummary";
import { Footer } from "./Footer";
import { projects } from "../data/projects";

export function HomePage() {
    return (
        <div className="bg-[#E9E4E4] min-h-screen">
            <main>
                <HomeHero />
                <ProjectShowcase projects={projects} />
                <HomeSummary />
            </main>
            <Footer />
        </div>
    );
}