
import { useState, useEffect } from "react";

export function useCookieConsent() {
  const [consent, setConsent] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("cookieConsent");
    if (saved) setConsent(saved === "true");
  }, []);

  const giveConsent = () => {
    setConsent(true);
    localStorage.setItem("cookieConsent", "true");
  };

  const denyConsent = () => {
    setConsent(false);
    localStorage.setItem("cookieConsent", "false");
  };

  return { consent, giveConsent, denyConsent };
}

