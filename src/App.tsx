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
import { FeedbackWidget } from "./components/FeedbackWidget";
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#ece6e8]">
        <SEO />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
        <FeedbackWidget />
      </div>
    </BrowserRouter>
  );
}