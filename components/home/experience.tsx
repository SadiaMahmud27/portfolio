import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHead, SectionTitle } from "@/components/ui/section-heading";
import { experience } from "@/content/home";
import { site } from "@/content/site";

type ExperienceItemProps = (typeof experience)[number];

function ExperienceItem({ date, role, company, points }: ExperienceItemProps) {
  return (
    <article
      data-reveal
      className="grid grid-cols-[220px_1fr_1.3fr] gap-8 border-b border-line-strong py-9 max-[900px]:grid-cols-1 max-[900px]:gap-3.5"
    >
      <p className="text-[14px] text-muted">{date}</p>
      <h3 className="font-serif text-[clamp(24px,2.38vw,32px)] leading-[1.1]">
        {role}
        <span className="mt-2 block font-sans text-[14px] text-muted">{company}</span>
      </h3>
      <ol className="grid gap-3 text-[15px] text-ink-2">
        {points.map((point) => (
          <li
            key={point}
            className="grid grid-cols-[14px_1fr] items-start gap-2 before:mt-[0.55em] before:size-[7px] before:rounded-full before:bg-ink"
          >
            {point}
          </li>
        ))}
      </ol>
    </article>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-[clamp(56px,7vw,96px)]">
      <Container>
        <SectionHead>
          <div>
            <Eyebrow>Experience</Eyebrow>
            <SectionTitle>
              Where I&apos;ve <em>worked</em>
            </SectionTitle>
          </div>
          <ButtonLink href={site.resumeUrl} external>
            Full resume ↗
          </ButtonLink>
        </SectionHead>

        <div className="border-t border-line-strong">
          {experience.map((item) => (
            <ExperienceItem key={item.company} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
