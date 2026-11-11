# Architecture — miguelstael.dev Portfolio

Audit date: 2026-11-11
Target: `D:\Programação\portifolio` (Vite + React 19 SPA, static site)

## 1. High-level architecture

```
browser
  │
  ▼
index.html (static entry, served by Vite dev / GitHub Pages)
  │
  ▼
src/main.tsx → <App/> (React 19, client-only SPA)
  ├─ src/App.tsx              # all sections rendered in one component
  ├─ src/components/Section.tsx    # reusable section wrapper
  ├─ src/components/AccessibilityMenu.tsx  # client-side a11y panel
  ├─ src/hooks/useScrollSpy.ts     # scroll detection
  ├─ src/data/projects.tsx         # static project data
  ├─ src/data/certificates.ts      # static certificate data
  └─ src/assets/                   # Eu.jpeg, logo.png, CertificadoSerratec.png
```

Build output: `dist/` (vite build) → deployed via `gh-pages` to GitHub Pages.
`base: '/portifolio/'` — all asset/PDF URLs are prefixed with `/portifolio/`.

## 2. Trust boundaries

| Boundary | Description |
|----------|-------------|
| Browser ↔ static assets | PDFs served from `/portifolio/certificates/*.pdf`, images from `/portifolio/assets/`. No auth. Public by design. |
| Browser ↔ external links | GitHub, LinkedIn, WhatsApp (`wa.me`), Gmail (`mailto`). Opens in new tab, `rel="noreferrer"`. |
| Browser ↔ localStorage | AccessibilityMenu persists settings (`accessibility_settings`, `theme`). Same-origin only. |
| Browser ↔ Google Fonts | `fonts.googleapis.com` / `fonts.gstatic.com`. Loaded via `<link>`. |
| Dev server ↔ filesystem | Vite dev server (`npm run dev`) — see findings F-001. Only relevant locally, not in production build. |

## 3. Input surfaces

| Surface | Type | Sink | Notes |
|---------|------|------|-------|
| `localStorage.getItem('accessibility_settings')` | Stored client data | `JSON.parse` | **No validation.** If an attacker can write to this key (same-origin, so only JS running on the page), arbitrary JSON is parsed. |
| `localStorage.getItem('theme')` | Stored client data | string compare | Only compared to `'light'`. Low risk. |
| `window.addEventListener('mousemove')` | Event | `setGuidePosition(e.clientY)` | Number from event, used as inline `top` style. Safe. |
| `document.getElementById(id)?.scrollIntoView()` | Anchor clicks | DOM scroll | `id` comes from hardcoded section ids. Safe. |
| `cert.pdfUrl` | Static data | `<a href>` | Values are hardcoded string literals in `certificates.ts`. Safe. |
| `project.links[].url` | Static data | `<a href target="_blank">` | Hardcoded GitHub URLs. Safe. |
| `href="/portifolio/Miguel_Stael_CV.pdf"` | Static | download | Hardcoded. Safe. |
| `npm audit` | Dependency tree | — | See findings F-001, F-002. |

## 4. Data flow

- **No server.** Everything is static. No API calls, no form submissions, no cookies.
- **No user input fields.** No forms, no search boxes, no comment systems.
- **PDFs** are downloaded/opened directly; no content is rendered into the DOM.
- **External links** all use `target="_blank"` + `rel="noreferrer"` (no `noopener` — minor hardening gap, see F-005).

## 5. Dependencies (production)

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.4 | UI |
| react-dom | ^19.2.4 | DOM |

## 6. Dependencies (dev)

| Package | Version | Purpose |
|---------|---------|---------|
| vite | 8.0.0 | build/dev server |
| @vitejs/plugin-react | 6.0.0 | React plugin |
| typescript | ~5.9.3 | types |
| eslint + plugins | 9.39.4 | lint |
| gh-pages | 6.3.0 | deploy |

## 7. Known limitations / out of scope

- No authentication, no sessions, no tokens, no backend code.
- GitHub Pages serves over HTTPS by default.
- No user-generated content, no comments, no analytics scripts.
- Dev server vulnerabilities (Vite path traversal, arbitrary file read) apply only to local `npm run dev`, not the production build.