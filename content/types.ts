import type { StaticImageData } from "next/image";

export type Accent = "blush" | "sky" | "mint" | "butter";

export type Picture = {
  src: StaticImageData;
  alt: string;
};

export type WorkCardData = {
  href: string;
  accent: Accent;
  index: string;
  title: string;
  description: string;
  tags: string[];
  image: Picture;
};
