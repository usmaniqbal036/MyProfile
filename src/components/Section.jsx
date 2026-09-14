export default function Section({ eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section className={`container-x py-14 ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>}
      {subtitle && <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
      {children}
    </section>
  );
}

export function Pill({ children }) {
  return (
    <span className="rounded-full border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

export function Timeline({ items }) {
  return (
    <ol className="mt-6 space-y-6 border-l pl-6">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full bg-primary" />
          <h4 className="font-semibold">{item.title}</h4>
          <div className="text-sm text-primary">{item.place}</div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            {item.duration}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
