import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Button from "../ui/Button";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import logo from "../../assets/logo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../ui/LanguageSwitcher";

/* =========================================================
   NAVIGATION
========================================================= */

const navigation = [
  {
    key: "home",
    label: "Accueil",
    to: "/",
  },
  {
    key: "services",
    label: "Services",
    to: "/services",
  },
  {
    key: "solutions",
    label: "Solutions",
    to: "/solutions",
  },
  {
    key: "projects",
    label: "Réalisations",
    to: "/realisations",
  },
  {
    key: "about",
    label: "À propos",
    to: "/a-propos",
  },
] as const;

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
const { t } = useTranslation();
  /* =======================================================
     ADMIN SECRET ACCESS
     5 clics rapides sur le logo
  ======================================================= */

  const adminClickCount = useRef(0);

  const adminClickTimer =
    useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  /* =======================================================
     ADMIN ACCESS
  ======================================================= */

  const handleAdminAccess = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    adminClickCount.current += 1;

    /*
     * Annule le précédent timer
     */
    if (adminClickTimer.current) {
      clearTimeout(adminClickTimer.current);
    }

    /*
     * Réinitialise le compteur après 2 secondes
     * sans nouveau clic.
     */
    adminClickTimer.current = setTimeout(() => {
      adminClickCount.current = 0;
      adminClickTimer.current = null;
    }, 2000);

    /*
     * 5 clics rapides
     */
    if (adminClickCount.current >= 5) {
      /*
       * Empêche le Link de retourner simplement
       * vers la page d'accueil.
       */
      event.preventDefault();

      adminClickCount.current = 0;

      if (adminClickTimer.current) {
        clearTimeout(adminClickTimer.current);
        adminClickTimer.current = null;
      }

      /*
       * Accès à l'administration
       */
      window.location.href = "/admin/login";
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div className="border-b border-white/[0.06] bg-dw-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            onClick={(event) => {
              closeMobileMenu();
              handleAdminAccess(event);
            }}
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

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden items-center gap-1 lg:flex">
           {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `
                    rounded-lg px-3 py-2 text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-dw-primary/10 text-dw-text"
                        : "text-dw-muted hover:bg-white/[0.03] hover:text-dw-text"
                    }
                  `}
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              ))}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

         <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ThemeSwitcher />

            <Button to="/contact">
              {t("nav.contact")}
              <ArrowRight size={16} />
            </Button>
          </div>
          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen((value) => !value)
            }
            aria-label={
              mobileOpen
                ? "Fermer le menu"
                : "Ouvrir le menu"
            }
            aria-expanded={mobileOpen}
            className="
              rounded-xl
              border border-white/10
              bg-white/[0.03]
              p-2.5
              text-white
              transition
              hover:bg-white/[0.06]
              lg:hidden
            "
          >
            {mobileOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </div>

      {/* =====================================================
          MOBILE NAVIGATION
      ====================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-b border-white/[0.06]
              bg-dw-surface/95
              backdrop-blur-xl
              lg:hidden
            "
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-6">

              {/* =============================================
                  MOBILE NAVIGATION LINKS
              ============================================== */}

              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) => `
                    rounded-xl
                    px-4
                    py-3.5
                    text-sm
                    font-medium
                    transition-colors
                    ${
                      isActive
                        ? "bg-dw-primary/10 text-dw-text"
                        : "text-dw-muted hover:bg-white/[0.03] hover:text-dw-text"
                    }
                  `}
                >
                  {t(`nav.${item.key}`)}
                </NavLink>
              ))}

              {/* =============================================
                  MOBILE SETTINGS
              ============================================== */}
                {/* MOBILE SETTINGS */}
                <div className="mt-4 border-t border-white/[0.06] pt-4">
                  <p className="mb-3 px-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-dw-muted">
                    {t("common.appearance")}
                  </p>

                  <div className="flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeSwitcher />
                  </div>
                </div>

                {/* MOBILE CTA */}
                <div className="mt-4">
                  <Button
                    to="/contact"
                    onClick={closeMobileMenu}
                    className="w-full justify-center"
                  >
                    {t("nav.contact")}
                    <ArrowRight size={16} />
                  </Button>
                </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}