import { WorkCard } from "@/components/work/work-card";
import type { WorkCardData } from "@/content/types";

type WorkListProps = {
  items: WorkCardData[];
  headingAs?: "h2" | "h3";
};

export function WorkList({ items, headingAs }: WorkListProps) {
  return (
    <div className="grid gap-[clamp(20px,3vw,32px)]">
      {items.map((item) => (
        <WorkCard key={item.href} {...item} headingAs={headingAs} />
      ))}
    </div>
  );
}
