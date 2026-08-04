# Kyann Tagle — Portfolio

A playful, blue-toned developer portfolio built around an animated terminal, quick visual project choices, and an interactive career route. The short version always comes first; deeper project notes and credentials stay optional.

## Content model

Portfolio copy and external links live in `src/content/portfolio.js`. Update that single file when projects, tools, credentials, contact details, or the résumé change.

The current résumé asset is `information/TAGLE-CV-2025.pdf`. It is a draft source and can be replaced at the same path without changing the interface.

## Local development

```bash
npm install
npm run dev
```

Before publishing:

```bash
npm run lint
npm run build
```

## Design principles

- Real information is visible without hover.
- Motion adds personality and orientation without blocking reading.
- Mobile sections use normal document scrolling; no draggable canvases capture touch gestures.
- Project cards give the result first, with problem and response notes available on demand.
- Adamson University appears as education context, not the site identity.
- Navigation choices stay visible on desktop and mobile.
