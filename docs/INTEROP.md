# Interop With LaunchLens And UCWS Repositories

This companion project is designed to sit beside `launchlens` in the workspace:

```text
UCWS 2026/
  _tmp_ucws_official_repo/      Official UCWS archive mirror
  launchlens/                   Builder and judge workspace
  ucws-project-aggregator/      Companion index, demo, norms, and skill
```

## Data Flow

1. The official UCWS repository contributes archived project folders under `projects/`.
2. LaunchLens runs authenticated Project Wall sync and writes `data/ucws-project-wall.json`.
3. This project runs `npm.cmd run build`.
4. `data/project-index.json` becomes the shared, judge-friendly project index.
5. The demo reads `data/project-index.json` and links back to LaunchLens for deeper work.

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

## Publish Pattern

The static demo is published with GitHub Pages at:

```text
https://wangsiyi7.github.io/ucws-project-aggregator/
```

Until that repository exists, the local demo URL is:

```text
http://127.0.0.1:8082/
```
