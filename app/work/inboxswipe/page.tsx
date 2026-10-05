import type { Metadata } from "next";
import { CardGrid } from "@/components/case-study/card-grid";
import { CaseFigure } from "@/components/case-study/case-figure";
import { CaseSection } from "@/components/case-study/case-section";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { LearningList } from "@/components/case-study/learning-list";
import { Pullquote } from "@/components/case-study/pullquote";
import { StepList } from "@/components/case-study/step-list";
import { SwatchList } from "@/components/case-study/swatch-list";
import { SwipeGrid } from "@/components/case-study/swipe-grid";
import { ButtonLink } from "@/components/ui/button";
import { images } from "@/content/images";
import { routes } from "@/content/site";
import { pageOpenGraph } from "@/lib/metadata";

const SITE_URL = "https://www.inboxswipe.com/";

export const metadata: Metadata = {
  title: "InboxSwipe | Case study · Sadia Mahmud",
  description:
    "Designing a gesture-based email app that turns inbox cleaning into a quick, satisfying swipe.",
  openGraph: pageOpenGraph(
    "InboxSwipe | Case study · Sadia Mahmud",
    "Designing a gesture-based email app that turns inbox cleaning into a quick, satisfying swipe.",
  ),
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "The challenge" },
  { id: "spark", label: "The spark" },
  { id: "gestures", label: "Four gestures" },
  { id: "principles", label: "Principles" },
  { id: "feedback", label: "Feedback" },
  { id: "journey", label: "Journey" },
  { id: "features", label: "Features" },
  { id: "visual", label: "Visual system" },
  { id: "result", label: "Result & learnings" },
];

export default function InboxSwipePage() {
  return (
    <CaseStudyLayout
      accent="blush"
      eyebrow="Case study · Mobile app"
      title={
        <>
          Inbox<em>Swipe</em>
        </>
      }
      summary="A gesture-based email app that turns inbox cleaning into a quick, satisfying swipe, one card at a time."
      meta={[
        { term: "Role", value: "Product & UI/UX design" },
        { term: "Duration", value: "6 months" },
        {
          term: "Shot",
          value: "View on Dribbble ↗",
          href: "https://dribbble.com/shots/26843390-InboxSwipe-Reach-Inbox-Zero-One-Swipe-At-A-Time",
        },
        { term: "Status", value: "Live on iOS & Android ↗", href: SITE_URL },
      ]}
      cover={{ src: images.inboxswipeCover, alt: "InboxSwipe onboarding and inbox screens" }}
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
            Email, minus the <em>overwhelm</em>
          </>
        }
      >
        <p>
          InboxSwipe is a mobile app that makes managing an inbox simpler. With so much digital
          communication, people struggle with huge volumes of email. The result is missed
          information, lost productivity and extra stress.
        </p>
        <p>
          The app uses gestures to let people organise, prioritise and act on email with minimal
          effort. It focuses on speed, clarity and intuitive design to make inbox management feel
          seamless.
        </p>
      </CaseSection>

      <CaseSection id="challenge" label="02 · The challenge" title="Nobody enjoys cleaning their inbox">
        <p>
          Newsletters, promos, receipts and notifications pile up by the hundreds. Sorting them one
          by one feels endless, so most people give up and let the clutter grow.
        </p>
        <Pullquote>
          Take a tedious chore and make it <em>genuinely fun.</em>
        </Pullquote>
        <p>
          Rather than design yet another productivity tool, I asked: what if clearing your inbox
          felt less like work and more like a game you want to play?
        </p>
      </CaseSection>

      <CaseSection
        id="spark"
        label="03 · The spark"
        title={
          <>
            Borrowing Tinder&apos;s <em>swipe</em>
          </>
        }
      >
        <p>
          The answer came from an unlikely place. Tinder turned a decision into a single flick of
          the thumb: one card at a time, one quick choice, instant feedback. It&apos;s addictive
          because it removes friction and rewards every move.
        </p>
        <p>
          <strong>What if every email was a card, and every swipe was a decision?</strong>{" "}
          InboxSwipe rebuilds the inbox around that mechanic. Instead of a long, intimidating list,
          you see one email at a time. Glance, decide, swipe, next. Momentum takes over and inbox
          zero feels reachable.
        </p>
      </CaseSection>

      <CaseSection
        id="gestures"
        label="04 · Interaction model"
        title={
          <>
            Four directions, <em>four actions</em>
          </>
        }
      >
        <p>
          The most common inbox decisions map to the four natural swipe directions, so every action
          is one gesture away.
        </p>
        <SwipeGrid
          items={[
            {
              tone: "delete",
              arrow: "←",
              title: "Delete",
              text: "Swipe left. The fastest way to clear clutter.",
            },
            {
              tone: "important",
              arrow: "→",
              title: "Important",
              text: 'Swipe right. Keep what matters, like Tinder\'s "like".',
            },
            {
              tone: "unsubscribe",
              arrow: "↑",
              title: "Unsubscribe",
              text: "Swipe up. Stop the noise at the source and clear every email from that sender.",
            },
            {
              tone: "read",
              arrow: "↓",
              title: "Mark read",
              text: "Swipe down. Deal with it once and move on.",
            },
          ]}
        />
        <CaseFigure
          src={images.inboxswipeGestures}
          alt="The four swipe gestures and their actions"
          caption="These are only defaults. Every swipe and button can be remapped to more than seven actions, because one person's delete is another's archive."
        />
      </CaseSection>

      <CaseSection
        id="principles"
        label="05 · Design principles"
        title={
          <>
            Six principles behind <em>every screen</em>
          </>
        }
      >
        <p>
          Before drawing a screen, I asked one question: what makes cleaning email feel effortless
          instead of like homework? Each answer became a principle, and every screen was checked
          against them. Two shaped the product most:
        </p>
        <CardGrid
          items={[
            {
              kicker: "Principle",
              title: "Borrow a known gesture",
              text: "Most people already know the swipe-card pattern, so the first session needs almost no onboarding.",
            },
            {
              kicker: "Principle",
              title: "Colour by consequence",
              text: "Mid-swipe there's no time to read a label, so colour carries the meaning.",
            },
          ]}
        />
        <CaseFigure
          src={images.inboxswipePrinciples}
          alt="Six design principles: one email at a time, borrow a known gesture, colour by consequence, calm not corporate, thumb-first layout, your rules not ours"
        />
      </CaseSection>

      <CaseSection
        id="feedback"
        label="06 · Feedback"
        title={
          <>
            Feedback before you <em>let go</em>
          </>
        }
      >
        <p>
          As a card moves, it washes in the colour of the action it&apos;s about to trigger, with a
          large icon and a clear label: <strong>red</strong> for anything that leaves the inbox,{" "}
          <strong>green</strong> for read, <strong>blue</strong> for starred and{" "}
          <strong>amber</strong> for important. Users know the outcome before they release, which
          builds confidence and prevents mistakes.
        </p>
        <CaseFigure
          src={images.inboxswipeFeedback}
          alt="Colour-coded swipe feedback for delete, mark as read, mark important and unsubscribe"
        />
      </CaseSection>

      <CaseSection
        id="journey"
        label="07 · User journey"
        title={
          <>
            From sign-in to inbox zero in <em>five moments</em>
          </>
        }
      >
        <p>
          I mapped the whole journey so each step removes one excuse not to clean: setup effort,
          decision fatigue, writing replies, and forgetting to come back.
        </p>
        <StepList
          items={[
            { title: "One tap in", text: "Sign in with Google or Apple. No forms, no passwords." },
            { title: "One card in focus", text: "The inbox opens straight into the card deck." },
            { title: "Swipe it away", text: "Colour-coded feedback confirms each decision." },
            { title: "Reply with AI", text: '"I\'ll answer later" becomes a one-tap draft.' },
            {
              title: "Make it a habit",
              text: "A daily reminder at a time you choose turns cleaning into a routine.",
            },
          ]}
        />
        <CaseFigure
          src={images.inboxswipeJourney}
          alt="Five-step user journey from sign-in to inbox zero"
        />
      </CaseSection>

      <CaseSection
        id="features"
        label="08 · Feature set"
        title={
          <>
            Fun on the surface, <em>power underneath</em>
          </>
        }
      >
        <p>
          Swiping is the hook. But people only keep an app as their daily mail client if it handles
          everything else too. Beneath the playful surface: AI replies, remappable actions, multiple
          Gmail accounts, dark mode, daily nudges, and English and Spanish support.
        </p>
        <CaseFigure
          src={images.inboxswipeFeatures}
          alt="Feature overview: swipe-card inbox, AI replies, remap actions, multiple accounts, dark mode, daily nudges, localised"
        />
        <p className="mt-8">
          The settings screen keeps all of this in the user&apos;s control without adding
          complexity. The AI reply editor turns a reply you&apos;d put off into a draft you can
          polish and send.
        </p>
        <CaseFigure
          src={images.inboxswipeSettingsAi}
          alt="Settings, email categories and AI reply editor"
        />
      </CaseSection>

      <CaseSection
        id="visual"
        label="09 · Visual system"
        title={
          <>
            Soft surfaces, <em>loud decisions</em>
          </>
        }
      >
        <p>
          Email apps tend to feel cold and serious, and email causes enough stress already. So the
          surfaces stay calm: a sky-to-blush gradient by day and deep blue to indigo by night, with
          frosted-glass cards and stacked depth that hint there&apos;s more to go. Bold colour is
          reserved for one thing: the decision you&apos;re about to make.
        </p>
        <SwatchList
          label="Action colours"
          items={[
            { name: "Red", note: "Leaves inbox", background: "#e5484d" },
            { name: "Green", note: "Read", background: "#30a46c" },
            { name: "Blue", note: "Starred", background: "#3e8ef7" },
            { name: "Amber", note: "Important", background: "#f5b417" },
            {
              name: "Day surface",
              note: "Sky → blush",
              background: "linear-gradient(160deg,#cfe6ff,#ffd3ea)",
            },
          ]}
        />
        <CaseFigure
          src={images.inboxswipeVisualSystem}
          alt="Visual system: atmosphere gradients, action colours and typography"
        />
        <p className="mt-8">
          The type has two voices. <strong>Merriweather Italic</strong> carries the brand in the
          wordmark and onboarding. <strong>Inter</strong> handles everything functional and stays
          legible at small sizes.
        </p>
        <p>
          <strong>Designing for trust.</strong> An app that reads your email has to earn trust, so
          security was part of the experience, not an afterthought. Clear messaging explains that
          the app is Google-verified, CASA Tier 2 certified and never stores your emails.
        </p>
      </CaseSection>

      <CaseSection
        id="result"
        label="10 · Outcome"
        title={
          <>
            The <em>result</em>
          </>
        }
      >
        <p>
          InboxSwipe is live on the App Store and Google Play, with beta testers around the world.
          It turns one of the most dreaded digital chores into a few satisfying minutes of swiping.
        </p>
        <LearningList
          items={[
            {
              title: "Borrowing familiar patterns is powerful.",
              text: "A gesture people already love can make a completely different task feel effortless.",
            },
            {
              title: "Fun is a feature.",
              text: "Delight and motivation can matter as much as efficiency.",
            },
            {
              title: "Feedback builds confidence.",
              text: "Clear visual cues let people move fast without fear of mistakes.",
            },
          ]}
        />
        <p className="mt-8">
          <ButtonLink href={SITE_URL} variant="solid" external>
            Visit inboxswipe.com ↗
          </ButtonLink>
        </p>
      </CaseSection>
    </CaseStudyLayout>
  );
}
