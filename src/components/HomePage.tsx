import { Hero } from "./Hero";
import { AssistantsShowcase } from "./AssistantsShowcase";
// import { Features } from "./Features";
// import { ProductShowcase } from "./ProductShowcase";
// import { UseCases } from "./UseCases";
import { About } from "./About";
// import { Pricing } from "./Pricing";
// import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

export function HomePage() {
    return (
        <>
            <main>
                <Hero />
                <AssistantsShowcase />
                {/* <Features /> */}
                {/* <ProductShowcase /> */}
                {/* <UseCases /> */}
                {/* <About /> */}
                {/* <Pricing /> */}
                {/* <FAQ /> */}
            </main>
            <Footer />
        </>
    );
}