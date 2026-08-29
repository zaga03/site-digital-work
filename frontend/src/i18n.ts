import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      common: {
        language: "Langue",
        close: "Fermer",
        learnMore: "En savoir plus",
        contact: "Nous contacter",
      },

      navbar: {
        home: "Accueil",
        services: "Services",
        solutions: "Solutions",
        projects: "Réalisations",
        about: "À propos",
        contact: "Contact",
      },

      footer: {
        services: "Services",
        navigation: "Navigation",
        contact: "Contact",
        followUs: "Suivez-nous",
        legal: "Mentions légales",
        privacy: "Confidentialité",
      },

      home: {
        hero: {
          title: "Des solutions digitales pour faire grandir votre activité",
          description:
            "Nous concevons des solutions web, mobiles et digitales modernes, performantes et adaptées à vos besoins.",
          cta: "Demander un projet",
          secondaryCta: "Voir nos réalisations",
        },
      },
    },
  },

  en: {
    translation: {
      common: {
        language: "Language",
        close: "Close",
        learnMore: "Learn more",
        contact: "Contact us",
      },

      navbar: {
        home: "Home",
        services: "Services",
        solutions: "Solutions",
        projects: "Projects",
        about: "About",
        contact: "Contact",
      },

      footer: {
        services: "Services",
        navigation: "Navigation",
        contact: "Contact",
        followUs: "Follow us",
        legal: "Legal notice",
        privacy: "Privacy",
      },

      home: {
        hero: {
          title: "Digital solutions to grow your business",
          description:
            "We design modern, high-performance web, mobile and digital solutions tailored to your needs.",
          cta: "Start a project",
          secondaryCta: "View our projects",
        },
      },
    },
  },

  mg: {
    translation: {
      common: {
        language: "Fiteny",
        close: "Hidio",
        learnMore: "Hijery bebe kokoa",
        contact: "Hifandray aminay",
      },

      navbar: {
        home: "Fandraisana",
        services: "Tolotra",
        solutions: "Vahaolana",
        projects: "Vita",
        about: "Momba anay",
        contact: "Fifandraisana",
      },

      footer: {
        services: "Tolotra",
        navigation: "Fikarohana",
        contact: "Fifandraisana",
        followUs: "Araho izahay",
        legal: "Lalàna",
        privacy: "Fiainana manokana",
      },

      home: {
        hero: {
          title: "Vahaolana nomerika hampandrosoana ny orinasanao",
          description:
            "Mamorona vahaolana web, mobile ary nomerika maoderina sy mahomby mifanaraka amin'ny filanao izahay.",
          cta: "Hangataka tetikasa",
          secondaryCta: "Hijery ny asa vita",
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;