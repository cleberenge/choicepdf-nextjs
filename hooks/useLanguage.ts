
import { useState } from "react";

export function useLanguage() {
  const [lang, setLang] = useState("pt");

  const switchLanguage = (newLang: string) => {
    setLang(newLang);
  };

  return { lang, switchLanguage };
}

