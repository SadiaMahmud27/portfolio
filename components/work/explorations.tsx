import { Container } from "@/components/ui/container";
import { SectionHead, SectionIntro, SectionTitle } from "@/components/ui/section-heading";
import { ExplorationItem } from "@/components/work/exploration-item";
import { explorations } from "@/content/work";

export function Explorations() {
  return (
    <section className="py-[clamp(72px,10vw,140px)]">
      <Container>
        <SectionHead>
          <SectionTitle>Explorations</SectionTitle>
          <SectionIntro>Shorter projects, each shown as a scrollable gallery.</SectionIntro>
        </SectionHead>

        <div className="border-t border-line-strong">
          {explorations.map((item) => (
            <ExplorationItem key={item.id} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
