## Plan

Make the Southwest Site Section (page-12) much more visible on mobile by displaying it at a large fixed height with horizontal scroll, so users can swipe sideways to see detail.

### Changes

1. **`src/components/ProjectPage.tsx`** — extend the image item type with an optional `mobileScroll?: boolean` flag. When set on a non-split image, the mobile rendering will:
   - Wrap the image in a horizontally scrollable container (`overflow-x-auto`).
   - Render the image at a tall fixed height (~70vh) with `width: auto` so it overflows horizontally at full resolution.
   - Add a subtle scroll hint (e.g. faded edge or small "swipe →" indicator) on mobile only.
   - Keep desktop behavior identical to today (centered, max-h-[80vh]).

2. **`src/routes/retreat.tsx`** — add `mobileScroll: true` to the page-12 entry only.

### Result
On mobile, the Southwest Site Section will display at full vertical height and let the user swipe left/right to pan across the wide section drawing, making fine detail readable. Desktop and all other images stay unchanged.