import Image, { type ImageProps, type StaticImageData } from "next/image";

type StaticImageProps = Omit<ImageProps, "src"> & { src: StaticImageData };

/**
 * next/image locked to the source file's aspect ratio. Resized variants have
 * rounded pixel sizes, which would otherwise nudge ratio-driven layouts once loaded.
 */
export function StaticImage({ src, style, alt, ...props }: StaticImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      style={{ aspectRatio: `${src.width} / ${src.height}`, ...style }}
      {...props}
    />
  );
}
