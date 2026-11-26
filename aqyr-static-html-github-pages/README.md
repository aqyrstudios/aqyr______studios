# aqyr studios static website

This is a plain HTML/CSS/JavaScript site ready for GitHub Pages. It does not need Node.js, React, TypeScript, or a build process.

## Publish it with GitHub Pages

1. Create a new repository on [GitHub](https://github.com/new). Choose a name such as `aqyr-studios` and set it to **Public**.
2. On the repository page, click **Add file** → **Upload files**.
3. Drag in the *contents* of this folder — not the containing `aqyr-static-html` folder. `index.html` must appear at the top level of the repository.
4. Click **Commit changes**.
5. Open **Settings** → **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose branch **main** and folder **/(root)**, then click **Save**.
8. GitHub displays the public address once publishing finishes, normally within a few minutes. It will usually look like `https://YOUR-USERNAME.github.io/aqyr-studios/`.

## Included files

- `index.html` — home page
- `portfolio.html`, `who-we-are.html`, `services.html` — additional pages
- `styles.css` — all styling
- `script.js` — mobile navigation and portfolio filter
- `hero-house.png` — the supplied hero photograph
- `404.html` — a friendly missing-page screen
- `.nojekyll` — tells GitHub Pages to serve the files exactly as written

## Editing the site

Edit the text directly in the relevant `.html` file. Replace `hero-house.png` with a new image using the same filename to change the hero photo. After uploading edited files to GitHub and committing them, GitHub Pages updates automatically.

## Optional custom domain

In GitHub, open **Settings** → **Pages** → **Custom domain**, enter your domain, then follow the DNS instructions GitHub gives you. Enable **Enforce HTTPS** once it becomes available.
