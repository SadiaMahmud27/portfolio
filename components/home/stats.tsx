import { stats } from "@/content/home";

export function Stats() {
  return (
    <dl className="mt-[clamp(48px,7vw,88px)] mb-[1em] grid grid-cols-4 border-y border-line max-[900px]:grid-cols-2">
      {stats.map((stat) => (
        <div
          key={stat.term}
          className="pt-[22px] pr-5 pb-6 not-first:border-l not-first:border-line not-first:pl-6 max-[900px]:nth-3:border-l-0 max-[900px]:nth-3:pl-0 max-[900px]:nth-[n+3]:border-t max-[900px]:nth-[n+3]:border-line"
        >
          <dt className="sr-only">{stat.term}</dt>
          <dd className="font-display text-[clamp(34px,3.74vw,51px)] leading-none">{stat.value}</dd>
          <dd className="text-[13px] text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
