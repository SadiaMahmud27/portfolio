import { ZoomableImage } from "@/components/case-study/zoomable-image";
import type { Picture } from "@/content/types";

type CaseFigureProps = Picture & { caption?: string };

/** Full-bleed figure that breaks out of the text column on wide screens. Click to zoom. */
export function CaseFigure({ src, alt, caption }: CaseFigureProps) {
  return (
    <figure className="mx-[calc(-1*clamp(0px,8vw,120px))] mt-10 mb-0 max-[1100px]:mx-0">
      <div className="overflow-hidden rounded-card border border-line bg-paper-2">
        <ZoomableImage src={src} alt={alt} sizes="(max-width: 960px) 100vw, 1060px" />
      </div>
      {caption && <figcaption className="mt-3 text-[14px] text-muted">{caption}</figcaption>}
    </figure>
  );
}
