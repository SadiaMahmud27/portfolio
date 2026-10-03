"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type TocItem = { id: string; label: string };

/** Sticky "On this page" nav that highlights the section currently in view. */
export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );

    for (const { id } of items) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[104px] self-start max-[960px]:hidden"
    >
      <p className="mb-3.5 text-[13px] tracking-[0.12em] text-muted uppercase">On this page</p>
      <ol className="grid gap-0.5 border-l border-line-strong">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "-ml-px block border-l-2 py-1.5 pl-4 text-[15px] transition-colors duration-200 hover:text-ink",
                activeId === id ? "border-ink text-ink" : "border-transparent text-muted",
              )}
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
