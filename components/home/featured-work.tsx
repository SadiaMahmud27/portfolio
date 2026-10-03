import { MiniCard } from "@/components/home/mini-card";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHead, SectionIntro, SectionTitle } from "@/components/ui/section-heading";
import { WorkList } from "@/components/work/work-list";
import { featuredWork, moreExplorations } from "@/content/home";
import { routes } from "@/content/site";

export function FeaturedWork() {
  return (
    <section id="work" className="py-[clamp(72px,10vw,140px)]">
      <Container>
        <SectionHead>
          <div>
            <SectionTitle>
              Featured <em>case studies</em>
            </SectionTitle>
          </div>
          <SectionIntro>
            Three in-depth projects, each starting from a familiar problem and making it simpler,
            clearer or more fun.
          </SectionIntro>
        </SectionHead>

        <WorkList items={featuredWork} />

        <SectionHead className="mt-12 mb-7!">
          <SectionTitle as="h3" size="md">
            More <em>explorations</em>
          </SectionTitle>
          <ButtonLink href={routes.work}>
            All projects <ButtonArrow />
          </ButtonLink>
        </SectionHead>
        <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
          {moreExplorations.map((item) => (
            <MiniCard key={item.href} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
