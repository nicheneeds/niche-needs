import { Hero } from "./Hero";
// import { Features } from "./Features";
// import { ProductShowcase } from "./ProductShowcase";
// import { UseCases } from "./UseCases";
import { About } from "./About";
// import { Pricing } from "./Pricing";
// import { FAQ } from "./FAQ";
import { Footer } from "./Footer";

interface HomePageProps {
  onNavigate?: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <main>
        <Hero />
        {/* <Features /> */}
        {/* <ProductShowcase /> */}
        {/* <UseCases /> */}
        <About />
        {/* <Pricing /> */}
        {/* <FAQ /> */}
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}