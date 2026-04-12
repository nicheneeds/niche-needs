import { Phone, MessageSquare, Users } from "lucide-react";
import { useState } from "react";

interface Feature {
  id: string;
  icon: any;
  title: string;
  description: string;
  imageUrl: string;
}

const features: Feature[] = [
  {
    id: "calls",
    icon: Phone,
    title: "Handle calls naturally",
    description: "Your AI assistant answers every call with a warm, natural voice. It qualifies leads, books appointments, and sends you detailed summaries—so you never miss a sales opportunity.",
    imageUrl: "https://images.unsplash.com/photo-1558731991-cb3430a08bb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBwaG9uZSUyMGNhbGx8ZW58MXx8fHwxNzY2NzgxNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "knowledge",
    icon: MessageSquare,
    title: "Bring your business knowledge",
    description: "Train your AI assistant with your services, pricing, and FAQs. It learns your business inside-out to give customers accurate answers and seamless support around the clock.",
    imageUrl: "https://images.unsplash.com/photo-1758691736067-b309ee3ef7b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRyYWluaW5nJTIwa25vd2xlZGdlfGVufDF8fHx8MTc2Njc4MTQzMXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: "workflow",
    icon: Users,
    title: "Integrate with your workflow",
    description: "Connect seamlessly with WhatsApp, Zapier, and your existing tools. Get instant notifications and summaries sent directly to your team so everyone stays in sync.",
    imageUrl: "https://images.unsplash.com/photo-1760462787834-7b8e39a21009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGludGVncmF0aW9uJTIwdG9vbHN8ZW58MXx8fHwxNzY2NzgxNDMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function ProductShowcase() {
  const [activeFeature, setActiveFeature] = useState<string>("calls");

  const currentFeature = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="w-full bg-[#1e1e1e] px-6 py-16 md:py-24 md:px-12 lg:px-20">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-2xl md:text-3xl lg:text-4xl text-white mb-6">
            The <span className="font-['Playfair_Display',sans-serif] italic font-normal">New</span> Standard
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#a0a0a0] tracking-[0.28px] leading-relaxed max-w-[700px] mx-auto">
            NicheNeeds is your smart AI phone assistant designed to help Amsterdam businesses never miss an opportunity, streamline operations, and grow profitably.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Dynamic Visual */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-sm overflow-hidden">
              <img
                key={activeFeature}
                src={currentFeature.imageUrl}
                alt={currentFeature.title}
                className="w-full aspect-[4/3] object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Column - Interactive Features List */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`flex gap-4 text-left p-4 rounded-lg transition-all cursor-pointer ${isActive
                      ? 'bg-white/10 border border-white/20'
                      : 'hover:bg-white/5'
                    }`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-6 h-6 transition-colors ${isActive ? 'text-white' : 'text-[#a0a0a0]'
                      }`}>
                      <Icon className="w-full h-full" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`font-['Plus_Jakarta_Sans',sans-serif] font-medium text-lg tracking-[0.28px] mb-2 transition-colors ${isActive ? 'text-white' : 'text-[#a0a0a0]'
                      }`}>
                      {feature.title}
                    </h3>
                    {isActive && (
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#a0a0a0] tracking-[0.28px] leading-relaxed">
                        {feature.description}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}