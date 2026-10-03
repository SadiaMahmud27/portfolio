import type { Metadata } from "next";
import { CardGrid } from "@/components/case-study/card-grid";
import { CaseFigure } from "@/components/case-study/case-figure";
import { CaseSection } from "@/components/case-study/case-section";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { Pullquote } from "@/components/case-study/pullquote";
import { StepList } from "@/components/case-study/step-list";
import { SwatchList } from "@/components/case-study/swatch-list";
import { ButtonLink } from "@/components/ui/button";
import { images } from "@/content/images";
import { routes } from "@/content/site";

const SITE_URL = "https://legal-templates.com/en";

export const metadata: Metadata = {
  title: "Selise Legal Templates | Case study · Sadia Mahmud",
  description:
    "Designing a free, bilingual legal document generator that goes from blank page to signed contract in minutes.",
  openGraph: { images: [images.seliseCover.src] },
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "principles", label: "Principles" },
  { id: "features", label: "Features" },
  { id: "journey", label: "Journey" },
  { id: "visual", label: "Visual system" },
  { id: "outcome", label: "Outcome" },
];

export default function SeliseLegalTemplatesPage() {
  return (
    <CaseStudyLayout
      accent="sky"
      eyebrow="Case study · Responsive web"
      title={
        <>
          Selise Legal <em>Templates</em>
        </>
      }
      summary="A free, bilingual legal document generator for SELISE that takes people from a blank page to a signed contract in minutes, on desktop and mobile."
      meta={[
        { term: "Client", value: "SELISE" },
        { term: "Role", value: "End-to-end UI/UX" },
        { term: "Tools", value: "Figma" },
        { term: "Live", value: "legal-templates.com ↗", href: SITE_URL },
      ]}
      cover={{
        src: images.seliseCover,
        alt: "Selise Legal Templates homepage on desktop and mobile",
      }}
      toc={toc}
      next={{
        href: routes.terra,
        title: (
          <>
            Terra: Eco <em>Habit Tracker</em> →
          </>
        ),
        image: images.terraCover,
      }}
    >
      <CaseSection
        id="overview"
        label="01 · Overview"
        title={
          <>
            Legal documents, made <em>surprisingly simple</em>
          </>
        }
      >
        <p>
          SELISE is a Swiss technology company headquartered in Zurich, with a large engineering
          hub in Dhaka. It builds enterprise software and digital products for businesses across
          Europe and beyond, including SELISE Signature, its e-signature platform.
        </p>
        <p>
          Selise Legal Templates is SELISE&apos;s free legal document generator. Anyone can pick
          from <strong>26 attorney-reviewed templates</strong> in English and German, customise
          them with AI help and download a ready-to-sign contract, with no account needed. I
          designed the responsive web experience end to end, across desktop and mobile.
        </p>
        <CardGrid
          columns={3}
          items={[
            { kicker: "Templates", title: "26", text: "Attorney-reviewed" },
            { kicker: "Languages", title: "EN · DE", text: "Fully bilingual" },
            { kicker: "Price", title: "Free", text: "No account required" },
          ]}
        />
      </CaseSection>

      <CaseSection
        id="challenge"
        label="02 · The challenge"
        title={
          <>
            Paperwork people <em>put off</em>
          </>
        }
      >
        <p>
          Online templates are buried in jargon, hidden behind sign-ups, or so long that people
          give up halfway. Hiring a lawyer for a simple NDA or employment contract is slow and
          expensive.
        </p>
        <Pullquote>
          From blank page to signed contract in <em>minutes, not weeks.</em>
        </Pullquote>
        <p>
          The product had to feel as easy as a search engine while still looking serious enough to
          trust with a legal document.
        </p>
      </CaseSection>

      <CaseSection
        id="principles"
        label="03 · Design principles"
        title={
          <>
            Simple tool, <em>simple interface</em>
          </>
        }
      >
        <p>Before drawing any screens, I set six principles that every design decision had to pass.</p>
        <CardGrid
          items={[
            {
              kicker: "01",
              title: "One search to start",
              text: "The homepage leads with a single search bar, so there's one obvious first step.",
            },
            {
              kicker: "02",
              title: "One action per card",
              text: 'Every template card has a short description and a single "Generate Now" button.',
            },
            {
              kicker: "03",
              title: "Plain words",
              text: '"Configure indemnification provisions" becomes "customise in minutes".',
            },
            {
              kicker: "04",
              title: "Trust up front",
              text: '"Attorney Reviewed", "100% State Compliant" and "Secure Encryption" sit right under the search bar.',
            },
            {
              kicker: "05",
              title: "Choose your depth",
              text: "Quick mode covers the essentials; Full mode puts every clause under your control.",
            },
            {
              kicker: "06",
              title: "Same pattern everywhere",
              text: "Cards, buttons and layouts repeat, so nothing has to be learned twice.",
            },
          ]}
        />
        <CaseFigure
          src={images.selisePrinciples}
          alt="The six design principles illustrated with interface examples"
        />
      </CaseSection>

      <CaseSection
        id="features"
        label="04 · Feature set"
        title={
          <>
            Simple on the surface, <em>powerful underneath</em>
          </>
        }
      >
        <p>
          A full feature set sits behind the calm interface, and each piece appears only when
          it&apos;s needed.
        </p>
        <StepList
          items={[
            {
              title: "Template library",
              text: "26 templates, from creator brand-collab agreements to German employment contracts (Arbeitsvertrag) and franchise agreements.",
            },
            {
              title: "Guided generator",
              text: "People describe their situation in plain language, and AI turns it into a complete, legally structured agreement.",
            },
            {
              title: "AI legal help",
              text: 'Inline suggestions explain clauses and flag issues, like state-specific deposit rules, with a one-tap "Apply Change".',
            },
            {
              title: "Template pages",
              text: "Dedicated landing pages for key documents like NDAs, each with a clear call to action.",
            },
            {
              title: "Book a demo",
              text: "A direct path for businesses to book a personalised SELISE Signature demo.",
            },
          ]}
        />
        <CaseFigure
          src={images.seliseFeatures}
          alt="Feature overview: template library, guided generator, AI legal help, template pages, book a demo"
        />
      </CaseSection>

      <CaseSection
        id="journey"
        label="05 · User journey"
        title={
          <>
            From search to <em>signature</em>
          </>
        }
      >
        <p>
          I mapped the journey into five steps and kept each screen focused on one decision. The
          flow was designed mobile-first, so it works as well on a phone as on a laptop.
        </p>
        <StepList
          items={[
            { title: "Search", text: "Find a template by name or keyword." },
            { title: "Choose", text: 'Pick a card and tap "Generate Now".' },
            { title: "Set depth", text: "Quick for the essentials, Full for every clause." },
            {
              title: "Customise",
              text: "Answer a few questions, with AI help whenever a clause is unclear.",
            },
            { title: "Sign", text: "Download the finished document and send it for signature." },
          ]}
        />
        <CaseFigure
          src={images.seliseJourney}
          alt="Five mobile screens showing the journey from search to signature"
        />
      </CaseSection>

      <CaseSection
        id="visual"
        label="06 · Visual system"
        title={
          <>
            Calm, clear, <em>official</em>
          </>
        }
      >
        <p>
          A legal tool has to feel trustworthy without feeling cold. The palette is built around
          Legal Blue and Deep Blue, grounded by Navy and softened with Blue Tint and Slate.
        </p>
        <SwatchList
          label="Colour palette"
          items={[
            { name: "Legal Blue", note: "#0065B3", background: "#0065B3" },
            { name: "Deep Blue", note: "#00518F", background: "#00518F" },
            { name: "Navy", note: "#001F35", background: "#001F35" },
            { name: "Blue Tint", note: "#DCE8F4", background: "#DCE8F4" },
            { name: "Slate", note: "#7B7C7F", background: "#7B7C7F" },
          ]}
        />
        <p className="mt-8">
          <strong>Aptos</strong> handles headlines, <strong>Open Sans</strong> the body and{" "}
          <strong>Bahnschrift</strong> buttons and labels, keeping everything readable in English
          and German. A small set of reusable components (template cards, search bar, trust
          badges, buttons and the EN/DE switch) works across light and dark sections.
        </p>
        <CaseFigure
          src={images.seliseVisualSystem}
          alt="Visual system: colours, typography and components"
        />
      </CaseSection>

      <CaseSection
        id="outcome"
        label="07 · Outcome"
        title={
          <>
            The <em>outcome</em>
          </>
        }
      >
        <p>
          Selise Legal Templates gives people a calm, guided way to create legal documents: one
          search, one action per card, and plain language throughout. It ships with 26 templates in
          two languages, works on desktop and mobile, and stays free with no account required.
        </p>
        <p className="mt-8">
          <ButtonLink href={SITE_URL} variant="solid" external>
            Visit legal-templates.com ↗
          </ButtonLink>
        </p>
      </CaseSection>
    </CaseStudyLayout>
  );
}
