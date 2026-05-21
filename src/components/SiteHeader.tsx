import { Link, useRouterState } from "@tanstack/react-router";
import { Microscope } from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/reports/microscope", label: "Microscope" },
  { to: "/reports/respiration", label: "Respiration & CO₂" },
  { to: "/reports/dissection", label: "Dissection" },
  { to: "/reports/specimens", label: "Specimens" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Microscope className="h-5 w-5" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Biology Lab Reports
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active = pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <select
          className="md:hidden rounded-md border border-input bg-background px-2 py-1.5 text-sm"
          value={nav.find((n) => pathname.startsWith(n.to))?.to ?? ""}
          onChange={(e) => {
            if (e.target.value) window.location.assign(e.target.value);
          }}
        >
          <option value="">Menu…</option>
          {nav.map((n) => (
            <option key={n.to} value={n.to}>{n.label}</option>
          ))}
        </select>
      </div>
    </header>
  );
}
