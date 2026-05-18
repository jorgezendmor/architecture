Update skill levels in `src/routes/about.tsx` so both the mobile (left/sky column) and desktop (right/ink column) square indicators reflect:

- Adobe Photoshop → 6/10
- Adobe Illustrator → 9/10
- Rhinoceros → 9/10

## Changes (single file: `src/routes/about.tsx`)

1. In the mobile skills `<ul>` data array, change levels:
   - `{ name: "Adobe Photoshop", level: 8 }` → `level: 6`
   - `{ name: "Adobe Illustrator", level: 7 }` → `level: 9`
   - `{ name: "Rhinoceros", level: 6 }` → `level: 9`

2. In the desktop (ink-column) squares block, change the array `[8, 7, 6]` → `[6, 9, 9]` so the three rows match in the same order (Photoshop, Illustrator, Rhinoceros).

No other layout, color, or copy changes.