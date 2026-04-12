import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { TermsPage } from "./components/TermsPage";
import { PrivacyPage } from "./components/PrivacyPage";

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
  return (
    <div className="min-h-screen bg-[#f0eee6] antialiased">
      <SEO />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
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