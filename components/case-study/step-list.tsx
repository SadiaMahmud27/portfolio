export type StepItem = {
  title: string;
  text: string;
};

/** Numbered journey / feature steps (01, 02, ...). */
export function StepList({ items }: { items: StepItem[] }) {
  return (
    <ol className="mt-8 border-t border-line-strong [counter-reset:step]">
      {items.map((item) => (
        <li
          key={item.title}
          className="grid grid-cols-[64px_180px_1fr] items-baseline gap-4 border-b border-line py-5 [counter-increment:step] before:text-[12px] before:text-muted before:content-[counter(step,decimal-leading-zero)] max-[640px]:grid-cols-[40px_1fr]"
        >
          <strong className="font-serif text-[22px] font-normal!">{item.title}</strong>
          <span className="text-ink-2 max-[640px]:col-start-2">{item.text}</span>
        </li>
      ))}
    </ol>
  );
}
