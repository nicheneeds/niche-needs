export interface Project {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
    video?: string;
}

export const projects: Project[] = [
    {
        id: "cluster-cluck",
        title: "Cluster Cluck",
        description: "Experience chaotic multiplayer chicken crossing.",
        buttonText: "Play Now",
        buttonLink: "https://www.clustercluck.io",
        image: "/showcase-2.png",
        video: "/cc.mp4"
    },
    /* 
    {
        id: "stealth",
        title: "Unnamed Project",
        description: "A collaboration between two brothers. Stay tuned.",
        buttonText: "Stay Tuned",
        buttonLink: "https://www.instagram.com/alok.builds",
        image: "/showcase-1.png"
    }, 
    */
    {
        id: "ai-build",
        title: "Beginner AI Bootcamp",
        // title: "Build Your First AI Project In 2 Hours",
        description: "Skip the tutorials. We'll build a useful workflow for you together.",
        buttonText: "Start Building",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to build an AI project",
        image: "/showcase-3.png"
    },
    {
        id: "automate",
        title: "Senior UX Audit",
        description: "Optimize your existing conversion funnel or product workflow.",
        buttonText: "Get Audit",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want a UX audit",
        image: "/showcase-4.png"
    }
];
