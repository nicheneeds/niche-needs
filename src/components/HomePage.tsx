// import { AssistantsShowcase } from "./AssistantsShowcase";
import { ChallengeSection } from "./ChallengeSection";
import { ActiveWeek } from "./ActiveWeek";
// import { Features } from "./Features";
// import { ProductShowcase } from "./ProductShowcase";
// import { UseCases } from "./UseCases";
import { About } from "./About";
// import { CurrentWeek } from "./CurrentWeek";
// import { Pricing } from "./Pricing";
// import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

export function HomePage() {
    return (
        <>
            <main>

                <ChallengeSection />
                <ActiveWeek />
                {/* <AssistantsShowcase /> */}
                {/* <CurrentWeek /> */}
                <About />
                {/* <Features /> */}
                {/* <ProductShowcase /> */}
                {/* <UseCases /> */}
                {/* <About already used above /> */}
                {/* <Pricing /> */}
                {/* <FAQ /> */}
            </main>
            <Footer />
        </>
    );
}