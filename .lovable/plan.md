## Problem

When you swap an image via Visual Edits, fine line weights disappear. The uploaded file is being re-encoded/compressed somewhere in the pipeline (the current `page-06-new.png` is actually a JPEG at 1920×866, not the original PNG you uploaded), which destroys thin 1px strokes.

## Plan

When you perform a Visual Edit that changes an image source, copy the uploaded file into the project **byte-for-byte** with no re-encoding, no resizing, and no format conversion:

1. Keep the uploaded file's original extension and bytes. If you upload a `.png`, save it as `.png`; if `.jpg`, save as `.jpg`. Do not rename a JPEG to `.png` (that's what's happening now and it confuses tooling).
2. Update the import in the route file to point to the new filename so the extension matches the real format.
3. Do not run any image optimization, Pillow re-save, or format normalization step on Visual-Edit replacements.

Concretely, on the next Visual Edit image swap on `/lava` (Fig 01) and the matching `/` TOC thumbnail:
- Copy the upload to `src/assets/portfolio/page-06-new.<originalExt>` and `src/assets/portfolio/toc-02.<originalExt>` using raw copy only.
- If the extension changes, update `src/routes/lava.tsx` line 3 and `src/routes/index.tsx` line 4 imports accordingly.
- No PIL, no `imagemagick`, no `cwebp`, no resizing.

## Note on display

Browsers can still resample on render. To guarantee crisp lines at any zoom, the `<img>` for figures should keep `image-rendering: auto` (default) — this plan does not change CSS, just the file pipeline. If you later still see softness at small display sizes, the fix is a higher-resolution source, not re-encoding.
