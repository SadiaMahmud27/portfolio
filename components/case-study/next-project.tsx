import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

export type NextProjectData = {
  href: string;
  title: ReactNode;
  image: StaticImageData;
};

export function NextProject({ href, title, image }: NextProjectData) {
  return (
    <Container>
      <Link
        href={href}
        className="group grid grid-cols-2 items-center gap-8 border-t border-line-strong py-[clamp(48px,7vw,96px)] max-[760px]:grid-cols-1"
      >
        <div>
          <span className="text-[12px] tracking-[0.14em] text-muted uppercase">
            Next case study
          </span>
          <span className="mt-3 inline-block font-display text-[clamp(41px,5.95vw,88px)] leading-[0.95] tracking-[-0.015em] hover:[&_em]:underline hover:[&_em]:decoration-2 hover:[&_em]:underline-offset-8">
            {title}
          </span>
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-card border border-line">
          <Image
            src={image}
            alt=""
            sizes="(max-width: 760px) 100vw, 600px"
            className="h-full w-full object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.04]"
          />
        </div>
      </Link>
    </Container>
  );
}
