import {
  Languages,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "fr",
    label: "Français",
    short: "FR",
  },
  {
    code: "mg",
    label: "Malagasy",
    short: "MG",
  },
  {
    code: "en",
    label: "English",
    short: "EN",
  },
] as const;

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const current =
    languages.find(
      (item) => item.code === i18n.language
    ) ?? languages[0];

  const handleLanguageChange = (
    language: (typeof languages)[number]["code"]
  ) => {
    i18n.changeLanguage(language);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={t("common.changeLanguage")}
        aria-expanded={open}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-dw-border
          bg-dw-card
          px-3
          py-2
          text-sm
          text-dw-text
          shadow-sm
          hover:bg-dw-primary/5
        "
      >
        <Languages size={16} />

        <span>{current.short}</span>

        <ChevronDown
          size={14}
          className={
            open
              ? "rotate-180 transition-transform"
              : "transition-transform"
          }
        />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            mt-2
            w-36
            overflow-hidden
            rounded-xl
            border
            border-dw-border
            bg-dw-card
            p-1
            shadow-xl
          "
        >
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => handleLanguageChange(item.code)}
              aria-current={
                i18n.language === item.code
                  ? "true"
                  : undefined
              }
              className={`
                flex
                w-full
                items-center
                justify-between
                rounded-lg
                px-3
                py-2.5
                text-sm
                transition
                ${
                  i18n.language === item.code
                    ? "bg-dw-primary/10 text-dw-primary"
                    : "text-dw-text hover:bg-dw-primary/5"
                }
              `}
            >
              <span>{item.label}</span>

              <span className="text-xs text-dw-muted">
                {item.short}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}