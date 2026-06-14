# Local First v3.2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add zero-cost product depth to TSC AI Prompt Studio through a local prompt vault, JSON backup/restore, template search, and documentation alignment.

**Architecture:** Keep the existing single-file static app. Store saved prompts in `localStorage`, expose import/export through client-side JSON files, and reuse existing safe rendering utilities. Documentation states the zero-budget, local-first product direction and future paid-readiness boundary.

**Tech Stack:** Native HTML, CSS, JavaScript, `localStorage`, Blob downloads, FileReader, Markdown docs.

---

### Task 1: Local Prompt Vault UI

**Files:**
- Modify: `index.html`

- [ ] Add a vault section after the quality score container.
- [ ] Add localized labels for save, restore, delete, export, import, clear, empty state, and storage status.
- [ ] Add CSS for vault cards, actions, metadata, and responsive layout.

### Task 2: Vault State And Actions

**Files:**
- Modify: `index.html`

- [ ] Add constants `VAULT_KEY` and `MAX_VAULT_ITEMS`.
- [ ] Track the latest generated prompt cards with `lastGeneratedCards`.
- [ ] Implement `getVault`, `saveVault`, `savePromptToVault`, `deleteVaultItem`, `restoreVaultItem`, `clearVault`, and `renderVault`.
- [ ] Keep all dynamic HTML escaped through `escapeHTML`.

### Task 3: Backup And Restore

**Files:**
- Modify: `index.html`

- [ ] Add a hidden JSON file input.
- [ ] Implement `exportVaultJson` with Blob download.
- [ ] Implement `importVaultJson` with FileReader, JSON validation, item normalization, max-size trimming, and localized toasts.

### Task 4: Template Search

**Files:**
- Modify: `index.html`

- [ ] Add a template search input above categories.
- [ ] Add `templateSearchQuery` state.
- [ ] Filter current category templates by title, preview, and template body.
- [ ] Render a localized empty search state when no template matches.

### Task 5: Documentation

**Files:**
- Modify: `README.md`
- Modify: `README_EN.md`
- Modify: `CHANGELOG.md`
- Modify: `.trae/documents/AI提示词生成器-PRD.md`
- Modify: `.trae/documents/AI提示词生成器-技术架构.md`

- [ ] Rewrite the Chinese README as valid UTF-8 Chinese content.
- [ ] Add v3.2 release notes for local prompt vault, JSON backup/restore, and template search.
- [ ] State the zero-cost local-first constraint and future paid feature boundary.

### Task 6: Verification

**Files:**
- Read: `index.html`

- [ ] Parse all inline scripts with `new Function`.
- [ ] Confirm no duplicate `generateSeedancePrompt` definitions.
- [ ] Confirm vault/search functions and localization keys exist.
- [ ] Run `git diff --check`.
- [ ] Scan docs for obvious mojibake markers.

