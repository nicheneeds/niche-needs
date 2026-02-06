import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AssistantsPage } from "./components/AssistantsPage";
// import { ConsultationWidget } from "./components/ConsultationWidget";
import { SEO } from "./components/SEO";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');


  /* 
  useEffect(() => {
    // Load ElevenLabs ConvAI widget script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    script.async = true;
    script.type = 'text/javascript';
    
    script.onload = () => {
      const convaiElement = document.createElement('elevenlabs-convai');
      convaiElement.setAttribute('agent-id', 'agent_4501kc0pqq3cfc6stpp02smdz6rc');
      document.body.appendChild(convaiElement);
    };

    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      const convaiElement = document.querySelector('elevenlabs-convai');
      if (convaiElement && convaiElement.parentNode) {
        convaiElement.parentNode.removeChild(convaiElement);
      }
    };
  }, []);
  */

  return (
    <div className="min-h-screen bg-[#ece6e8]">
      <SEO />
      <Header onNavigate={setCurrentPage} />
      {currentPage === 'home' ? <HomePage /> : <AssistantsPage />}
      {/* <ConsultationWidget /> */}
    </div>
  );
}