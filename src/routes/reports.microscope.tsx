import { createFileRoute } from "@tanstack/react-router";
import { ReportLayout } from "@/components/ReportLayout";
import { ReportSection, Placeholder } from "@/components/ReportSection";
import { MediaGallery } from "@/components/MediaGallery";
import type { MediaItem } from "@/components/MediaCard";

export const Route = createFileRoute("/reports/microscope")({
  component: MicroscopePage,
  head: () => ({
    meta: [
      { title: "Report 1 — Microscope observation" },
      { name: "description", content: "Microscope observation report: onion epidermis and protozoan substances." },
      { property: "og:title", content: "Report 1 — Microscope observation" },
      { property: "og:description", content: "Onion epidermis and protozoan substances under the microscope." },
    ],
  }),
});

// === EDITABLE CONTENT ===========================================
// Replace each string below with your real content.
// To add a real image/video, set its `src` to an imported asset URL.
const media: MediaItem[] = [
  { type: "image", title: "Onion epidermis — overview", description: "" },
  { type: "image", title: "Onion epidermis — close-up", description: "" },
  { type: "image", title: "Protozoan substance — sample A", description: "" },
  { type: "image", title: "Protozoan substance — sample B", description: "" },
  { type: "video", title: "Microscope walkthrough", description: "" },
];
// ================================================================

const toc = [
  { id: "objective", label: "Objective" },
  { id: "materials", label: "Materials" },
  { id: "procedure", label: "Procedure" },
  { id: "results", label: "Results" },
  { id: "gallery", label: "Multimedia gallery" },
  { id: "conclusion", label: "Conclusion" },
];

function MicroscopePage() {
  return (
    <ReportLayout
      eyebrow="Report 01"
      title="Microscope observation"
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

      <ReportSection id="gallery" title="Multimedia gallery">
        <p className="text-sm text-muted-foreground mb-5">
          Four photo slots and one video slot. Click any card to expand.
        </p>
        <MediaGallery items={media} variant="compact" />
      </ReportSection>

      <ReportSection id="conclusion" title="Conclusion">
        <Placeholder>Insert conclusion.</Placeholder>
      </ReportSection>
    </ReportLayout>
  );
}
