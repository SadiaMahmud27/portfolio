import { cn } from "@/lib/cn";

type SwipeTone = "delete" | "important" | "unsubscribe" | "read";

export type SwipeItem = {
  tone: SwipeTone;
  arrow: string;
  title: string;
  text: string;
};

const toneBg: Record<SwipeTone, string> = {
  delete: "bg-[#ffd4d1]",
  important: "bg-[#ffe7a8]",
  unsubscribe: "bg-[#ffc9f0]",
  read: "bg-[#c9f0d3]",
};

/** Swipe-direction cards (InboxSwipe interaction model). */
export function SwipeGrid({ items }: { items: SwipeItem[] }) {
  return (
    <ul className="mt-8 grid grid-cols-4 gap-3 max-[860px]:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title}
          className={cn(
            "flex min-h-[210px] flex-col rounded-card-sm border border-black/10 px-[18px] py-[22px]",
            toneBg[item.tone],
          )}
        >
          <span aria-hidden="true" className="mb-auto text-[38px] leading-none">
            {item.arrow}
          </span>
          <h3 className="mt-6 mb-1.5 font-serif text-[22px]">{item.title}</h3>
          <p className="m-0 text-[14px]! text-ink-2">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
