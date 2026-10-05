import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "solid" | "ghost" | "light" | "plain";
type Size = "md" | "sm";

// "plain" leaves border and background colours to the caller.
const variants: Record<Variant, string> = {
  solid: "border-ink bg-ink text-paper hover:bg-black",
  ghost: "border-ink bg-transparent hover:bg-ink hover:text-paper",
  light: "border-paper bg-transparent text-paper hover:bg-paper hover:text-ink",
  plain: "",
};

const sizes: Record<Size, string> = {
  md: "px-[22px] py-3.5",
  sm: "px-[18px] py-[11px]",
};

export function buttonClassName({
  variant = "ghost",
  size = "md",
}: { variant?: Variant; size?: Size } = {}) {
  return cn(
    "group/btn inline-flex cursor-pointer items-center gap-2.5 rounded-full border text-[16px] leading-none font-medium",
    "transition-[background-color,color,border-color,translate] duration-250 ease-soft hover:-translate-y-0.5",
    sizes[size],
    variants[variant],
  );
}

/** Arrow glyph that nudges right when its parent button is hovered. */
export function ButtonArrow({ children = "→" }: { children?: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="transition-transform duration-250 ease-soft group-hover/btn:translate-x-[3px]"
    >
      {children}
    </span>
  );
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function ButtonLink({
  href,
  variant,
  size,
  external,
  className,
  onClick,
  children,
}: ButtonLinkProps) {
  const classes = cn(buttonClassName({ variant, size }), className);

  // Plain anchors for off-site, mail and same-page links; Link for client-side routes.
  if (external || href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
        {...(external && { target: "_blank", rel: "noopener" })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href} onClick={onClick}>
      {children}
    </Link>
  );
}
