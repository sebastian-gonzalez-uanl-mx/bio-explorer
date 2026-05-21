import { createFileRoute } from "@tanstack/react-router";
import { ReportLayout } from "@/components/ReportLayout";
import { ReportSection, Placeholder } from "@/components/ReportSection";
import { MediaGallery } from "@/components/MediaGallery";
import type { MediaItem } from "@/components/MediaCard";

export const Route = createFileRoute("/reports/dissection")({
  component: DissectionPage,
  head: () => ({
    meta: [
      { title: "Report 3 — Chicken leg dissection" },
      { name: "description", content: "Anatomical sequence: complete leg, muscle, tendon, ligaments, bone marrow." },
      { property: "og:title", content: "Report 3 — Chicken leg dissection" },
      { property: "og:description", content: "Anatomical sequence: complete leg, muscle, tendon, ligaments, bone marrow." },
    ],
  }),
});

// === EDITABLE CONTENT ===========================================
const sequence: MediaItem[] = [
  { type: "image", title: "Complete chicken leg", description: "" },
  { type: "image", title: "Exposed muscle after removing skin", description: "" },
  { type: "image", title: "Tendon", description: "" },
  { type: "image", title: "Ligaments", description: "" },
  { type: "image", title: "Bone marrow", description: "" },
];
// ================================================================

const toc = [
  { id: "objective", label: "Objective" },
  { id: "materials", label: "Materials" },
  { id: "procedure", label: "Procedure" },
  { id: "results", label: "Results" },
  { id: "gallery", label: "Visual sequence" },
  { id: "conclusion", label: "Conclusion" },
];

function DissectionPage() {
  return (
    <ReportLayout
      eyebrow="Report 03"
      title="Chicken leg dissection"
      intro="Insert short report intro here."
      toc={toc}
    >
      <ReportSection id="objective" title="Objective">
        <Placeholder>Insert objective here.</Placeholder>
      </ReportSection>

      <ReportSection id="materials" title="Materials">
        <Placeholder>Add materials list.</Placeholder>
      </ReportSection>

      <ReportSection id="procedure" title="Procedure">
        <Placeholder>Add procedure text.</Placeholder>
      </ReportSection>

      <ReportSection id="results" title="Results">
        <Placeholder>Insert results.</Placeholder>
      </ReportSection>

      <ReportSection id="gallery" title="Visual sequence">
        <p className="text-sm text-muted-foreground mb-6">
          Numbered anatomical sequence. Click any image to expand.
        </p>
        <MediaGallery items={sequence} variant="sequence" />
      </ReportSection>

      <ReportSection id="conclusion" title="Conclusion">
        <Placeholder>Insert conclusion.</Placeholder>
      </ReportSection>
    </ReportLayout>
  );
}
