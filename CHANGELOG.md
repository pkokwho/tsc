# Changelog

All notable changes to TSC AI Prompt Studio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.5.0] - 2026-06-19

### Added

- Added a professional parameter panel for use case, camera language, composition, lighting, color palette, mood, detail density, and negative prompts
- Expanded the generator from 12 to 24 style presets, including product advertising, cinematic poster, architectural visualization, claymorphism, paper cut art, high fashion, film noir, macro photography, isometric illustration, Bauhaus poster, ukiyo-e, and brand visual
- Added a zero-dependency static regression test for the single-file app's prompt controls and mobile motion budget

### Changed

- Reworked multi-model prompt generation around a shared structured context object so Universal, Midjourney, Flux, Video AI, and SeaDance outputs stay aligned
- Upgraded the optimizer to infer common intents such as portrait, product, video, and architecture before adding camera, lighting, composition, and negative prompt guidance
- Made SeaDance helper selection deterministic from prompt context instead of changing randomly on refresh
- Further reduced mobile scrolling cost by capping the animated canvas around 20fps, lowering mobile node density, and disabling hover movement on coarse pointers

## [3.4.0] - 2026-06-16

### Added

- Added a zero-dependency Canvas motion background with theme-aware particles, connection lines, light sweeps, and focus rings
- Added a documented premium motion implementation plan for the single-file GitHub Pages architecture

### Changed

- Upgraded hero, generator, result, template, quality score, and local vault surfaces with a more professional workspace hierarchy
- Tuned motion behavior for performance by keeping runtime effects in Canvas and avoiding layout-driving animation
- Improved reduced-motion behavior by disabling the animated canvas and keeping a static visual fallback
- Optimized mobile scrolling by reducing canvas density, pausing animation during scroll, debouncing viewport resize, and disabling heavy backdrop blur on small screens

## [3.3.0] - 2026-06-14

### Added

- Added template placeholder detection with a local fill-in composer and live preview
- Added local template favorites backed by `localStorage`
- Added all-template and favorite-template search flows
- Added shareable template links via URL hash routing

### Changed

- Template cards now show category and placeholder-count metadata
- Template library workflow now supports compose, copy, insert, favorite, and share actions

## [3.2.0] - 2026-06-14

### Added

- Added a local prompt vault for saving generated prompts in the browser
- Added prompt vault copy, restore, delete, clear, JSON export, and JSON import actions
- Added template search inside the active template category
- Added an implementation plan record for the local-first v3.2 optimization batch

### Changed

- Rewrote Chinese and English READMEs to remove mojibake and document the zero-cost local-first product direction
- Updated PRD and technical architecture docs for the local prompt vault, JSON backup/restore, template search, and future paid-feature boundary
- Result cards now support saving prompts in addition to copy, TXT, and Markdown export

### Security

- Imported prompt vault items are normalized, deduplicated, capped, and rendered through existing HTML escaping

## [3.1.1] - 2026-06-13

### Changed

- Updated product and architecture planning docs to match the current v3.1 feature set
- Improved README performance by showing static screenshots before the large demo GIF
- Documented local-first runtime behavior and GitHub star count network access
- Polished the workspace UI with capability stats, stronger generator framing, model color accents, and clearer result/template cards

### Fixed

- Removed stale missing banner asset references from documentation and changelog
- Hardened the single-file app against unsafe dynamic rendering paths
- Improved tab accessibility, keyboard navigation, and reduced-motion behavior

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
- README feature cards layout
- Roadmap section in README
- Release history table in README

### Changed

- Tab navigation now supports 3 tabs: Generator, Optimizer, Templates
- Prompt cards now show 3 export buttons instead of single copy button
- Both READMEs redesigned with logo, feature cards, roadmap, and release sections

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
