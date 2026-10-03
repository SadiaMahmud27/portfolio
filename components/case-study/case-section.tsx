import type { ReactNode } from "react";

type CaseSectionProps = {
  id: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
};

/** One numbered chapter of a case study. Paragraphs inside get the long-form text style. */
export function CaseSection({ id, label, title, children }: CaseSectionProps) {
  return (
    <section
      id={id}
      data-reveal
      className="scroll-mt-24 not-first:mt-[clamp(64px,8vw,112px)] [&_p]:text-[18px] [&_p]:text-ink-2 [&_strong]:font-semibold [&_strong]:text-ink"
    >
      <span className="mb-3.5 block text-[13px] tracking-[0.14em] text-muted uppercase">
        {label}
      </span>
      <h2 className="mb-6 font-serif text-[clamp(38px,4.4vw,64px)] tracking-[-0.02em] [&_em]:italic">
        {title}
      </h2>
      {children}
    </section>
  );
}
