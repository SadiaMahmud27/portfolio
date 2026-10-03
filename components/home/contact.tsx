import type { ReactNode } from "react";
import { EmailCard } from "@/components/home/email-card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { DribbbleIcon, XIcon } from "@/components/ui/icons";
import { site } from "@/content/site";

const socials: { label: string; href: string; icon?: ReactNode }[] = [
  { label: "Dribbble", href: site.dribbbleUrl, icon: <DribbbleIcon className="size-4 fill-current" /> },
  { label: "X / Twitter", href: site.xUrl, icon: <XIcon className="size-4 fill-current" /> },
  { label: "Resume ↗", href: site.resumeUrl },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="rounded-t-card bg-ink py-[clamp(72px,10vw,140px)] text-paper"
    >
      <Container className="flex flex-col items-start">
        <Eyebrow className="text-paper/60">Contact</Eyebrow>
        <h2 className="mt-5 mb-7 max-w-[980px] font-serif text-[clamp(44px,6.29vw,95px)] tracking-[-0.013em]">
          Ready to bring your vision to <em className="text-blush">life?</em>
        </h2>
        <p className="max-w-[480px] text-[17px] text-paper/72">
          Let&apos;s make something incredible together. Reach out to discuss your project and
          create designs that resonate and inspire.
        </p>

        <EmailCard />

        <ul className="mt-8 flex flex-wrap gap-2.5">
          {socials.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-4 py-2.5 text-[14px] transition-colors duration-200 hover:bg-paper hover:text-ink"
              >
                {icon}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
