# UCWS Project Wall 提交表单 - 中文

## 项目名称

ucws-project-aggregator

## 赛道

Skill / Workflow

## 一句话介绍

一个有来源边界的 UCWS 项目检索器，以及可长期复用的 Agent Skill，用于评审、证据检查和中英文提交材料整理。

## 简短描述

ucws-project-aggregator 是 UCWS Singapore Hackathon 2026 的配套检索与 skill 层。它会从 UCWS 官方资料、本地官方快照、LaunchLens 项目墙数据和 commit 历史中生成标准化索引，并提供一个默认英文、可切换中文的静态 demo，方便评委和后续 Agent 快速检索。

## 详细描述

这个项目的目标不是复制官方仓库内容，而是把分散的黑客松证据变成一个可维护的检索工作流。`data/project-index.json` 会保留清晰的来源标签：官方归档、本地官方快照、动态项目墙、聚合器文档和 commit 历史都会分开标记。

线上 demo 支持在一个界面里搜索项目、资料、commit、提交表单、规范和 skill 元数据。它还能生成评审摘要和 Agent handoff prompt，让后续 Agent 在继续工作时不会丢失归因、token 安全规则和证据缺口。

因此它不只是一次性的 UCWS 辅助页面，也可以演化为长期的黑客松项目墙 skill：未来的 demo day、加速器、开源项目展示和内部项目评审，都可以复用这套“来源检索 + 证据规范 + 双语提交 + Agent 交接”的流程。

## Demo URL

https://wangsiyi7.github.io/ucws-project-aggregator/

## GitHub 仓库

https://github.com/wangsiyi7/ucws-project-aggregator

## 关联 LaunchLens 项目

- 仓库：https://github.com/wangsiyi7/launchlens
- Demo：https://wangsiyi7.github.io/launchlens/

## 官方参考来源

https://github.com/EpicConnectorAI/UCWS-SINGAPORE-HACKATHON-2026

## 核心功能

- 生成标准化 `data/project-index.json`，包含项目、资料、commit、提交表单记录和 skill 元数据。
- 发布静态双语检索 demo，路径保持为 `/ucws-project-aggregator/`。
- 提供 Codex skill：`skills/ucws-project-aggregation/SKILL.md`。
- 生成后续 Agent 可直接使用的 handoff prompt。
- 通过证据规范区分官方来源、本地快照、动态项目墙和聚合器生成材料。
- 准备中英文 Project Wall 提交材料。

## 技术栈

HTML、CSS、JavaScript、Node.js、Git、GitHub Pages、Markdown、JSON、Codex skill metadata。

## 为什么它是 Skill

这个项目最值得长期复用的部分不是静态页面本身，而是一套工作流：刷新来源、保留来源边界、生成可搜索索引、检查证据缺口、产出双语提交材料，并把上下文交接给下一个 Agent。这个流程被写入 Codex skill，所以可以持续迭代。

## 反抄袭与归因说明

ucws-project-aggregator 是 UCWS 官方仓库的互补检索层，不声明拥有官方资料或其他团队提交内容。它负责索引、标注、链接和摘要，让评委和 Agent 更快找到证据，同时保留清晰归因。

## 后续路线

- 在 LaunchLens 完成认证同步后，加入定时刷新 Project Wall 的流程。
- 扩展 Agent handoff 格式，覆盖更多评审维度。
- 为未来黑客松和项目墙增加更多来源适配器。
- 保持 skill 作为长期可复用层，demo 作为公开参考实现。
