import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import { PostHogProvider } from "@posthog/react";
import App from "./App.tsx";
import "./index.css";

if (typeof window !== "undefined") {
  posthog.init(import.meta.env.VITE_POSTHOG_KEY || "phc_placeholder", {
    api_host: import.meta.env.VITE_POSTHOG_HOST || "https://app.posthog.com",
    capture_pageview: false, // We'll handle this manually for SPA
    persistence: "memory", // Default to memory if cookies are restricted
  });

  // Respect Do Not Track / Global Privacy Control browser signals
  const dnt =
    navigator.doNotTrack === "1" ||
    (window as unknown as { doNotTrack?: string }).doNotTrack === "1" ||
    (navigator as unknown as { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
  if (dnt) {
    posthog.opt_out_capturing();
  }
}

createRoot(document.getElementById("root")!).render(
  <PostHogProvider client={posthog}>
    <App />
  </PostHogProvider>
);