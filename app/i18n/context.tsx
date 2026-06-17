"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { type Locale, type Dictionary, getDictionary } from "./dictionaries";

type I18nContextType = {
  locale: Locale;
  t: Dictionary;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextType>({
  locale: "kr",
  t: getDictionary("kr"),
  toggleLocale: () => {},
});

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "kr";
  const lang = navigator.language || "";
  if (lang.startsWith("ja")) return "jp";
  return "kr";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("kr");

  useEffect(() => {
    setLocale(detectLocale());
  }, []);

  const t = getDictionary(locale);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "kr" ? "jp" : "kr"));
  };

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
