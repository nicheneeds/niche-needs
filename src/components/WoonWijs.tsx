import { useState } from "react";
import {
    ChevronRight,
    ArrowLeft,
    Home,
    MessageSquare,
    Scale,
    ShieldCheck,
    Mail,
    ExternalLink,
    AlertCircle,
    Clock,
    Languages
} from "lucide-react";

type Step = "problem" | "duration" | "contact" | "language" | "details" | "result";

interface FormData {
    problemType: string;
    duration: string;
    previousContact: string;
    language: "English" | "Dutch";
    details: string;
}

const PROBLEM_TYPES = [
    { id: "mold", label: "Mold or damp", icon: "🌧️" },
    { id: "heating", label: "No heating/hot water", icon: "🔥" },
    { id: "repairs", label: "Repairs being ignored", icon: "🛠️" },
    { id: "deposit", label: "Deposit not returned", icon: "💰" },
    { id: "rent", label: "Unfair rent increase", icon: "📈" },
    { id: "noise", label: "Noise or neighbor issues", icon: "🔊" },
    { id: "other", label: "Something else", icon: "❓" },
];

const DURATIONS = [
    "Less than a week",
    "A few weeks",
    "About a month",
    "Several months",
    "Over a year"
];

const CONTACT_HISTORY = [
    "Not yet",
    "Yes (verbally)",
    "Yes (in writing)",
    "Yes (but they ignored me)"
];

const RIGHTS: Record<string, { title: string; law: string; advice: string }> = {
    mold: {
        title: "Right to a Healthy Home",
        law: "Burgerlijk Wetboek Art. 7:204 & 7:206",
        advice: "In the Netherlands, serious mold is considered a 'gebrek' (defect). Your landlord must fix it within 6 weeks if it's caused by the building's structure."
    },
    heating: {
        title: "Right to Basic Services",
        law: "Burgerlijk Wetboek Book 7",
        advice: "No hot water or heating is considered an urgent defect. You are entitled to a repair within 24-48 hours, especially in winter."
    },
    repairs: {
        title: "Maintenance Obligations",
        law: "Burgerlijk Wetboek Art. 7:206",
        advice: "The landlord is responsible for major maintenance ('groot onderhoud'). If they fail to act after 6 weeks, you can request a rent reduction."
    },
    deposit: {
        title: "Deposit Protection",
        law: "Good Landlordship Act (Wet goed verhuurderschap)",
        advice: "As of 2023, deposits must be returned within 14 days if there are no damages, or 30 days if there is an offset cost with evidence."
    },
    rent: {
        title: "Rent Price Protection",
        law: "Huurcommissie Guidelines",
        advice: "Most rentals in Amsterdam fall under 'sociale huur' or regulated sectors where annual increases are capped by the government."
    },
    noise: {
        title: "Right to Quiet Enjoyment",
        law: "Burgerlijk Wetboek Art. 7:204",
        advice: "Landlords must take action if your living pleasure is structuraly disturbed by other tenants or neighbors they also rent to."
    },
    other: {
        title: "Standard Tenant Protections",
        law: "Dutch Civil Code Book 7",
        advice: "Dutch law is very tenant-friendly. You have significant rights regarding security of tenure and property standards."
    }
};

export function WoonWijs() {
    const [step, setStep] = useState<Step>("problem");
    const [formData, setFormData] = useState<FormData>({
        problemType: "",
        duration: "",
        previousContact: "",
        language: "English",
        details: ""
    });

    const currentRights = RIGHTS[formData.problemType] || RIGHTS.other;

    const handleNext = (updates: Partial<FormData>, nextStep: Step) => {
        setFormData(prev => ({ ...prev, ...updates }));
        setStep(nextStep);
    };

    const generateEmailTemplate = () => {
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 14);
        const deadlineStr = deadline.toLocaleDateString();

        if (formData.language === "Dutch") {
            return `Onderwerp: Formele ingebrekestelling - [Adres van woning]

Geachte verhuurder,

Hierbij wil ik formeel mijn beklag doen over het volgende probleem in mijn woning: ${formData.problemType}.
Dit probleem speelt al ${formData.duration.toLowerCase()}.

Details van het probleem:
${formData.details}

Eerdere communicatie: ${formData.previousContact}.

Conform het Burgerlijk Wetboek (Boek 7) verzoek ik u vriendelijk om dit gebrek binnen 14 dagen (vóór ${deadlineStr}) te herstellen. Indien er geen actie wordt ondernomen, zal ik verdere stappen ondernemen via de Huurcommissie of juridische bijstand.

Met vriendelijke groet,

[Uw Naam]
[Uw Telefoonnummer]`;
        }

        return `Subject: Formal Notice of Defect - [Property Address]

Dear Landlord,

I am writing to formally report an issue regarding my rental property: ${formData.problemType}.
This issue has been ongoing for ${formData.duration.toLowerCase()}.

Description of the issue:
${formData.details}

Previous attempts to contact: ${formData.previousContact}.

According to Dutch Rental Law (Burgerlijk Wetboek), I request that you address this matter within 14 days (by ${deadlineStr}). If no action is taken, I will be forced to escalate this matter to the Huurcommissie or seek legal counsel.

Kind regards,

[Your Name]
[Your Phone Number]`;
    };

    const renderHeader = () => (
        <div className="mb-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="p-2 bg-[#e8a045]/20 rounded-lg">
                    <Scale className="w-6 h-6 text-[#e8a045]" />
                </div>
                <h1 className="font-['Playfair_Display',serif] text-3xl md:text-4xl text-[#1a1a1a]">WoonWijs</h1>
            </div>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-gray-500 text-lg">
                Your AI-powered guide through Dutch rental disputes.
            </p>
        </div>
    );

    const renderStep = () => {
        switch (step) {
            case "problem":
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="font-['Playfair_Display',serif] text-2xl mb-8 flex items-center gap-2">
                            What brings you here today?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {PROBLEM_TYPES.map((type) => (
                                <button
                                    key={type.id}
                                    onClick={() => handleNext({ problemType: type.id }, "duration")}
                                    className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#e8a045] hover:shadow-md transition-all text-left group"
                                >
                                    <span className="text-2xl">{type.icon}</span>
                                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#2e2e2e] flex-1">
                                        {type.label}
                                    </span>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#e8a045] transition-colors" />
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "duration":
                return (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <button onClick={() => setStep("problem")} className="flex items-center gap-2 text-gray-400 hover:text-[#e8a045] mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <h2 className="font-['Playfair_Display',serif] text-2xl mb-8 flex items-center gap-2">
                            <Clock className="w-6 h-6 text-[#e8a045]" /> How long has this been an issue?
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {DURATIONS.map((d) => (
                                <button
                                    key={d}
                                    onClick={() => handleNext({ duration: d }, "contact")}
                                    className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#e8a045] hover:shadow-md transition-all group"
                                >
                                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#2e2e2e]">{d}</span>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#e8a045]" />
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "contact":
                return (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <button onClick={() => setStep("duration")} className="flex items-center gap-2 text-gray-400 hover:text-[#e8a045] mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <h2 className="font-['Playfair_Display',serif] text-2xl mb-8 flex items-center gap-2">
                            <MessageSquare className="w-6 h-6 text-[#e8a045]" /> Have you notified your landlord yet?
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {CONTACT_HISTORY.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => handleNext({ previousContact: c }, "language")}
                                    className="flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl hover:border-[#e8a045] hover:shadow-md transition-all group"
                                >
                                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[#2e2e2e]">{c}</span>
                                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#e8a045]" />
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "language":
                return (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <button onClick={() => setStep("contact")} className="flex items-center gap-2 text-gray-400 hover:text-[#e8a045] mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <h2 className="font-['Playfair_Display',serif] text-2xl mb-8 flex items-center gap-2">
                            <Languages className="w-6 h-6 text-[#e8a045]" /> Preferred language for the claim?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {(["English", "Dutch"] as const).map((lang) => (
                                <button
                                    key={lang}
                                    onClick={() => handleNext({ language: lang }, "details")}
                                    className="flex flex-col items-center gap-3 p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#e8a045] hover:shadow-md transition-all group"
                                >
                                    <span className="text-3xl">{lang === "Dutch" ? "🇳🇱" : "🇬🇧"}</span>
                                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-lg text-[#2e2e2e]">{lang}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                );

            case "details":
                return (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <button onClick={() => setStep("language")} className="flex items-center gap-2 text-gray-400 hover:text-[#e8a045] mb-6 transition-colors">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <h2 className="font-['Playfair_Display',serif] text-2xl mb-4 flex items-center gap-2">
                            <AlertCircle className="w-6 h-6 text-[#e8a045]" /> Tell us more details
                        </h2>
                        <p className="text-gray-500 mb-6 font-['Plus_Jakarta_Sans',sans-serif]">
                            What exactly is happening? (e.g. "Mold is in the bedroom ceiling", "Radiator hasn't worked since Tuesday")
                        </p>
                        <textarea
                            value={formData.details}
                            onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                            placeholder="Type your details here..."
                            className="w-full h-40 p-5 bg-white border border-gray-100 rounded-2xl focus:border-[#e8a045] focus:ring-1 focus:ring-[#e8a045] outline-none transition-all font-['Plus_Jakarta_Sans',sans-serif] mb-6"
                        />
                        <button
                            onClick={() => setStep("result")}
                            disabled={!formData.details.trim()}
                            className="w-full bg-[#1a1a1a] text-white py-4 rounded-xl font-['Plus_Jakarta_Sans',sans-serif] font-bold hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                            Generate my formal claim
                        </button>
                    </div>
                );

            case "result":
                return (
                    <div className="animate-in fade-in zoom-in-95 duration-700 space-y-8">
                        {/* Legal Rights Card */}
                        <div className="bg-[#e8a045]/5 border border-[#e8a045]/20 p-8 rounded-3xl">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="w-8 h-8 text-[#e8a045]" />
                                <h3 className="font-['Playfair_Display',serif] text-2xl text-[#1a1a1a]">
                                    {currentRights.title}
                                </h3>
                            </div>
                            <p className="font-mono text-xs text-[#e8a045] font-bold tracking-widest uppercase mb-3">
                                Legal Reference: {currentRights.law}
                            </p>
                            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#2e2e2e] leading-relaxed text-lg">
                                {currentRights.advice}
                            </p>
                        </div>

                        {/* Generated Email */}
                        <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm relative group">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-6 h-6 text-gray-400" />
                                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-gray-900">Generated Email</h3>
                                </div>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(generateEmailTemplate());
                                        alert("Email copied to clipboard!");
                                    }}
                                    className="text-[#e8a045] font-bold text-sm hover:underline flex items-center gap-1"
                                >
                                    Copy Text
                                </button>
                            </div>
                            <pre className="whitespace-pre-wrap font-['Plus_Jakarta_Sans',sans-serif] text-gray-700 bg-gray-50/50 p-6 rounded-xl text-sm leading-relaxed border border-gray-100">
                                {generateEmailTemplate()}
                            </pre>
                        </div>

                        {/* Resources Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <a
                                href="https://www.wooninfo.nl/en/"
                                target="_blank"
                                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#e8a045] transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
                                        <Home className="w-6 h-6 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1a1a1a]">Contact !WOON</h4>
                                        <p className="text-sm text-gray-500">Free advice for Amsterdam tenants</p>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-[#e8a045]" />
                            </a>
                            <a
                                href="https://www.huurcommissie.nl/"
                                target="_blank"
                                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#e8a045] transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center">
                                        <Scale className="w-6 h-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#1a1a1a]">Huurcommissie</h4>
                                        <p className="text-sm text-gray-500">Official Rent Tribunal submission</p>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-300 group-hover:text-[#e8a045]" />
                            </a>
                        </div>

                        <button
                            onClick={() => {
                                setStep("problem");
                                setFormData({
                                    problemType: "",
                                    duration: "",
                                    previousContact: "",
                                    language: "English",
                                    details: ""
                                });
                            }}
                            className="w-full py-4 text-gray-400 font-bold hover:text-[#e8a045] transition-colors"
                        >
                            Start over
                        </button>
                    </div>
                );
        }
    };

    return (
        <section className="bg-[#f9f9f4] min-h-screen w-full px-6 py-12 md:px-12 lg:px-20 antialiased">
            <div className="max-w-[800px] mx-auto">
                {renderHeader()}
                <div className="bg-white/40 backdrop-blur-md border border-white/60 p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-[#ece6e8]/40 min-h-[500px]">
                    {renderStep()}
                </div>

                <p className="mt-12 text-center text-gray-400 font-['Plus_Jakarta_Sans',sans-serif] text-sm max-w-lg mx-auto leading-relaxed">
                    WoonWijs helps you navigate Dutch rental law, but is not a substitute for professional legal advice. Always verify with !WOON or a lawyer.
                </p>
            </div>
        </section>
    );
}
