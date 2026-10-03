"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from "react";
import { StaticImage } from "@/components/ui/static-image";
import type { Picture } from "@/content/types";
import { cn } from "@/lib/cn";

type ZoomableImageProps = Picture & { sizes: string };

const LIGHTBOX_PADDING = "clamp(12px, 3vw, 40px)";

/** Largest size that fits the viewport inside the lightbox padding. */
const fitSize: CSSProperties = {
  width: "auto",
  maxWidth: `calc(100vw - 2 * ${LIGHTBOX_PADDING})`,
  maxHeight: `calc(100dvh - 2 * ${LIGHTBOX_PADDING})`,
};

const zoomedSize: CSSProperties = { width: "max(200vw, 1400px)", maxWidth: "none" };

/** Pointer position (0–1 within the image) and viewport point to keep fixed while zooming. */
type ZoomAnchor = { rx: number; ry: number; x: number; y: number };

/**
 * Figure image that opens in a full-screen lightbox. Inside, clicking the image toggles a
 * 2× zoom anchored at the pointer, and the zoomed image pans by scrolling.
 */
export function ZoomableImage({ src, alt, sizes }: ZoomableImageProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<ZoomAnchor | null>(null);
  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  // showModal() traps focus and handles Esc, but doesn't stop the page behind from scrolling.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = previous;
    };
  }, [open]);

  // After a zoom change, scroll so the point under the pointer stays put.
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    const anchor = anchorRef.current;
    if (!scroller || !anchor) return;
    anchorRef.current = null;
    const image = scroller.querySelector("img");
    if (!image) return;
    scroller.scrollLeft = image.offsetLeft + anchor.rx * image.offsetWidth - anchor.x;
    scroller.scrollTop = image.offsetTop + anchor.ry * image.offsetHeight - anchor.y;
  }, [zoomed]);

  function openLightbox() {
    dialogRef.current?.showModal();
    setOpen(true);
  }

  function toggleZoom(event: MouseEvent<HTMLButtonElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    // Keyboard activation reports (0, 0); zoom around the centre instead.
    const fromPointer = event.clientX !== 0 || event.clientY !== 0;
    anchorRef.current = {
      rx: fromPointer ? (event.clientX - rect.left) / rect.width : 0.5,
      ry: fromPointer ? (event.clientY - rect.top) / rect.height : 0.5,
      x: fromPointer ? event.clientX : window.innerWidth / 2,
      y: fromPointer ? event.clientY : window.innerHeight / 2,
    };
    setZoomed((value) => !value);
  }

  return (
    <>
      <button
        type="button"
        onClick={openLightbox}
        aria-haspopup="dialog"
        className="group relative block w-full cursor-zoom-in"
      >
        <StaticImage src={src} alt={alt} sizes={sizes} quality={90} className="w-full" />
        <span
          aria-hidden="true"
          className="absolute right-4 bottom-4 rounded-full bg-ink/80 px-3.5 py-1.5 text-[12px] text-paper opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          Click to zoom
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-label={alt}
        onClose={() => {
          setOpen(false);
          setZoomed(false);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/94 p-0 text-paper backdrop:bg-transparent backdrop:backdrop-blur-md"
      >
        <div
          ref={scrollerRef}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialogRef.current?.close();
          }}
          className={cn(
            "grid h-full w-full overflow-auto overscroll-contain",
            zoomed ? "place-items-start" : "place-items-center",
          )}
          style={{ padding: zoomed ? 0 : LIGHTBOX_PADDING }}
        >
          {open && (
            <button
              type="button"
              onClick={toggleZoom}
              aria-label={zoomed ? "Zoom out" : "Zoom in"}
              className={zoomed ? "cursor-zoom-out" : "cursor-zoom-in"}
            >
              <StaticImage
                src={src}
                alt={alt}
                sizes="200vw"
                quality={90}
                className={cn("block", !zoomed && "rounded-card-sm")}
                style={zoomed ? zoomedSize : fitSize}
              />
            </button>
          )}
        </div>

        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Close"
          className="fixed top-4 right-4 grid size-11 place-items-center rounded-full bg-paper text-[19px] text-ink shadow-lg"
        >
          ✕
        </button>
        {!zoomed && (
          <p className="pointer-events-none fixed bottom-4 left-1/2 m-0 -translate-x-1/2 rounded-full bg-ink/70 px-3.5 py-1.5 text-[12px] text-paper max-[640px]:hidden">
            Click image to zoom · Esc to close
          </p>
        )}
      </dialog>
    </>
  );
}
