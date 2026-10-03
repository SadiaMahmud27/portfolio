import { CopyEmailButton } from "@/components/home/copy-email-button";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { site } from "@/content/site";

const ADDRESS_ID = "contact-email";

/** Copy-to-clipboard email card, used instead of a contact form. */
export function EmailCard() {
  return (
    <div className="@container mt-[clamp(16px,3vw,32px)] grid w-full gap-5 rounded-card border border-paper/14 bg-paper/5 p-[clamp(24px,3.4vw,48px)]">
      <p className="m-0 text-[12px] tracking-[0.14em] text-paper/60 uppercase">Email me at</p>
      {/* Stays on one line: the address renders at ~15.6x its font size, so 6cqi always fits */}
      <p
        id={ADDRESS_ID}
        className="m-0 font-serif text-[length:min(60px,6cqi)] leading-[1.1] whitespace-nowrap select-all"
      >
        {site.email}
      </p>
      <div className="flex flex-wrap gap-2.5">
        <CopyEmailButton email={site.email} addressId={ADDRESS_ID} />
        <ButtonLink href={`mailto:${site.email}`} variant="light">
          Open mail app <ButtonArrow>↗</ButtonArrow>
        </ButtonLink>
      </div>
    </div>
  );
}
