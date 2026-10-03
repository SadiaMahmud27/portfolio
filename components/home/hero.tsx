import type { ReactNode } from "react";
import { HeroPortrait } from "@/components/home/hero-portrait";
import { Stats } from "@/components/home/stats";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";

function Highlight({ tone, children }: { tone: "butter" | "blush"; children: ReactNode }) {
  return (
    <span
      className={cn(
        "relative whitespace-nowrap",
        "after:absolute after:-right-[2%] after:bottom-[0.08em] after:-left-[2%] after:-z-1 after:h-[0.28em] after:rounded-[4px]",
        tone === "butter" ? "after:bg-butter" : "after:bg-blush",
      )}
    >
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="pt-[clamp(40px,7vw,96px)] pb-[clamp(48px,7vw,88px)]">
      <Container>
        <div className="grid grid-cols-[1.35fr_0.65fr] items-end gap-[clamp(32px,5vw,72px)] max-[900px]:grid-cols-1">
          <div>
            <h1 className="font-serif text-[clamp(52px,8.4vw,132px)] leading-[0.95] tracking-[-0.025em]">
              Hi, I&apos;m Sadia. I design <em>calm</em> interfaces for{" "}
              <Highlight tone="butter">busy</Highlight> <Highlight tone="blush">people.</Highlight>
            </h1>
          </div>
          <HeroPortrait />
        </div>

        <div className="mt-10 flex flex-wrap items-end justify-between gap-x-12 gap-y-7">
          <p className="m-0 max-w-[520px] text-[19px] text-ink-2">
            A UI/UX designer with a background in design and communication. I bring user-focused
            ideas and teamwork to creative projects, from fintech tools to playful mobile apps.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="#work" variant="solid">
              See selected work <ButtonArrow>↓</ButtonArrow>
            </ButtonLink>
            <ButtonLink href="#contact">Get in touch</ButtonLink>
          </div>
        </div>

        <Stats />
      </Container>
    </section>
  );
}
