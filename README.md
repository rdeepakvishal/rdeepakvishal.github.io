# Deepak Vishal Rajan — Portfolio

My personal portfolio site. **Live at [rdeepakvishal.github.io](https://rdeepakvishal.github.io).**

A single, responsive page built with **plain HTML, CSS, and vanilla JS** — no frameworks,
no build step — hosted as a static site on GitHub Pages.

## Highlights

- Dark, minimal design with a single accent color and subtle scroll-reveal animations
- Sections: Hero, About, the InsightAgent project (with a click-to-zoom screenshot gallery),
  Experience timeline, Skills, Education & Recognition, Shout-outs, and Contact
- Accessible and fast: semantic HTML, keyboard-friendly lightbox, reduced-motion support,
  lazy-loaded images, and zero third-party JavaScript

## Structure

```
index.html      Page content and structure
style.css       Theme, layout, responsive rules, animations
script.js       Footer year, sticky-nav state, scroll-reveal, screenshot lightbox
favicon.svg     "DVR" monogram tab icon
assets/         Headshot, résumé PDF, project screenshots, and company/school logos
```

## Run locally

No build step. Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Deploy

The site auto-deploys via **GitHub Pages** on every push to `main`
(Settings → Pages → Deploy from a branch → `main` / root). Edit the files, commit, and push:

```bash
git add .
git commit -m "Update portfolio"
git push
```
