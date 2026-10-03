import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/cta-band";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container } from "@/components/ui/container";
import { Explorations } from "@/components/work/explorations";
import { PageHero } from "@/components/work/page-hero";
import { WorkList } from "@/components/work/work-list";
import { footerLinks } from "@/content/site";
import { caseStudies, explorations } from "@/content/work";
import { pageOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Work | Sadia Mahmud",
  description: "Case studies and design explorations by Sadia Mahmud, UI/UX designer.",
  openGraph: pageOpenGraph(
    "Work | Sadia Mahmud",
    "Case studies and design explorations by Sadia Mahmud, UI/UX designer.",
  ),
};

export default function WorkPage() {
  return (
    <>
      <main id="main">
        <PageHero count={caseStudies.length + explorations.length} />

        <section className="pb-[clamp(56px,7vw,96px)]">
          <Container>
            <WorkList items={caseStudies} headingAs="h2" />
          </Container>
        </section>

        <Explorations />

        <CtaBand
          title={
            <>
              Have a project in <em>mind?</em>
            </>
          }
          text="Let's make something incredible together."
          action="Start a conversation"
        />
      </main>
      <SiteFooter links={footerLinks.work} />
    </>
  );
}
