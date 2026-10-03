"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fades in every `[data-reveal]` element as it scrolls into view.
 * Content is visible by default (no JS, or already on screen at load);
 * only elements below the fold are hidden until they intersect.
 */
export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.remove("is-hidden");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 },
    );

    elements.forEach((el) => {
      if (el.getBoundingClientRect().top >= window.innerHeight) {
        el.classList.add("is-hidden");
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      elements.forEach((el) => el.classList.remove("is-hidden"));
    };
  }, [pathname]);

  return null;
}
