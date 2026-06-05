# UCWS Project Searcher

> English by default. The demo has an EN / 中文 language switch.

Companion project for LaunchLens. It builds a searchable UCWS Singapore Hackathon 2026 index from project records, official repository documents, local official snapshot files, and commit history. The online demo helps judges, organizers, and agents find evidence across sources instead of opening many pages manually.

## Online Links

- GitHub repository: https://github.com/wangsiyi7/ucws-project-aggregator
- GitHub Pages demo: https://wangsiyi7.github.io/ucws-project-aggregator/
- Local demo: http://127.0.0.1:8082/

## Sources

- Official UCWS repository: https://github.com/EpicConnectorAI/UCWS-SINGAPORE-HACKATHON-2026
- UCWS event page: https://evol.epicconnector.ai/events/ucws-singapore-hackathon---2026-cxgy
- UCWS Project Wall: https://evol.epicconnector.ai/events/ucws-singapore-hackathon---2026-cxgy/project-wall
- LaunchLens repository: https://github.com/wangsiyi7/launchlens
- LaunchLens demo: https://wangsiyi7.github.io/launchlens/

## What This Repository Adds

- A normalized `data/project-index.json` generated from the official UCWS archive, LaunchLens dynamic-wall snapshot, official documents, project snapshot files, and commit history.
- A static searcher demo for judges and organizers to search projects, resources, and commits from one UI.
- A norms document for evidence, token safety, attribution, and project taxonomy.
- A skill file that lets Codex or another agent repeat the aggregation and search workflow.

## Run Locally

```powershell
npm.cmd run build
npm.cmd test
npm.cmd run serve
```

Open:

```text
http://127.0.0.1:8082/
```

## Data Contract

The generated index is intentionally simple:

```text
data/project-index.json
  sources             Official repo, LaunchLens, event, and aggregator links
  norms               Evidence fields, sync rules, and taxonomy
  stats               Counts for projects, resources, commits, repos, demos, and searchable records
  projectLinks        Compact link list for quick enumeration
  projects            Normalized full records for search and review
  resources           Official documents and local official project snapshot files
  commits             Official snapshot and aggregator repository commit records
  searchRecords       Unified project/resource/commit records used by the demo searcher
```

The dynamic UCWS wall still requires LaunchLens to run with `EPIC_TOKEN`. This project never stores tokens and only consumes LaunchLens output after it has been safely normalized.

## Publish To GitHub

If the GitHub repository does not exist yet, create it with either GitHub web UI or a token:

```powershell
$env:GITHUB_TOKEN="YOUR_TOKEN"
npm.cmd run publish:github
```

The repository includes `.github/workflows/pages.yml`, so the static demo deploys through GitHub Pages after the first push.

## Interop With LaunchLens

LaunchLens remains the primary builder and judging workspace. This project is the companion search index:

- LaunchLens pulls authenticated Project Wall data into `launchlens/data/ucws-project-wall.json`.
- This project builds `data/project-index.json` from that snapshot, the official UCWS repo archive, official resources, and commit history.
- The demo links back to LaunchLens for deeper project judging, repo scanning, and AI-assisted synthesis.

See [docs/INTEROP.md](docs/INTEROP.md) and [docs/UCWS_PROJECT_NORMS.md](docs/UCWS_PROJECT_NORMS.md).

## 中文说明

UCWS Project Searcher 是 LaunchLens 的配套线上项目。它会聚合 UCWS 官方 GitHub 归档、LaunchLens 的动态项目墙快照、官方资料、项目快照文件、commit 历史、证据规范和 Codex Skill，并提供一个默认英文、可切换中文的评委检索 demo。

线上目标：

- GitHub 仓库: https://github.com/wangsiyi7/ucws-project-aggregator
- GitHub Pages Demo: https://wangsiyi7.github.io/ucws-project-aggregator/
- 本地 Demo: http://127.0.0.1:8082/

动态项目墙仍需要先在 LaunchLens 中配置 `EPIC_TOKEN` 并运行 `npm.cmd run sync:ucws`。本项目不会保存 token。
