Make the scroll-indicator fade smoother and less laggy.

Cause: 2s `transition-opacity` on a non-composited element triggers paints while the sticky header is also repainting on scroll → reads as jank.

Changes in `src/routes/index.tsx`:
1. Shorten `duration-[2000ms]` → `duration-700` with `ease-out`.
2. Add `will-change-[opacity]` so the browser promotes it to its own compositor layer (GPU-accelerated fade, no repaint).
3. Wrap the scroll handler's state update in `requestAnimationFrame` so the toggle aligns with a frame.