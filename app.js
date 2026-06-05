(function () {
  const LANGUAGE_KEY = "ucws-project-aggregator.language";
  const strings = {
    en: {
      "brand.eyebrow": "UCWS Singapore 2026",
      "brand.title": "Project Aggregator",
      "link.aggregatorRepo": "Aggregator Repo",
      "link.official": "Official UCWS Repo",
      "link.launchlensRepo": "LaunchLens Repo",
      "link.launchlensDemo": "LaunchLens Demo",
      "hero.eyebrow": "Companion Index",
      "hero.title": "Search project evidence, source links, and reusable judging norms.",
      "hero.body":
        "This demo reads a normalized UCWS project index generated from the official archive and the LaunchLens Project Wall snapshot. It is built to help judges and agents compare evidence without mixing private tokens into the data layer.",
      "status.loading": "Loading project index...",
      "status.ready": "Index ready",
      "status.generated": "Generated",
      "status.official": "Official",
      "status.launchlens": "LaunchLens",
      "status.openArchive": "UCWS GitHub archive",
      "status.openDemo": "open demo",
      "placeholder.search": "Search project, repo, category, stack, evidence...",
      "filter.allCategories": "All categories",
      "filter.allEvidence": "All evidence",
      "filter.hasRepo": "Has repo",
      "filter.hasDemo": "Has demo",
      "filter.gaps": "Evidence gaps",
      "button.brief": "Build Review Brief",
      "index.eyebrow": "Project Index",
      "index.title": "Normalized records",
      "assist.eyebrow": "Judge Assist",
      "assist.title": "Evidence brief",
      "assist.empty": "Filter projects, then build a review brief.",
      "resource.norms": "Aggregation Norms",
      "resource.interop": "Interop Notes",
      "resource.skill": "Codex Skill",
      "resource.json": "Project Index JSON",
      "stat.projects": "Projects",
      "stat.official": "Official",
      "stat.dynamic": "Dynamic",
      "stat.repos": "Repos",
      "stat.demos": "Demos",
      "stat.categories": "Categories",
      "source.officialWall": "Official + Wall",
      "source.official": "Official",
      "source.wall": "Wall",
      "source.indexed": "Indexed",
      "evidence.repo": "Repo",
      "evidence.demo": "Demo",
      "evidence.screens": "Screens",
      "evidence.team": "Team",
      "evidence.summary": "Summary",
      "label.projectWall": "Project wall",
      "label.officialArchive": "Official archive",
      "label.trackUnknown": "Track unknown",
      "empty.projects": "No projects match the current filters.",
      "empty.summary": "No summary available yet.",
      "empty.links": "No public links yet",
      "count.projects": "{count} projects",
      "brief.title": "UCWS Project Aggregator Review Brief",
      "brief.generated": "Generated from {count} filtered projects.",
      "brief.spread": "Category spread:",
      "brief.gaps": "Evidence gaps:",
      "brief.missingRepo": "Missing repo evidence",
      "brief.missingDemo": "Missing demo evidence",
      "brief.none": "none",
      "brief.judgePass": "Suggested judge pass:",
      "brief.start": "Start with projects that have both repo and demo evidence.",
      "brief.follow": "Use missing evidence lists as follow-up questions.",
      "brief.launchlens": "Open LaunchLens for deeper scoring, repo scanning, and AI synthesis.",
      "error.load": "Could not load data/project-index.json",
      "error.build": "Run npm.cmd run build, then reload the demo.",
    },
    zh: {
      "brand.eyebrow": "UCWS 新加坡 2026",
      "brand.title": "项目聚合器",
      "link.aggregatorRepo": "聚合器仓库",
      "link.official": "UCWS 官方仓库",
      "link.launchlensRepo": "LaunchLens 仓库",
      "link.launchlensDemo": "LaunchLens Demo",
      "hero.eyebrow": "配套索引",
      "hero.title": "搜索项目证据、来源链接和可复用评审规范。",
      "hero.body":
        "这个 demo 读取由 UCWS 官方归档和 LaunchLens 项目墙快照生成的标准化项目索引，帮助评委和 Agent 比较证据，同时避免把私密 token 混入数据层。",
      "status.loading": "正在载入项目索引...",
      "status.ready": "索引已就绪",
      "status.generated": "生成时间",
      "status.official": "官方来源",
      "status.launchlens": "LaunchLens",
      "status.openArchive": "UCWS GitHub 归档",
      "status.openDemo": "打开 demo",
      "placeholder.search": "搜索项目、仓库、分类、技术栈、证据...",
      "filter.allCategories": "全部分类",
      "filter.allEvidence": "全部证据",
      "filter.hasRepo": "有仓库",
      "filter.hasDemo": "有 Demo",
      "filter.gaps": "证据缺口",
      "button.brief": "生成评审摘要",
      "index.eyebrow": "项目索引",
      "index.title": "标准化记录",
      "assist.eyebrow": "评委辅助",
      "assist.title": "证据摘要",
      "assist.empty": "先筛选项目，再生成评审摘要。",
      "resource.norms": "聚合规范",
      "resource.interop": "互操作说明",
      "resource.skill": "Codex Skill",
      "resource.json": "项目索引 JSON",
      "stat.projects": "项目",
      "stat.official": "官方归档",
      "stat.dynamic": "动态墙",
      "stat.repos": "仓库",
      "stat.demos": "Demo",
      "stat.categories": "分类",
      "source.officialWall": "官方 + 项目墙",
      "source.official": "官方归档",
      "source.wall": "项目墙",
      "source.indexed": "已索引",
      "evidence.repo": "仓库",
      "evidence.demo": "Demo",
      "evidence.screens": "截图",
      "evidence.team": "团队",
      "evidence.summary": "摘要",
      "label.projectWall": "项目墙",
      "label.officialArchive": "官方归档",
      "label.trackUnknown": "赛道未知",
      "empty.projects": "当前筛选条件下没有项目。",
      "empty.summary": "暂时没有摘要。",
      "empty.links": "暂无公开链接",
      "count.projects": "{count} 个项目",
      "brief.title": "UCWS 项目聚合器评审摘要",
      "brief.generated": "基于 {count} 个筛选项目生成。",
      "brief.spread": "分类分布：",
      "brief.gaps": "证据缺口：",
      "brief.missingRepo": "缺少仓库证据",
      "brief.missingDemo": "缺少 Demo 证据",
      "brief.none": "无",
      "brief.judgePass": "建议评审路径：",
      "brief.start": "优先查看同时具备仓库和 Demo 证据的项目。",
      "brief.follow": "把缺失证据列表作为追问清单。",
      "brief.launchlens": "打开 LaunchLens 做更深入的评分、仓库扫描和 AI 梳理。",
      "error.load": "无法读取 data/project-index.json",
      "error.build": "请先运行 npm.cmd run build，然后刷新 demo。",
    },
  };

  const state = {
    index: null,
    query: "",
    category: "all",
    evidence: "all",
    language: localStorage.getItem(LANGUAGE_KEY) === "zh" ? "zh" : "en",
  };

  const refs = {
    statusPanel: document.getElementById("statusPanel"),
    statsGrid: document.getElementById("statsGrid"),
    searchInput: document.getElementById("searchInput"),
    categorySelect: document.getElementById("categorySelect"),
    evidenceSelect: document.getElementById("evidenceSelect"),
    briefButton: document.getElementById("briefButton"),
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

  function filteredProjects() {
    const projects = state.index?.projects || [];
    const query = state.query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesQuery = !query || (project.searchText || "").includes(query);
      const matchesCategory = state.category === "all" || project.category === state.category;
      const signals = project.evidence || {};
      const hasGap = !signals.hasRepo || !signals.hasDemo || !signals.hasScreenshots || !signals.hasTeam;
      const matchesEvidence =
        state.evidence === "all" ||
        (state.evidence === "repo" && signals.hasRepo) ||
        (state.evidence === "demo" && signals.hasDemo) ||
        (state.evidence === "gaps" && hasGap);
      return matchesQuery && matchesCategory && matchesEvidence;
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
    refs.evidenceSelect.querySelector('[value="all"]').textContent = t("filter.allEvidence");
    refs.evidenceSelect.querySelector('[value="repo"]').textContent = t("filter.hasRepo");
    refs.evidenceSelect.querySelector('[value="demo"]').textContent = t("filter.hasDemo");
    refs.evidenceSelect.querySelector('[value="gaps"]').textContent = t("filter.gaps");
  }

  function renderStats() {
    const stats = state.index?.stats || {};
    const items = [
      [t("stat.projects"), stats.projects || 0],
      [t("stat.official"), stats.officialProjects || 0],
      [t("stat.dynamic"), stats.dynamicProjects || 0],
      [t("stat.repos"), stats.repos || 0],
      [t("stat.demos"), stats.demos || 0],
      [t("stat.categories"), stats.categories || 0],
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

  function sourceLabel(project) {
    const kinds = project.sourceKinds || [];
    if (kinds.includes("official-repo") && kinds.includes("dynamic-wall")) return t("source.officialWall");
    if (kinds.includes("official-repo")) return t("source.official");
    if (kinds.includes("dynamic-wall")) return t("source.wall");
    return t("source.indexed");
  }

  function evidencePills(project) {
    const signals = project.evidence || {};
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

  function renderProjects() {
    const projects = filteredProjects();
    refs.resultCount.textContent = t("count.projects", { count: projects.length });
    if (!projects.length) {
      refs.projectList.innerHTML = `<div class="empty">${html(t("empty.projects"))}</div>`;
      return;
    }
    refs.projectList.innerHTML = projects
      .map((project) => {
        const links = [
          project.repoUrl && `<a href="${html(project.repoUrl)}">${html(t("evidence.repo"))}</a>`,
          project.demoUrl && `<a href="${html(project.demoUrl)}">${html(t("evidence.demo"))}</a>`,
          project.officialArchiveUrl && `<a href="${html(project.officialArchiveUrl)}">${html(t("label.officialArchive"))}</a>`,
          project.projectWallUrl && `<a href="${html(project.projectWallUrl)}">${html(t("label.projectWall"))}</a>`,
        ]
          .filter(Boolean)
          .join("");
        return `
          <article class="project-card">
            <div class="project-head">
              <div>
                <p class="eyebrow">${html(sourceLabel(project))}</p>
                <h4>${html(project.name)}</h4>
              </div>
              <span class="score">${html(project.readinessScore || 0)}</span>
            </div>
            <p class="tagline">${html(project.tagline || project.summary || t("empty.summary"))}</p>
            <div class="meta-row">
              <span>${html(project.category || "Project")}</span>
              <span>${html(project.track || t("label.trackUnknown"))}</span>
            </div>
            <div class="evidence-row">${evidencePills(project)}</div>
            <div class="link-row">${links || `<span class="muted">${html(t("empty.links"))}</span>`}</div>
          </article>
        `;
      })
      .join("");
  }

  function buildBrief() {
    const projects = filteredProjects();
    const missingRepo = projects.filter((project) => !project.evidence?.hasRepo).map((project) => project.name);
    const missingDemo = projects.filter((project) => !project.evidence?.hasDemo).map((project) => project.name);
    const byCategory = projects.reduce((acc, project) => {
      const key = project.category || "Project";
      acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const lines = [
      t("brief.title"),
      t("brief.generated", { count: projects.length }),
      "",
      t("brief.spread"),
      ...Object.entries(byCategory).map(([category, count]) => `- ${category}: ${count}`),
      "",
      t("brief.gaps"),
      `- ${t("brief.missingRepo")}: ${missingRepo.length ? missingRepo.join(", ") : t("brief.none")}`,
      `- ${t("brief.missingDemo")}: ${missingDemo.length ? missingDemo.join(", ") : t("brief.none")}`,
      "",
      t("brief.judgePass"),
      `- ${t("brief.start")}`,
      `- ${t("brief.follow")}`,
      `- ${t("brief.launchlens")}`,
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
    `;
  }

  function render() {
    applyLanguage();
    renderStatus();
    renderStats();
    renderCategoryOptions();
    renderProjects();
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
    renderProjects();
  });
  refs.categorySelect.addEventListener("change", () => {
    state.category = refs.categorySelect.value;
    renderProjects();
  });
  refs.evidenceSelect.addEventListener("change", () => {
    state.evidence = refs.evidenceSelect.value;
    renderProjects();
  });
  refs.briefButton.addEventListener("click", buildBrief);
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
