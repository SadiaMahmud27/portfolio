import type { Metadata } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL && {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  }),
  title: "Sadia Mahmud | UI/UX Designer, Dhaka",
  description:
    "Sadia Mahmud is a UI/UX designer in Dhaka, Bangladesh, designing mobile apps, web apps, dashboards and illustration.",
  // The share image itself comes from app/opengraph-image.tsx
  openGraph: {
    type: "website",
    siteName: "Sadia Mahmud",
    title: "Sadia Mahmud | UI/UX Designer",
    description: "Mobile apps, web apps, dashboards and illustration.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${newsreader.variable} ${sourceSans.variable}`}
    >
      <body>
        <SkipLink />
        <SiteHeader />
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
