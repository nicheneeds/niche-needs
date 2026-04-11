import { Footer } from "./Footer";
import { WoonWijs } from "./LocalWoonWijs";
import { SEO } from "./SEO";

export function WoonWijsPage() {
    return (
        <>
            <SEO title="WoonWijs - NicheNeeds" />
            <main>
                <WoonWijs />
            </main>
            <Footer />
        </>
    );
}
