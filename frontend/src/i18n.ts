import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { translations } from "./translations/translations";

const resources = {
  fr: {
    translation: translations.fr,
  },
  mg: {
    translation: translations.mg,
  },
  en: {
    translation: translations.en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;