# Trifecta Studios — Website

Marketing website for **Trifecta Studios Ltd.**, a game development studio based in Dhaka, Bangladesh.
Deployed via GitHub Pages at `trifectastudios.io`.

## Stack

- **HTML5 / CSS3 / Vanilla JS** — no build tools, no npm, no framework
- **Tailwind CSS v3** — loaded via CDN (`https://cdn.tailwindcss.com`)
- **Feather Icons** — loaded via CDN (`https://cdn.jsdelivr.net/npm/feather-icons/`)

## Project Structure

```
website/
├── index.html              # Homepage (hero, games, about, services, contact)
├── works.html              # Full game portfolio
├── careers.html            # Job listings
├── privacy.html            # Privacy policy
├── style.css               # Global styles (animations, navbar, cards)
├── script.js               # Interactivity (nav, mobile menu, form)
├── CNAME                   # GitHub Pages custom domain
└── assets/
    └── images/
        ├── logo.png
        ├── idle_merchant.png
        ├── mars_dozer.png
        └── basketball_tycoon.png
```

## Key Details

- **Colors**: Primary `#6C63FF` (purple), Secondary `#FF6584` (pink)
- **All pages** share the same navbar/footer pattern — copy from an existing page when adding a new one
- **Tailwind config** is inlined in each HTML `<head>` via a `<script>` block
- **Feather Icons** must be initialized with `feather.replace()` after the DOM loads
- **Images** live in `assets/images/` — always reference them with that path

## Games

| Game | Genre | Play Store ID |
|------|-------|--------------|
| Idle Merchant | Idle / RPG | `com.TrifectaGames.IdleMerchant` |
| Mars Dozer | Simulation | `com.TrifectaGames.MarsDozer` |
| Idle Basketball Tycoon | Tycoon | `com.trifectastudios.basketballtycoon` |

## Known Issues

- Contact form is client-side only (shows `alert`, no email backend)
- Social media links in the footer point to `#` (placeholders)
- Team photo in About section uses a placeholder URL (`static.photos`)
