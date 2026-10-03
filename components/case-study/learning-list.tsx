export type LearningItem = {
  title: string;
  text: string;
};

export function LearningList({ items }: { items: LearningItem[] }) {
  return (
    <ul className="mt-7 grid border-t border-line-strong">
      {items.map((item) => (
        <li
          key={item.title}
          className="grid grid-cols-[1fr_1.3fr] gap-6 border-b border-line py-6 max-[640px]:grid-cols-1 max-[640px]:gap-1.5"
        >
          <strong className="font-serif text-[28px] leading-[1.15] font-normal!">
            {item.title}
          </strong>
          <span className="text-[17px] text-ink-2">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
