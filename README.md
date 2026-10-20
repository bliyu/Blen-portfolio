# Blen Abebe — Portfolio

A responsive software development portfolio with a bright, earthy visual identity.

**Live site:** https://bliyu.github.io/Blen-portfolio/

## Editing the site

The public portfolio is plain HTML, CSS, and a small progressive-enhancement script. It has no package installation or build requirement and runs directly on GitHub Pages.

| File | Purpose |
| --- | --- |
| `index.html` | Introduction, selected work, about, experience, skills, contact |
| `assets/styles.css` | Shared design tokens, components, responsive layouts, print styles |
| `assets/site.js` | Mobile navigation, active section, email-copy action, current year |
| `projects/myo.html` | Myo Document Automation case study |
| `projects/farmtracker.html` | FarmTracker case study |
| `projects/microwins.html` | MicroWins team project case study |
| `projects/rogue-paddle.html` | Rogue Paddle team capstone case study |
| `assets/fonts/` | Self-hosted Manrope variable font and its OFL license |
| `assets/social-cover.svg` | Editable source for the social sharing image |
| `assets/social-cover.png` | 1200 × 630 social sharing image |
| `404.html` | GitHub Pages error page |

Update professional details directly in the relevant HTML. The CSS custom properties at the beginning of `assets/styles.css` define the palette:

| Colour | Hex | Use |
| --- | --- | --- |
| Warm cream | `#FBF8F1` | Page background |
| Deep olive | `#28352B` | Primary text |
| Forest green | `#3E5545` | Buttons and supporting accents |
| Terracotta | `#AD492F` | Display type and highlights |
| Soft sage | `#E6EADB` | Project and about surfaces |
| Warm peach | `#F0D9C5` | Featured artwork |
| Golden yellow | `#F4CE82` | Contact action and decorative accents |

## Content and contact

- MyoHealth is presented as a workplace project; employer source code is not linked.
- MicroWins and Rogue Paddle are explicitly identified as team projects.
- MicroWins uses a labelled illustrative interface, not an application screenshot.
- FarmTracker links to its public assessment branch. Its recorded test result comes from that project's documentation, not a new test run.
- Contact buttons open an email application. They do not submit a form or claim to book a meeting.
- The résumé action requests a résumé by email; no résumé file is currently published.
- The legacy `#book` anchor resolves to contact so existing links remain useful.

## Accessibility and performance

The pages include skip navigation, semantic headings, visible keyboard focus, mobile navigation with Escape handling, reduced-motion support, alt text, and image dimensions. Content and navigation remain usable when JavaScript is disabled. The clipboard control is shown only when the browser supports it in a secure context.

The font is self-hosted, with no font-service request at runtime. Below-the-fold images load lazily. The new home page does not load the previous Next.js bundles or require the optional Python backend. The older exported files and optional server remain in the repository for compatibility and reference.

## Deployment

GitHub Pages publishes the repository's `main` branch. `.nojekyll` preserves static asset handling. Keep the `/Blen-portfolio/` canonical URLs in sync if the site is moved.

For local inspection outside a managed environment, serve the repository with any static file server, for example `python -m http.server 8000`. No application server is needed for the public portfolio.

## Verification

The redesign was checked for HTML structure, local links and anchors, image files and dimensions, JavaScript syntax, keyboard-navigation logic, and palette contrast. Source review covered layouts from narrow mobile through desktop breakpoints. Live visual browser testing should be repeated after future design changes; source checks do not replace a rendered browser review.
