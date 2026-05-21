import { createFileRoute } from "@tanstack/react-router";
import { ReportLayout } from "@/components/ReportLayout";
import { ReportSection, Placeholder } from "@/components/ReportSection";
import { MediaGallery } from "@/components/MediaGallery";
import { DataTable } from "@/components/DataTable";
import type { MediaItem } from "@/components/MediaCard";

export const Route = createFileRoute("/reports/respiration")({
  component: RespirationPage,
  head: () => ({
    meta: [
      { title: "Report 2 — Respiration & CO₂" },
      { name: "description", content: "Respiration frequency and carbon dioxide release experiments." },
      { property: "og:title", content: "Report 2 — Respiration & CO₂" },
      { property: "og:description", content: "Respiration frequency and carbon dioxide release experiments." },
    ],
  }),
});

// === EDITABLE CONTENT ===========================================
const media: MediaItem[] = [
  { type: "image", title: "Setup overview", description: "" },
  { type: "image", title: "Bromothymol blue solution", description: "" },
  { type: "image", title: "Reaction — before", description: "" },
  { type: "image", title: "Reaction — after", description: "" },
  { type: "video", title: "One-minute breathing test", description: "" },
];

// Table 1 — Respiration frequency (resting vs post-exercise)
const respirationTable = {
  caption: "Respiration frequency — resting vs post-exercise (breaths / minute)",
  columns: ["Subject", "Resting", "Post-exercise", "Difference"],
  rows: [
    ["Subject 1", "", "", ""],
    ["Subject 2", "", "", ""],
    ["Subject 3", "", "", ""],
    ["Subject 4", "", "", ""],
  ],
};

// Table 2 — CO₂ release via bromothymol blue + ammonium drops
const co2Table = {
  caption: "Carbon dioxide release — bromothymol blue + ammonium drops",
  columns: ["Sample", "Initial color", "Color after 1 min breathing", "Observation"],
  rows: [
    ["Sample A", "", "", ""],
    ["Sample B", "", "", ""],
    ["Sample C", "", "", ""],
    ["Sample D", "", "", ""],
  ],
};
// ================================================================

const toc = [
  { id: "objective", label: "Objective" },
  { id: "materials", label: "Materials" },
  { id: "procedure", label: "Procedure" },
  { id: "results", label: "Results" },
  { id: "gallery", label: "Multimedia gallery" },
  { id: "conclusion", label: "Conclusion" },
];

function RespirationPage() {
  return (
    <ReportLayout
      eyebrow="Report 02"
      title="Respiration & carbon dioxide"
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
        <div className="space-y-6">
          <DataTable {...respirationTable} />
          <DataTable
            {...co2Table}
            note="Darker blue coloration indicates lower carbon dioxide concentration after the one-minute breathing test."
          />
          <div className="pt-2">
            <Placeholder>Insert written results / interpretation here.</Placeholder>
          </div>
        </div>
      </ReportSection>

      <ReportSection id="gallery" title="Multimedia gallery">
        <MediaGallery items={media} variant="compact" />
      </ReportSection>

      <ReportSection id="conclusion" title="Conclusion">
        <Placeholder>Insert conclusion.</Placeholder>
      </ReportSection>
    </ReportLayout>
  );
}
