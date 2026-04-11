import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { AssistantsPage } from "./components/AssistantsPage";
import { TermsPage } from "./components/TermsPage";
import { RefundsPage } from "./components/RefundsPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { UploadPage } from "./components/UploadPage";
import { WoonWijsPage } from "./components/WoonWijsPage";
import { SecretPage } from "./components/SecretPage";

import { SEO } from "./components/SEO";

import { usePostHog } from "@posthog/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  const posthog = usePostHog();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (posthog) {
      posthog.capture("$pageview");
    }
  }, [pathname, posthog]);

  return null;
}

function AppContent() {
  const { pathname } = useLocation();
  const isSecretPage = pathname === "/xyz";

  return (
    <div className={`min-h-screen ${isSecretPage ? "bg-[#F9F9F3]" : "bg-[#f0eee6]"} antialiased`}>
      <SEO />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/xyz" element={<SecretPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/woonwijs" element={<WoonWijsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/refunds" element={<RefundsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/assistants" element={<AssistantsPage />} />
        {/* Fallback to home */}
        <Route path="*" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}