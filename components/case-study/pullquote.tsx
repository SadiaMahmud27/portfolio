import type { ReactNode } from "react";

/** Large display-font quote on the page accent colour. */
export function Pullquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mx-0 my-9 rounded-card bg-(--accent) px-8 py-7 font-display text-[clamp(22px,2.55vw,34px)] leading-[1.15] text-ink [&_em]:italic">
      {children}
    </blockquote>
  );
}
