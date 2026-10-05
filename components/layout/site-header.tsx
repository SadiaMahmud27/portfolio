"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ButtonArrow, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { routes, site } from "@/content/site";
import { cn } from "@/lib/cn";

const navLinkClass = cn(
  "inline-block rounded-full px-3.5 py-2 text-[16px] transition-[background-color] duration-200 ease-soft",
  "hover:bg-ink/6 aria-[current=page]:bg-ink/6",
  "max-[820px]:rounded-none max-[820px]:border-b max-[820px]:border-line max-[820px]:px-0 max-[820px]:py-3.5 max-[820px]:text-[19px] max-[820px]:hover:bg-transparent",
);

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isWork = pathname === routes.work || pathname.startsWith(`${routes.work}/`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper/82 backdrop-blur-[14px] backdrop-saturate-140 transition-[border-color] duration-300 ease-soft",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href={routes.home}
          aria-label="Sadia Mahmud, home"
          className="inline-flex items-baseline gap-1.5 font-display text-[24px] leading-none"
        >
          Sadia
          <span className="font-sans text-[11px] tracking-[0.1em] text-muted uppercase">
            / UI·UX
          </span>
        </Link>

        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="group hidden size-11 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-transparent max-[820px]:inline-flex"
        >
          <span
            className={cn(
              "relative block h-[1.5px] w-[18px] bg-ink transition-[background-color] duration-250 ease-soft group-aria-expanded:bg-transparent",
              "before:absolute before:top-[-6px] before:left-0 before:block before:h-[1.5px] before:w-[18px] before:bg-ink before:transition-transform before:duration-250 before:ease-soft group-aria-expanded:before:translate-y-[6px] group-aria-expanded:before:rotate-45",
              "after:absolute after:top-[6px] after:left-0 after:block after:h-[1.5px] after:w-[18px] after:bg-ink after:transition-transform after:duration-250 after:ease-soft group-aria-expanded:after:-translate-y-[6px] group-aria-expanded:after:-rotate-45",
            )}
          />
        </button>

        <ul
          id="nav-links"
          className={cn(
            "flex items-center gap-1.5",
            "max-[820px]:absolute max-[820px]:inset-x-0 max-[820px]:top-[72px] max-[820px]:flex-col max-[820px]:items-stretch max-[820px]:gap-0 max-[820px]:border-b max-[820px]:border-line max-[820px]:bg-paper max-[820px]:px-(--gutter) max-[820px]:pt-3 max-[820px]:pb-6",
            open ? "max-[820px]:flex" : "max-[820px]:hidden",
          )}
        >
          <li>
            <Link
              href={routes.work}
              aria-current={isWork ? "page" : undefined}
              className={navLinkClass}
              onClick={close}
            >
              Work
            </Link>
          </li>
          <li>
            <Link href="/#about" className={navLinkClass} onClick={close}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#faq" className={navLinkClass} onClick={close}>
              FAQ
            </Link>
          </li>
          <li>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener"
              className={navLinkClass}
              onClick={close}
            >
              Resume ↗
            </a>
          </li>
          <li>
            <ButtonLink
              href="/#contact"
              variant="solid"
              size="sm"
              onClick={close}
              className="ml-2 max-[820px]:mx-0 max-[820px]:mt-[18px] max-[820px]:justify-center"
            >
              Hire me <ButtonArrow />
            </ButtonLink>
          </li>
        </ul>
      </Container>
    </header>
  );
}
