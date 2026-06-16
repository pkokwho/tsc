# Premium Motion Background Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade TSC AI Prompt Studio with a professional, high-end animated background and stronger visual hierarchy while preserving the single-file, zero-dependency GitHub Pages deployment model.

**Architecture:** Keep `index.html` as the runtime entry. Add a fixed canvas layer behind the app and drive motion with a small requestAnimationFrame timeline inspired by Remotion interpolation/easing patterns. CSS remains responsible for layout, theme tokens, reduced-motion fallback, and component polish.

**Tech Stack:** Native HTML, CSS custom properties, vanilla JavaScript, Canvas 2D, localStorage, GitHub Pages.

---

### Task 1: Motion System

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace static orb-only background with a layered motion stage**

Add a `<canvas id="motionCanvas">` inside `.bg-effects` and keep lightweight static layers for reduced-motion users.

- [ ] **Step 2: Add CSS tokens and performance-safe layering**

Use opacity and transform-friendly styling. Keep the canvas fixed, non-interactive, and below the app content. Avoid layout-affecting animation.

- [ ] **Step 3: Implement vanilla JS timeline**

Create `initMotionBackground()` with:
- devicePixelRatio-aware canvas sizing capped at 2x
- particle nodes, connecting lines, focus rings, and slow light sweeps
- theme-aware colors read from `data-theme`
- reduced-motion detection via `matchMedia('(prefers-reduced-motion: reduce)')`
- pause when tab is hidden

### Task 2: Premium UI Polish

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Strengthen hero and workspace hierarchy**

Add a compact hero proof strip and refine card borders/shadows so the first viewport reads as a professional AI studio.

- [ ] **Step 2: Improve card surfaces**

Tune input, results, template, and vault card surfaces with restrained gradients, consistent borders, and visible focus states.

- [ ] **Step 3: Preserve accessibility**

Ensure reduced-motion disables canvas animation and removes non-essential transitions. Keep tab and form keyboard paths intact.

### Task 3: Documentation

**Files:**
- Modify: `README.md`
- Modify: `README_EN.md`
- Modify: `CHANGELOG.md`

- [ ] **Step 1: Document v3.4.0**

Describe the premium motion background, stronger studio layout, and zero-dependency deployment guarantee.

- [ ] **Step 2: Keep README asset behavior unchanged**

Do not reintroduce default 45MB GIF loading. Keep screenshots first and GIF inside `<details>`.

### Task 4: Verification

**Files:**
- Verify: `index.html`

- [ ] **Step 1: Static checks**

Run syntax-oriented checks for duplicate motion init calls, malformed script tags, and changed git status.

- [ ] **Step 2: Local browser checks**

Serve the static page locally. Validate desktop and mobile layouts, dark/light themes, Chinese/English text, generation, optimizer, templates, vault, and browser console errors.

- [ ] **Step 3: Push**

Commit changes and push to both `codex/visible-ui-polish` and `master`, so the live GitHub Pages site updates.
