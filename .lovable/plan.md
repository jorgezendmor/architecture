## Goal

Make the skill-square indicators visually extend (stretch vertically) down to the bottom edge of the about section, which is the line that divides this content from what's below.

## Changes (single file: `src/routes/about.tsx`)

### Desktop (md and up) — both columns
- Both the left (sky / blue squares) and right (ink / black-bg with blue squares) Skills blocks should grow so their three rows of squares span vertically from just under the "Skills" heading down to the bottom of the section.
- Implementation: make each `<section>` a flex column (`md:flex md:flex-col`), let the Skills container be the last child with `md:flex-1 md:flex md:flex-col`, and distribute the 3 square rows evenly with `md:justify-between` (or `md:space-y-*` set to `auto`). Row height stays the same; the gap between rows expands.

### Mobile — only the right (ink) column extends
- The left column's skills list stays as-is (compact, rows close together) because on mobile the skill name + squares sit on one line inside the normal text flow.
- Only the right (ink) column's squares block — currently `hidden md:block` — needs no mobile change since it's hidden on mobile. The user's note about "only the black would extend down" on mobile refers to the ink section's overall bottom edge already aligning with the divider, which it does. No mobile-specific layout change is needed for the squares.

### What stays the same
- Fill counts (Photoshop 6, Illustrator 9, Rhinoceros 9).
- Colors, square sizes, borders, fonts, copy.
- Row component min-height and all other sections.

## Technical notes
- Add `md:flex md:flex-col` to both `<section>` wrappers.
- Wrap the existing Skills `<div>` (in each section) with `md:flex-1 md:flex md:flex-col md:justify-between` so the 3 rows distribute across remaining vertical space.
- On the left section, keep the mobile rendering (inline name + squares per `<li>`) unchanged — only apply the flex-grow behavior at `md:` and up.
