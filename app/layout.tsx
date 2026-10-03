import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { ScrollReveal } from "@/components/layout/scroll-reveal";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...(process.env.NEXT_PUBLIC_SITE_URL && {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  }),
  title: "Sadia Mahmud | UI/UX Designer, Dhaka",
  description:
    "Sadia Mahmud is a UI/UX designer in Dhaka, Bangladesh, designing mobile apps, web apps, dashboards and illustration.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrumentSerif.variable} ${outfit.variable}`}
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
