# Security Audit Report — miguelstael.dev Portfolio

**Date:** 2026-11-11
**Target:** `D:\Programação\portifolio` (Vite + React 19 static SPA)
**Mode:** Single-run, README-driven methodology (Cloudflare security-audit skill)
**Verdicts:** 5 confirmed · 1 needs_validation · 0 rejected

---

## Executive summary

The site is a **static client-side SPA** with no server, no authentication, no user input, and no backend. Its attack surface is genuinely small. The audit found **5 real issues, all of which are now fixed**:

1. **Outdated vulnerable dependencies** (vite 8.0.0, zod 4.3.6, launch-editor) — 20 vulns, 10 of them high severity. Reduced to 7 moderate dev-only after fixes.
2. **Unvalidated `JSON.parse` on `localStorage`** in the accessibility panel — could throw on page load.
3. **External links missing `rel="noopener"`** on 6 anchors.

No XSS, no injection, no auth bypass, no data exfiltration path was found. The remaining 7 moderate findings are dev-only `@typescript-eslint` packages that require a breaking `npm audit fix --force` to clear.

---

## Findings

| ID | Verdict | Severity | Title | Status |
|----|---------|----------|-------|--------|
| F-001 | confirmed | high | Vite dev server path traversal / arbitrary file read | **fixed** |
| F-002 | confirmed | high | Zod memory exhaustion on oversized collections | **fixed** |
| F-003 | confirmed | moderate | launch-editor arbitrary command execution / NTLMv2 | **fixed** |
| F-004 | confirmed | low | Unvalidated JSON.parse on localStorage | **fixed** |
| F-005 | confirmed | low | External links missing rel="noopener" | **fixed** |
| F-006 | needs_validation | — | 7 moderate @typescript-eslint transitive vulns | **open** |

## What was changed

- `package.json` / lockfile: `vite@8.3.8`, `zod@4.13.0` (npm install latest + npm audit fix)
- `src/components/AccessibilityMenu.tsx`: `JSON.parse` now wrapped in try/catch with per-field type guards; corrupt data removed; storage writes wrapped in try/catch
- `src/App.tsx`: all 6 `target="_blank"` anchors now use `rel="noopener noreferrer"`

## Verification

- `npm run build` → success (Vite 8.3.8)
- `npx tsc --noEmit` → clean
- `npm audit` → 7 moderate (dev-only) down from 20 (10 high)

## Recommendations

- Run `npm audit fix --force` or pin `typescript-eslint` to clear the remaining 7 moderate findings (dev-only, no production impact).
- Consider adding a CSP header if this ever gains a backend.
- The site is already in good shape for a static portfolio.