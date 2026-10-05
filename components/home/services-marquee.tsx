import { Fragment } from "react";
import { services } from "@/content/home";

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex items-center gap-9 pr-9" aria-hidden={hidden || undefined}>
      {services.map((service) => (
        <Fragment key={service.rest}>
          <span className="font-display text-[clamp(24px,3.06vw,41px)] whitespace-nowrap">
            {service.emphasis && <em className="text-sky">{service.emphasis}</em>}
            {service.rest}
          </span>
          <span className="text-[21px] text-butter" aria-hidden={hidden ? undefined : true}>
            ✦
          </span>
        </Fragment>
      ))}
    </div>
  );
}

/** Infinite services ticker. The second group is a visual duplicate for the seamless loop. */
export function ServicesMarquee() {
  return (
    <section aria-label="Services" className="group overflow-hidden bg-ink py-[22px] text-paper">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </section>
  );
}
