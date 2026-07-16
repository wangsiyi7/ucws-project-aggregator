---
name: ucws-project-aggregation
description: Aggregate and maintain source-bounded UCWS Project Wall indexes, official resource snapshots, commit history, bilingual submission fields, and agent-ready review briefs. Use when Codex needs to refresh ucws-project-aggregator, compare UCWS projects, prepare Project Wall copy in English or Chinese, or hand off a long-running hackathon project search workflow.
---

# UCWS Project Aggregation

Use this skill as a long-term companion workflow for UCWS and similar hackathon project walls. The goal is retrieval, normalization, evidence review, and submission support. Do not treat the official UCWS repository as source material to copy wholesale; treat it as a cited reference layer that remains distinct from LaunchLens, dynamic wall data, and this aggregator.

## Workspace Inputs

- Official UCWS mirror: `../_tmp_ucws_official_repo`
- LaunchLens repository: `../launchlens`
- Dynamic wall snapshot: `../launchlens/data/ucws-project-wall.json`
- Aggregator root: `../ucws-project-aggregator`
- Generated search index: `data/project-index.json`
- Bilingual submission copy: `SUBMISSION_FORM.en.md` and `SUBMISSION_FORM.zh-CN.md`

## Core Workflow

1. Check source health.
   - Confirm the official mirror exists.
   - Confirm LaunchLens has `data/ucws-project-wall.json`.
   - If LaunchLens reports `TOKEN_MISSING`, say authenticated dynamic-wall enumeration still needs `EPIC_TOKEN`.
2. Refresh the index.
   - Run `npm.cmd run build` in `ucws-project-aggregator`.
   - Inspect `data/project-index.json`.
   - Confirm `projects`, `resources`, `commits`, `searchRecords`, `skill`, and `submissionForms` are present.
3. Validate the repository.
   - Run `npm.cmd test`.
   - Confirm project counts, resource counts, commit counts, evidence signals, submission-form links, and skill metadata.
4. Synthesize for judges or agents.
   - Group projects by track, category, and evidence readiness.
   - Surface official resource records only as cited context.
   - Surface commit records when the user asks what changed or when it changed.
   - List missing repo, demo, screenshot, team, or summary evidence without inventing details.
5. Prepare submission copy.
   - Use `SUBMISSION_FORM.en.md` for English Project Wall fields.
   - Use `SUBMISSION_FORM.zh-CN.md` for Chinese Project Wall fields.
   - Keep the public project name and URL path as `ucws-project-aggregator`.
6. Publish and link only on request.
   - Do not start recurring automation or automatic GitHub sync.
   - Push to GitHub only after the user explicitly asks for it.
   - Keep LaunchLens linked to the aggregator repo and demo.
   - Keep this aggregator linked back to LaunchLens and the official UCWS archive.

## Source Boundaries

- Official archive data stays marked as `official-repo`.
- Local official snapshot data stays marked as `official-local-snapshot`.
- Dynamic Project Wall data stays marked as `dynamic-wall`.
- Aggregator docs, submission forms, skill files, and commit history stay marked as `aggregator-repo`.
- Do not generate public GitHub URLs for local-only official snapshot files or commits.
- Do not store or reveal `EPIC_TOKEN`, cookies, localStorage exports, or session headers.

## Agent Handoff

When a later Agent needs context, give it this minimal prompt shape:

```text
Use $ucws-project-aggregation in ucws-project-aggregator.
Read data/project-index.json first, then use docs/UCWS_PROJECT_NORMS.md for source boundaries.
Use SUBMISSION_FORM.en.md and SUBMISSION_FORM.zh-CN.md for copy-ready Project Wall fields.
Use LaunchLens only for deeper judging, repo scanning, and AI synthesis.
Do not copy private or unsupported official content; cite source records and report evidence gaps.
```

## Output Rules

- Prefer exact URLs, file paths, source labels, and commit hashes.
- Separate potential from proof.
- Keep official, LaunchLens, wall, local snapshot, and aggregator sources distinguishable.
- Keep summaries short enough for a judge or follow-up Agent to act on quickly.
