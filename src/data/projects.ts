export interface Project {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: "stealth",
        title: "Collaborative Stealth Project",
        description: "Details coming soon....",
        buttonText: "Request info",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to know about the stealth startup",
        image: "/showcase-1.png"
    },
    {
        id: "cluster-cluck",
        title: "Cluster Cluck (Beta)",
        description: "Survive the road and your friends in this chaotic race to the finish line.",
        buttonText: "Play game",
        buttonLink: "https://www.clustercluck.io",
        image: "/showcase-2.png"
    },
    {
        id: "ai-build",
        title: "Let's Build An AI Project In 2 Hours",
        description: "Skip the tutorials. We'll meet up and build your first project together.",
        buttonText: "Request session",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to build an AI project",
        image: "/showcase-3.png"
    },
    {
        id: "automate",
        title: "Automate Your Business",
        description: "We'll streamline your most frustrating workflows and save you hours weekly.",
        buttonText: "Request expertise",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to automate my business",
        image: "/showcase-4.png"
    }
];
