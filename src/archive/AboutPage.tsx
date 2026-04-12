import { About } from "./About";
import { Footer } from "./Footer";
import { SEO } from "./SEO";

export function AboutPage() {
    return (
        <>
            <SEO title="About Us - NicheNeeds" />
            <main>
                <About />
            </main>
            <Footer />
        </>
    );
}
