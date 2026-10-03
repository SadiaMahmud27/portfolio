import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-heading";
import { faqs } from "@/content/home";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-line-strong">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-[26px] text-[clamp(19px,1.88vw,24px)] [&::-webkit-details-marker]:hidden">
        {question}
        <span
          aria-hidden="true"
          className="relative size-10 flex-none rounded-full border border-line-strong transition-[background-color] duration-250 ease-soft group-open:border-ink group-open:bg-butter before:absolute before:top-1/2 before:left-1/2 before:h-[1.5px] before:w-3.5 before:-translate-1/2 before:bg-ink after:absolute after:top-1/2 after:left-1/2 after:h-[1.5px] after:w-3.5 after:-translate-1/2 after:rotate-90 after:bg-ink after:transition-transform after:duration-300 after:ease-soft group-open:after:rotate-0"
        />
      </summary>
      <p className="m-0 max-w-[620px] pr-16 pb-[26px] text-ink-2">{answer}</p>
    </details>
  );
}

export function Faq() {
  return (
    <section id="faq" className="py-[clamp(72px,10vw,140px)]">
      <Container className="grid grid-cols-[0.8fr_1.2fr] items-start gap-[clamp(32px,6vw,96px)] max-[860px]:grid-cols-1">
        <div>
          <Eyebrow>FAQ</Eyebrow>
          <SectionTitle className="mt-4">
            Good <em>questions</em>
          </SectionTitle>
        </div>
        <div className="border-t border-line-strong">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </Container>
    </section>
  );
}
