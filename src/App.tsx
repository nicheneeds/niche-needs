import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AssistantsPage } from "./components/AssistantsPage";
import { TermsPage } from "./components/TermsPage";
import { RefundsPage } from "./components/RefundsPage";
// import { ConsultationWidget } from "./components/ConsultationWidget";
import { SEO } from "./components/SEO";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'assistants':
        return <AssistantsPage />;
      case 'terms':
        return <TermsPage onNavigate={setCurrentPage} />;
      case 'refunds':
        return <RefundsPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };


  return (
    <div className="min-h-screen bg-[#ece6e8]">
      <SEO />
      <Header onNavigate={setCurrentPage} />
      {renderPage()}
      {/* <ConsultationWidget /> */}
    </div>
  );
}