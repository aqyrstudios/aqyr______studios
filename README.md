# AQYR Studios

A self-contained static website. No build tools, dependencies, trackers, or external fonts.

## Preview
Open index.html in your browser.

## Replace the background
Put your photo in assets/hero.jpg. In styles.css change --hero-image from url("assets/hero.svg") to url("assets/hero.jpg"). The included hero.svg is an original geometric architectural illustration, not a photograph or an AQYR project. The two portfolio cards currently reuse the hero image; give .one and .two their own background-image values for separate project photos.

## Before publishing
- Replace the two placeholder project titles and descriptions in index.html.
- Confirm or replace all draft studio copy and service descriptions.
- Set contactEmail in script.js to your actual email. It is intentionally blank, so the page does not send visitors to an unverified address.
- The header mark is a simplified vector interpretation; assets/logo-reference.jpg contains your original supplied logo. Replace the header SVG with your production logo when available.
- The orange #ff8901 is the most frequent orange pixel sampled from the supplied JPEG, not an independently verified brand specification.

## GitHub repository
Upload index.html, styles.css, script.js, .nojekyll, and assets/ to the root of your repository. In the repository Pages settings select deployment from your main branch and root folder. All asset paths are relative for project repositories.

## Interaction
The background starts monochrome. A soft orange colour-blend spotlight follows the pointer; it does not permanently paint the page. Touch devices keep the monochrome presentation. Reduced-motion preferences disable the spotlight and smooth scrolling. Keyboard links have visible focus outlines. No CMS is included: image changes are file replacements in your repository.
