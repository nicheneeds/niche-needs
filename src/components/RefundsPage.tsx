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
                        <p className="font-bold">Last Updated: February 6, 2026</p>

                        <section>
                            <h2 className="text-xl mb-4 text-black">1. <span className="font-bold">No Refund Policy</span></h2>
                            <p>Due to the digital nature of our products (software, licenses, and digital assets), all sales are final. Once a download has started, a license key has been revealed, or a product has been accessed, we do not offer refunds.</p>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black">2. <span className="font-bold">Technical Issues</span></h2>
                            <p>We want our tools to work for you. If you encounter a technical defect that prevents the product from functioning as described, please contact us. If we are unable to resolve the issue within 10 business days, a refund may be issued at our discretion via Lemon Squeezy.</p>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black">3. <span className="font-bold">Requesting a Refund</span></h2>
                            <p>Since Lemon Squeezy is the Merchant of Record, you may initiate a support request through your original receipt or by contacting us at <strong>studionicheneeds@gmail.com</strong>.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer onNavigate={onNavigate} />
        </>
    );
}
