import { StaticImage } from "@/components/ui/static-image";
import type { Picture } from "@/content/types";

/** Tallest rendered gallery image height, used to derive `sizes` from each aspect ratio. */
const MAX_HEIGHT = 420;

type GalleryProps = {
  label: string;
  images: Picture[];
  showHint?: boolean;
};

/** Horizontally scrolling, snap-aligned strip of fixed-height screenshots. */
export function Gallery({ label, images, showHint = false }: GalleryProps) {
  return (
    <div>
      <div
        role="region"
        tabIndex={0}
        aria-label={label}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [scrollbar-color:var(--color-line-strong)_transparent] [scrollbar-width:thin]"
      >
        {images.map((image) => (
          <figure
            key={image.src.src}
            className="m-0 flex-none snap-start overflow-hidden rounded-card-sm border border-line bg-paper-2"
          >
            <StaticImage
              src={image.src}
              alt={image.alt}
              sizes={`${Math.ceil((MAX_HEIGHT * image.src.width) / image.src.height)}px`}
              className="h-[clamp(260px,32vw,420px)] w-auto max-w-none"
            />
          </figure>
        ))}
      </div>
      {showHint && <p className="mt-1.5 text-[12px] text-muted">Scroll sideways →</p>}
    </div>
  );
}
