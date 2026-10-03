import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PageHero({ count }: { count: number }) {
  return (
    <section className="pt-[clamp(48px,8vw,110px)] pb-[clamp(36px,5vw,64px)]">
      <Container>
        <Eyebrow>Portfolio</Eyebrow>
        <h1 className="mt-5 font-serif text-[clamp(60px,10vw,160px)] leading-[0.9] tracking-[-0.03em]">
          All <em>work</em>
          <sup className="relative top-0 ml-1.5 align-top font-sans text-[0.16em] leading-[0.9] tracking-normal text-muted">
            {`(${String(count).padStart(2, "0")})`}
          </sup>
        </h1>
        <p className="mt-6 max-w-[560px] text-[19px] text-ink-2">
          Start with the case studies for the full story. Below them are shorter explorations:
          quick studies, clones and concepts.
        </p>
      </Container>
    </section>
  );
}
