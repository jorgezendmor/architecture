## Plan

Make the first (hero) image on every project page fit fully within the viewport at 100% zoom on desktop, so users see the whole image without scrolling.

### Problem
Currently the first image uses the same `ImageBlock` as the rest. When the image is marked `wide: true` (e.g. retreat's p10, lava's p06), it renders as `w-full h-auto`, which on desktop becomes very tall and overflows the viewport. Even non-wide hero images can overflow because `max-h-[80vh]` doesn't account for the page header/title block above them.

### Change

**`src/components/ProjectPage.tsx`** — add an `isHero` rendering mode used only for the first image:
- On desktop (`md:` and up), render the hero image with `max-h-[calc(100vh-260px)] w-auto max-w-full object-contain mx-auto`, regardless of the `wide` flag. The 260px reserves space for the title block + top/bottom padding so the whole image is visible at 100% zoom on a typical laptop.
- Ignore `wide` for the hero on desktop (wide only meant "fill width"; for the hero we want "fit in viewport").
- Mobile behavior for the hero stays exactly as today (full width, natural height) — the user only asked about the web version.
- All non-hero images (the rest of the gallery) keep their current behavior unchanged.

No changes needed in the per-project route files (`chichu.tsx`, `lava.tsx`, `retreat.tsx`, `drainage.tsx`) — the hero is always `images[0]`, which `ProjectPage` already renders separately.

### Result
On desktop, the first image of each project (Chichu, L.A.V.A, Travelers Retreat, Drainage) is always fully visible within the browser window at 100% zoom, scaled down proportionally if needed. Mobile and the rest of the gallery are untouched.
