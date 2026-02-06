import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AssistantsPage } from "./components/AssistantsPage";
import { TermsPage } from "./components/TermsPage";
import { RefundsPage } from "./components/RefundsPage";
import { PrivacyPage } from "./components/PrivacyPage";
import { SEO } from "./components/SEO";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refunds" element={<RefundsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/assistants" element={<AssistantsPage />} />
          {/* Fallback to home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}