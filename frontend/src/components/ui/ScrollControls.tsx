import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function ScrollControls() {
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowControls(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`
        fixed
        bottom-6
        right-6
        z-[60]
        flex
        flex-col
        gap-2
        transition-all
        duration-300
        ${
          showControls
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      {/* Aller en haut */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Retourner en haut"
        title="Retour en haut"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white/90
          text-slate-700
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:border-dw-primary
          hover:bg-dw-primary
          hover:text-white
          dark:border-white/10
          dark:bg-slate-900/90
          dark:text-slate-300
          dark:hover:border-dw-primary
          dark:hover:bg-dw-primary
          dark:hover:text-white
        "
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* Aller en bas */}
      <button
        type="button"
        onClick={scrollToBottom}
        aria-label="Aller en bas"
        title="Aller en bas"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-slate-200
          bg-white/90
          text-slate-700
          shadow-lg
          backdrop-blur-md
          transition-all
          duration-200
          hover:translate-y-0.5
          hover:border-dw-primary
          hover:bg-dw-primary
          hover:text-white
          dark:border-white/10
          dark:bg-slate-900/90
          dark:text-slate-300
          dark:hover:border-dw-primary
          dark:hover:bg-dw-primary
          dark:hover:text-white
        "
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </div>
  );
}