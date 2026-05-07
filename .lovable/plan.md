## Goal

On mobile, split each combined two-panel image into a top/bottom stack so each panel is large and readable. On desktop (≥768px), keep current side-by-side layout unchanged.

## Approach

1. **Split each wide image into two halves** (left + right) and save as new files in `src/assets/portfolio/`. Affected files (all are roughly 2:1 or wider, two panels side-by-side):
   - `page-04-new.svg` (Chichu p1) — *square-ish 876×1101, skip if not a 2-panel image*
   - `page-05.jpg`, `page-06.jpg` (Chichu)
   - `page-06-new.svg`, `page-08-new.svg`, `page-09-new.svg` (LAVA)
   - `page-10.svg`, `page-11.jpg`, `page-12.jpg` (Retreat)
   - `page-13.svg` (Drainage)
   - `page-10-v7.svg` (LAVA exploded axon, square — skip)

   For JPGs: use Python/PIL to crop into `*-left.jpg` and `*-right.jpg`.
   For SVGs: wrap in two new SVGs that crop the viewBox to the left and right halves.

2. **Update `ProjectPage.tsx`** to support a new image type `split: { left, right, caption }`. Render:
   - On mobile: two stacked `<img>` elements (full-width).
   - On desktop (`md:` and up): show the original combined image (preserving current look) — OR show the two halves side-by-side via CSS grid. Cleaner option: just show stacked on mobile, single combined image on desktop.

3. **Update each route file** (`chichu.tsx`, `lava.tsx`, `retreat.tsx`, `drainage.tsx`) to use the new `split` image entries where applicable, keeping single-panel images (like the square exploded axonometric) as regular entries.

## Technical details

- Add a discriminated `images` entry shape in `ProjectPage.tsx`:
  ```ts
  | { src: string; caption: string; full?: boolean; wide?: boolean }
  | { src: string; leftSrc: string; rightSrc: string; caption: string; full?: boolean }
  ```
- For `split` entries, JSX:
  ```tsx
  <div className="md:hidden flex flex-col gap-4">
    <img src={leftSrc} ... />
    <img src={rightSrc} ... />
  </div>
  <div className="hidden md:flex justify-center">
    <img src={src} ... />
  </div>
  ```
- I'll skip splitting `page-04-new.svg` and `page-10-v7.svg` since they aren't side-by-side panels.

## Out of scope

- No changes to desktop layout, copy, navigation, or theming.
- No re-export of the original SVGs/JPGs — the originals stay in place; new half-files are added alongside.