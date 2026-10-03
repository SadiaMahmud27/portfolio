import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Experience } from "@/components/home/experience";
import { Faq } from "@/components/home/faq";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { ServicesMarquee } from "@/components/home/services-marquee";
import { SiteFooter } from "@/components/layout/site-footer";
import { images } from "@/content/images";
import { footerLinks } from "@/content/site";

export const metadata: Metadata = {
  openGraph: {
    title: "Sadia Mahmud | UI/UX Designer",
    description: "Mobile apps, web apps, dashboards and illustration.",
    images: [images.inboxswipeCover.src],
  },
};

export default function HomePage() {
  return (
    <>
      <main id="main">
        <Hero />
        <ServicesMarquee />
        <FeaturedWork />
        <Experience />
        <About />
        <Faq />
        <Contact />
      </main>
      <SiteFooter links={footerLinks.home} showBigName />
    </>
  );
}
