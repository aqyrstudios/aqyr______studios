# AQYR Studios — Coming Soon

## Files
- index.html: the complete website, including embedded logo, CSS and JavaScript. This is the only required website file.
- .nojekyll: tells GitHub Pages to serve the static files without Jekyll processing (optional).
- README.md: these instructions (optional).

## Publish on GitHub Pages
1. Extract this ZIP. Do not upload the ZIP itself.
2. In your GitHub repository select Add file > Upload files.
3. Upload index.html into the repository root, replacing the old index.html. You may also upload .nojekyll and README.md. Commit the changes.
4. Go to Settings > Pages.
5. Under Build and deployment, choose Deploy from a branch.
6. Choose main (or your actual default branch), / (root), and Save.
7. When deployment completes, use the Visit site link shown in Pages settings.

If Pages already publishes from your main branch and root, replacing index.html is sufficient. If your repository uses an existing custom Actions deployment, switch the Pages source to the branch option above for these instructions.

The final upload should not be nested inside another folder:
index.html
.nojekyll
README.md

## Preview
Double-click index.html to preview locally. No installation, build command, dependencies, or separate image files are required.

## Latest design
Monochrome logo and background. Cursor movement reveals the original warm grey-beige background (#AEA898) and orange logo. Smooth reveal radius: 60px desktop / 48px mobile. Long tapering trail: 950ms. Reduced-motion preferences disable the lingering trail. Touch and drag also reveal colour.

## Editing
All content and styling is in index.html. Find REVEAL_RADIUS, MOBILE_RADIUS and TRAIL_DURATION to adjust the effect. The logo is embedded as a PNG derived from the supplied image.

Do not add a CNAME file unless you are configuring an actual custom domain. If the repository already has a working CNAME file, keep it.
