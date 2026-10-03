import { TagList } from "@/components/ui/tag-list";
import { Gallery } from "@/components/work/gallery";
import type { Exploration } from "@/content/work";

export function ExplorationItem({
  id,
  number,
  title,
  meta,
  description,
  link,
  galleryLabel,
  showHint,
  images,
}: Exploration) {
  return (
    <article
      id={id}
      className="grid grid-cols-[0.75fr_1.25fr] gap-[clamp(24px,4vw,64px)] border-b border-line-strong py-[clamp(36px,5vw,64px)] *:min-w-0 max-[860px]:grid-cols-1"
    >
      <div className="sticky top-24 self-start max-[860px]:static">
        <span className="text-[14px] tracking-[0.1em] text-muted">{number}</span>
        <h3 className="mt-2.5 mb-4 font-serif text-[clamp(34px,3.6vw,52px)] tracking-[-0.01em]">
          {title}
        </h3>
        <TagList tags={meta} variant="meta" className="mb-[18px]" />
        <p className="text-[16px] text-ink-2">{description}</p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 border-b border-ink pb-0.5 font-medium"
          >
            {link.label}
          </a>
        )}
      </div>
      <Gallery label={galleryLabel} images={images} showHint={showHint} />
    </article>
  );
}
