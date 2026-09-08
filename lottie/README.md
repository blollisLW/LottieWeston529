# Lottie landing page — V2

This is the second-pass version of the Lottie TVS landing page for:

`https://www.lollis.me/lottie/`

## What's different from V1

V1 displayed the complete poster as one responsive image.

V2 is a hybrid native-web composition:

- the **Lottie wordmark is live HTML/CSS**, so it scales separately from the artwork;
- the **stars and accent rays are native SVG/CSS** and have subtle independent motion;
- the **sky/clouds/frame are CSS**, not baked into the image;
- the original illustration is cropped to a **scene layer** anchored to the bottom;
- phones intentionally **zoom/crop the scene** instead of shrinking the whole poster;
- short landscape screens use a separate two-column layout;
- desktop pointer movement creates very subtle parallax;
- a tap/click gives the stars a quick "cheer" animation;
- `prefers-reduced-motion` is respected.

The Trojan and Lottie still live together inside one raster scene in this build. That preserves the original illustration exactly while giving the page much more responsive behavior. A future V3 could extract those two subjects into transparent independent foreground layers.

## Deploy

Replace the existing files in your `/lottie/` directory with the contents of this folder:

```text
lottie/
├── index.html
├── styles.css
├── script.js
├── site.webmanifest
└── assets/
    ├── scene.webp
    ├── scene.jpg
    ├── poster.webp
    ├── social-preview.jpg
    └── favicon.svg
```

All paths are relative, so this works correctly when hosted at `/lottie/` on GitHub Pages.

No build step, npm package, framework, or server-side code is required.
