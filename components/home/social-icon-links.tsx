import type { CSSProperties, ReactNode } from "react";
import { DribbbleIcon, GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

// Official brand colours; GitHub's is near-black.
const links: { label: string; href: string; color: string; icon: ReactNode }[] = [
  { label: "LinkedIn", href: site.linkedinUrl, color: "#0A66C2", icon: <LinkedInIcon className="size-[18px] fill-current" /> },
  { label: "Dribbble", href: site.dribbbleUrl, color: "#EA4C89", icon: <DribbbleIcon className="size-[18px] fill-current" /> },
  { label: "GitHub", href: site.githubUrl, color: "#181717", icon: <GitHubIcon className="size-[18px] fill-current" /> },
];

/** Round icon-only social links, sized to sit beside a md ButtonLink. */
export function SocialIconLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {links.map(({ label, href, color, icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener"
            aria-label={`${label} (opens in a new tab)`}
            title={label}
            style={{ "--brand": color } as CSSProperties}
            className="inline-flex size-[46px] items-center justify-center rounded-full border border-ink text-(--brand) transition-[background-color,border-color,color,translate] duration-250 ease-soft hover:-translate-y-0.5 hover:border-(--brand) hover:bg-(--brand) hover:text-white"
          >
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
