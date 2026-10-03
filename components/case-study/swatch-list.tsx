export type SwatchItem = {
  name: string;
  note: string;
  /** Any CSS background value (colour or gradient). */
  background: string;
};

type SwatchListProps = {
  label: string;
  items: SwatchItem[];
};

export function SwatchList({ label, items }: SwatchListProps) {
  return (
    <ul aria-label={label} className="mt-7 grid grid-cols-5 gap-2.5 max-[640px]:grid-cols-3">
      {items.map((item) => (
        <li key={item.name} className="overflow-hidden rounded-card-sm border border-line bg-white">
          <div className="aspect-[1/1.1]" style={{ background: item.background }} />
          <div className="px-3 py-2.5 text-[13px] leading-[1.3]">
            {item.name}
            <code className="mt-0.5 block text-[11px] text-muted">{item.note}</code>
          </div>
        </li>
      ))}
    </ul>
  );
}
