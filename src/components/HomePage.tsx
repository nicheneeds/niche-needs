import { useState } from "react";
import { ChallengeSection } from "./ChallengeSection";
import { ActiveWeek } from "./ActiveWeek";
import { Footer } from "./Footer";

export function HomePage() {
    const [selectedWeek, setSelectedWeek] = useState(2);

    return (
        <>
            <main>
                <ChallengeSection selectedWeek={selectedWeek} onSelectWeek={setSelectedWeek} />
                <ActiveWeek selectedWeek={selectedWeek} />
            </main>
            <Footer />
        </>
    );
}