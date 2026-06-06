# Agent Handoff

Use this file when another Agent needs to continue UCWS project search, review, or submission work from the public demo link.

## Stable Entry Points

- Repository: https://github.com/wangsiyi7/ucws-project-aggregator
- Demo: https://wangsiyi7.github.io/ucws-project-aggregator/
- Search index: `data/project-index.json`
- Skill: `skills/ucws-project-aggregation/SKILL.md`
- English submission form: `SUBMISSION_FORM.en.md`
- Chinese submission form: `SUBMISSION_FORM.zh-CN.md`
- Source norms: `docs/UCWS_PROJECT_NORMS.md`

## Suggested Agent Prompt

```text
Use $ucws-project-aggregation in ucws-project-aggregator.
Read data/project-index.json before summarizing projects.
Use docs/UCWS_PROJECT_NORMS.md for source boundaries.
Use SUBMISSION_FORM.en.md and SUBMISSION_FORM.zh-CN.md for Project Wall copy.
Treat the official UCWS repository as a cited source, not copied product content.
Report evidence gaps instead of inventing missing repo, demo, screenshot, or team data.
```

## Maintenance Loop

1. Refresh LaunchLens dynamic wall data when authenticated access is available.
2. Run `npm.cmd run build`.
3. Run `npm.cmd test`.
4. Inspect generated `resources`, `commits`, `searchRecords`, `skill`, and `submissionForms`.
5. Push both `main` and `gh-pages` when the public demo changes.

## Boundary Rule

This repository should remain a reference and complement. It can index public official documents, local snapshots, project-wall outputs, and its own skill/submission materials, but it should not blur those sources or repackage unsupported content as original work.
