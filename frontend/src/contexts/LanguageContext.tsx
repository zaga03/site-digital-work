/**import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import type { Language } from "../translations/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext =
  createContext<LanguageContextType | undefined>(
    undefined
  );

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({
  children,
}: LanguageProviderProps) {
  const [language, setLanguageState] =
    useState<Language>(() => {
      const saved = localStorage.getItem(
        "digital-work-language"
      );

      if (
        saved === "fr" ||
        saved === "mg" ||
        saved === "en"
      ) {
        return saved;
      }

      return "fr";
    });

  useEffect(() => {
    localStorage.setItem(
      "digital-work-language",
      language
    );

    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage doit être utilisé dans LanguageProvider"
    );
  }

  return context;
}**/