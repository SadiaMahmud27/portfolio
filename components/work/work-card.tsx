import Link from "next/link";
import { StaticImage } from "@/components/ui/static-image";
import { TagList } from "@/components/ui/tag-list";
import type { Accent, WorkCardData } from "@/content/types";
import { cn } from "@/lib/cn";

const accentBg: Record<Accent, string> = {
  blush: "bg-blush",
  sky: "bg-sky",
  mint: "bg-mint",
  butter: "bg-butter",
};

type WorkCardProps = WorkCardData & { headingAs?: "h2" | "h3" };

/** Large alternating case-study card. Even cards put the image on the left. */
export function WorkCard({
  href,
  accent,
  index,
  title,
  description,
  tags,
  image,
  headingAs: Heading = "h3",
}: WorkCardProps) {
  return (
    <Link
      href={href}
      data-reveal
      className={cn(
        "group grid grid-cols-[0.9fr_1.1fr] overflow-hidden rounded-card border border-line even:grid-cols-[1.1fr_0.9fr]",
        "transition-[translate,box-shadow] duration-400 ease-soft hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(21,20,19,0.35)]",
        "max-[860px]:grid-cols-1 max-[860px]:even:grid-cols-1",
        accentBg[accent],
      )}
    >
      <div className="flex flex-col gap-5 p-[clamp(28px,4vw,52px)]">
        <span className="text-[13px] tracking-[0.1em] text-ink/60">{index}</span>
        <Heading className="font-serif text-[clamp(34px,3.91vw,58px)] tracking-[-0.01em]">
          {title}
        </Heading>
        <p className="m-0 max-w-[460px] text-ink-2">{description}</p>
        <TagList tags={tags} />
        <span className="mt-auto inline-flex items-center gap-2.5 font-medium">
          <span
            aria-hidden="true"
            className="grid size-11 place-items-center rounded-full bg-ink text-paper transition-transform duration-350 ease-soft group-hover:-rotate-45"
          >
            →
          </span>
          Read case study
        </span>
      </div>
      <div className="min-h-[320px] overflow-hidden group-even:order-first max-[860px]:order-first max-[860px]:aspect-[4/3] max-[860px]:min-h-0">
        <StaticImage
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 860px) 100vw, 720px"
          className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
        />
      </div>
    </Link>
  );
}
