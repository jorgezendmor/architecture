## Plan

Adjust the Chichu basement-plan mobile layout so the visible plan boxes stack flush, one directly above the other, instead of aligning by the full image/file dimensions.

### What I’ll change
1. **Target only the Chichu basement-plan entry**
   - Keep the current desktop behavior unchanged.
   - Apply a mobile-only layout tweak specifically to the “First & Second Basement Plans” image pair.

2. **Align by visible plan content, not full image edges**
   - Update the split-image rendering system so this pair can use a narrower mobile presentation when stacked.
   - Center each plan image and constrain its mobile width so the actual drawing/bounding box reads as one vertical column.
   - If needed, make the images slightly smaller on mobile so the two plan boxes sit directly adjacent visually.

3. **Preserve the rest of the portfolio behavior**
   - Leave the other split/unsplit image rules intact.
   - Do not change paragraph sizing, desktop layout, or the images you asked to keep combined on mobile.

### Technical details
- I’ll extend the `ImageItem` shape in `src/components/ProjectPage.tsx` with a small mobile-only option for split images.
- Then I’ll set that option only on the Chichu basement-plan item in `src/routes/chichu.tsx`.
- The implementation will use responsive width constraints rather than further cropping the source files, since your requirement is about the **plan bounding boxes in layout**, not the file bounds.

### Expected result
On mobile, the first and second basement plans will appear as a clean vertical stack, with the plan boxes visually aligned as one column and no misleading extra width forcing them out of adjacency.