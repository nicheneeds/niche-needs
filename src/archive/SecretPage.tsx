import { useState } from "react";
import { ChallengeSection } from "./ChallengeSection";
import { ActiveWeek } from "./ActiveWeek";
import { Footer } from "./Footer";
import { SEO } from "./SEO";

export function SecretPage() {
    const [selectedWeek, setSelectedWeek] = useState(5);

    return (
        <>
            <SEO noindex={true} title="NicheNeeds - Secret Preview" />
            <main>
                <ChallengeSection selectedWeek={selectedWeek} onSelectWeek={setSelectedWeek} />
                <ActiveWeek selectedWeek={selectedWeek} />
            </main>
            <Footer />
        </>
    );
}
