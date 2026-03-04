import { useEffect } from "react";

export function FeedbackWidget() {
    useEffect(() => {
        const win = window as any;

        const scriptId = "featurebase-sdk";
        if (!document.getElementById(scriptId)) {
            const script = document.createElement("script");
            script.src = "https://do.featurebase.app/js/sdk.js";
            script.id = scriptId;
            script.async = true;
            document.body.appendChild(script);
        }

        if (typeof win.Featurebase !== "function") {
            win.Featurebase = function () {
                // eslint-disable-next-line prefer-rest-params
                (win.Featurebase.q = win.Featurebase.q || []).push(arguments);
            };
        }

        // Attempt initialization
        const initWidget = () => {
            if (typeof win.Featurebase === "function") {
                win.Featurebase("initialize_feedback_widget", {
                    organization: "nicheneeds", // Organization subdomain
                    theme: "light",
                    placement: "right",
                    locale: "en",
                });
            }
        };

        // If script is already loaded, init immediately, otherwise wait for load
        const sdkScript = document.getElementById(scriptId);
        if (sdkScript) {
            sdkScript.addEventListener("load", initWidget);
            // If it's already loaded before the listener is added
            initWidget();
        }

        return () => {
            const script = document.getElementById(scriptId);
            if (script) {
                script.removeEventListener("load", initWidget);
            }
        };
    }, []);

    return null;
}
