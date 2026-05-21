import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TocItem = { id: string; label: string };

export function ReportLayout({
  eyebrow,
  title,
  intro,
  toc,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  toc: TocItem[];
  children: ReactNode;
}) {
  const [active, setActive] = useState(toc[0]?.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [toc]);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-10 pb-20">
      <header className="mb-12 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl font-semibold leading-[1.05]">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 text-muted-foreground text-base sm:text-lg">{intro}</p>
        )}
      </header>

      <div className="grid lg:grid-cols-[200px_1fr] gap-10">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 space-y-1">
            <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Sections
            </p>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "block rounded-lg px-3 py-1.5 text-sm transition-colors",
                  active === item.id
                    ? "bg-accent text-accent-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/40",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="space-y-16">{children}</div>
      </div>
    </div>
  );
}
