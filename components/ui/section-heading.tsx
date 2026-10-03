import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Flex row holding a section title on the left and an intro or action on the right. */
export function SectionHead({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "mb-[clamp(36px,5vw,64px)] flex flex-wrap items-end justify-between gap-6",
        className,
      )}
    >
      {children}
    </div>
  );
}

type SectionTitleProps = {
  as?: "h2" | "h3";
  size?: "lg" | "md";
  className?: string;
  children: ReactNode;
};

const titleSizes = {
  lg: "text-[clamp(44px,6vw,88px)]",
  md: "text-[clamp(32px,3.4vw,48px)]",
};

/** Large serif title. Wrap words in <em> for the italic accent. */
export function SectionTitle({
  as: Tag = "h2",
  size = "lg",
  className,
  children,
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-serif tracking-[-0.02em] [&_em]:italic",
        titleSizes[size],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionIntro({ children }: { children: ReactNode }) {
  return <p className="m-0 max-w-[440px] text-muted">{children}</p>;
}
