import { createFileRoute } from "@tanstack/react-router";
import { ReportLayout } from "@/components/ReportLayout";
import { ReportSection, Placeholder } from "@/components/ReportSection";
import { MediaGallery } from "@/components/MediaGallery";
import type { MediaItem } from "@/components/MediaCard";

export const Route = createFileRoute("/reports/specimens")({
  component: SpecimensPage,
  head: () => ({
    meta: [
      { title: "Report 4 — Biological specimens" },
      { name: "description", content: "Laboratory observation of preserved biological specimens and tissues." },
      { property: "og:title", content: "Report 4 — Biological specimens" },
      { property: "og:description", content: "Laboratory observation of preserved biological specimens and tissues." },
    ],
  }),
});

// === EDITABLE CONTENT ===========================================
// 15 specimen slots ready to fill — add/remove freely.
const specimens: MediaItem[] = [
  { type: "image", title: "Specimen 01", description: "" },
  { type: "image", title: "Specimen 02", description: "" },
  { type: "image", title: "Specimen 03", description: "" },
  { type: "image", title: "Specimen 04", description: "" },
  { type: "image", title: "Specimen 05", description: "" },
  { type: "image", title: "Specimen 06", description: "" },
  { type: "image", title: "Specimen 07", description: "" },
  { type: "image", title: "Specimen 08", description: "" },
  { type: "image", title: "Specimen 09", description: "" },
  { type: "image", title: "Specimen 10", description: "" },
  { type: "image", title: "Specimen 11", description: "" },
  { type: "image", title: "Specimen 12", description: "" },
  { type: "image", title: "Specimen 13", description: "" },
  { type: "image", title: "Specimen 14", description: "" },
  { type: "image", title: "Specimen 15", description: "" },
];
// ================================================================

const toc = [
  { id: "objective", label: "Objective" },
  { id: "materials", label: "Materials" },
  { id: "procedure", label: "Procedure" },
  { id: "results", label: "Results" },
  { id: "gallery", label: "Specimen gallery" },
  { id: "conclusion", label: "Conclusion" },
];

function SpecimensPage() {
  return (
    <ReportLayout
      eyebrow="Report 04"
      title="Biological specimens"
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

      <ReportSection id="gallery" title="Specimen gallery">
        <p className="text-sm text-muted-foreground mb-6">
          {specimens.length} specimen slots. Click any card to expand.
        </p>
        <MediaGallery items={specimens} variant="masonry" />
      </ReportSection>

      <ReportSection id="conclusion" title="Conclusion">
        <Placeholder>Insert conclusion.</Placeholder>
      </ReportSection>
    </ReportLayout>
  );
}
