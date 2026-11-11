# Findings Detail — miguelstael.dev Portfolio

## F-001 — Vite dev server vulnerabilities (HIGH) — FIXED
- **Source:** `npm audit` — vite 8.0.0
- **Advisories:** GHSA-4w7w-66w2-5vf9 (path traversal in .map handling), GHSA-v2wj-q39q-566r (fs.deny bypass), GHSA-p9ff-h696-f583 (arbitrary file read via WebSocket), GHSA-9jrq-w75r-8gcw (cross-origin script via middleware), GHSA-rq7h-c2jc-7f22 (files outside fs.allow), GHSA-fx2h-pf6j-xcff (fs.deny bypass on Windows)
- **Impact:** Local dev server abuse. Production `dist/` build is unaffected.
- **Fix:** `npm install vite@latest` → 8.3.8
- **Evidence:** `npm audit` before/after; `npm run build` succeeds with vite 8.3.8

## F-002 — Zod memory exhaustion (HIGH) — FIXED
- **Source:** `npm audit` — zod 4.3.6
- **Advisory:** GHSA-mrhx-c7xc-m3w5
- **Impact:** Oversized constrained collections can exhaust memory. Note: zod is **not imported anywhere in src/** (grep returned no hits) — it is a transitive dependency, so direct impact is nil. Kept patched regardless.
- **Fix:** `npm install zod@latest` → 4.13.0

## F-003 — launch-editor vulnerabilities (MODERATE) — FIXED
- **Source:** `npm audit` — launch-editor
- **Advisories:** GHSA-v6wh-96g9-6wx3 (NTLMv2 hash disclosure via UNC), GHSA-698v-4r3x-3vcv (escapeCmdArgs % escaping), GHSA-r825-w8mm-5pxw (editor CLI flag misinterpretation), GHSA-587h-7wmj-h5pm (fs.existsSync bypass on Windows)
- **Impact:** Dev-only (Vite editor integration). Not reachable from production build.
- **Fix:** resolved by `npm audit fix` (transitive)

## F-004 — Unvalidated JSON.parse on localStorage (LOW) — FIXED
- **Source:** `src/components/AccessibilityMenu.tsx:21`
- **Impact:** A corrupt `accessibility_settings` value would throw an uncaught exception on load, breaking the page. No DOM injection risk — only typed primitives are read, and the source is same-origin.
- **Fix:** try/catch around `JSON.parse`, per-field `typeof` guards (boolean checks, numeric range 0.8–2), `removeItem` on corrupt data, and try/catch around all `localStorage.setItem` writes.

## F-005 — External links missing rel="noopener" (LOW) — FIXED
- **Source:** `src/App.tsx` — 6 `<a target="_blank" rel="noreferrer">` occurrences
- **Impact:** Without `noopener`, the opened page can access `window.opener` and navigate the parent tab.
- **Fix:** All 6 changed to `rel="noopener noreferrer"`.

## F-006 — Remaining @typescript-eslint transitive vulns (NEEDS VALIDATION) — OPEN
- **Source:** `npm audit` after fixes
- **Packages:** `@typescript-eslint/parser` 6.16.0–8.72.2, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/utils`, `@typescript-eslint/typescript-estree`, `@typescript-eslint/type-utils`, `typescript-eslint <=8.72.2`
- **Why needs_validation:** These are dev-only (eslint toolchain), not shipped to production. Clearing them requires `npm audit fix --force`, which is a breaking change (major version bumps in the eslint ecosystem). No sandbox was available to test the upgrade safely.
- **Recommendation:** Run `npm audit fix --force` in a separate branch and re-run the build + lint to confirm nothing breaks.

## Rejected
None.

## Out of scope
- No auth, sessions, tokens, cookies, forms, or backend code exist.
- No user-generated content, comments, or analytics scripts.
- GitHub Pages serves over HTTPS by default.