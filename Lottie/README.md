# Lottie GitHub Page

A drop-in, responsive GitHub Pages landing page for:

**https://www.lollis.me/lottie/**

## What is included

- `index.html` — page markup, SEO, Open Graph and social-sharing metadata
- `styles.css` — responsive full-screen layout, safe-area handling, subtle entrance animation and desktop motion
- `script.js` — tiny optional desktop parallax effect; automatically disabled for touch devices and reduced-motion users
- `assets/lottie-poster.webp` — optimized primary artwork
- `assets/lottie-poster.jpg` — fallback artwork
- `assets/social-preview.jpg` — 1200×630 social-sharing image
- `assets/favicon.svg` — matching blue-star favicon
- `site.webmanifest` — basic install/theme metadata

## Deploy to GitHub Pages

### If `www.lollis.me` already points to an existing GitHub Pages repository

1. Copy this entire folder into the root of that repository.
2. Rename the folder to exactly `lottie` if necessary.
3. Commit and push.
4. The page should then be available at:
   `https://www.lollis.me/lottie/`

Your repository would look roughly like:

```text
repo-root/
├── CNAME
├── ...your existing site files...
└── lottie/
    ├── index.html
    ├── styles.css
    ├── script.js
    ├── site.webmanifest
    └── assets/
```

### Important about `CNAME`

Do **not** add a second `CNAME` file inside `/lottie/`. Keep the existing root-level `CNAME` that already controls `www.lollis.me`.

## Relative paths

All page assets use relative URLs (`./assets/...`), so the page works correctly from the `/lottie/` subdirectory on GitHub Pages.

## Local preview

You can double-click `index.html`, but the most accurate preview is through a tiny local web server. From this folder:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Customize later

The canonical URL and social-sharing URLs are already set to `https://www.lollis.me/lottie/`. If that URL changes, update the corresponding tags in `index.html`.
