import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function ReportSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <ScrollReveal>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-5 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary" />
          {title}
        </h2>
        <div className="rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-card)] p-6 sm:p-8">
          {children}
        </div>
      </ScrollReveal>
    </section>
  );
}

export function Placeholder({ children }: { children: ReactNode }) {
  return (
    <p className="italic text-muted-foreground/80 select-none">{children}</p>
  );
}
