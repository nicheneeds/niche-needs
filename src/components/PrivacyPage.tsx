import { Footer } from "./Footer";

interface PrivacyPageProps {
    onNavigate?: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
    return (
        <>
            <main className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20">
                <div className="max-w-[800px] mx-auto">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl md:text-4xl lg:text-5xl mb-12">
                        Privacy <span className="font-['Playfair_Display',sans-serif] italic font-normal">Policy</span>
                    </h1>

                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1e1e1e] space-y-8 text-base md:text-lg leading-relaxed">
                        <p className="font-bold">Last Updated: February 6, 2026</p>

                        <section>
                            <h2 className="text-xl mb-4 text-black">1. <span className="font-bold">Data Collection</span></h2>
                            <p>We collect minimal data necessary to provide our services. This includes your email address provided during the checkout process via Lemon Squeezy. We do not store or see your credit card or billing details.</p>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black">2. <span className="font-bold">Third-Party AI Services</span></h2>
                            <p>NicheNeeds products may utilize third-party AI models (e.g., OpenAI, Anthropic). We do not share your personally identifiable information with these providers unless it is a technical requirement for the tool to function.</p>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black">3. <span className="font-bold">GDPR Compliance</span></h2>
                            <p className="mb-4">As a studio based in Amsterdam, Netherlands, we comply with the General Data Protection Regulation (GDPR). You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Access the data we hold about you.</li>
                                <li>Request the deletion of your data.</li>
                                <li>Withdraw consent for marketing communications.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black">4. <span className="font-bold">Contact</span></h2>
                            <p>For any privacy-related inquiries, please contact us at <strong>studionicheneeds@gmail.com</strong>.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer onNavigate={onNavigate} />
        </>
    );
}
