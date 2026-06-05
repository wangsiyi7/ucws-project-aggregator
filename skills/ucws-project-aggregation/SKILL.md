# UCWS Project Aggregation Skill

Use this skill when Codex needs to aggregate UCWS Singapore Hackathon 2026 project data, update the companion demo, or prepare judge-facing project comparisons.

## Inputs

- Official UCWS repository mirror: `../_tmp_ucws_official_repo`
- LaunchLens repository: `../launchlens`
- Dynamic wall snapshot: `../launchlens/data/ucws-project-wall.json`
- Companion project root: `../ucws-project-aggregator`

## Workflow

1. Check source health:
   - Confirm the official repo path exists.
   - Confirm LaunchLens has `data/ucws-project-wall.json`.
   - If LaunchLens reports `TOKEN_MISSING`, say that authenticated dynamic-wall enumeration still needs `EPIC_TOKEN`.
2. Build the index:
   - Run `npm.cmd run build` in `ucws-project-aggregator`.
   - Inspect `data/project-index.json`.
3. Validate:
   - Run `npm.cmd test`.
   - Confirm project counts, evidence signals, and links.
4. Summarize for reviewers:
   - Group by category and track.
   - List projects missing repo, demo, screenshots, or team context.
   - Do not invent missing evidence.
5. Keep repositories linked:
   - Official archive links should point to the UCWS official GitHub repository.
   - LaunchLens links should point to `https://github.com/wangsiyi7/launchlens` and the live demo.
   - Aggregator demo links should point to the local or published companion demo.

## Output Rules

- Never reveal or store tokens.
- Prefer exact URLs and file paths.
- Distinguish official archive data from dynamic wall data.
- When reporting gaps, use neutral language such as "missing public demo evidence".
- Keep the final summary concise enough for judges to act on quickly.
