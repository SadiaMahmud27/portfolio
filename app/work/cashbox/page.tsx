import type { Metadata } from "next";
import { CardGrid } from "@/components/case-study/card-grid";
import { CaseFigure } from "@/components/case-study/case-figure";
import { CaseSection } from "@/components/case-study/case-section";
import { CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { LearningList } from "@/components/case-study/learning-list";
import { Pullquote } from "@/components/case-study/pullquote";
import { StepList } from "@/components/case-study/step-list";
import { images } from "@/content/images";
import { routes } from "@/content/site";
import { pageOpenGraph } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Cashbox: Hishabee | Case study · Sadia Mahmud",
  description:
    "Designing Hishabee's Cashbox from scratch: a simple first release, then a connected second version shaped by customer feedback.",
  openGraph: pageOpenGraph(
    "Cashbox: Hishabee | Case study · Sadia Mahmud",
    "Designing Hishabee's Cashbox from scratch: a simple first release, then a connected second version shaped by customer feedback.",
  ),
};

const toc = [
  { id: "overview", label: "Overview" },
  { id: "process", label: "Process" },
  { id: "v1", label: "Version 1" },
  { id: "feedback", label: "What changed" },
  { id: "v2", label: "Version 2" },
  { id: "result", label: "Result & learnings" },
];

export default function CashboxPage() {
  return (
    <CaseStudyLayout
      accent="butter"
      eyebrow="Case study · Hishabee"
      title={
        <>
          Cash<em>box.</em>
        </>
      }
      summary="A brand-new cash and account tracker for Hishabee's small business owners. I designed it from first research to a simple launch, then into a connected second version."
      meta={[
        { term: "Role", value: "Product designer" },
        { term: "Duration", value: "4–6 months" },
        { term: "Company", value: "Hishabee" },
        { term: "Scope", value: "V1 & V2, mobile" },
      ]}
      cover={{
        src: images.cashboxCover,
        alt: "Cashbox version 1 transaction list beside the version 2 accounts overview and a single account screen",
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
            Every taka, <em>in one box</em>
          </>
        }
      >
        <p>
          Hishabee is a bookkeeping app for small businesses in Bangladesh. Many of its merchants
          still tracked the cash in their drawer on paper, or not at all. Cashbox gives them a
          digital version: a running balance, and a record of every taka that comes in or goes
          out.
        </p>
        <p>
          It was a brand-new feature with nothing to build on inside the app. I designed both
          versions: a deliberately simple V1, and a V2 that grew out of what customers told us
          after launch.
        </p>
      </CaseSection>

      <CaseSection
        id="process"
        label="02 · Process"
        title={
          <>
            Research, ship small, <em>ship again</em>
          </>
        }
      >
        <p>
          I started outside our own product. I went through the apps that already had a cashbox,
          noted the patterns that worked best, then matched them against what our customers were
          asking for. The result was one prioritised list of requirements, and a plan to launch a
          simple version first.
        </p>
        <StepList
          items={[
            {
              title: "Discover",
              text: "Competitor analysis of apps that already offered a cashbox, looking for the strongest patterns.",
            },
            {
              title: "Define",
              text: "Customer requirements set against those patterns, narrowed into a single list.",
            },
            {
              title: "Launch V1",
              text: "Cash in, cash out, a running balance and a clean history.",
            },
            {
              title: "Learn",
              text: "Customer feedback on V1 showed where a single cash balance stopped being enough.",
            },
            {
              title: "Launch V2",
              text: "Multiple accounts, transfers, categories and links to the rest of the app.",
            },
          ]}
        />
        <CaseFigure
          src={images.cashboxProcess}
          alt="Five-step process from competitor analysis to version 2, with sales, customer service, product and developers around design"
        />
        <p className="mt-8">
          <strong>One feature, many voices.</strong> All together, the design took four to six
          months. Much of that time went into going back and forth with the sales, customer
          service, developer and product teams until everyone was on the same page about what
          Cashbox should be.
        </p>
      </CaseSection>

      <CaseSection
        id="v1"
        label="03 · Version 1"
        title={
          <>
            Cash in, cash out. <em>Nothing more.</em>
          </>
        }
      >
        <p>
          The first release did one job well. Merchants could see the cash in the box and every
          movement in and out of it, without learning anything new.
        </p>
        <CardGrid
          items={[
            {
              kicker: "01",
              title: "Balance first",
              text: "The balance, total cash in and total cash out sit at the top. The history below shows every entry with its time and note.",
            },
            {
              kicker: "02",
              title: "Add in seconds",
              text: "An entry needs only an amount and an optional note. A built-in calculator adds up mixed bills without leaving the app.",
            },
            {
              kicker: "03",
              title: "Find anything",
              text: "Filter by date range or by type: cash in, cash out, purchases, sales, dues and expenses.",
            },
            {
              kicker: "04",
              title: "Fix mistakes safely",
              text: "Entries can be edited in a bottom sheet. Deleting asks first, because a deleted record cannot come back.",
            },
          ]}
        />
        <CaseFigure
          src={images.cashboxV1}
          alt="Version 1 screens: overview, cash in with calculator, filter sheet and delete confirmation"
        />
      </CaseSection>

      <CaseSection
        id="feedback"
        label="04 · What changed"
        title={
          <>
            From one box to a <em>whole wallet</em>
          </>
        }
      >
        <p>
          V1 proved that merchants wanted a digital cashbox. Their feedback also showed its limits.
          Their money didn&apos;t live in one drawer. It was split across cash, bank accounts and
          mobile wallets like bKash and Nagad, and Cashbox had to work with the sales, purchases
          and invoices they already recorded in Hishabee.
        </p>
        <Pullquote>
          V1 answered <em>&quot;how much cash do I have?&quot;</em> V2 had to answer &quot;where
          is all my money?&quot;
        </Pullquote>
        <CaseFigure
          src={images.cashboxEvolution}
          alt="Version 1 and version 2 home screens side by side with the features each one added"
        />
      </CaseSection>

      <CaseSection
        id="v2"
        label="05 · Version 2"
        title={
          <>
            A <em>connected</em> cashbox
          </>
        }
      >
        <p>
          V2 kept V1&apos;s simple core and added the more complex features customers asked for.
          Many of them connect Cashbox to other parts of the app.
        </p>

        <p className="mt-8">
          <strong>Every account, one total.</strong> The home screen now leads with one combined
          balance, followed by a card for each account. Merchants can add mobile wallets and bank
          accounts, attach a QR code for collecting payments, and mark one account as the default
          so new entries land in the right place.
        </p>
        <CaseFigure
          src={images.cashboxAccounts}
          alt="Version 2 accounts overview, add mobile wallet, add bank account and edit account screens"
        />

        <p className="mt-10">
          <strong>Money that moves, with a paper trail.</strong> Transfers show both
          accounts&apos; balances before and after, so there are no surprises. Each account has its
          own history. Each entry opens to its date, invoice number, category and note, with a
          shortcut to the invoice. Returns get their own colour-coded record.
        </p>
        <CaseFigure
          src={images.cashboxConnected}
          alt="Balance transfer, single account history, transaction details with invoice link and return details"
        />

        <p className="mt-10">
          <strong>Guardrails that protect the money.</strong> More accounts meant more ways to lose
          track. Merchants can create their own categories and manage every account from one
          settings list. Deleting an account asks first, and an account that still holds money
          can&apos;t be deleted at all. The dialog points straight to a transfer instead.
        </p>
        <CaseFigure
          src={images.cashboxGuardrails}
          alt="Accounts list, add category dialog, delete account confirmation and the cannot-delete warning"
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
          Cashbox went from nothing to two shipped versions. The first gave merchants a simple,
          trustworthy replacement for the paper cash book. The second turned it into a picture of
          all their money, across cash, bank and mobile wallets, connected to the rest of
          Hishabee.
        </p>
        <LearningList
          items={[
            {
              title: "Ship the simple version first.",
              text: "A focused V1 got real feedback faster than any amount of upfront planning would have.",
            },
            {
              title: "Competitors set the floor, not the ceiling.",
              text: "Competitor analysis showed what people already expected. Our customers' requests showed what would set us apart.",
            },
            {
              title: "Alignment is design work.",
              text: "Getting sales, customer service, product and developers on the same page took as much care as the screens did.",
            },
          ]}
        />
      </CaseSection>
    </CaseStudyLayout>
  );
}
