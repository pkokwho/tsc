# Changelog

All notable changes to TSC AI Prompt Studio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.1.0] - 2026-06-05

### Added

- SeaDance 2.0 (ByteDance) video generation model support
- SeaDance 2.0 dedicated prompt engine with cinematic shot types, camera movements, lighting, mood, physics, and audio sync
- SeaDance 2.0 optimizer with professional video prompt structure
- SeaDance 2.0 template category with 3 bilingual templates (Cinematic Short, Character Consistency, One-Take Shot)
- SeaDance 2.0 style mappings for all 12 art styles

## [3.0.0] - 2026-06-05

### Added

- Prompt Template Library with 8 categories (SEO, Blog Writing, YouTube Script, Coding Assistant, Study Assistant, Marketing Copy, Midjourney, Flux)
- One-click template insertion into Generator textarea
- Bilingual templates (Chinese & English) for all categories
- Prompt Quality Score with 4 metrics: Clarity, Context, Specificity, Structure
- 0-100 quality score with improvement suggestions
- Export features: Copy, Download TXT, Download Markdown
- SVG Logo (assets/logo.svg)
- Banner image (assets/banner.png)
- README feature cards layout
- Roadmap section in README
- Release history table in README

### Changed

- Tab navigation now supports 3 tabs: Generator, Optimizer, Templates
- Prompt cards now show 3 export buttons instead of single copy button
- Both READMEs redesigned with logo, banner, feature cards, roadmap, and release sections

## [2.0.0] - 2026-06-03

### Added

- Chinese / English bilingual system with auto browser language detection
- Language toggle button in navigation bar
- Dark / Light theme toggle with localStorage persistence
- Theme toggle button in navigation bar
- SEO meta tags (description, keywords, robots, canonical)
- Open Graph meta tags
- Twitter Card meta tags
- JSON-LD structured data
- Mobile responsiveness optimization (min-height 44px, font-size 16px for iOS)
- Comprehensive code comments throughout
- README_EN.md (English documentation)
- CONTRIBUTING.md (contribution guide)
- MIT LICENSE
- Universal prompt generator for all image models
- 12 art styles with full i18n support
- CODE_OF_CONDUCT.md (Contributor Covenant v2.0)
- SECURITY.md (security policy and vulnerability reporting)
- SUPPORT.md (support channels)
- CHANGELOG.md (this file)
- .github/ISSUE_TEMPLATE/ (bug report, feature request, question)
- .github/PULL_REQUEST_TEMPLATE.md
- .github/ISSUE_TEMPLATE/config.yml (issue template config)
- .gitignore
- README badges (MIT License, GitHub Pages, PRs Welcome)

### Changed

- Rebranded from "PromptForge" to "TSC AI Prompt Studio"
- Navigation layout updated to include action buttons (language/theme)
- All UI text now managed through LOCALES object
- Select dropdowns now dynamically populated from locale data
- Copy fallback improved with hidden textarea approach
- README.md enhanced with centered header, badges, and multi-platform deployment guide
- CONTRIBUTING.md enhanced with Conventional Commits, testing checklist, and style guide

## [1.0.0] - 2026-06-03

### Added

- Initial release
- Midjourney prompt generation
- Flux prompt generation
- Video AI prompt generation
- Apple-style dark UI with glassmorphism effects
- Animated background orbs and grid
- 12 art styles (Photorealistic, Cyberpunk, Anime, Oil Painting, Watercolor, Minimalist, Sci-Fi, Fantasy, Dark Gothic, Vintage Film, 3D Render, Pixel Art)
- Adjustable parameters (aspect ratio, quality, stylize intensity)
- One-click copy to clipboard
- Responsive design
- Single-file deployment
- Ctrl+Enter keyboard shortcut
- Toast notifications
