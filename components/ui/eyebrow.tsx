import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  /** Render as its own block-level row instead of inline. */
  block?: boolean;
  className?: string;
  children: ReactNode;
};

export function Eyebrow({ block = false, className, children }: EyebrowProps) {
  return (
    <span
      className={cn(
        block ? "flex w-fit" : "inline-flex",
        "items-center gap-2.5 text-[13px] tracking-[0.14em] text-muted uppercase",
        "before:size-2 before:rounded-full before:bg-current before:opacity-60",
        className,
      )}
    >
      {children}
    </span>
  );
}
