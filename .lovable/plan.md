Make the header and footer content stretch closer to the screen edges.

Currently both are capped at `max-w-[1400px]` and centered. On wide screens this leaves big empty margins on the left/right.

Changes in `src/routes/__root.tsx`:
1. `SiteHeader` inner container — remove `max-w-[1400px] mx-auto`, keep the existing horizontal padding so content still has a small breathing room from the edge.
2. `SiteFooter` inner container — same change.

Result: "Jorge Zendejas Moran / Index / 01 / 02 …" in the header and "Portfolio · email · name" in the footer sit close to the left/right edges of the viewport on all screen sizes.