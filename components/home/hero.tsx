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
    <section className="pt-[clamp(28px,4vw,56px)] pb-[clamp(48px,7vw,88px)]">
      <Container>
        <div className="grid grid-cols-[1.35fr_0.65fr] gap-[clamp(32px,5vw,72px)] max-[900px]:grid-cols-1">
          {/*
           * Headline sits level with the top of the portrait, intro and actions with its base.
           * The column shrinks to the headline's widest line (its lines are blocks), and the
           * intro fills that width without widening it, so both share the same right edge.
           */}
          <div className="flex w-fit max-w-full flex-col justify-between gap-8">
            <h1 className="font-display text-[clamp(30px,4.65vw,73px)] leading-[1.02] tracking-[-0.01em] *:block">
              <span>Hi, I&apos;m Sadia.</span>
              <span>I shape complex systems</span>
              <span>
                into <em>simple</em>, <Highlight tone="butter">intuitive</Highlight>
              </span>
              <span>experiences.</span>
            </h1>
            <div>
              <p className="m-0 w-0 min-w-full text-[18px] text-pretty text-ink-2">
                Great design feels seamless and starts with empathy, both for the people using the
                app and the team building it. I focus on creating user-focused digital products
                where nobody feels lost or silly trying to figure out what to click next.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="#work" variant="solid">
                  See selected work <ButtonArrow>↓</ButtonArrow>
                </ButtonLink>
                <ButtonLink href="#contact">Get in touch</ButtonLink>
              </div>
            </div>
          </div>
          <HeroPortrait />
        </div>

        <Stats />
      </Container>
    </section>
  );
}
