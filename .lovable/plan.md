Replace the Travelers Retreat thumbnail (project 03) on the index page with the uploaded `staggered_section.svg`.

Steps:
1. Copy `user-uploads://staggered_section.svg` to `src/assets/portfolio/toc-03-new.svg`.
2. In `src/routes/index.tsx`, update the `toc3` import to point to the new file.

No other pages or logic change.