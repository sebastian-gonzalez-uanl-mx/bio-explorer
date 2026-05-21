import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Microscope, Wind, Bone, FlaskConical } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Biology Lab Reports — Home" },
      { name: "description", content: "Four interactive biology lab reports: microscope observation, respiration & CO₂, chicken leg dissection, and biological specimens." },
    ],
  }),
});

const reports = [
  { to: "/reports/microscope", n: "01", icon: Microscope, title: "Microscope observation", blurb: "Onion epidermis and protozoan substances under the microscope." },
  { to: "/reports/respiration", n: "02", icon: Wind, title: "Respiration & CO₂", blurb: "Respiration frequency and carbon dioxide release experiments." },
  { to: "/reports/dissection", n: "03", icon: Bone, title: "Chicken leg dissection", blurb: "Anatomical sequence: skin, muscle, tendon, ligaments, bone marrow." },
  { to: "/reports/specimens", n: "04", icon: FlaskConical, title: "Biological specimens", blurb: "Preserved anatomical substances and tissue observation." },
] as const;

function Index() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="pt-16 sm:pt-24 pb-12 sm:pb-16">
        <ScrollReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Biology · Lab Portfolio
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-6xl font-semibold leading-[1.02] max-w-3xl">
            A clean, interactive home for four biology lab reports.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Insert your introduction here. Each report includes objective, materials,
            procedure, results, a multimedia gallery, and conclusion.
          </p>
        </ScrollReveal>
      </section>

      <section className="pb-24 grid gap-6 sm:grid-cols-2">
        {reports.map((r, i) => (
          <ScrollReveal key={r.to} delay={i * 80}>
            <Link
              to={r.to}
              className="group flex h-full flex-col justify-between gap-8 rounded-3xl border border-border/70 bg-card p-7 sm:p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <r.icon className="h-6 w-6" />
                  </span>
                  <span className="font-serif text-2xl text-muted-foreground/70">
                    {r.n}
                  </span>
                </div>
                <h2 className="mt-6 font-serif text-2xl font-semibold leading-snug">
                  {r.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{r.blurb}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Open report
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}
