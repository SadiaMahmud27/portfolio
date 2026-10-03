import type { Metadata } from "next";

/**
 * Per-page Open Graph data. A page's `openGraph` replaces its parent's rather
 * than merging, so every page re-attaches the shared image from app/opengraph-image.tsx.
 */
export function pageOpenGraph(title: string, description: string): Metadata["openGraph"] {
  return {
    type: "website",
    siteName: "Sadia Mahmud",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sadia Mahmud, UI/UX designer in Dhaka",
        type: "image/png",
      },
    ],
  };
}
