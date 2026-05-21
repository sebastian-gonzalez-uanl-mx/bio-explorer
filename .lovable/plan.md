
# Biology Lab Reports — Build Plan

A modern, educational lab-report site with 4 reports, soft white/blue palette, rounded cards, subtle shadows, smooth scroll animations, and a lightbox for expandable images.

## Content & access model

- **Read-only public site.** Visitors can view and navigate but cannot edit content. Only you can change it (in Lovable or by editing files).
- **No fictional content, no AI-generated images.** Every text field and every media slot ships as a clean, neutral placeholder you replace manually.
- Placeholder strings used everywhere:
  - `"Insert objective here"`
  - `"Add materials list"`
  - `"Add procedure text"`
  - `"Insert results"`
  - `"Insert conclusion"`
  - `"Add description"`
  - `"Add table data"`
  - `"Upload image here"` / `"Upload video here"` (on every media card)
- Each report's content lives in a single typed `content` object at the top of its route file, so you can replace strings without touching JSX.

## Media replacement workflow

- Every image/video slot is a `MediaCard` with `src`, `title`, `description` props.
- Each card renders a neutral placeholder tile (soft blue frame + upload icon + "Upload image here" label) when `src` is empty.
- To replace: upload your file → I drop it into `src/assets/reports/{report}/` → set `src` on that card. Title and description are plain strings you edit in the same object.

## Routes (TanStack Start)

```
src/routes/
  __root.tsx          (shared nav + footer, scroll restoration)
  index.tsx           (landing: hero + 4 report cards)
  reports.microscope.tsx     (Report 1)
  reports.respiration.tsx    (Report 2)
  reports.dissection.tsx     (Report 3)
  reports.specimens.tsx      (Report 4)
```

Each report route has its own `head()` metadata (neutral title/description you can edit; no og:image until you supply a hero).

## Shared components

```
src/components/
  SiteHeader.tsx        (nav links to 4 reports, active state)
  SiteFooter.tsx
  ReportLayout.tsx      (sticky in-page TOC: Objective, Materials, Procedure, Results, Gallery, Conclusion)
  ReportSection.tsx     (titled section wrapper with fade-in)
  MediaCard.tsx         (image OR video preview + title + description; empty state = "Upload here"; click → Lightbox)
  MediaGallery.tsx      (responsive grid; variants: "compact", "sequence" numbered, "masonry")
  Lightbox.tsx          (Dialog with full-size media + caption, arrow navigation)
  DataTable.tsx         (editable double-entry table; ships with empty rows + "Add table data" placeholders)
  HomeReportCard.tsx    (landing card linking to each report)
  ScrollReveal.tsx      (IntersectionObserver fade-in wrapper)
```

## Design system (src/styles.css)

- Light theme; soft white background, white cards.
- Primary blue, soft-blue accent, deep slate text. No neon, no heavy gradients.
- Lifted border-radius (~1rem) + subtle shadow tokens with hover lift.
- Inter for body, Fraunces (serif) for report titles.
- Smooth scroll + `prefers-reduced-motion` respected.

## Report shells (all sections empty / placeholder)

**R1 Microscope** — Sections present, all empty. Gallery pre-wired with 4 image cards + 1 video card, each labeled "Upload here".

**R2 Respiration & CO₂** — Two `DataTable` blocks pre-built with empty rows for you to fill (resting vs post-exercise; bromothymol blue + ammonium drop readings). Gallery with several empty photo cards + 1 empty video card.

**R3 Chicken dissection** — `MediaGallery variant="sequence"` with 5 numbered empty slots (whole leg, muscle exposed, tendon, ligaments, bone marrow). Section labels in place, descriptions empty.

**R4 Specimens** — Masonry gallery pre-wired with **15 empty media cards** by default. Filter chips structure present but unlabeled until you decide categories.

## Interactions

- Sticky in-page TOC with smooth scroll.
- ScrollReveal fade-in on cards and sections.
- Click any MediaCard (once it has media) → Lightbox with arrow navigation.
- Hover lift on cards.
- Responsive: 1-col mobile, 2-col tablet, 3–4-col desktop.

## Out of scope

- No backend, no auth, no CMS.
- No AI-generated images or text.
- Visitors cannot modify content.

Ready to implement.
