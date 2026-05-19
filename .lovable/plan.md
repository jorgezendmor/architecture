## Goal
Make the sky (light blue) and ink (black) background colors of the About page extend all the way down to the footer's top border line — eliminating the white gap currently between the colored sections and the footer ("Portfolio · email · name").

## Cause
`SiteFooter` in `src/routes/__root.tsx` uses `mt-24` (96px top margin), which creates a white strip below the About page's colored sections.

## Change (single file: `src/routes/about.tsx`)
- Add `-mb-24` to the `<main>` element on the About page. This negative bottom margin cancels the footer's `mt-24` only on this page, pulling the footer's top border flush against the bottom of the sky/ink sections so the backgrounds extend down to that dividing line.

No changes to the global footer (other pages keep their gap), no changes to skills layout, copy, colors, or anything else.
