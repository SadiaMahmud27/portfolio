import { cn } from "@/lib/cn";

export type CardItem = {
  kicker: string;
  title: string;
  text: string;
};

type CardGridProps = {
  items: CardItem[];
  columns?: 2 | 3;
};

export function CardGrid({ items, columns = 2 }: CardGridProps) {
  return (
    <ul
      className={cn(
        "mt-8 grid gap-4 max-[760px]:grid-cols-1",
        columns === 3 ? "grid-cols-3" : "grid-cols-2",
      )}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col gap-2 rounded-card-sm border border-line bg-white p-6"
        >
          <span className="text-[13px] tracking-[0.08em] text-muted">{item.kicker}</span>
          <h3 className="font-serif text-[26px] leading-[1.15]">{item.title}</h3>
          <p className="m-0 text-[16px]!">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
