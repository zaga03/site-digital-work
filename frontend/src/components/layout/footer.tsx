
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  X,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

type LegalModal = "legal" | "privacy" | null;

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState<LegalModal>(null);


  const changeLanguage = (language: "fr" | "mg" | "en") => {
    i18n.changeLanguage(language);
  };

  const languages = [
    { code: "fr" as const, label: "FR" },
    { code: "mg" as const, label: "MG" },
    { code: "en" as const, label: "EN" },
  ];

  return (
    <>
      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          {/* Main footer */}
         <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="lg:col-span-1">
                <div>
                    {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            className="group flex items-center gap-3"
            aria-label="Digital Work - Accueil"
          >
            {/* Logo icon */}

            <img
              src={logo}
              alt="Digital Work"
              className="h-10 w-10 object-contain transition-transform duration-200 group-hover:scale-105"
            />

            {/* Logo text */}

            <div className="leading-none">
              <div className="text-lg font-bold tracking-tight text-dw-white">
                Digital
                <span className="text-dw-primary">
                  Work
                </span>
              </div>

              <div className="mt-1 text-[9px] font-medium uppercase tracking-[0.25em] text-dw-muted">
                Solutions digitales
              </div>
            </div>
          </Link>


                  <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {t("footer.description")}
                  </p>

                  {/* Contact shortcut */}
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    <Mail className="h-4 w-4" />
                    {t("footer.contact.title")}
                  </Link>

                  {/* Social */}
                  <div className="mt-7 flex items-center gap-3">
                    <a
                      href="#"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>

                    <a
                      href="#"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
                    >
                      <Instagram className="h-4 w-4" />
                    </a>

                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>

                    <a
                      href="#"
                      aria-label="GitHub"
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 dark:hover:text-blue-400"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 lg:contents">  
            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                {t("footer.services.title")}
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                    to="/services"
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.services.websites")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.services.webApplications")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.services.mobileApplications")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/solutions"
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.services.businessSolutions")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/solutions"
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.services.automation")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/solutions"
                    className="text-sm text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.services.digitalSolutions")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                {t("footer.navigation.title")}
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.navigation.home")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/services"
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.navigation.services")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/solutions"
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.navigation.solutions")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/realisations"
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.navigation.projects")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/a-propos"
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.navigation.about")}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {t("footer.navigation.contact")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-950 dark:text-white">
                {t("footer.contact.title")}
              </h3>

              <div className="mt-5 space-y-4">
                <a
                  href={`mailto:${t("footer.contact.email")}`}
                  className="flex items-start gap-3 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />

                  <span className="break-all">
                    {t("footer.contact.email")}
                  </span>
                </a>

                <a
                  href="tel:+261348428652"
                  className="flex items-start gap-3 text-sm text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />

                  <span>{t("footer.contact.phone")}</span>
                </a>

                <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                  <span>{t("footer.madagascar")}</span>
                </div>
              </div>

              {/* Language */}
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t("footer.language")}
                </p>

                <div className="mt-3 flex gap-2">
                  {languages.map((language) => {
                    const active = i18n.language.startsWith(language.code);

                    return (
                      <button
                        key={language.code}
                        type="button"
                        onClick={() => changeLanguage(language.code)}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                          active
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                        }`}
                        aria-pressed={active}
                      >
                        {language.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            </div>
        </div>
          {/* Bottom */}
          <div className="mt-14 border-t border-slate-200 pt-8 dark:border-slate-800">
            <div className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-slate-500 dark:text-slate-500">
                © {new Date().getFullYear()} Digital Work.{" "}
                {t("footer.copyright")}
              </p>

              <div className="flex items-center gap-5">
                <button
                  type="button"
                  onClick={() => setModal("legal")}
                  className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
                >
                  {t("footer.legal")}
                </button>

                <button
                  type="button"
                  onClick={() => setModal("privacy")}
                  className="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white"
                >
                  {t("footer.privacy")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal / Privacy modal */}
      {modal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-modal-title"
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setModal(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
              aria-label={t("footer.modal.close")}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="pr-10">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Digital Work
              </p>

              <h2
                id="footer-modal-title"
                className="mt-2 text-2xl font-black tracking-tight text-slate-950 dark:text-white"
              >
                {modal === "legal"
                  ? t("footer.legal")
                  : t("footer.privacy")}
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {modal === "legal" ? (
                  <>
                    <p>{t("footer.legalContent.introduction")}</p>

                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {t("footer.legalContent.editorTitle")}
                      </h3>
                      <p>{t("footer.legalContent.editor")}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {t("footer.legalContent.hostingTitle")}
                      </h3>
                      <p>{t("footer.legalContent.hosting")}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {t("footer.legalContent.intellectualTitle")}
                      </h3>
                      <p>{t("footer.legalContent.intellectual")}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p>{t("footer.privacyContent.introduction")}</p>

                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {t("footer.privacyContent.dataTitle")}
                      </h3>
                      <p>{t("footer.privacyContent.data")}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {t("footer.privacyContent.usageTitle")}
                      </h3>
                      <p>{t("footer.privacyContent.usage")}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {t("footer.privacyContent.rightsTitle")}
                      </h3>
                      <p>{t("footer.privacyContent.rights")}</p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-950 dark:text-white">
                        {t("footer.privacyContent.contactTitle")}
                      </h3>
                      <p>{t("footer.privacyContent.contact")}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

