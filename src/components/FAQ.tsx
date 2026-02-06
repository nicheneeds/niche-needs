import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What makes NicheNeeds different from other AI studios?",
    answer: "NicheNeeds aims to future-proof small and medium-sized local businesses in the Amsterdam area. We build relationships with business owners and understand their needs to deliver solutions that actually drive revenue."
  },
  {
    question: "How does your pricing work?",
    answer: "NicheNeeds always provides a free trial period to prove our concept improves your business. We only succeed when you do. As your trial approaches completion, we'll touch base to see if you're interested in continuing with a paid offering."
  },
  {
    question: "I want to try out the AI voice assistant/automation tool/something else. How do I test it?",
    answer: "Get in touch and we will be happy to visit you at your business and showcase a live demo. We can discuss your business needs and see if it's the right fit for you."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#ece6e8] px-6 py-16 md:py-24 md:px-12 lg:px-20 pb-0">
      <div className="max-w-[1200px] mx-auto pb-16 md:pb-24">
        {/* Section Title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-3xl lg:text-4xl text-center mb-16">
          <span className="font-['Playfair_Display',sans-serif] italic font-normal">Frequently</span> Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col">
          {faqData.map((faq, index) => (
            <div key={index} className="border-t border-[#1e1e1e] last:border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-6 md:py-8 text-left hover:opacity-70 transition-opacity cursor-pointer"
              >
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-base md:text-lg pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="pb-6 md:pb-8 pr-8">
                  <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#878787] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}