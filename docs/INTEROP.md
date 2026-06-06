# Interop With LaunchLens And UCWS Repositories

This companion project is designed to sit beside `launchlens` in the workspace:

```text
UCWS 2026/
  _tmp_ucws_official_repo/      Official UCWS archive mirror
  launchlens/                   Builder and judge workspace
  ucws-project-aggregator/      Companion search index, demo, submission forms, norms, and skill
```

## Data Flow

1. The official UCWS repository contributes public root documents and local project snapshot files.
2. The local official mirror contributes commit history for the current official snapshot branch.
3. LaunchLens runs authenticated Project Wall sync and writes `data/ucws-project-wall.json`.
4. This project runs `npm.cmd run build`.
5. This project indexes its own skill, Agent handoff notes, and bilingual submission forms as `aggregator-repo` resources.
6. `data/project-index.json` becomes the shared, judge-friendly and Agent-friendly search index.
7. The demo reads `projects`, `resources`, `commits`, `skill`, `submissionForms`, and `searchRecords` from that JSON and links back to LaunchLens for deeper work.

## Commands

```powershell
cd "C:\Users\35398\Desktop\UCWS 2026\launchlens"
npm.cmd run sync:ucws

cd "C:\Users\35398\Desktop\UCWS 2026\ucws-project-aggregator"
npm.cmd run build
npm.cmd run serve
```

## Repository Links

- Official UCWS archive: https://github.com/EpicConnectorAI/UCWS-SINGAPORE-HACKATHON-2026
- LaunchLens: https://github.com/wangsiyi7/launchlens
- Companion aggregator repository: https://github.com/wangsiyi7/ucws-project-aggregator

## Agent Layer

Use the public demo link as a human-readable view and `data/project-index.json` as the machine-readable entry point. A follow-up Agent should start from:

```text
https://wangsiyi7.github.io/ucws-project-aggregator/
data/project-index.json
skills/ucws-project-aggregation/SKILL.md
docs/AGENT_HANDOFF.md
SUBMISSION_FORM.en.md
SUBMISSION_FORM.zh-CN.md
```

The Agent should treat this repository as a reference/complement layer. It should preserve official source attribution, keep local-only snapshot material distinct, and use LaunchLens for deeper scoring or repo scanning.

## Publish Pattern

The static demo is published with GitHub Pages at:

```text
https://wangsiyi7.github.io/ucws-project-aggregator/
```
The local demo URL is:

```text
http://127.0.0.1:8082/
```
