import { Footer } from "./Footer";

interface TermsPageProps {
    onNavigate?: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
    return (
        <>
            <main className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl md:text-4xl lg:text-5xl mb-12">
                        Terms & <span className="font-['Playfair_Display',sans-serif] italic font-normal">Conditions</span>
                    </h1>

                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1e1e1e] space-y-8 text-base md:text-lg leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">1. Introduction</h2>
                            <p>Welcome to NicheNeeds. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">2. Services</h2>
                            <p>NicheNeeds provides AI-driven product design and automation services. The specific scope of work for any project will be outlined in a separate agreement or proposal.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">3. Intellectual Property</h2>
                            <p>Unless otherwise agreed in writing, all materials, including code, designs, and content created by NicheNeeds remain the property of NicheNeeds until full payment is received.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">4. Limitation of Liability</h2>
                            <p>NicheNeeds shall not be liable for any indirect, incidental, or consequential damages arising out of the use of our services.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">5. Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer onNavigate={onNavigate} />
        </>
    );
}
