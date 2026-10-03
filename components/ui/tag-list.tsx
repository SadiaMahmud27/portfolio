import { cn } from "@/lib/cn";

type TagListProps = {
  tags: string[];
  variant?: "card" | "meta";
  className?: string;
};

const tagStyles = {
  card: "border-[rgba(21,20,19,0.25)] bg-white/40 px-3 py-1.5",
  meta: "border-line bg-white px-3 py-[5px]",
};

export function TagList({ tags, variant = "card", className }: TagListProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li key={tag} className={cn("rounded-full border text-[12px]", tagStyles[variant])}>
          {tag}
        </li>
      ))}
    </ul>
  );
}
