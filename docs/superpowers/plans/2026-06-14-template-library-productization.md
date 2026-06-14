# Template Library Productization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the template library from a static list into a reusable local-first prompt workflow with placeholder filling, favorites, global search, and shareable template links.

**Architecture:** Keep the single-file app. Extend the existing template rendering functions with derived template entries, localStorage-backed favorites, hash-based template routing, and a client-side placeholder composer. Reuse `escapeHTML`, safe storage helpers, existing toast notifications, and i18n structure.

**Tech Stack:** Native HTML, CSS, JavaScript, `localStorage`, URL hash, Clipboard API.

---

### Task 1: Template Navigation And Search

**Files:**
- Modify: `index.html`

- [ ] Add `All` and `Favorites` category buttons before existing template categories.
- [ ] Change default template category to `all`.
- [ ] Update search placeholder copy to describe global/current search behavior.
- [ ] Implement `getTemplateEntries()` so rendering can operate on all categories, one category, or favorites.

### Task 2: Placeholder Composer

**Files:**
- Modify: `index.html`

- [ ] Add a hidden composer panel in the template section.
- [ ] Parse placeholders with `/\[([^\]]+)\]/g`.
- [ ] Render one input per unique placeholder.
- [ ] Update a live preview as users type.
- [ ] Add actions to insert into generator, copy composed prompt, and close.

### Task 3: Template Favorites

**Files:**
- Modify: `index.html`

- [ ] Add `TEMPLATE_FAVORITES_KEY`.
- [ ] Implement `getTemplateFavorites`, `saveTemplateFavorites`, `toggleTemplateFavorite`, and `isTemplateFavorite`.
- [ ] Add favorite buttons to template cards.
- [ ] Make the favorites category show saved templates and a localized empty state.

### Task 4: Shareable Template Links

**Files:**
- Modify: `index.html`

- [ ] Add `copyTemplateLink(cat, index)`.
- [ ] Add `openTemplateFromHash()` for `#template=cat:index`.
- [ ] Add share buttons to template cards.
- [ ] Make shared links open the template composer in the template tab.

### Task 5: Docs And Verification

**Files:**
- Modify: `README.md`
- Modify: `README_EN.md`
- Modify: `CHANGELOG.md`
- Modify: `.trae/documents/AI提示词生成器-PRD.md`
- Modify: `.trae/documents/AI提示词生成器-技术架构.md`

- [ ] Document placeholder filling, favorites, and share links.
- [ ] Run inline script syntax parsing.
- [ ] Confirm no duplicate `generateSeedancePrompt`.
- [ ] Confirm new template functions and i18n keys exist.
- [ ] Run `git diff --check`.

