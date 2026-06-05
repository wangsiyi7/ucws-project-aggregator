import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

export const DEFAULTS = {
  officialRepoPath: resolve(ROOT, "..", "_tmp_ucws_official_repo"),
  launchlensPath: resolve(ROOT, "..", "launchlens"),
  officialRepoUrl: "https://github.com/EpicConnectorAI/UCWS-SINGAPORE-HACKATHON-2026",
  launchlensRepoUrl: "https://github.com/wangsiyi7/launchlens",
  launchlensDemoUrl: "https://wangsiyi7.github.io/launchlens/",
  aggregatorRepoUrl: "https://github.com/wangsiyi7/ucws-project-aggregator",
  aggregatorDemoUrl: "https://wangsiyi7.github.io/ucws-project-aggregator/",
  eventUrl: "https://evol.epicconnector.ai/events/ucws-singapore-hackathon---2026-cxgy",
  projectWallUrl: "https://evol.epicconnector.ai/events/ucws-singapore-hackathon---2026-cxgy/project-wall",
  outputPath: resolve(ROOT, "data", "project-index.json"),
};

export function parseArgs(argv = process.argv.slice(2)) {
  const options = { ...DEFAULTS };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const next = argv[index + 1];
    if (arg === "--official-repo" && next) {
      options.officialRepoPath = resolve(next);
      index += 1;
    } else if (arg === "--launchlens" && next) {
      options.launchlensPath = resolve(next);
      index += 1;
    } else if (arg === "--output" && next) {
      options.outputPath = resolve(next);
      index += 1;
    }
  }
  return options;
}

function cleanText(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .trim();
}

function firstNonEmpty(...values) {
  return values.map(cleanText).find(Boolean) || "";
}

function parseList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.map(cleanText).filter(Boolean);
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) return parsed.map((item) => cleanText(item?.url || item)).filter(Boolean);
    } catch {
      return value
        .split(/[\n,]+/)
        .map(cleanText)
        .filter(Boolean);
    }
  }
  return [];
}

function normalizeUrl(value) {
  const url = cleanText(value);
  if (!url || url.includes("YOUR_ACCOUNT") || url.includes("your-demo-url.example.com")) return "";
  return url;
}

function hasGitHubUrl(project) {
  const haystack = [project.repoUrl, ...(project.links || [])].join(" ");
  return /https:\/\/github\.com\//i.test(haystack);
}

export function classifyProject(project) {
  const text = [
    project.name,
    project.track,
    project.tagline,
    project.summary,
    project.description,
    project.techStack,
    ...(project.links || []),
  ]
    .join(" ")
    .toLowerCase();

  if (/\b(skill|codex skill|plugin|workflow|automation)\b/.test(text)) return "Skill / Workflow";
  if (/\b(agent|multi-agent|autonomous|copilot|llm|planner)\b/.test(text)) return "AI Agent";
  if (/\bapi|sdk|tool|developer|repo|github|cli|scanner\b/.test(text)) return "Developer Tool";
  if (/\bhealth|education|finance|legal|customer|consumer|marketplace\b/.test(text)) return "Application";
  return cleanText(project.track) || "Project";
}

export function evidenceSignals(project) {
  const screenshots = parseList(project.screenshotUrls || project.screenshots);
  const demoUrl = normalizeUrl(project.demoUrl);
  const repoUrl = normalizeUrl(project.repoUrl);
  return {
    hasDemo: Boolean(demoUrl),
    hasRepo: Boolean(repoUrl || hasGitHubUrl(project)),
    hasScreenshots: screenshots.length > 0,
    hasTeam: Boolean(firstNonEmpty(project.teamMembers, project.team, project.members)),
    hasSummary: Boolean(firstNonEmpty(project.summary, project.description, project.tagline)),
  };
}

function readinessScore(project) {
  const signals = evidenceSignals(project);
  const weights = {
    hasDemo: 20,
    hasRepo: 25,
    hasScreenshots: 15,
    hasTeam: 15,
    hasSummary: 25,
  };
  return Object.entries(weights).reduce((score, [key, value]) => score + (signals[key] ? value : 0), 0);
}

function projectKey(project) {
  const repo = normalizeUrl(project.repoUrl).toLowerCase();
  if (repo) return `repo:${repo.replace(/\/+$/, "")}`;
  return `name:${cleanText(project.name).toLowerCase()}`;
}

async function readJsonIfExists(path) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return null;
  }
}

async function readTextIfExists(path) {
  try {
    return await readFile(path, "utf8");
  } catch {
    return "";
  }
}

export function normalizeOfficialProject(projectDirName, payload = {}, readme = "", options = DEFAULTS) {
  const officialArchiveUrl = `${options.officialRepoUrl}/tree/main/projects/${encodeURIComponent(projectDirName)}`;
  const name = firstNonEmpty(payload.name, projectDirName);
  const repoUrl =
    normalizeUrl(payload.repoUrl) ||
    (projectDirName.toLowerCase() === "launchlens" ? options.launchlensRepoUrl : "");
  const demoUrl =
    normalizeUrl(payload.demoUrl) ||
    (projectDirName.toLowerCase() === "launchlens" ? options.launchlensDemoUrl : "");
  const project = {
    id: `official:${projectDirName}`,
    name,
    track: firstNonEmpty(payload.track, "Official Archive"),
    category: "",
    tagline: cleanText(payload.tagline),
    summary: firstNonEmpty(payload.description, readme.slice(0, 700)),
    description: cleanText(payload.description || readme),
    repoUrl,
    demoUrl,
    techStack: cleanText(payload.techStack),
    screenshotUrls: parseList(payload.screenshotUrls),
    logoUrl: normalizeUrl(payload.logoUrl),
    teamMembers: cleanText(payload.teamMembers),
    sourceKinds: ["official-repo"],
    officialArchiveUrl,
    projectWallUrl: "",
    links: [officialArchiveUrl, repoUrl, demoUrl].filter(Boolean),
  };
  project.category = classifyProject(project);
  project.evidence = evidenceSignals(project);
  project.readinessScore = readinessScore(project);
  project.searchText = buildSearchText(project);
  return project;
}

export function normalizeWallProject(record = {}, options = DEFAULTS) {
  const name = firstNonEmpty(record.name, record.title, record.projectName, record.slug, record.id);
  const repoUrl = normalizeUrl(record.repoUrl || record.githubUrl || record.github || record.repositoryUrl);
  const demoUrl = normalizeUrl(record.demoUrl || record.websiteUrl || record.url || record.projectUrl);
  const links = [
    repoUrl,
    demoUrl,
    record.projectUrl,
    ...(Array.isArray(record.links) ? record.links.map((link) => link.url || link.href || link) : []),
  ]
    .map(normalizeUrl)
    .filter(Boolean);
  const projectWallUrl =
    normalizeUrl(record.projectUrl) || (record.id ? `${options.projectWallUrl}?projectId=${encodeURIComponent(record.id)}` : "");
  const project = {
    id: record.id ? `wall:${record.id}` : `wall:${name}`,
    name,
    track: firstNonEmpty(record.track, record.category),
    category: firstNonEmpty(record.category),
    tagline: firstNonEmpty(record.tagline, record.subtitle),
    summary: firstNonEmpty(record.summary, record.description, record.tagline),
    description: cleanText(record.description || record.summary || ""),
    repoUrl,
    demoUrl,
    techStack: cleanText(record.techStack || record.stack || ""),
    screenshotUrls: parseList(record.screenshotUrls || record.screenshots),
    logoUrl: normalizeUrl(record.logoUrl || record.avatarUrl),
    teamMembers: cleanText(record.teamMembers || record.team || record.members || ""),
    votes: Number(record.votes || record.voteCount || 0),
    comments: Number(record.comments || record.commentCount || 0),
    sourceKinds: ["dynamic-wall"],
    officialArchiveUrl: "",
    projectWallUrl,
    links: [...new Set([projectWallUrl, ...links].filter(Boolean))],
  };
  project.category = project.category || classifyProject(project);
  project.evidence = evidenceSignals(project);
  project.readinessScore = readinessScore(project);
  project.searchText = buildSearchText(project);
  return project;
}

function buildSearchText(project) {
  return [
    project.name,
    project.track,
    project.category,
    project.tagline,
    project.summary,
    project.description,
    project.techStack,
    project.teamMembers,
    ...(project.links || []),
  ]
    .join(" ")
    .toLowerCase();
}

export async function readOfficialProjects(officialRepoPath, options = DEFAULTS) {
  const projectsPath = resolve(officialRepoPath, "projects");
  let entries = [];
  try {
    entries = await readdir(projectsPath);
  } catch {
    return [];
  }

  const projects = [];
  for (const entry of entries) {
    const fullPath = join(projectsPath, entry);
    const entryStat = await stat(fullPath).catch(() => null);
    if (!entryStat?.isDirectory()) continue;
    const payload =
      (await readJsonIfExists(join(fullPath, "project-payload.json"))) ||
      (await readJsonIfExists(join(fullPath, "PROJECT.json"))) ||
      {};
    const readme =
      (await readTextIfExists(join(fullPath, "README.md"))) ||
      (await readTextIfExists(join(fullPath, "PROJECT_WALL_SUBMISSION.md"))) ||
      "";
    projects.push(normalizeOfficialProject(entry, payload, readme, options));
  }
  return projects;
}

export async function readDynamicProjects(launchlensPath, options = DEFAULTS) {
  const snapshotPath = resolve(launchlensPath, "data", "ucws-project-wall.json");
  const snapshot = await readJsonIfExists(snapshotPath);
  if (!snapshot || !Array.isArray(snapshot.projects)) return [];
  return snapshot.projects.map((project) => normalizeWallProject(project, options));
}

export function mergeProjects(projects) {
  const byKey = new Map();
  for (const project of projects) {
    const key = projectKey(project);
    if (!key || key === "name:") continue;
    const existing = byKey.get(key);
    if (!existing) {
      byKey.set(key, project);
      continue;
    }
    const merged = {
      ...existing,
      ...Object.fromEntries(Object.entries(project).filter(([, value]) => {
        if (Array.isArray(value)) return value.length > 0;
        return value !== "" && value !== 0 && value !== false && value !== null && value !== undefined;
      })),
      sourceKinds: [...new Set([...(existing.sourceKinds || []), ...(project.sourceKinds || [])])],
      links: [...new Set([...(existing.links || []), ...(project.links || [])].filter(Boolean))],
      officialArchiveUrl: existing.officialArchiveUrl || project.officialArchiveUrl,
      projectWallUrl: existing.projectWallUrl || project.projectWallUrl,
    };
    merged.category = classifyProject(merged);
    merged.evidence = evidenceSignals(merged);
    merged.readinessScore = readinessScore(merged);
    merged.searchText = buildSearchText(merged);
    byKey.set(key, merged);
  }
  return [...byKey.values()].sort((a, b) => b.readinessScore - a.readinessScore || a.name.localeCompare(b.name));
}

export async function buildProjectIndex(options = DEFAULTS) {
  const resolved = { ...DEFAULTS, ...options };
  const [officialProjects, dynamicProjects] = await Promise.all([
    readOfficialProjects(resolved.officialRepoPath, resolved),
    readDynamicProjects(resolved.launchlensPath, resolved),
  ]);
  const projects = mergeProjects([...officialProjects, ...dynamicProjects]);
  const tracks = [...new Set(projects.map((project) => project.track).filter(Boolean))].sort();
  const categories = [...new Set(projects.map((project) => project.category).filter(Boolean))].sort();
  const generatedAt = new Date().toISOString();

  return {
    schemaVersion: "2026-06-05.ucws.project-index.v1",
    generatedAt,
    sources: {
      officialRepo: {
        url: resolved.officialRepoUrl,
        localPath: resolved.officialRepoPath,
        note: "Official UCWS archive. Project ownership remains with each team.",
      },
      launchlens: {
        repoUrl: resolved.launchlensRepoUrl,
        demoUrl: resolved.launchlensDemoUrl,
        localPath: resolved.launchlensPath,
        dynamicWallSnapshot: "data/ucws-project-wall.json",
      },
      event: {
        eventUrl: resolved.eventUrl,
        projectWallUrl: resolved.projectWallUrl,
        authenticatedApi: "Dynamic Project Wall enumeration requires EPIC_TOKEN in LaunchLens sync.",
      },
      aggregator: {
        repoUrl: resolved.aggregatorRepoUrl,
        demoUrl: resolved.aggregatorDemoUrl,
        localDemoPath: "index.html",
      },
    },
    norms: {
      evidenceFields: ["demoUrl", "repoUrl", "screenshotUrls", "teamMembers", "summary"],
      syncRules: [
        "Do not write EPIC_TOKEN or any session token into committed files.",
        "Keep official archive records distinct from dynamic Project Wall records.",
        "Prefer URLs that judges can open directly.",
        "Treat missing evidence as a review gap, not as a reason to invent content.",
      ],
      projectTaxonomy: ["AI Agent", "Application", "Developer Tool", "Skill / Workflow", "Project"],
    },
    skill: {
      path: "skills/ucws-project-aggregation/SKILL.md",
      purpose: "Give Codex or another agent a repeatable workflow for UCWS project aggregation and judge-facing synthesis.",
    },
    stats: {
      projects: projects.length,
      officialProjects: officialProjects.length,
      dynamicProjects: dynamicProjects.length,
      repos: projects.filter((project) => project.evidence.hasRepo).length,
      demos: projects.filter((project) => project.evidence.hasDemo).length,
      tracks: tracks.length,
      categories: categories.length,
    },
    tracks,
    categories,
    projectLinks: projects.map((project) => ({
      name: project.name,
      category: project.category,
      repoUrl: project.repoUrl,
      demoUrl: project.demoUrl,
      officialArchiveUrl: project.officialArchiveUrl,
      projectWallUrl: project.projectWallUrl,
    })),
    projects,
  };
}

export async function writeProjectIndex(options = parseArgs()) {
  const index = await buildProjectIndex(options);
  await mkdir(dirname(options.outputPath), { recursive: true });
  await writeFile(options.outputPath, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  return index;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const index = await writeProjectIndex(parseArgs());
  console.log(`Wrote ${index.stats.projects} projects to data/project-index.json`);
}
