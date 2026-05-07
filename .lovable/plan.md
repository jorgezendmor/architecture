## Goal
Make the portfolio site fully usable on phones — both viewing it on mobile browsers, and optionally letting visitors install it like an app.

## Current state
The site is already responsive in several places (the home page uses `md:` breakpoints, the project pages stack columns on mobile). But on a phone there are real friction points:

1. **Cover page** — `h1` and footer text use very tight horizontal padding (`pl-[12%]`, `pr-[4%]`) and tracking, which crowds on narrow screens.
2. **Table of Contents** — currently `grid-cols-2` on phones with 4 projects in a 2×2 grid; the image boxes are 220px tall, which is fine but the captions get tight.
3. **Project pages** — large images with `max-h-[80vh]` look great on desktop but can render very small on a phone (especially the wide axonometric SVGs). Captions/long descriptions read OK.
4. **About page** — uses a side-by-side row layout that probably needs a stacked mobile version.
5. **Footer** — already stacks via `sm:flex-row`, good.
6. **Viewport meta tag** — need to confirm `<meta name="viewport" content="width=device-width, initial-scale=1">` is in `__root.tsx` so phones don't render a zoomed-out desktop view.

## Plan

### Step 1 — Mobile responsiveness pass (the real fix)
Tune each route for phones at 375–430px width:
- **Cover (`index.tsx`)**: reduce side padding on mobile, scale down `PORTFOLIO` / name tracking, ensure cover fits one screen.
- **Table of Contents**: keep 2 columns on phone but shrink image height (`h-[160px]` mobile → `h-[280px]` desktop) and reduce the `text-3xl` project number on mobile.
- **Project pages (`ProjectPage.tsx`)**: drop `max-h-[80vh]` on mobile (let wide architectural drawings use full width); reduce `px-6 py-16` to `px-4 py-10` on phones; tighten the `120px_1fr` header grid so the title doesn't get squeezed.
- **About page**: stack the Row layout vertically on mobile.
- **Nav arrows**: ensure prev/next labels wrap or truncate gracefully.

### Step 2 — Confirm viewport + sharing works
- Verify the viewport meta tag is present in `__root.tsx` head (add if missing).
- Confirm the published `.lovable.app` URL works on a phone browser — that's all that's needed for "open the site on your phone."

### Step 3 (optional) — Make it installable to the home screen
If you want it to feel like an app icon on the phone:
- Add a simple `manifest.json` with the site name, an icon, and `display: "standalone"`.
- No service worker, no offline mode — just enables "Add to Home Screen" on iOS/Android.

This is lightweight and avoids the complexity (and stale-cache pitfalls) of a full PWA.

## Open questions
A few choices to make before I start:
