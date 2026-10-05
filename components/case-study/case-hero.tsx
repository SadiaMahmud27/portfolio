import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { routes } from "@/content/site";

export type CaseMetaItem = {
  term: string;
  value: string;
  href?: string;
};

type CaseHeroProps = {
  eyebrow: string;
  title: ReactNode;
  summary: string;
  meta: CaseMetaItem[];
};

export function CaseHero({ eyebrow, title, summary, meta }: CaseHeroProps) {
  return (
    <section className="pt-[clamp(32px,5vw,64px)] pb-[clamp(36px,5vw,56px)]">
      <Container>
        <Link
          href={routes.work}
          className="mb-[clamp(32px,5vw,56px)] flex w-fit items-center gap-2 text-[14px] text-muted hover:text-ink"
        >
          ← All work
        </Link>
        <Eyebrow block className="mb-5">
          {eyebrow}
        </Eyebrow>
        <h1 className="font-display text-[clamp(54px,9.35vw,150px)] leading-[0.88] tracking-[-0.018em]">
          {title}
        </h1>
        <p className="mt-8 mb-0 max-w-[760px] text-[clamp(19px,1.88vw,24px)] leading-[1.4] text-ink-2">
          {summary}
        </p>
        <CaseMeta items={meta} />
      </Container>
    </section>
  );
}

function CaseMeta({ items }: { items: CaseMetaItem[] }) {
  return (
    <dl className="mt-[clamp(40px,5vw,64px)] mb-[1em] grid grid-cols-4 border-t border-line-strong max-[760px]:grid-cols-2">
      {items.map(({ term, value, href }) => (
        <div
          key={term}
          className="pt-[18px] pr-5 not-first:border-l not-first:border-line not-first:pl-5 max-[760px]:nth-3:border-l-0 max-[760px]:nth-3:pl-0 max-[760px]:nth-[n+3]:pt-[18px]"
        >
          <dt className="text-[12px] tracking-[0.12em] text-muted uppercase">{term}</dt>
          <dd className="mt-1.5 text-[16px]">
            {href ? (
              <a href={href} target="_blank" rel="noopener" className="border-b border-current">
                {value}
              </a>
            ) : (
              value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
