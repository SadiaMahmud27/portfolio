import Link from "next/link";
import { Container } from "@/components/ui/container";
import { site, type FooterLink } from "@/content/site";

type SiteFooterProps = {
  links: FooterLink[];
  /** Show the oversized name above the footer row (home page only). */
  showBigName?: boolean;
};

export function SiteFooter({ links, showBigName = false }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-8 text-[13px] text-paper/65">
      <Container className="@container">
        {showBigName && (
          // The name is ~6.8em wide; the 14.5cqi cap keeps it inside the container once it stops growing
          <div
            aria-hidden="true"
            className="overflow-hidden pt-12 pb-8 font-display text-[length:clamp(40px,min(12.5vw,14.5cqi),220px)] leading-[0.8] tracking-[-0.02em] whitespace-nowrap text-paper"
          >
            Sadia <em className="text-sky">Mahmud</em>
          </div>
        )}
        <div className="flex flex-wrap justify-between gap-4 border-t border-paper/14 pt-7">
          <p>
            © {year} {site.name} · {site.location}
          </p>
          <ul className="flex flex-wrap gap-5">
            {links.map((link) => (
              <li key={link.label}>
                <FooterAnchor {...link} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function FooterAnchor({ label, href, external }: FooterLink) {
  const className = "hover:text-paper";

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="noopener">
        {label}
      </a>
    );
  }
  if (href.startsWith("#") || href.startsWith("mailto:")) {
    return (
      <a className={className} href={href}>
        {label}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {label}
    </Link>
  );
}
