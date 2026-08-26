
import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  const centered = align === "center";

  return (
    <div
      className={`
        max-w-3xl
        ${centered ? "mx-auto text-center" : ""}
      `}
    >
      {eyebrow && (
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-dw-primary/20
            bg-dw-primary/10
            px-3
            py-1
            text-xs
            font-semibold
            tracking-wide
            text-dw-primary
          "
        >
          {eyebrow}
        </span>
      )}

      <h2
        className="
          mt-5
          text-3xl
          font-bold
          leading-tight
          tracking-tight
          text-dw-text
          dark:text-dw-text
          sm:text-4xl
          lg:text-5xl
        "
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-5
            max-w-2xl
            text-base
            leading-8
            text-[#5F6B63]
            dark:text-[#B8BDB8]
            sm:text-lg
          "
        >
          {description}
        </p>
      )}
    </div>
  );
}
