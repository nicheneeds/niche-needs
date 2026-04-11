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
        title: "Stealth Project",
        description: "Details coming soon....",
        buttonText: "Request Info",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to know about the stealth startup",
        image: "/showcase-1.png"
    },
    {
        id: "cluster-cluck",
        title: "Cluster Cluck (Beta)",
        description: "Survive the road and your friends in this chaotic race to the finish line.",
        buttonText: "Play Game",
        buttonLink: "https://www.clustercluck.io",
        image: "/showcase-2.png"
    },
    {
        id: "ai-build",
        title: "Build Your First AI Project In 2 Hours",
        description: "Skip the tutorials. We’ll build a working project together in a live session.",
        buttonText: "Start Building",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to build an AI project",
        image: "/showcase-3.png"
    },
    {
        id: "automate",
        title: "Automate Your Business",
        description: "We'll streamline your most frustrating workflows and save you hours weekly.",
        buttonText: "Get Your Free Audit",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to automate my business",
        image: "/showcase-4.png"
    }
];
