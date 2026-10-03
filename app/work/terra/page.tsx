import type { Metadata } from "next";
import { CardGrid } from "@/components/case-study/card-grid";
import { CaseFigure } from "@/components/case-study/case-figure";
import { CaseSection } from "@/components/case-study/case-section";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { LearningList } from "@/components/case-study/learning-list";
import { Pullquote } from "@/components/case-study/pullquote";
import { StepList } from "@/components/case-study/step-list";
import { SwatchList } from "@/components/case-study/swatch-list";
import { images } from "@/content/images";
import { routes } from "@/content/site";
import { pageOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Terra: Eco Habit Tracker | Case study · Sadia Mahmud",
  description:
    "Designing an eco habit tracker that turns sustainable living into a simple daily practice.",
  openGraph: pageOpenGraph(
    "Terra: Eco Habit Tracker | Case study · Sadia Mahmud",
    "Designing an eco habit tracker that turns sustainable living into a simple daily practice.",
  ),
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "loop", label: "Habit loop" },
  { id: "momentum", label: "Momentum" },
  { id: "visual", label: "Visual language" },
  { id: "result", label: "Result & learnings" },
];

export default function TerraPage() {
  return (
    <CaseStudyLayout
      accent="mint"
      eyebrow="Case study · Mobile app"
      title={
        <>
          Terra<em>.</em>
        </>
      }
      summary="An eco habit tracker that turns sustainable living into a simple daily practice, with clear actions, gentle streaks and visible CO₂ impact."
      meta={[
        { term: "Role", value: "End-to-end design" },
        { term: "Duration", value: "4 months" },
        { term: "Tools", value: "Figma" },
        {
          term: "Shot",
          value: "View on Dribbble ↗",
          href: "https://dribbble.com/shots/26040471-Terra-Eco-Habit-Tracker",
        },
      ]}
      cover={{
        src: images.terraCover,
        alt: "Terra splash screen with an illustrated Earth and the daily habits home screen",
      }}
      toc={toc}
      next={{
        href: routes.inboxswipe,
        title: (
          <>
            Inbox<em>Swipe</em> →
          </>
        ),
        image: images.inboxswipeCover,
      }}
    >
      <CaseSection
        id="overview"
        label="01 · Overview"
        title={
          <>
            Small choices, <em>adding up</em>
          </>
        }
      >
        <p>
          Terra is an eco habit tracker that makes sustainable living a simple daily practice.
          Instead of overwhelming people with climate data or guilt, it offers a short list of
          clear, achievable actions, like taking public transport, eating a plant-based meal or
          browsing with Ecosia. Then it shows how those small choices add up.
        </p>
        <p>
          I designed Terra end to end in Figma over four months, from the first sketches of the
          habit loop to polished screens for the splash, daily habits and impact tracking.
        </p>
        <CaseFigure src={images.terraOverview} alt="Terra app overview screens" />
      </CaseSection>

      <CaseSection
        id="challenge"
        label="02 · The challenge"
        title={
          <>
            Good intentions rarely become <em>routines</em>
          </>
        }
      >
        <p>
          Most people want to live more sustainably. But climate content tends to be too abstract
          (&quot;reduce your carbon footprint&quot;) or too heavy, leaving people feeling their
          individual effort doesn&apos;t matter.
        </p>
        <p>
          The question I set out to answer:{" "}
          <strong>
            how might we make greener choices feel achievable, and give people a reason to come
            back tomorrow?
          </strong>
        </p>
        <Pullquote>
          Better habits begin with a <em>believable next step.</em>
        </Pullquote>
      </CaseSection>

      <CaseSection
        id="loop"
        label="03 · Core loop"
        title={
          <>
            Designing the <em>habit loop</em>
          </>
        }
      >
        <p>
          Terra&apos;s core loop is deliberately short: find one useful action, complete it, then
          see evidence that the effort is adding up. Every screen maps to one of three stages.
        </p>
        <StepList
          items={[
            {
              title: "Choose",
              text: "A calm splash screen with a friendly illustrated Earth sets a low-friction, optimistic tone from the first second.",
            },
            {
              title: "Practice",
              text: "The home screen shows a focused list of daily eco habits. Each card states the action and why it helps, and logs with a single tap.",
            },
            {
              title: "Grow",
              text: "Checking in opens a celebration screen with CO₂ saved, the current streak and total habits, plus a chart that makes consistency visible.",
            },
          ]}
        />
        <CaseFigure
          src={images.terraHabitLoop}
          alt="Choose, practice and grow screens in the Terra habit loop"
        />
      </CaseSection>

      <CaseSection
        id="momentum"
        label="04 · Feature set"
        title={
          <>
            Designed for <em>momentum</em>
          </>
        }
      >
        <p>
          Four ideas shaped the feature set, each aimed at making the next green choice feel easy
          rather than heavy.
        </p>
        <CardGrid
          items={[
            {
              kicker: "01",
              title: "A plan for today",
              text: "Practical habits, from public transport to plant-based meals, in a focused daily list with a week strip for moving between days.",
            },
            {
              kicker: "02",
              title: "Visible progress",
              text: "Streaks and estimated CO₂ savings connect every small choice to a bigger outcome.",
            },
            {
              kicker: "03",
              title: "Gentle celebration",
              text: 'Messages like "You\'ve kept your green streak alive" reward consistency without making sustainability a competition.',
            },
            {
              kicker: "04",
              title: "Personal by default",
              text: "A lightweight profile makes the experience feel owned while keeping attention on the habits.",
            },
          ]}
        />
        <CaseFigure
          src={images.terraMomentum}
          alt="Terra screens for daily plan, progress, celebration and profile"
        />
        <p className="mt-8">
          <strong>Actions, not lectures.</strong> Each habit card is a concrete action with a
          one-line explanation, not a statistic. Friendly icons (a bus, a lettuce leaf, a globe, a
          bicycle) make the list easy to scan. The checkbox sits in the same place on every card,
          so logging a habit quickly becomes muscle memory.
        </p>
      </CaseSection>

      <CaseSection
        id="visual"
        label="05 · Visual language"
        title={
          <>
            A calm visual <em>language</em>
          </>
        }
      >
        <p>
          A soft sky-to-meadow gradient flows from blue at the top to green at the bottom, echoing
          the Earth illustration on the splash screen. Deep forest green is reserved for what
          matters: the selected day, completed checkmarks and the active tab. A small flame and
          streak counter add a spark of motivation. Rounded white cards and generous spacing keep
          every screen calm and readable.
        </p>
        <SwatchList
          label="Palette (approximate)"
          items={[
            {
              name: "Sky → meadow",
              note: "Background",
              background: "linear-gradient(180deg,#bfe3ff,#d6f2c4)",
            },
            { name: "Forest", note: "Active / done", background: "#1f5a3a" },
            { name: "White", note: "Cards", background: "#ffffff" },
            { name: "Flame", note: "Streak", background: "#ff7a2f" },
            { name: "Earth blue", note: "Illustration", background: "#5aa9e6" },
          ]}
        />
      </CaseSection>

      <CaseSection
        id="result"
        label="06 · Outcome"
        title={
          <>
            The <em>result</em>
          </>
        }
      >
        <p>
          Terra turns sustainability from an abstract goal into a daily ritual: one tap to log
          progress, a streak worth protecting, and a running tally of impact that makes the effort
          feel real. No guilt, no information overload, just one useful action at a time.
        </p>
        <LearningList
          items={[
            {
              title: "Small steps beat big promises.",
              text: "A believable next action motivates far more than an ambitious goal.",
            },
            {
              title: "Make impact tangible.",
              text: "Turning habits into kilograms of CO₂ and streak days gives people evidence that their effort counts.",
            },
            {
              title: "Tone is a feature.",
              text: "Encouragement instead of guilt keeps people coming back.",
            },
          ]}
        />
      </CaseSection>
    </CaseStudyLayout>
  );
}
