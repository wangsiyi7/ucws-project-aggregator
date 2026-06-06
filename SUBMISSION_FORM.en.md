# UCWS Project Wall Submission - English

## Project Name

ucws-project-aggregator

## Track

Skill / Workflow

## Tagline

A source-bounded UCWS project searcher and reusable Agent skill for judging, evidence review, and bilingual submission support.

## Short Description

ucws-project-aggregator is a companion search and skill layer for UCWS Singapore Hackathon 2026. It builds a normalized index from official UCWS resources, local official snapshots, LaunchLens Project Wall data, and commit history, then exposes a static bilingual demo that judges and follow-up Agents can search quickly.

## Long Description

The project turns scattered hackathon evidence into a durable retrieval workflow. Instead of copying official content into a new product, ucws-project-aggregator keeps source boundaries visible: official archive records, local official snapshots, dynamic Project Wall records, aggregator documents, and commit history remain labeled separately in `data/project-index.json`.

The online demo lets reviewers search projects, resources, commits, submission forms, norms, and skill metadata from one interface. It also generates review briefs and Agent handoff prompts so later Agents can continue the work without losing attribution, token-safety rules, or evidence gaps.

This makes the project useful beyond a single UCWS submission. The same structure can support future hackathons, demo days, accelerator cohorts, and open-source project walls that need searchable evidence, bilingual submission copy, and clear AI-agent operating rules.

## Demo URL

https://wangsiyi7.github.io/ucws-project-aggregator/

## GitHub Repository

https://github.com/wangsiyi7/ucws-project-aggregator

## Related LaunchLens Project

- Repository: https://github.com/wangsiyi7/launchlens
- Demo: https://wangsiyi7.github.io/launchlens/

## Official Reference Source

https://github.com/EpicConnectorAI/UCWS-SINGAPORE-HACKATHON-2026

## Core Features

- Normalized `data/project-index.json` with projects, resources, commits, submission-form records, and skill metadata.
- Static bilingual search demo at `/ucws-project-aggregator/`.
- Codex skill at `skills/ucws-project-aggregation/SKILL.md`.
- Agent handoff prompt generation for follow-up review agents.
- Evidence norms that separate official sources, local snapshots, dynamic wall data, and aggregator-generated materials.
- Bilingual Project Wall copy in English and Chinese.

## Tech Stack

HTML, CSS, JavaScript, Node.js, Git, GitHub Pages, Markdown, JSON, Codex skill metadata.

## Why It Is A Skill

The most reusable part of the project is not the static page alone. It is the repeatable workflow: refresh sources, preserve source boundaries, generate a searchable index, inspect evidence gaps, produce bilingual submission material, and hand off context to another Agent. That workflow is encoded as a Codex skill so it can be reused and improved over time.

## Anti-Copy / Attribution Position

ucws-project-aggregator is complementary to the official UCWS repository. It does not claim ownership of official resources or other teams' submissions. It indexes, labels, links, and summarizes source records so judges and Agents can find the right evidence faster while keeping attribution visible.

## Future Roadmap

- Add scheduled Project Wall refresh through LaunchLens once authenticated sync is available.
- Expand the Agent handoff format for more judging dimensions.
- Add more source adapters for future hackathons and project walls.
- Keep the skill as the long-term reusable layer while the demo remains a public reference implementation.
