
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-dw-primary/20
        bg-dw-primary/10
        px-3
        py-1.5
        text-xs
        font-semibold
        uppercase
        tracking-[0.12em]
        text-dw-primary
        ${className}
      `}
    >
      <span
        className="
          h-1.5
          w-1.5
          rounded-full
          bg-dw-primary
        "
      />

      {children}
    </span>
  );
}

