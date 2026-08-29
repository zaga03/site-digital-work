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
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../ui/LanguageSwitcher";
import logo from "../../assets/logo.png";
import { useTheme } from "../../contexts/ThemeContext";

type LegalModal = "mentions" | "confidentialite" | null;

export default function Footer() {
  const { theme } = useTheme();
  const { t } = useTranslation();

  const isDark = theme === "dark";

  const [legalModal, setLegalModal] = useState<LegalModal>(null);

  /**
   * ============================================================
   * ADMIN SECRET ACCESS
   * 5 clics rapides sur le copyright
   * ============================================================
   */
  const adminClickCount = useRef(0);

  const adminClickTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );

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

  /**
   * ============================================================
   * NAVIGATION
   * ============================================================
   */
  const navigationLinks = [
    ["/", "footer.home"],
    ["/services", "footer.services"],
    ["/solutions", "footer.solutions"],
    ["/realisations", "footer.projects"],
    ["/a-propos", "footer.about"],
    ["/contact", "footer.contact"],
  ] as const;

  /**
   * ============================================================
   * SERVICES
   * ============================================================
   */
  const serviceLinks = [
    ["/services", "footer.websites"],
    ["/services", "footer.webApplications"],
    ["/services", "footer.mobileApplications"],
    ["/solutions", "footer.businessSolutions"],
    ["/solutions", "footer.automation"],
    ["/solutions", "footer.digitalSolutions"],
  ] as const;

  /**
   * ============================================================
   * SOCIAL NETWORKS
   * ============================================================
   *
   * Remplace les "#" par tes vraies URLs lorsque disponibles.
   */
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

  /**
   * ============================================================
   * COMMON COLORS
   * ============================================================
   */
  const footerText = isDark
    ? "text-slate-400"
    : "text-slate-400";

  const footerMuted = isDark
    ? "text-slate-500"
    : "text-slate-500";

  const footerHeading = isDark
    ? "text-slate-900"
    : "text-white";

  const footerLink = isDark
    ? "text-slate-600 hover:text-slate-900"
    : "text-slate-400 hover:text-white";

  return (
    <>
      {/* ========================================================
          FOOTER
      ======================================================== */}
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
        {/* ======================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
            {/* ==================================================
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
                      ${isDark ? "text-slate-900" : "text-white"}
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
                      ${footerMuted}
                    `}
                  >
                    {t("footer.tagline")}
                  </div>
                </div>
              </Link>

              <p
                className={`
                  mt-6
                  max-w-md
                  text-sm
                  leading-7
                  ${footerText}
                `}
              >
                {t("footer.description")}
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
                <span>{t("footer.contact")}</span>
                <ArrowRight size={16} />
              </Link>

              {/* Expertise */}
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                <span className={`text-xs ${footerMuted}`}>
                  {t("footer.web")}
                </span>

                <span className={`text-xs ${footerMuted}`}>
                  {t("footer.mobile")}
                </span>

                <span className={`text-xs ${footerMuted}`}>
                  {t("footer.businessSolutions")}
                </span>

                <span className={`text-xs ${footerMuted}`}>
                  {t("footer.automation")}
                </span>
              </div>
            </div>

            {/* ==================================================
                SERVICES
            ================================================== */}
            <div className="lg:col-span-2">
              <h3
                className={`
                  text-sm
                  font-semibold
                  ${footerHeading}
                `}
              >
                {t("footer.services")}
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                {serviceLinks.map(([to, key]) => (
                  <Link
                    key={`${to}-${key}`}
                    to={to}
                    className={`
                      text-sm
                      transition-colors
                      ${footerLink}
                    `}
                  >
                    {t(key)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ==================================================
                NAVIGATION
            ================================================== */}
            <div className="lg:col-span-2">
              <h3
                className={`
                  text-sm
                  font-semibold
                  ${footerHeading}
                `}
              >
                {t("footer.navigation")}
              </h3>

              <nav className="mt-5 flex flex-col gap-3">
                {navigationLinks.map(([to, key]) => (
                  <Link
                    key={`${to}-${key}`}
                    to={to}
                    className={`
                      text-sm
                      transition-colors
                      ${footerLink}
                    `}
                  >
                    {t(key)}
                  </Link>
                ))}
              </nav>
            </div>

            {/* ==================================================
                CONTACT
            ================================================== */}
            <div className="lg:col-span-4">
              <h3
                className={`
                  text-sm
                  font-semibold
                  ${footerHeading}
                `}
              >
                {t("footer.contact")}
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
                    ${footerLink}
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
                    ${footerLink}
                  `}
                >
                  <Phone
                    size={17}
                    className="mt-0.5 shrink-0 text-dw-primary"
                  />

                  <span>+261 34 84 286 52</span>
                </a>

                {/* Location */}
                <div
                  className={`
                    flex
                    items-start
                    gap-3
                    text-sm
                    ${footerText}
                  `}
                >
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-dw-primary"
                  />

                  <span>{t("footer.madagascar")}</span>
                </div>
              </div>

              {/* ==================================================
                  SOCIAL NETWORKS
              ================================================== */}
              <div className="mt-7">
                <p
                  className={`
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    ${footerMuted}
                  `}
                >
                  {t("footer.followUs")}
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
                          href !== "#"
                            ? "_blank"
                            : undefined
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

        {/* ======================================================
            LANGUAGE BAR
        ====================================================== */}
        <div
          className={`
            border-t
            ${isDark ? "border-slate-300" : "border-white/10"}
          `}
        >
          <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span
                  className={`
                    text-xs
                    font-medium
                    ${footerMuted}
                  `}
                >
                  {t("common.language")}
                </span>

                <LanguageSwitcher />
              </div>

              <p
                className={`
                  text-xs
                  ${footerMuted}
                `}
              >
                {t("footer.web")} ·{" "}
                {t("footer.mobile")} ·{" "}
                {t("footer.digitalSolutions")}
              </p>
            </div>
          </div>
        </div>

        {/* ======================================================
            BOTTOM BAR
        ====================================================== */}
        <div
          className={`
            border-t
            ${isDark ? "border-slate-300" : "border-white/10"}
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
              © {new Date().getFullYear()} Digital Work.{" "}
              {t("footer.allRightsReserved")}
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
                {t("footer.legal")}
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
                {t("footer.privacy")}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================
          LEGAL MODAL
      ======================================================== */}
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
            {/* CLOSE */}
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
              aria-label={t("footer.close")}
            >
              <X size={18} />
            </button>

            {/* ==================================================
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
                      ${footerHeading}
                    `}
                  >
                    {t("footer.legal")}
                  </h2>
                </div>

                <div
                  className={`
                    space-y-6
                    text-sm
                    leading-7
                    ${footerText}
                  `}
                >
                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.legalEditor")}
                    </h3>

                    <p>
                      {t("footer.legalEditorText")}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.activity")}
                    </h3>

                    <p>
                      {t("footer.activityText")}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.contact")}
                    </h3>

                    <p>
                      Email : rrzafindrafita@gmail.com
                      <br />
                      Téléphone : +261 34 84 286 52
                      <br />
                      {t("footer.country")} : Madagascar
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.intellectualProperty")}
                    </h3>

                    <p>
                      {t(
                        "footer.intellectualPropertyText",
                      )}
                    </p>

                    <p className="mt-3">
                      {t(
                        "footer.intellectualPropertyText2",
                      )}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.responsibility")}
                    </h3>

                    <p>
                      {t("footer.responsibilityText")}
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* ==================================================
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
                      ${footerHeading}
                    `}
                  >
                    {t("footer.privacy")}
                  </h2>
                </div>

                <div
                  className={`
                    space-y-6
                    text-sm
                    leading-7
                    ${footerText}
                  `}
                >
                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.dataProtection")}
                    </h3>

                    <p>
                      {t("footer.dataProtectionText")}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.collectedData")}
                    </h3>

                    <p>
                      {t("footer.collectedDataText")}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.informationUse")}
                    </h3>

                    <p>
                      {t("footer.informationUseText")}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.storageSecurity")}
                    </h3>

                    <p>
                      {t(
                        "footer.storageSecurityText",
                      )}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.yourRights")}
                    </h3>

                    <p>
                      {t("footer.yourRightsText")}
                    </p>
                  </section>

                  <section>
                    <h3
                      className={`
                        mb-2
                        font-semibold
                        ${footerHeading}
                      `}
                    >
                      {t("footer.contact")}
                    </h3>

                    <p>
                      {t("footer.privacyContact")}
                      <br />

                      <span className="font-medium">
                        rrzafindrafita@gmail.com
                      </span>
                    </p>
                  </section>
                </div>
              </div>
            )}

            {/* CLOSE BUTTON */}
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
                {t("footer.close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}