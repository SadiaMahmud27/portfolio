import Image from "next/image";
import { images } from "@/content/images";

export function HeroPortrait() {
  return (
    <div className="relative w-full max-w-[380px] justify-self-end max-[900px]:order-first max-[900px]:max-w-[240px] max-[900px]:justify-self-start">
      <div className="aspect-[4/5] overflow-hidden rounded-[999px_999px_22px_22px] bg-sky max-[900px]:aspect-square">
        <Image
          src={images.aboutPortrait}
          alt="Portrait of Sadia Mahmud smiling"
          sizes="(max-width: 900px) 240px, 380px"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </div>
      <HeroBadge />
    </div>
  );
}

/** Spinning circular "UI/UX Designer ✦ Dhaka" badge. */
function HeroBadge() {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-12 -left-11 grid size-[116px] place-items-center rounded-full bg-ink text-paper max-[900px]:-right-7 max-[900px]:-bottom-[18px] max-[900px]:left-auto max-[900px]:size-[92px]"
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text
          textLength="236"
          lengthAdjust="spacing"
          className="fill-paper font-sans text-[10.5px] tracking-[0.22em] uppercase"
        >
          <textPath href="#badge-circle" textLength="236" lengthAdjust="spacing">
            UI/UX Designer ✦ Dhaka ✦{" "}
          </textPath>
        </text>
      </svg>
      <span className="text-[28px] leading-none text-butter">✦</span>
    </div>
  );
}
