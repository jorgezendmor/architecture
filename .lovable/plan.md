# Fix About page mobile layout

Two issues on the mobile (sky / blue) section of `/about`:

1. The "About Me" paragraph sits too close to the "Contacts" heading because every `Row` uses a fixed `min-h-[180px]` that doesn't account for the paragraph's wrapped height on narrow screens.
2. In the Skills list, each row's label and its 10-square level indicator stack vertically on mobile, making it unclear which row of squares belongs to which skill.

## Changes (single file: `src/routes/about.tsx`)

### 1. Even vertical spacing on mobile
- Replace the fixed `min-h-[180px]` on `Row` with responsive spacing:
  - Mobile: no fixed min-height; use generous `mb-12` between rows so each block breathes evenly.
  - Desktop (`md:`): keep current `min-h-[180px]` behavior so the two columns stay aligned.
- Result: "About Me" paragraph no longer crowds the "Contacts" heading on mobile.

### 2. Skills row alignment on mobile
- Currently the label + squares share `grid-cols-[1fr_auto]`, but the squares container is `hidden md:hidden`-style logic that pushes them to a new visual line at narrow widths.
- Update each skill `<li>` so on mobile the skill name and its 10-square row sit on the **same horizontal line**:
  - Use `flex items-center justify-between gap-3` (or keep the 2-col grid) and ensure the squares stay inline at all widths.
  - Reduce square size slightly on mobile (`h-3 w-3`) so all 10 fit next to the label without wrapping at 360–414px viewports.
- Remove the duplicate desktop-only squares block in the right (ink) column on mobile — it already only renders on `md:` so no change needed there; the mobile squares come from the left column inline with each label.

## Out of scope
- No changes to the desktop layout, colors, fonts, or copy.
- No changes to the ink (right) section beyond what's required to keep desktop alignment intact.

After approval I'll apply the edits and verify at the current mobile viewport.
