(function () {
  const LANGUAGE_KEY = "ucws-project-aggregator.language";
  const strings = {
    en: {
      "brand.eyebrow": "UCWS Singapore 2026",
      "brand.title": "Project Searcher",
      "link.aggregatorRepo": "Skill Repo",
      "link.official": "Official UCWS Repo",
      "link.launchlensRepo": "LaunchLens Repo",
      "link.launchlensDemo": "LaunchLens Demo",
      "hero.eyebrow": "Companion Skill Index",
      "hero.title": "Search projects, resources, commits, and agent-ready skill context.",
      "hero.body":
        "This demo reads a normalized UCWS search index generated from the official archive, LaunchLens Project Wall snapshot, official resource documents, submission forms, skill metadata, and commit history. It helps judges and agents find evidence without mixing private tokens into the data layer.",
      "status.loading": "Loading search index...",
      "status.ready": "Search index ready",
      "status.generated": "Generated",
      "status.official": "Official",
      "status.launchlens": "LaunchLens",
      "status.skillDemo": "Skill demo",
      "status.openArchive": "UCWS GitHub archive",
      "status.openDemo": "open demo",
      "placeholder.search": "Search project, repo, skill, submission forms, docs, commits...",
      "filter.allRecords": "All records",
      "filter.projects": "Projects",
      "filter.resources": "Resources and skill docs",
      "filter.commits": "Commit history",
      "filter.allCategories": "All categories",
      "filter.allEvidence": "All evidence",
      "filter.hasRepo": "Has repo",
      "filter.hasDemo": "Has demo",
      "filter.gaps": "Evidence gaps",
      "button.brief": "Build Review Brief",
      "button.agent": "Build Agent Handoff",
      "index.eyebrow": "Search Index",
      "index.title": "Projects, resources, and commits",
      "assist.eyebrow": "Judge Assist",
      "assist.title": "Evidence and agent brief",
      "assist.empty": "Filter records, then build a review brief.",
      "resource.norms": "Aggregation Norms",
      "resource.interop": "Interop Notes",
      "resource.agentHandoff": "Agent Handoff",
      "resource.skill": "UCWS Skill",
      "resource.submissionEn": "Submission Form EN",
      "resource.submissionZh": "Submission Form 中文",
      "resource.json": "Project Index JSON",
      "stat.projects": "Projects",
      "stat.resources": "Resources",
      "stat.commits": "Commits",
      "stat.searchable": "Searchable",
      "stat.repos": "Repos",
      "stat.demos": "Demos",
      "source.officialWall": "Official + Wall",
      "source.official": "Official",
      "source.snapshot": "Official snapshot",
      "source.wall": "Wall",
      "source.aggregator": "Aggregator skill repo",
      "source.indexed": "Indexed",
      "type.project": "Project",
      "type.resource": "Resource",
      "type.commit": "Commit",
      "evidence.repo": "Repo",
      "evidence.demo": "Demo",
      "evidence.screens": "Screens",
      "evidence.team": "Team",
      "evidence.summary": "Summary",
      "label.projectWall": "Project wall",
      "label.officialArchive": "Official archive",
      "label.trackUnknown": "Track unknown",
      "label.open": "Open",
      "label.path": "Path",
      "label.source": "Source",
      "label.commit": "Commit",
      "label.author": "Author",
      "empty.records": "No records match the current filters.",
      "empty.summary": "No summary available yet.",
      "empty.links": "No public links yet",
      "count.records": "{count} records",
      "brief.title": "UCWS Project Searcher Review Brief",
      "brief.generated": "Generated from {count} filtered record(s).",
      "brief.spread": "Record spread:",
      "brief.projects": "Projects",
      "brief.resources": "Official resources",
      "brief.commits": "Commits",
      "brief.gaps": "Evidence gaps:",
      "brief.missingRepo": "Missing repo evidence",
      "brief.missingDemo": "Missing demo evidence",
      "brief.none": "none",
      "brief.judgePass": "Suggested judge pass:",
      "brief.start": "Start with project records that have both repo and demo evidence.",
      "brief.resourcePass": "Use official resource records to answer event, security, and submission-policy questions.",
      "brief.commitPass": "Use commit history records to trace what changed and when.",
      "brief.launchlens": "Open LaunchLens for deeper scoring, repo scanning, and AI synthesis.",
      "agent.title": "UCWS Project Searcher Agent Handoff",
      "agent.generated": "Generated from the live search index.",
      "agent.prompt": "Suggested prompt:",
      "agent.readIndex": "Read data/project-index.json before summarizing projects.",
      "agent.useSkill": "Use the UCWS skill for source-bounded refresh, review, and bilingual submission work.",
      "agent.forms": "Use the English and Chinese submission forms for Project Wall copy.",
      "agent.formsLabel": "Submission forms:",
      "agent.boundary": "Treat official UCWS content as cited reference material; do not copy unsupported or private content.",
      "agent.launchlens": "Use LaunchLens for deeper scoring, repo scanning, and AI synthesis.",
      "error.load": "Could not load data/project-index.json",
      "error.build": "Run npm.cmd run build, then reload the demo.",
    },
    zh: {
      "brand.eyebrow": "UCWS 新加坡 2026",
      "brand.title": "项目检索器",
      "link.aggregatorRepo": "Skill 仓库",
      "link.official": "UCWS 官方仓库",
      "link.launchlensRepo": "LaunchLens 仓库",
      "link.launchlensDemo": "LaunchLens Demo",
      "hero.eyebrow": "配套 Skill 索引",
      "hero.title": "检索项目、资料、commit 和可交接给 Agent 的 skill 上下文。",
      "hero.body":
        "这个 demo 读取由 UCWS 官方归档、LaunchLens 项目墙快照、官方资料文档、提交表单、skill 元数据和 commit 历史生成的标准化检索索引，帮助评委和 Agent 查找证据，同时避免把私密 token 混入数据层。",
      "status.loading": "正在载入检索索引...",
      "status.ready": "检索索引已就绪",
      "status.generated": "生成时间",
      "status.official": "官方来源",
      "status.launchlens": "LaunchLens",
      "status.skillDemo": "Skill Demo",
      "status.openArchive": "UCWS GitHub 归档",
      "status.openDemo": "打开 demo",
      "placeholder.search": "搜索项目、仓库、skill、提交表单、文档、commit...",
      "filter.allRecords": "全部记录",
      "filter.projects": "项目",
      "filter.resources": "资料和 Skill 文档",
      "filter.commits": "Commit 历史",
      "filter.allCategories": "全部分类",
      "filter.allEvidence": "全部证据",
      "filter.hasRepo": "有仓库",
      "filter.hasDemo": "有 Demo",
      "filter.gaps": "证据缺口",
      "button.brief": "生成评审摘要",
      "button.agent": "生成 Agent 交接",
      "index.eyebrow": "检索索引",
      "index.title": "项目、资料和 commit",
      "assist.eyebrow": "评委辅助",
      "assist.title": "证据与 Agent 摘要",
      "assist.empty": "先筛选记录，再生成评审摘要。",
      "resource.norms": "聚合规范",
      "resource.interop": "互操作说明",
      "resource.agentHandoff": "Agent 交接",
      "resource.skill": "UCWS Skill",
      "resource.submissionEn": "英文提交表单",
      "resource.submissionZh": "中文提交表单",
      "resource.json": "项目索引 JSON",
      "stat.projects": "项目",
      "stat.resources": "资料",
      "stat.commits": "Commit",
      "stat.searchable": "可检索",
      "stat.repos": "仓库",
      "stat.demos": "Demo",
      "source.officialWall": "官方 + 项目墙",
      "source.official": "官方归档",
      "source.snapshot": "官方快照",
      "source.wall": "项目墙",
      "source.aggregator": "聚合器 Skill 仓库",
      "source.indexed": "已索引",
      "type.project": "项目",
      "type.resource": "资料",
      "type.commit": "Commit",
      "evidence.repo": "仓库",
      "evidence.demo": "Demo",
      "evidence.screens": "截图",
      "evidence.team": "团队",
      "evidence.summary": "摘要",
      "label.projectWall": "项目墙",
      "label.officialArchive": "官方归档",
      "label.trackUnknown": "赛道未知",
      "label.open": "打开",
      "label.path": "路径",
      "label.source": "来源",
      "label.commit": "提交",
      "label.author": "作者",
      "empty.records": "当前筛选条件下没有记录。",
      "empty.summary": "暂时没有摘要。",
      "empty.links": "暂无公开链接",
      "count.records": "{count} 条记录",
      "brief.title": "UCWS 项目检索器评审摘要",
      "brief.generated": "基于 {count} 条筛选记录生成。",
      "brief.spread": "记录分布：",
      "brief.projects": "项目",
      "brief.resources": "官方资料",
      "brief.commits": "Commit",
      "brief.gaps": "证据缺口：",
      "brief.missingRepo": "缺少仓库证据",
      "brief.missingDemo": "缺少 Demo 证据",
      "brief.none": "无",
      "brief.judgePass": "建议评审路径：",
      "brief.start": "优先查看同时具备仓库和 Demo 证据的项目记录。",
      "brief.resourcePass": "用官方资料记录回答活动、安全、提交规范等问题。",
      "brief.commitPass": "用 commit 历史追踪变更内容和时间。",
      "brief.launchlens": "打开 LaunchLens 做更深入的评分、仓库扫描和 AI 梳理。",
      "agent.title": "UCWS 项目检索器 Agent 交接",
      "agent.generated": "基于当前线上检索索引生成。",
      "agent.prompt": "建议提示词：",
      "agent.readIndex": "先读取 data/project-index.json，再总结项目。",
      "agent.useSkill": "使用 UCWS skill 完成有来源边界的刷新、评审和双语提交材料整理。",
      "agent.forms": "使用英文和中文提交表单作为 Project Wall 文案。",
      "agent.formsLabel": "提交表单：",
      "agent.boundary": "把 UCWS 官方内容当作带引用的参考资料，不复制无依据或私密内容。",
      "agent.launchlens": "使用 LaunchLens 做更深入的评分、仓库扫描和 AI 梳理。",
      "error.load": "无法读取 data/project-index.json",
      "error.build": "请先运行 npm.cmd run build，然后刷新 demo。",
    },
  };

  const state = {
    index: null,
    query: "",
    scope: "all",
    category: "all",
    evidence: "all",
    language: localStorage.getItem(LANGUAGE_KEY) === "zh" ? "zh" : "en",
  };

  const refs = {
    statusPanel: document.getElementById("statusPanel"),
    statsGrid: document.getElementById("statsGrid"),
    searchInput: document.getElementById("searchInput"),
    scopeSelect: document.getElementById("scopeSelect"),
    categorySelect: document.getElementById("categorySelect"),
    evidenceSelect: document.getElementById("evidenceSelect"),
    briefButton: document.getElementById("briefButton"),
    agentPromptButton: document.getElementById("agentPromptButton"),
    resultCount: document.getElementById("resultCount"),
    projectList: document.getElementById("projectList"),
    briefOutput: document.getElementById("briefOutput"),
    langEnBtn: document.getElementById("langEnBtn"),
    langZhBtn: document.getElementById("langZhBtn"),
  };

  function t(key, vars = {}) {
    const template = strings[state.language][key] || strings.en[key] || key;
    return Object.entries(vars).reduce(
      (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
      template,
    );
  }

  function html(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function recordSourceLabel(source) {
    if (source === "official-repo") return t("source.official");
    if (source === "official-local-snapshot") return t("source.snapshot");
    if (source === "dynamic-wall") return t("source.wall");
    if (source === "aggregator-repo") return t("source.aggregator");
    if (source?.includes("official-repo") && source?.includes("dynamic-wall")) return t("source.officialWall");
    return source || t("source.indexed");
  }

  function typeLabel(type) {
    return t(`type.${type}`) || type;
  }

  function allRecords() {
    if (state.index?.searchRecords?.length) return state.index.searchRecords;
    return (state.index?.projects || []).map((project) => ({
      id: project.id,
      type: "project",
      source: project.sourceKinds?.join(" + "),
      title: project.name,
      summary: project.summary,
      url: project.repoUrl || project.demoUrl,
      tags: [project.track, project.category].filter(Boolean),
      searchText: project.searchText,
    }));
  }

  function projectById(id) {
    return (state.index?.projects || []).find((project) => project.id === id);
  }

  function resourceById(id) {
    return (state.index?.resources || []).find((resource) => resource.id === id);
  }

  function commitById(id) {
    return (state.index?.commits || []).find((commit) => commit.id === id);
  }

  function filteredRecords() {
    const query = state.query.trim().toLowerCase();
    return allRecords().filter((record) => {
      if (state.scope !== "all" && record.type !== state.scope) return false;
      if (query && !(record.searchText || "").includes(query)) return false;

      if (record.type === "project") {
        const project = projectById(record.id);
        const matchesCategory = state.category === "all" || project?.category === state.category;
        const signals = project?.evidence || {};
        const hasGap = !signals.hasRepo || !signals.hasDemo || !signals.hasScreenshots || !signals.hasTeam;
        const matchesEvidence =
          state.evidence === "all" ||
          (state.evidence === "repo" && signals.hasRepo) ||
          (state.evidence === "demo" && signals.hasDemo) ||
          (state.evidence === "gaps" && hasGap);
        return matchesCategory && matchesEvidence;
      }

      return state.category === "all" && state.evidence === "all";
    });
  }

  function applyLanguage() {
    document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
      node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
    });
    refs.langEnBtn.classList.toggle("active", state.language === "en");
    refs.langZhBtn.classList.toggle("active", state.language === "zh");
    refs.langEnBtn.setAttribute("aria-pressed", String(state.language === "en"));
    refs.langZhBtn.setAttribute("aria-pressed", String(state.language === "zh"));
  }

  function renderStats() {
    const stats = state.index?.stats || {};
    const items = [
      [t("stat.projects"), stats.projects || 0],
      [t("stat.resources"), stats.resources || 0],
      [t("stat.commits"), (stats.officialCommits || 0) + (stats.aggregatorCommits || 0)],
      [t("stat.searchable"), stats.searchableRecords || allRecords().length],
      [t("stat.repos"), stats.repos || 0],
      [t("stat.demos"), stats.demos || 0],
    ];
    refs.statsGrid.innerHTML = items
      .map(([label, value]) => `<div class="stat"><strong>${html(value)}</strong><span>${html(label)}</span></div>`)
      .join("");
  }

  function renderCategoryOptions() {
    const categories = state.index?.categories || [];
    refs.categorySelect.innerHTML = [
      `<option value="all">${html(t("filter.allCategories"))}</option>`,
      ...categories.map((category) => `<option value="${html(category)}">${html(category)}</option>`),
    ].join("");
    refs.categorySelect.value = state.category;
  }

  function evidencePills(project) {
    const signals = project?.evidence || {};
    const items = [
      [t("evidence.repo"), signals.hasRepo],
      [t("evidence.demo"), signals.hasDemo],
      [t("evidence.screens"), signals.hasScreenshots],
      [t("evidence.team"), signals.hasTeam],
      [t("evidence.summary"), signals.hasSummary],
    ];
    return items
      .map(([label, ready]) => `<span class="evidence ${ready ? "ready" : "gap"}">${html(label)}</span>`)
      .join("");
  }

  function recordTags(record) {
    return (record.tags || [])
      .filter(Boolean)
      .slice(0, 8)
      .map((tag) => `<span>${html(tag)}</span>`)
      .join("");
  }

  function renderProjectRecord(record) {
    const project = projectById(record.id);
    if (!project) return "";
    const links = [
      project.repoUrl && `<a href="${html(project.repoUrl)}">${html(t("evidence.repo"))}</a>`,
      project.demoUrl && `<a href="${html(project.demoUrl)}">${html(t("evidence.demo"))}</a>`,
      project.projectWallUrl && `<a href="${html(project.projectWallUrl)}">${html(t("label.projectWall"))}</a>`,
    ]
      .filter(Boolean)
      .join("");
    return `
      <article class="project-card result-card">
        <div class="project-head">
          <div>
            <p class="eyebrow">${html(typeLabel(record.type))} / ${html(recordSourceLabel(record.source))}</p>
            <h4>${html(project.name)}</h4>
          </div>
          <span class="score">${html(project.readinessScore || 0)}</span>
        </div>
        <p class="tagline">${html(project.tagline || project.summary || t("empty.summary"))}</p>
        <div class="meta-row">
          <span>${html(project.category || typeLabel(record.type))}</span>
          <span>${html(project.track || t("label.trackUnknown"))}</span>
          ${project.officialSnapshotPath ? `<span>${html(project.officialSnapshotPath)}</span>` : ""}
        </div>
        <div class="evidence-row">${evidencePills(project)}</div>
        <div class="link-row">${links || `<span class="muted">${html(t("empty.links"))}</span>`}</div>
      </article>
    `;
  }

  function renderResourceRecord(record) {
    const resource = resourceById(record.id) || record;
    const headings = (resource.headings || []).slice(0, 6);
    return `
      <article class="project-card result-card">
        <div class="project-head">
          <div>
            <p class="eyebrow">${html(typeLabel("resource"))} / ${html(recordSourceLabel(resource.source))}</p>
            <h4>${html(resource.title)}</h4>
          </div>
        </div>
        <p class="tagline">${html(resource.summary || t("empty.summary"))}</p>
        <div class="meta-row">
          <span>${html(resource.kind || typeLabel("resource"))}</span>
          <span>${html(t("label.path"))}: ${html(resource.path || "")}</span>
        </div>
        <div class="radar-tags">${headings.map((heading) => `<span>${html(heading)}</span>`).join("")}</div>
        <div class="link-row">${
          resource.url ? `<a href="${html(resource.url)}">${html(t("label.open"))}</a>` : `<span class="muted">${html(recordSourceLabel(resource.source))}</span>`
        }</div>
      </article>
    `;
  }

  function renderCommitRecord(record) {
    const commit = commitById(record.id) || record;
    return `
      <article class="project-card result-card">
        <div class="project-head">
          <div>
            <p class="eyebrow">${html(typeLabel("commit"))} / ${html(recordSourceLabel(commit.source))}</p>
            <h4>${html(commit.title)}</h4>
          </div>
          <span class="score">${html(commit.shortHash || "")}</span>
        </div>
        <p class="tagline">${html(commit.summary || "")}</p>
        <div class="meta-row">
          <span>${html(t("label.author"))}: ${html(commit.author || "")}</span>
          <span>${html(commit.date || "")}</span>
        </div>
        <div class="link-row">${
          commit.url ? `<a href="${html(commit.url)}">${html(t("label.commit"))}</a>` : `<span class="muted">${html(t("source.snapshot"))}</span>`
        }</div>
      </article>
    `;
  }

  function renderRecords() {
    const records = filteredRecords();
    refs.resultCount.textContent = t("count.records", { count: records.length });
    if (!records.length) {
      refs.projectList.innerHTML = `<div class="empty">${html(t("empty.records"))}</div>`;
      return;
    }

    refs.projectList.innerHTML = records
      .map((record) => {
        if (record.type === "project") return renderProjectRecord(record);
        if (record.type === "resource") return renderResourceRecord(record);
        if (record.type === "commit") return renderCommitRecord(record);
        return `
          <article class="project-card result-card">
            <p class="eyebrow">${html(typeLabel(record.type))}</p>
            <h4>${html(record.title)}</h4>
            <p class="tagline">${html(record.summary || "")}</p>
            <div class="radar-tags">${recordTags(record)}</div>
          </article>
        `;
      })
      .join("");
  }

  function buildBrief() {
    const records = filteredRecords();
    const projects = records.filter((record) => record.type === "project").map((record) => projectById(record.id)).filter(Boolean);
    const missingRepo = projects.filter((project) => !project.evidence?.hasRepo).map((project) => project.name);
    const missingDemo = projects.filter((project) => !project.evidence?.hasDemo).map((project) => project.name);
    const spread = records.reduce((acc, record) => {
      acc[record.type] = (acc[record.type] || 0) + 1;
      return acc;
    }, {});
    const lines = [
      t("brief.title"),
      t("brief.generated", { count: records.length }),
      "",
      t("brief.spread"),
      `- ${t("brief.projects")}: ${spread.project || 0}`,
      `- ${t("brief.resources")}: ${spread.resource || 0}`,
      `- ${t("brief.commits")}: ${spread.commit || 0}`,
      "",
      t("brief.gaps"),
      `- ${t("brief.missingRepo")}: ${missingRepo.length ? missingRepo.join(", ") : t("brief.none")}`,
      `- ${t("brief.missingDemo")}: ${missingDemo.length ? missingDemo.join(", ") : t("brief.none")}`,
      "",
      t("brief.judgePass"),
      `- ${t("brief.start")}`,
      `- ${t("brief.resourcePass")}`,
      `- ${t("brief.commitPass")}`,
      `- ${t("brief.launchlens")}`,
    ];
    refs.briefOutput.textContent = lines.join("\n");
  }

  function buildAgentHandoff() {
    const sources = state.index?.sources || {};
    const stats = state.index?.stats || {};
    const forms = state.index?.submissionForms || [];
    const skill = state.index?.skill || {};
    const demoUrl = sources.aggregator?.demoUrl || "https://wangsiyi7.github.io/ucws-project-aggregator/";
    const repoUrl = sources.aggregator?.repoUrl || "https://github.com/wangsiyi7/ucws-project-aggregator";
    const launchlensDemo = sources.launchlens?.demoUrl || "https://wangsiyi7.github.io/launchlens/";
    const formLines = forms.length
      ? forms.map((form) => `- ${form.language}: ${form.path}`).join("\n")
      : "- SUBMISSION_FORM.en.md\n- SUBMISSION_FORM.zh-CN.md";
    const lines = [
      t("agent.title"),
      t("agent.generated"),
      "",
      `${t("stat.projects")}: ${stats.projects || 0}`,
      `${t("stat.resources")}: ${stats.resources || 0}`,
      `${t("stat.searchable")}: ${stats.searchableRecords || allRecords().length}`,
      "",
      t("agent.prompt"),
      "```text",
      "Use $ucws-project-aggregation in ucws-project-aggregator.",
      t("agent.readIndex"),
      `${t("agent.useSkill")} ${skill.path || "skills/ucws-project-aggregation/SKILL.md"}`,
      t("agent.forms"),
      t("agent.boundary"),
      t("agent.launchlens"),
      "```",
      "",
      `Demo: ${demoUrl}`,
      `Repository: ${repoUrl}`,
      `LaunchLens: ${launchlensDemo}`,
      "",
      t("agent.formsLabel"),
      formLines,
      "",
      `Skill: ${skill.path || "skills/ucws-project-aggregation/SKILL.md"}`,
      `Agent handoff: ${sources.aggregator?.agentHandoffPath || "docs/AGENT_HANDOFF.md"}`,
    ];
    refs.briefOutput.textContent = lines.join("\n");
  }

  function renderStatus() {
    const sources = state.index?.sources || {};
    const generatedAt = state.index?.generatedAt ? new Date(state.index.generatedAt).toLocaleString() : "unknown";
    refs.statusPanel.innerHTML = `
      <strong>${html(t("status.ready"))}</strong>
      <span>${html(t("status.generated"))}: ${html(generatedAt)}</span>
      <span>${html(t("status.official"))}: <a href="${html(sources.officialRepo?.url || "#")}">${html(t("status.openArchive"))}</a></span>
      <span>${html(t("status.launchlens"))}: <a href="${html(sources.launchlens?.demoUrl || "#")}">${html(t("status.openDemo"))}</a></span>
      <span>${html(t("status.skillDemo"))}: <a href="${html(sources.aggregator?.demoUrl || "#")}">ucws-project-aggregator/</a></span>
    `;
  }

  function render() {
    applyLanguage();
    renderStatus();
    renderStats();
    renderCategoryOptions();
    refs.scopeSelect.value = state.scope;
    refs.evidenceSelect.value = state.evidence;
    renderRecords();
  }

  async function load() {
    try {
      const response = await fetch("data/project-index.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      state.index = await response.json();
      render();
    } catch (error) {
      refs.statusPanel.textContent = `${t("error.load")}: ${error.message}`;
      refs.projectList.innerHTML = `<div class="empty">${html(t("error.build"))}</div>`;
    }
  }

  refs.searchInput.addEventListener("input", () => {
    state.query = refs.searchInput.value;
    renderRecords();
  });
  refs.scopeSelect.addEventListener("change", () => {
    state.scope = refs.scopeSelect.value;
    renderRecords();
  });
  refs.categorySelect.addEventListener("change", () => {
    state.category = refs.categorySelect.value;
    renderRecords();
  });
  refs.evidenceSelect.addEventListener("change", () => {
    state.evidence = refs.evidenceSelect.value;
    renderRecords();
  });
  refs.briefButton.addEventListener("click", buildBrief);
  refs.agentPromptButton.addEventListener("click", buildAgentHandoff);
  refs.langEnBtn.addEventListener("click", () => {
    state.language = "en";
    localStorage.setItem(LANGUAGE_KEY, state.language);
    render();
  });
  refs.langZhBtn.addEventListener("click", () => {
    state.language = "zh";
    localStorage.setItem(LANGUAGE_KEY, state.language);
    render();
  });

  applyLanguage();
  load();
})();
