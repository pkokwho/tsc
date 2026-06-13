<div align="center">

<img src="assets/logo.svg" alt="TSC Logo" width="120" />

# TSC AI Prompt Studio

**Modern AI Prompt Generator · Optimizer · Template Library**

Enter your creative idea in any language, and instantly generate professional prompts for Midjourney, Flux, Video AI, and all image generation models

[Live Demo](https://pkokwho.github.io/tsc/) · [Report Bug](https://github.com/pkokwho/tsc/issues) · [Request Feature](https://github.com/pkokwho/tsc/issues/new?template=feature_request.md) · [中文](README.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-brightgreen.svg)](https://pkokwho.github.io/tsc/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](CONTRIBUTING.md)

</div>

## Demo

<p align="center">
  <img src="assets/dark-theme.png" alt="TSC AI Prompt Studio dark theme screenshot" width="48%" />
  <img src="assets/light-theme.png" alt="TSC AI Prompt Studio light theme screenshot" width="48%" />
</p>

<details>
<summary>View demo GIF (about 45MB)</summary>

<p align="center">
  <img src="assets/demo.gif" alt="TSC AI Prompt Studio Demo" width="100%" />
</p>

</details>

## Features

<table>
<tr>
<td width="50%">

### 🎨 Prompt Generator
- Multi-Model — Universal / Midjourney / Flux / Video AI / SeaDance 2.0
- 12 Art Styles — Photorealistic, Cyberpunk, Anime, Oil Painting, etc.
- Adjustable Params — Aspect ratio, quality, stylize intensity
- Export — Copy / TXT / Markdown download

</td>
<td width="50%">

### ⚡ Prompt Optimizer
- Smart Enhancement — Simple description → Professional prompt
- Multi-Model — ChatGPT / MJ / Flux / Video / SeaDance 2.0 optimized versions
- Before & After — Original vs enhanced comparison
- History — Auto-save with recall and clear

</td>
</tr>
<tr>
<td width="50%">

### 📚 Template Library
- 9 Categories — SEO / Blog / YouTube / Coding / Study / Marketing / MJ / Flux / SeaDance
- One-Click Insert — Click to use, auto-fill into generator
- Bilingual — Each template available in Chinese & English
- Growing — More templates added regularly

</td>
<td width="50%">

### 📊 Quality Score
- 4 Dimensions — Clarity / Context / Specificity / Structure
- 0-100 Score — Quantified prompt quality
- Suggestions — Targeted improvement directions
- Real-time — Scored instantly on generation

</td>
</tr>
</table>

### General
- **Bilingual** — Chinese / English with auto browser language detection
- **Dark & Light Theme** — Toggle with one click, preference saved locally
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Single File** — Zero dependencies, deploy anywhere
- **SEO & Social** — Open Graph, Twitter Card, JSON-LD structured data
- **Local-first** — User input is never uploaded; runtime network access is limited to GitHub star count

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/pkokwho/tsc.git
   ```
2. Open `index.html` in your browser — that's it!

No dependencies to install. No build step required.

## Deployment

### GitHub Pages

1. Fork or push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to `master` branch, root directory
4. Your site will be live at `https://<username>.github.io/tsc/`

### Other Platforms

`index.html` is a complete single-file application that can be deployed to any static hosting service:
- Vercel / Netlify / Cloudflare Pages
- Any web server
- Open locally in a browser

## Tech Stack

- Vanilla HTML / CSS / JavaScript
- CSS Custom Properties for theming
- No frameworks, no build tools, no dependencies

## Project Structure

```
tsc/
├── .github/
│   ├── ISSUE_TEMPLATE/    # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md
├── assets/                # Logo, screenshots, and static assets
│   ├── logo.svg           # SVG Logo
│   ├── demo.gif           # Demo animation
│   ├── dark-theme.png     # Dark theme screenshot
│   └── light-theme.png    # Light theme screenshot
├── index.html             # Complete single-file application
├── CHANGELOG.md           # Changelog
├── CODE_OF_CONDUCT.md     # Code of Conduct
├── CONTRIBUTING.md        # Contribution guide
├── LICENSE                # MIT License
├── README.md              # Chinese documentation
├── README_EN.md           # English documentation
├── SECURITY.md            # Security policy
└── SUPPORT.md             # Support channels
```

## Roadmap

- [ ] AI-powered prompt auto-completion
- [ ] Prompt favorites / bookmark system
- [ ] More template categories (DALL-E, Stable Diffusion, Sora)
- [ ] Prompt version diff view
- [ ] Custom user templates
- [ ] PWA offline support
- [ ] More languages (Japanese, Korean)

## Releases

| Version | Date | Description |
|---------|------|-------------|
| [v3.1.1] | 2026-06-13 | Stability polish, docs sync, safe rendering |
| [v3.1.0] | 2026-06-05 | SeaDance 2.0 support |
| [v3.0.0] | 2026-06-05 | Template Library, Quality Score, Export features |
| [v2.0.0] | 2026-06-03 | Bilingual system, theme toggle, SEO, open source standards |
| [v1.0.0] | 2026-06-03 | Initial release — Generator, Optimizer |

See [CHANGELOG.md](CHANGELOG.md) for details.

## Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) for details.

## Code of Conduct

This project adopts the [Contributor Covenant](CODE_OF_CONDUCT.md) as its code of conduct. By participating, you are expected to uphold this code.

## License

[MIT](LICENSE) © TSC AI Prompt Studio
