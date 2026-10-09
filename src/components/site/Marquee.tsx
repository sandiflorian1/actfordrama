export function Marquee({ items }: { items: string[] }) {
  const row = items.map((i) => `${i}  ·  `).join('').repeat(4)
  return (
    <div className="overflow-hidden border-y border-foreground/10 bg-primary py-3.5 text-primary-foreground">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="font-serif text-sm tracking-[0.25em] uppercase">{row}</span>
        <span className="font-serif text-sm tracking-[0.25em] uppercase" aria-hidden="true">
          {row}
        </span>
      </div>
    </div>
  )
}
