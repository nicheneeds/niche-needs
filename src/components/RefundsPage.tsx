import { Footer } from "./Footer";

export function RefundsPage() {
    return (
        <>
            <main className="w-full bg-[#faf9fc] px-6 py-16 md:py-24 md:px-12 lg:px-20">
                <div className="max-w-[1000px] mx-auto">
                    <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-3xl md:text-4xl lg:text-5xl mb-12">
                        Refund <span className="font-['Playfair_Display',sans-serif] italic font-normal">Policy</span>
                    </h1>

                    <div className="font-['Plus_Jakarta_Sans',sans-serif] text-[#1e1e1e] space-y-8 text-base md:text-lg leading-relaxed">
                        <p className="font-bold">Last Updated: February 5, 2026</p>

                        <p>
                            At <span className="font-bold">NicheNeeds</span>, we operate as an AI Product Studio with a "build, ship, and iterate" mindset. We want our builders and users to be satisfied with the tools and games we create.
                        </p>

                        <section>
                            <h2 className="text-xl mb-4 text-black font-bold">1. Digital Products & Software</h2>
                            <p>
                                Due to the nature of digital products (software licenses, digital assets, and game access), all sales are generally final. Once a digital product has been accessed, downloaded, or a license key has been issued, we do not offer standard refunds. This policy is in place to protect the intellectual property of our agentic AI builds.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black font-bold">2. Iterative Development & Sprints</h2>
                            <p className="mb-4">
                                NicheNeeds often releases products in rapid development cycles. We believe in transparency and accountability:
                            </p>
                            <ul className="space-y-4">
                                <li>
                                    <span className="font-bold">Discretionary Refunds</span>: If a specific development sprint or product milestone does not meet the outlined objectives or quality standards we promised, we reserve the right to issue proactive or requested refunds to affected customers.
                                </li>
                                <li>
                                    <span className="font-bold">Technical Failure</span>: If a product is technically non-functional and our support team cannot provide a fix within 10 business days, we will honor a refund request.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black font-bold">3. Merchant of Record</h2>
                            <p>
                                Please note that Lemon Squeezy is the Merchant of Record for all NicheNeeds transactions. While we authorize the refunds, the technical processing of the return to your original payment method is handled by the Lemon Squeezy platform.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black font-bold">4. How to Request a Refund</h2>
                            <p className="mb-4">If you believe your situation warrants an exception to our standard policy:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Contact us via our support channel or email <strong>studionicheneeds@gmail.com</strong>.</li>
                                <li>Provide your Order Number and the reason for the request.</li>
                            </ul>
                            <p className="mt-4">
                                We will review your request within 3-5 business days and, if approved, coordinate the refund through Lemon Squeezy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl mb-4 text-black font-bold">5. Chargebacks</h2>
                            <p>
                                We encourage all users to contact us directly to resolve any issues. Unauthorized chargebacks will result in the immediate and permanent revocation of all software licenses and access to NicheNeeds products.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

