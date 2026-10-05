import Image from "next/image";
import Link from "next/link";
import type { Picture } from "@/content/types";

type MiniCardProps = {
  href: string;
  title: string;
  meta: string;
  image: Picture;
};

export function MiniCard({ href, title, meta, image }: MiniCardProps) {
  return (
    <Link href={href} data-reveal className="group flex flex-col gap-3.5">
      <div className="aspect-[4/3] overflow-hidden rounded-card-sm border border-line bg-paper-2">
        <Image
          src={image.src}
          alt={image.alt}
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 420px"
          className="h-full w-full object-cover transition-transform duration-600 ease-soft group-hover:scale-[1.05]"
        />
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-display text-[24px]">{title}</span>
        <span className="text-[13px] whitespace-nowrap text-muted">{meta}</span>
      </div>
    </Link>
  );
}
