import type { CSSProperties, ReactNode } from "react";
import { CaseHero, type CaseMetaItem } from "@/components/case-study/case-hero";
import { NextProject, type NextProjectData } from "@/components/case-study/next-project";
import { TableOfContents, type TocItem } from "@/components/case-study/table-of-contents";
import { CtaBand } from "@/components/layout/cta-band";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";
import { StaticImage } from "@/components/ui/static-image";
import { footerLinks } from "@/content/site";
import type { Accent, Picture } from "@/content/types";

type CaseStudyLayoutProps = {
  /** Accent colour for the cover frame and pull quotes. */
  accent: Accent;
  eyebrow: string;
  title: ReactNode;
  summary: string;
  meta: CaseMetaItem[];
  cover: Picture;
  toc: TocItem[];
  next: NextProjectData;
  /** The <CaseSection> chapters. */
  children: ReactNode;
};

export function CaseStudyLayout({
  accent,
  eyebrow,
  title,
  summary,
  meta,
  cover,
  toc,
  next,
  children,
}: CaseStudyLayoutProps) {
  const accentStyle = { "--accent": `var(--color-${accent})` } as CSSProperties;

  return (
    <>
      <main id="main" style={accentStyle}>
        <CaseHero eyebrow={eyebrow} title={title} summary={summary} meta={meta} />

        <Container>
          <figure className="m-0">
            <div className="overflow-hidden rounded-card bg-(--accent)">
              <StaticImage
                src={cover.src}
                alt={cover.alt}
                sizes="(max-width: 1320px) 100vw, 1224px"
                loading="eager"
                fetchPriority="high"
                quality={90}
                className="w-full"
              />
            </div>
          </figure>
        </Container>

        <Container className="grid grid-cols-[220px_1fr] gap-[clamp(32px,6vw,96px)] py-[clamp(56px,8vw,112px)] max-[960px]:grid-cols-1">
          <TableOfContents items={toc} />
          <article className="max-w-[820px]">{children}</article>
        </Container>

        <NextProject {...next} />

        <CtaBand
          title={
            <>
              Ready to bring your vision to <em>life?</em>
            </>
          }
          text="Let's make something incredible together. Reach out to discuss your project."
          action="Hire me"
        />
      </main>
      <SiteFooter links={footerLinks.caseStudy} />
    </>
  );
}
