# UCWS Project Aggregation Norms

These norms keep the companion searcher useful for judges, organizers, and agent workflows without blurring source boundaries.

## Source Boundaries

- Official archive records come from the UCWS official GitHub repository.
- Official resource records come from public root files such as `README.md`, `RESOURCES.md`, `SECURITY.md`, and `LICENSE`.
- Official local snapshot records come from the local `_tmp_ucws_official_repo` mirror, including project submission files that may be newer than public `main`.
- Commit records come from local Git history for the official mirror and this aggregator repository.
- Dynamic wall records come from LaunchLens output at `../launchlens/data/ucws-project-wall.json`.
- Keep `sourceKinds` on every normalized project so reviewers can distinguish official archive data from dynamic wall data.
- Do not copy private project content unless it is already present in the official archive or authenticated wall snapshot.
- Do not generate public GitHub URLs for local-only official snapshot commits or files.

## Token Safety

- Do not commit `EPIC_TOKEN`, cookies, localStorage exports, or session headers.
- LaunchLens may use `EPIC_TOKEN` locally or as a GitHub Actions secret to fetch the authenticated wall.
- This aggregator consumes only normalized JSON files and should never receive the raw token.

## Evidence Standard

Every project record should be checked against these fields:

- `summary`: enough context for a judge to understand the problem and solution.
- `repoUrl`: a public or judge-accessible GitHub repository.
- `demoUrl`: a working demo, deployed app, video, or hosted artifact.
- `screenshotUrls`: at least one visual proof point.
- `teamMembers`: clear ownership and contact context.

Missing evidence should be marked as a gap. Do not invent missing details.

## Taxonomy

Use a small taxonomy so filters remain useful:

- `AI Agent`: autonomous or LLM-assisted agents, copilots, planners, or reviewers.
- `Application`: end-user products, domain apps, dashboards, or customer tools.
- `Developer Tool`: APIs, SDKs, GitHub utilities, CLIs, repo scanners, or technical infrastructure.
- `Skill / Workflow`: reusable Codex skills, plugins, automation flows, or operating procedures.
- `Project`: fallback when the source evidence is not specific enough.

## Judge-Facing Summary Rules

- Prefer direct facts: demo, repo, track, category, evidence signals, and source links.
- Separate potential from proof.
- Call out missing repo or demo evidence early.
- Keep official archive, local snapshot, dynamic wall, resource, and commit sources distinguishable.
- Use commit records to explain when a project or index changed, not to infer product quality by itself.
- If AI synthesis is used later, provide source facts as input and ask the model not to add unsupported claims.
