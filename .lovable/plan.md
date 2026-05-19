Create a white version of the logo SVG for the favicon so it's visible on dark browser tabs.

Steps:
1. Add `public/favicon.svg` with all `fill="#231f20"` shapes and gradient stops changed to `#ffffff`.
2. Leave `src/assets/logo.svg` (header logo) untouched — still black.
3. Favicon link in `src/routes/__root.tsx` already points to `/favicon.svg`, no change needed.