
import {
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import { useTheme } from "../../contexts/ThemeContext";

/* =========================================================
   FOOTER
   DARK MODE  → FOOTER BLANC
   LIGHT MODE → FOOTER SOMBRE
========================================================= */

export default function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  /* =======================================================
     ADMIN SECRET ACCESS
     5 clics rapides sur le copyright
  ======================================================= */

  const adminClickCount = useRef(0);

  const adminClickTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =======================================================
     LEGAL POPUP
  ======================================================= */

  const [legalModal, setLegalModal] = useState<
    "mentions" | "confidentialite" | null
  >(null);

  /* =======================================================
     LANGUAGE
  ======================================================= */

  const [language, setLanguage] = useState<"FR" | "EN" | "MG">("FR");

  const handleLanguageChange = (
    lang: "FR" | "EN" | "MG",
  ) => {
    setLanguage(lang);

    /*
      Événement conservé afin de pouvoir connecter
      ce sélecteur à ton système multilingue existant.
    */

    window.dispatchEvent(
      new CustomEvent("digital-work-language-change", {
        detail: lang,
      }),
    );
  };

  /* =======================================================
     ADMIN ACCESS
  ======================================================= */

  const handleAdminAccess = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();

    adminClickCount.current += 1;

    if (adminClickTimer.current) {
      clearTimeout(adminClickTimer.current);
    }

    adminClickTimer.current = setTimeout(() => {
      adminClickCount.current = 0;
      adminClickTimer.current = null;
    }, 2000);

    if (adminClickCount.current >= 5) {
      adminClickCount.current = 0;

      if (adminClickTimer.current) {
        clearTimeout(adminClickTimer.current);
        adminClickTimer.current = null;
      }

      window.location.href = "/admin/login";
    }
  };

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigationLinks = [
    ["/", "Accueil"],
    ["/services", "Services"],
    ["/solutions", "Solutions"],
    ["/realisations", "Réalisations"],
    ["/a-propos", "À propos"],
    ["/contact", "Contact"],
  ];

  /* =======================================================
     SERVICES
  ======================================================= */

  const serviceLinks = [
    ["/services", "Création de sites web"],
    ["/services", "Applications web"],
    ["/services", "Applications mobiles"],
    ["/solutions", "Solutions métiers"],
    ["/solutions", "Automatisation"],
    ["/solutions", "Solutions digitales"],
  ];

  /* =======================================================
     SOCIAL NETWORKS
  ======================================================= */

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
  ];

  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className={`
          border-t
          transition-colors
          duration-300
          ${
            isDark
              ? "border-slate-200 bg-slate-100 text-slate-900"
              : "border-slate-800 bg-slate-950 text-white"
          }
        `}
      >
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
            {/* =================================================
                BRAND
            ================================================== */}

            <div className="lg:col-span-4">
              <Link
                to="/"
                className="inline-flex items-center gap-3"
              >
                <img
                  src={logo}
                  alt="Digital Work"
                  className="h-12 w-12 object-contain"
                />

                <div className="leading-none">
                  <div
                    className={`
                      text-xl
                      font-bold
                      tracking-tight
                      ${
                        isDark
                          ? "text-slate-900"
                          : "text-white"
                      }
                    `}
                  >
                    Digital
                    <span className="text-dw-primary">
                      {" "}
                      Work
                    </span>
                  </div>

                  <div
                    className={`
                      mt-1
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      ${
                        isDark
                          ? "text-slate-500"
                          : "text-slate-400"
                      }
                    `}
                  >
                    Solutions digitales
                  </div>
                </div>
              </Link>

              <p
                className={`
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  ${
                    isDark
                      ? "text-slate-600"
                      : "text-slate-400"
                  }
                `}
              >
                Nous concevons des solutions digitales
                modernes, performantes et adaptées aux
                besoins des entreprises.
              </p>

              {/* CTA */}

              <Link
                to="/contact"
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-semibold
                  text-dw-primary
                  transition-all
                  hover:gap-3
                  hover:opacity-80
                "
              >
                Démarrer un projet
                <ArrowRight size={16} />
              </Link>

              {/* Expertise */}

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                <span
                  className={`
                    text-xs
                    ${
                      isDark
                        ? "text-slate-500"
                        : "text-slate-500"
                    }
                  `}
                >
                  Web
                </span>

                <span
                  className={`
                    text-xs
                    ${
                      isDark
                        ? "text-slate-500"
                        : "text-slate-500"
                    }
                  `}
                >
                  Mobile
                </span>

                <span
                  className={`
                    text-xs
                    ${
                      isDark
                        ? "text-slate-500"
                        : "text-slate-500"
                    }
                  `}
                >
                  Solutions métiers
                </span>

                <span
                  className={`
                    text-xs
                    ${
                      isDark
                        ? "text-slate-500"
                        : "text-slate-500"
                    }
                  `}
                >
                  Automatisation
                </span>
              </div>
            </div>

            {/* =================================================
                SERVICES
            ================================================== */}

            <div className="lg:col-span-2">
              <h3
                className={`
                  text-sm
                  font-semibold
                  ${
                    isDark
                      ? "text-slate-900"
                      : "text-white"
                  }
                `}
              >
                Services
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                {serviceLinks.map(([to, label]) => (
                  <Link
                    key={`${to}-${label}`}
                    to={to}
                    className={`
                      text-sm
                      transition-colors
                      ${
                        isDark
                          ? "text-slate-600 hover:text-slate-900"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* =================================================
                NAVIGATION
            ================================================== */}

            <div className="lg:col-span-2">
              <h3
                className={`
                  text-sm
                  font-semibold
                  ${
                    isDark
                      ? "text-slate-900"
                      : "text-white"
                  }
                `}
              >
                Navigation
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                {navigationLinks.map(([to, label]) => (
                  <Link
                    key={to}
                    to={to}
                    className={`
                      text-sm
                      transition-colors
                      ${
                        isDark
                          ? "text-slate-600 hover:text-slate-900"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* =================================================
                CONTACT
            ================================================== */}

            <div className="lg:col-span-4">
              <h3
                className={`
                  text-sm
                  font-semibold
                  ${
                    isDark
                      ? "text-slate-900"
                      : "text-white"
                  }
                `}
              >
                Contact
              </h3>

              <div className="mt-5 flex flex-col gap-4">
                {/* Email */}

                <a
                  href="mailto:rrzafindrafita@gmail.com"
                  className={`
                    flex
                    items-start
                    gap-3
                    text-sm
                    transition-colors
                    ${
                      isDark
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-slate-400 hover:text-white"
                    }
                  `}
                >
                  <Mail
                    size={17}
                    className="mt-0.5 shrink-0 text-dw-primary"
                  />

                  <span>
                    rrzafindrafita@gmail.com
                  </span>
                </a>

                {/* Phone */}

                <a
                  href="tel:+261348428652"
                  className={`
                    flex
                    items-start
                    gap-3
                    text-sm
                    transition-colors
                    ${
                      isDark
                        ? "text-slate-600 hover:text-slate-900"
                        : "text-slate-400 hover:text-white"
                    }
                  `}
                >
                  <Phone
                    size={17}
                    className="mt-0.5 shrink-0 text-dw-primary"
                  />

                  <span>
                    +261 34 84 286 52
                  </span>
                </a>

                {/* Location */}

                <div
                  className={`
                    flex
                    items-start
                    gap-3
                    text-sm
                    ${
                      isDark
                        ? "text-slate-600"
                        : "text-slate-400"
                    }
                  `}
                >
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-dw-primary"
                  />

                  <span>Madagascar</span>
                </div>
              </div>

              {/* =================================================
                  SOCIAL NETWORKS
              ================================================== */}

              <div className="mt-7">
                <p
                  className={`
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    ${
                      isDark
                        ? "text-slate-500"
                        : "text-slate-400"
                    }
                  `}
                >
                  Suivez-nous
                </p>

                <div className="mt-4 flex items-center gap-2">
                  {socialLinks.map(
                    ({
                      name,
                      href,
                      icon: Icon,
                    }) => (
                      <a
                        key={name}
                        href={href}
                        target={
                          href !== "#" ? "_blank" : undefined
                        }
                        rel={
                          href !== "#"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={name}
                        onClick={(event) => {
                          if (href === "#") {
                            event.preventDefault();
                          }
                        }}
                        className={`
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          border
                          transition-all
                          ${
                            isDark
                              ? "border-slate-300 text-slate-500 hover:border-dw-primary/40 hover:bg-slate-200 hover:text-slate-900"
                              : "border-white/10 text-slate-400 hover:border-dw-primary/40 hover:bg-white/5 hover:text-white"
                          }
                        `}
                      >
                        <Icon size={16} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            LANGUAGE BAR
        ====================================================== */}

        <div
          className={`
            border-t
            ${
              isDark
                ? "border-slate-300"
                : "border-white/10"
            }
          `}
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              {/* Language */}

              <div className="flex items-center gap-3">
                <span
                  className={`
                    text-xs
                    font-medium
                    ${
                      isDark
                        ? "text-slate-500"
                        : "text-slate-500"
                    }
                  `}
                >
                  Langue
                </span>

                <div
                  className={`
                    flex
                    items-center
                    rounded-lg
                    border
                    p-1
                    ${
                      isDark
                        ? "border-slate-300 bg-slate-200"
                        : "border-white/10 bg-white/[0.03]"
                    }
                  `}
                >
                  {(["FR", "EN", "MG"] as const).map(
                    (lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() =>
                          handleLanguageChange(lang)
                        }
                        className={`
                          rounded-md
                          px-3
                          py-1.5
                          text-xs
                          font-semibold
                          transition-all
                          ${
                            language === lang
                              ? "bg-dw-primary text-white shadow-sm"
                              : isDark
                                ? "text-slate-600 hover:text-slate-900"
                                : "text-slate-400 hover:text-white"
                          }
                        `}
                      >
                        {lang}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <p
                className={`
                  text-xs
                  ${
                    isDark
                      ? "text-slate-500"
                      : "text-slate-500"
                  }
                `}
              >
                Web · Mobile · Solutions digitales
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className={`
            border-t
            ${
              isDark
                ? "border-slate-300"
                : "border-white/10"
            }
          `}
        >
          <div
            className="
              mx-auto
              flex
              max-w-7xl
              flex-col
              gap-4
              px-5
              py-6
              sm:px-6
              md:flex-row
              md:items-center
              md:justify-between
              lg:px-8
            "
          >
            {/* COPYRIGHT */}

            <button
              type="button"
              onClick={handleAdminAccess}
              className={`
                m-0
                cursor-default
                border-0
                bg-transparent
                p-0
                text-left
                text-sm
                outline-none
                transition-colors
                ${
                  isDark
                    ? "text-slate-500 hover:text-slate-700"
                    : "text-slate-400 hover:text-slate-300"
                }
              `}
              aria-label="Digital Work"
            >
              © {new Date().getFullYear()} Digital Work.
              Tous droits réservés.
            </button>

            {/* LEGAL LINKS */}

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setLegalModal("mentions")}
                className={`
                  text-xs
                  transition-colors
                  ${
                    isDark
                      ? "text-slate-500 hover:text-slate-900"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                Mentions légales
              </button>

              <button
                type="button"
                onClick={() =>
                  setLegalModal("confidentialite")
                }
                className={`
                  text-xs
                  transition-colors
                  ${
                    isDark
                      ? "text-slate-500 hover:text-slate-900"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                Confidentialité
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* =====================================================
          LEGAL POPUP
      ====================================================== */}

      {legalModal && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/70
            p-5
            backdrop-blur-sm
          "
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setLegalModal(null);
            }
          }}
        >
          <div
            className={`
              relative
              max-h-[85vh]
              w-full
              max-w-2xl
              overflow-y-auto
              rounded-3xl
              border
              p-6
              shadow-2xl
              sm:p-8
              ${
                isDark
                  ? "border-slate-200 bg-white text-slate-900"
                  : "border-white/10 bg-slate-950 text-white"
              }
            `}
          >
            {/* Close */}

            <button
              type="button"
              onClick={() => setLegalModal(null)}
              className={`
                absolute
                right-5
                top-5
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                border
                transition
                ${
                  isDark
                    ? "border-slate-200 text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    : "border-white/10 text-slate-400 hover:bg-white/5 hover:text-white"
                }
              `}
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            {/* =================================================
                MENTIONS LÉGALES
            ================================================== */}

            {legalModal === "mentions" && (
              <div className="pr-8">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-dw-primary">
                    Digital Work
                  </p>

                  <h2
                    className={`
                      mt-2
                      text-2xl
                      font-bold
                      ${
                        isDark
                          ? "text-slate-900"
                          : "text-white"
                      }
                    `}
                  >
                    Mentions légales
                  </h2>
                </div>

                <div
                  className={`
                    space-y-6
                    text-sm
                    leading-7
                    ${
                      isDark
                        ? "text-slate-600"
                        : "text-slate-400"
                    }
                  `}
                >
                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Éditeur du site
                    </h3>

                    <p>
                      Le présent site est édité par Digital
                      Work, entreprise spécialisée dans la
                      conception, le développement et la mise
                      en œuvre de solutions digitales.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Activité
                    </h3>

                    <p>
                      Digital Work accompagne les entreprises,
                      organisations et particuliers dans leurs
                      projets numériques : développement web,
                      applications, solutions digitales,
                      maintenance et accompagnement technique.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Contact
                    </h3>

                    <p>
                      Email : rrzafindrafita@gmail.com
                      <br />
                      Téléphone : +261 34 84 286 52
                      <br />
                      Pays : Madagascar
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Propriété intellectuelle
                    </h3>

                    <p>
                      L'ensemble des éléments présents sur ce
                      site, notamment les textes, images, logos,
                      interfaces, graphismes et éléments
                      logiciels, est protégé par les règles
                      applicables en matière de propriété
                      intellectuelle.
                    </p>

                    <p className="mt-3">
                      Toute reproduction, modification,
                      distribution ou utilisation sans
                      autorisation préalable peut être interdite.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Responsabilité
                    </h3>

                    <p>
                      Digital Work s'efforce de maintenir les
                      informations publiées sur le site à jour.
                      Toutefois, aucune garantie absolue
                      concernant l'exhaustivité ou l'absence
                      d'erreurs ne peut être donnée.
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* =================================================
                CONFIDENTIALITÉ
            ================================================== */}

            {legalModal === "confidentialite" && (
              <div className="pr-8">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-dw-primary">
                    Digital Work
                  </p>

                  <h2
                    className={`
                      mt-2
                      text-2xl
                      font-bold
                      ${
                        isDark
                          ? "text-slate-900"
                          : "text-white"
                      }
                    `}
                  >
                    Politique de confidentialité
                  </h2>
                </div>

                <div
                  className={`
                    space-y-6
                    text-sm
                    leading-7
                    ${
                      isDark
                        ? "text-slate-600"
                        : "text-slate-400"
                    }
                  `}
                >
                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Protection de vos données
                    </h3>

                    <p>
                      Digital Work accorde une importance
                      particulière à la protection des données
                      personnelles communiquées par les
                      utilisateurs du site.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Données collectées
                    </h3>

                    <p>
                      Lorsque vous utilisez les fonctionnalités
                      de contact du site, certaines informations
                      peuvent être communiquées volontairement,
                      notamment votre nom, votre adresse email,
                      votre numéro de téléphone et les
                      informations relatives à votre projet.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Utilisation des informations
                    </h3>

                    <p>
                      Les informations transmises sont utilisées
                      principalement pour répondre aux demandes,
                      communiquer avec les utilisateurs et
                      assurer le suivi des projets et prestations
                      proposés par Digital Work.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Conservation et sécurité
                    </h3>

                    <p>
                      Les données sont conservées uniquement
                      lorsque cela est nécessaire aux finalités
                      pour lesquelles elles ont été collectées.
                      Digital Work met en œuvre des mesures
                      raisonnables afin de protéger ces
                      informations contre tout accès,
                      modification ou divulgation non autorisée.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Vos droits
                    </h3>

                    <p>
                      Vous pouvez contacter Digital Work pour
                      demander des informations concernant les
                      données personnelles vous concernant,
                      demander leur rectification ou solliciter
                      leur suppression lorsque cela est
                      applicable.
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${
                          isDark
                            ? "text-slate-900"
                            : "text-white"
                        }
                      `}
                    >
                      Contact
                    </h3>

                    <p>
                      Pour toute question relative à la
                      confidentialité ou au traitement de vos
                      données :
                      <br />
                      <span className="font-medium">
                        rrzafindrafita@gmail.com
                      </span>
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* =================================================
                CLOSE
            ================================================== */}

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="
                  rounded-xl
                  bg-dw-primary
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:opacity-90
                "
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

