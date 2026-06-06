# Changelog

All notable UCWS Project Searcher updates should be recorded here before pushing to GitHub and refreshing the public demo.

## 2026-06-06 - Skill-First Submission Package

### Added

- Added copy-ready English and Chinese Project Wall submission forms.
- Added an Agent handoff document for later Codex, Claude Code, or ClaudeCodex review work.
- Added Codex skill interface metadata under `skills/ucws-project-aggregation/agents/`.
- Expanded the generated `data/project-index.json` with source metadata, submission forms, skill metadata, resources, commits, and unified search records.

### Updated

- Reframed the project as UCWS Project Searcher: a source-bounded companion skill and search layer for LaunchLens.
- Updated the public demo with language switching, broader record filters, review brief generation, and Agent handoff generation.
- Updated interop and evidence-norm docs for official-source attribution, token safety, and future handoff flows.
- Corrected `package.json` license metadata to match the MIT license file.
- Tightened mobile hero typography to avoid narrow-screen clipping.

### Verified

- `npm.cmd run build`
- `npm.cmd test`
- Local GitHub Pages demo rendered through Chrome headless desktop and mobile audit screenshots.
