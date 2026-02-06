import { Footer } from "./Footer";

interface RefundsPageProps {
    onNavigate?: (page: string) => void;
}

export function RefundsPage({ onNavigate }: RefundsPageProps) {
    return (
        <>
            <main className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl md:text-4xl lg:text-5xl mb-12">
                        Refund <span className="font-['Playfair_Display',sans-serif] italic font-normal">Policy</span>
                    </h1>

                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1e1e1e] space-y-8 text-base md:text-lg leading-relaxed">
                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">Our Policy</h2>
                            <p>At NicheNeeds, we strive for excellence in every project. Due to the customized nature of our AI design and automation services, we have a clear policy regarding refunds.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">1. Service Refunds</h2>
                            <p>Once work has commenced on a project, payments made are generally non-refundable. This is because our services involve significant time and resources dedicated to your specific needs.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">2. Cancellation</h2>
                            <p>If you wish to cancel a project before work has started, you may be eligible for a partial or full refund, minus any administrative fees.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">3. Satisfaction Guarantee</h2>
                            <p>We work closely with our clients to ensure satisfaction. If you are unhappy with the progress, please contact us immediately so we can address your concerns and make necessary adjustments.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4 text-black">4. Contact Us</h2>
                            <p>If you have any questions about our refund policy, please reach out to us at hello@nicheneeds.com.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer onNavigate={onNavigate} />
        </>
    );
}
