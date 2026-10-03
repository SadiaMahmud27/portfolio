import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-heading";
import { images } from "@/content/images";

const photoFrame =
  "absolute m-0 overflow-hidden rounded-card border-[6px] border-white shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]";

function AboutPhotos() {
  return (
    <div data-reveal className="relative aspect-[1/1.05] max-[900px]:max-w-[480px]">
      <figure className={`${photoFrame} top-0 left-0 w-[68%] -rotate-3`}>
        <Image
          src={images.aboutOutdoor}
          alt="Sadia standing on a balcony overlooking a city"
          sizes="(max-width: 900px) 330px, 400px"
          className="aspect-square w-full object-cover"
        />
      </figure>
      <figure className={`${photoFrame} right-0 bottom-0 w-[56%] rotate-4`}>
        <Image
          src={images.aboutPortrait}
          alt="Close-up portrait of Sadia wearing glasses"
          sizes="(max-width: 900px) 270px, 330px"
          className="aspect-square w-full object-cover"
        />
      </figure>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-paper-2 py-[clamp(72px,10vw,140px)]">
      <Container className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[clamp(40px,6vw,96px)] max-[900px]:grid-cols-1">
        <AboutPhotos />
        <div data-reveal className="[&>p]:text-[18px] [&>p]:text-ink-2">
          <div className="flex flex-wrap items-center gap-3.5">
            <Eyebrow>About me</Eyebrow>
            <span className="inline-block -rotate-4 rounded-full border border-ink bg-butter px-4 py-2 text-[14px]">
              curious by default ✦
            </span>
          </div>
          <SectionTitle className="mt-[18px] mb-7">
            Empathy first, <em>pixels</em> second.
          </SectionTitle>
          <p className="first-letter:float-left first-letter:pt-2 first-letter:pr-2.5 first-letter:font-serif first-letter:text-[84px] first-letter:leading-[0.8]">
            I&apos;m a curious, creative UI/UX designer who loves turning ideas into digital
            experiences that feel natural and delightful to use. I solve problems with empathy and
            attention to detail, and I like experimenting with new approaches to make interfaces
            both beautiful and functional.
          </p>
          <p>
            I&apos;ve worked as a UI/UX Designer at Hishabee Technologies, as a Graphic Designer at
            Eicra Soft Ltd., and on freelance projects for local and global clients. That taught me
            to adapt, collaborate and bring ideas to life. Outside design, I love learning and meet
            challenges with enthusiasm.
          </p>
        </div>
      </Container>
    </section>
  );
}
