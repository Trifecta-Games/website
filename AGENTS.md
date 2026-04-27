# Trifecta Studios - Website

This repository contains the marketing website for **Trifecta Studios Ltd.**, a game development studio based in Dhaka, Bangladesh. It is deployed via GitHub Pages at `trifectastudios.io`.

## Stack

- **HTML5 / CSS3 / Vanilla JS** - no build tools, npm workflow, or framework
- **Tailwind CSS v3** - loaded via CDN (`https://cdn.tailwindcss.com`)
- **Feather Icons** - loaded via CDN (`https://cdn.jsdelivr.net/npm/feather-icons/`)

## Project Structure

```text
website/
+-- index.html              # Homepage: hero, games, about, services, contact
+-- works.html              # Full game portfolio
+-- careers.html            # Job listings
+-- privacy.html            # Privacy policy
+-- style.css               # Global styles: animations, navbar, cards
+-- script.js               # Interactivity: nav, mobile menu, form
+-- CNAME                   # GitHub Pages custom domain
+-- assets/
    +-- images/
        +-- logo.png
        +-- idle_merchant.png
        +-- mars_dozer.png
        +-- basketball_tycoon.png
```

## Codex Working Notes

- Treat this as a static site. Most changes should be direct edits to HTML, CSS, or `script.js`.
- Keep page structure consistent across pages. When adding a page or shared section, copy the nearest existing navbar/footer pattern first.
- The Tailwind config is inlined in each HTML `<head>` via a `<script>` block. If theme values change, update every page that embeds the config.
- Initialize Feather Icons with `feather.replace()` after the DOM loads when adding icon markup.
- Store site images in `assets/images/` and reference them with that relative path.
- Avoid adding a package manager, build step, or framework unless explicitly requested.
- For local verification, this site can be opened directly in a browser, or served with any simple static file server from the repo root.

## Brand Details

- Primary color: `#6C63FF` purple
- Secondary color: `#FF6584` pink
- Visual style: modern game studio marketing site with bright accents, cards, subtle animation, and responsive layouts

## Games

| Game | Genre | Play Store ID / URL |
|------|-------|---------------------|
| Idle Merchant | Idle / RPG | `com.TrifectaGames.IdleMerchant` |
| Cop Run 3D | Runner | `https://rimonakhter.itch.io/cop-run-3d` |
| Idle Basketball Tycoon | Tycoon | `com.trifectastudios.basketballtycoon` |

## Known Issues

- Contact form is client-side only and currently shows an `alert`; there is no email backend.
- Social media links in the footer point to `#` placeholders.
- Team photo in the About section uses a placeholder URL from `static.photos`.
