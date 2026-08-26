import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      aria-label={
        isDark
          ? "Activer le mode clair"
          : "Activer le mode sombre"
      }
      title={
        isDark
          ? "Activer le mode clair"
          : "Activer le mode sombre"
      }
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-dw-border
        bg-dw-card
        text-dw-text
        shadow-sm
        shadow-black/5
        transition-colors
        hover:border-dw-primary/40
        hover:text-dw-primary
      "
    >
      <motion.span
        key={theme}
        initial={{
          opacity: 0,
          rotate: -45,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          rotate: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        {isDark ? (
          <Sun size={17} />
        ) : (
          <Moon size={17} />
        )}
      </motion.span>
    </motion.button>
  );
}