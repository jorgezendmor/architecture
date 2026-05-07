## Goal
Replace the wordy project nav labels (Chichu / L.A.V.A / Retreat / Drainage) with clean numbers, and surface the full project title on hover so the meaning is still discoverable.

## Changes
In `src/routes/__root.tsx`, update the top nav project links:

- `00 · Index` → keep as `Index`
- `01 · Chichu` → `01` (tooltip: "Chichu Art Museum")
- `02 · L.A.V.A` → `02` (tooltip: "Lubbock's Academy of Visual Arts")
- `03 · Retreat` → `03` (tooltip: "Travelers Retreat")
- `04 · Drainage` → `04` (tooltip: "Lubbock's Drainage System Analysis")
- `More About Me` → keep as is

Each numbered link gets a native `title` attribute so hovering reveals the full project name. Spacing between the numbered links will be tightened slightly so the row feels intentional rather than sparse.

## Out of scope
- Bottom prev/next navigation on project pages stays unchanged (still shows full titles for clarity at the end of a page).
- Table of Contents on the home page is unchanged.
