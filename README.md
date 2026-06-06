# Deepak Vishal Rajan — Portfolio

A single-page personal portfolio built with **plain HTML, CSS, and vanilla JS** — no
frameworks, no build step. Designed to be hosted as a static site on **GitHub Pages**.

## Files

| File | Purpose |
|------|---------|
| `index.html` | All page content and structure |
| `style.css` | Dark theme, layout, responsive rules, animations |
| `script.js` | Footer year, sticky-nav state, scroll-reveal |
| `assets/` | Your resume PDF and project screenshot go here |

## Before you publish — drop in your assets

Two placeholders need real files. Both are flagged with `PLACEHOLDER` comments in
`index.html`:

1. **Resume PDF** — save it as `assets/Deepak-Vishal-Rajan-Resume.pdf`
   (or change the `href` on the Resume button in the Hero to match your filename).
2. **Project screenshot** — save it as `assets/insightagent-screenshot.png`, then
   replace the `.project__placeholder` block in the Featured Project section with:
   ```html
   <img src="assets/insightagent-screenshot.png"
        alt="InsightAgent interface showing a natural-language query, generated SQL, and a chart" />
   ```

## Preview locally

No build needed. Either open `index.html` directly in a browser, or serve it:

```bash
# from the project folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages

This site is meant to live at **https://rdeepakvishal.github.io/**. For a user site at
that root URL, the repository **must** be named `rdeepakvishal.github.io`.

### 1. Create the repository
On GitHub, create a new public repo named exactly:

```
rdeepakvishal.github.io
```

(Leave it empty — no README/license — so the push below is clean.)

### 2. Push these files

```bash
cd "path/to/portfolio"
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/rdeepakvishal/rdeepakvishal.github.io.git
git push -u origin main
```

### 3. Turn on Pages
In the repo: **Settings → Pages → Build and deployment**
- **Source:** *Deploy from a branch*
- **Branch:** `main`, folder `/ (root)` → **Save**

Wait ~1 minute, then visit **https://rdeepakvishal.github.io/**. Pushes to `main`
auto-redeploy.

> **Project site instead?** If you'd rather host it under an existing repo (e.g.
> `github.com/rdeepakvishal/portfolio`), it lives at
> `https://rdeepakvishal.github.io/portfolio/` and all the relative links here still work.

## Custom domain (optional)
Add a `CNAME` file containing your domain (e.g. `deepakvishal.com`), configure DNS, and set
the domain under **Settings → Pages**.
