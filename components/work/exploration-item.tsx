import { TagList } from "@/components/ui/tag-list";
import { Gallery } from "@/components/work/gallery";
import type { Exploration } from "@/content/work";

export function ExplorationItem({
  id,
  number,
  title,
  meta,
  description,
  links,
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
        <span className="text-[13px] tracking-[0.1em] text-muted">{number}</span>
        <h3 className="mt-2.5 mb-4 font-display text-[clamp(29px,3.06vw,44px)] tracking-[-0.005em]">
          {title}
        </h3>
        <TagList tags={meta} variant="meta" className="mb-[18px]" />
        <p className="text-[15px] text-ink-2">{description}</p>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 border-b border-ink pb-0.5 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
      <Gallery label={galleryLabel} images={images} showHint={showHint} />
    </article>
  );
}
