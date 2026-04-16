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
        id: "cluster-cluck",
        title: "Cluster Cluck (Beta)",
        description: "Challenge your friends to a chaotic cross to the other side.",
        buttonText: "Play Game",
        buttonLink: "https://www.clustercluck.io",
        image: "/showcase-2.png"
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
        title: "The 2-Hour AI Challenge",
        // title: "Build Your First AI Project In 2 Hours",
        description: "Skip the tutorials. We'll build a working project together in-person at a cafe.",
        buttonText: "Start Building",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to build an AI project",
        image: "/showcase-3.png"
    },
    {
        id: "automate",
        title: "Custom Automation",
        description: "Run a business? We'll save you hours weekly by automating your most frustrating workflows.",
        buttonText: "Request Your Free Audit",
        buttonLink: "mailto:hello@nicheneeds.com?subject=I want to automate my business",
        image: "/showcase-4.png"
    }
];
