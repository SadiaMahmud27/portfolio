import type { ReactNode } from "react";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaBandProps = {
  title: ReactNode;
  text: string;
  action: string;
};

/** Dark call-to-action band shown above the footer on inner pages. */
export function CtaBand({ title, text, action }: CtaBandProps) {
  return (
    <section className="rounded-t-card bg-ink pt-[clamp(64px,9vw,120px)] pb-10 text-paper">
      <Container className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <h2 className="max-w-[820px] font-display text-[clamp(37px,5.44vw,82px)] tracking-[-0.01em] [&_em]:text-blush">
            {title}
          </h2>
          <p className="mt-5 mb-0 max-w-[520px] text-paper/70">{text}</p>
        </div>
        <ButtonLink href="/#contact" variant="light">
          {action} <ButtonArrow />
        </ButtonLink>
      </Container>
    </section>
  );
}
