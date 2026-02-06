import { useState, useRef, useEffect } from "react";
import { Rocket, Mic, CheckCircle, MessageCircle, ChevronDown, SendHorizontal } from "lucide-react";

export function ConsultationWidget() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const recognitionRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const suggestions = ['Consultation', 'Workflow Automation', 'Voice Agents'];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(`Tell me more about ${suggestion}`);
  };

  // Auto-resize textarea when message changes
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  }, [message]);

  useEffect(() => {
    // Initialize Web Speech API
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        // Update the message with final transcript
        if (finalTranscript) {
          setMessage(prev => prev + finalTranscript);
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleSendMessage = async () => {
    // Validate email
    if (email.trim() && !validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (message.trim() && !isSending) {
      setIsSending(true);
      setEmailError(""); // Clear any previous errors

      const formData = new FormData();
      formData.append("access_key", "ae86b733-2af1-4d7b-bf6d-6d9bac373681");
      formData.append("message", message);
      formData.append("email", email);
      formData.append("subject", "New Consultation Request from NicheNeeds Website");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        await response.json();

        if (response.ok) {
          setMessage("");
          setEmail("");
          setMessageSent(true);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      } finally {
        setIsSending(false);
      }
    }
  };

  const handleDictation = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser. Please use Chrome or Edge.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.error("Error starting speech recognition:", err);
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 md:bottom-4 md:left-auto md:right-4 md:w-[500px] z-50">
      {!isExpanded ? (
        // Collapsed State - Just a button
        <button
          onClick={() => setIsExpanded(true)}
          className="md:ml-auto w-full md:w-auto bg-[#4A9EFF] text-white px-6 py-4 md:rounded-full rounded-t-3xl shadow-2xl flex items-center justify-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] font-medium cursor-pointer"
        >
          <Rocket className="w-5 h-5" strokeWidth={1.75} />
          Get Your Free AI Business Audit
        </button>
      ) : (
        // Expanded State - Full widget
        <div className="bg-[#2c2c2c] md:rounded-3xl rounded-t-3xl shadow-2xl border-t border-white/10 md:border border-white/10 overflow-hidden">
          {messageSent ? (
            // Thank You State
            <div className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-500/20 rounded-full p-4">
                  <CheckCircle className="w-12 h-12 text-green-400" strokeWidth={2} />
                </div>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white text-xl mb-2">
                Message Sent!
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] tracking-[0.28px] mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours at hello@nicheneeds.com
              </p>
              <button
                onClick={() => setMessageSent(false)}
                className="bg-white text-black px-6 py-3 rounded-full font-['Plus_Jakarta_Sans',sans-serif] font-medium hover:bg-gray-200 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 pt-[16px] pr-[18px] pb-[8px] pl-[18px] rounded-[0px]">
                <div className="flex items-center gap-2">
                  {/* <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.75} /> */}
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-white tracking-[0.28px]">
                    Get Your Free AI Business Audit
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-white text-xs tracking-[0.28px] mt-1.5">
                      Trusted by 5+ Amsterdam local businesses
                    </p>
                  </h3>
                </div>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-2 rounded-full bg-[#4A9EFF] text-white hover:bg-[#4A9EFF]/80 transition-all cursor-pointer"
                >
                  {isExpanded ? <ChevronDown className="w-5 h-5" strokeWidth={1.75} /> : <MessageCircle className="w-5 h-5" strokeWidth={1.75} />}
                </button>
              </div>

              {/* Suggestion Chips */}
              <div className="px-[18px] py-[5px]">
                <div className="flex flex-wrap gap-x-2 gap-y-2.5 overflow-x-auto scrollbar-hide py-0.5">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-4 py-2 rounded-full border border-[#4A9EFF] bg-transparent text-[#4A9EFF] font-['Plus_Jakarta_Sans',sans-serif] text-sm font-bold hover:bg-[#4A9EFF]/10 whitespace-nowrap text-[12px] cursor-pointer"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 pt-[4px]">
                {/* Email Input */}
                <div className="mb-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailError) setEmailError(""); // Clear error on input
                    }}
                    placeholder="Your email"
                    className={`w-full bg-[#1e1e1e] text-white placeholder-[#878787] font-['Plus_Jakarta_Sans',sans-serif] font-medium tracking-[0.28px] outline-none px-4 py-4.5 rounded-2xl border transition-colors pl-4 ${emailError
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-white/10 focus:border-white/20'
                      }`}
                  />
                  {emailError && (
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-red-400 text-xs mt-1 px-2">
                      {emailError}
                    </p>
                  )}
                </div>

                <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 flex items-center gap-3 p-2">
                  <textarea
                    ref={textareaRef}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    rows={1}
                    className="flex-1 bg-transparent text-white placeholder-[#878787] font-['Plus_Jakarta_Sans',sans-serif] font-medium tracking-[0.28px] resize-none outline-none leading-normal max-h-[200px] overflow-y-auto min-h-[24px] pl-2"
                  />

                  <div className="flex items-center gap-2">
                    {/* Voice Dictation Button - Only show when no text */}
                    {!message.trim() && (
                      <button
                        onClick={handleDictation}
                        className={`p-3 rounded-full transition-all cursor-pointer ${isListening
                          ? 'bg-[#4285F4] text-white shadow-lg shadow-blue-500/50'
                          : 'bg-[none] text-white hover:bg-[#4a4a4a]'
                          }`}
                        title={isListening ? "Stop dictation" : "Start dictation"}
                      >
                        <Mic className="w-5 h-5" strokeWidth={1.75} />
                      </button>
                    )}

                    {/* Send Button - Gemini style */}
                    {message.trim() && (
                      <button
                        onClick={handleSendMessage}
                        disabled={isSending}
                        className={`p-3 rounded-full transition-all ${isSending
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : 'bg-white text-black hover:bg-gray-200'
                          }`}
                        title="Send message"
                      >
                        <SendHorizontal className="w-5 h-5" strokeWidth={1.75} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Helper Text */}
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[#878787] text-xs tracking-[0.28px] mt-3 px-2">
                  {isListening
                    ? "Listening... Speak now"
                    : "Avg reply time: 2 hours"}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}