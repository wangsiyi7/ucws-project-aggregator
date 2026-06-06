import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  buildProjectIndex,
  classifyProject,
  evidenceSignals,
  mergeProjects,
  normalizeWallProject,
} from "../tools/build-index.mjs";

assert.equal(
  classifyProject({
    name: "Agent reviewer",
    description: "A multi-agent copilot for judges.",
  }),
  "AI Agent",
);

assert.deepEqual(
  evidenceSignals({
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/acme/demo",
    screenshotUrls: "[\"https://demo.example.com/screen.png\"]",
    teamMembers: "A - Builder",
    summary: "Ready",
  }),
  {
    hasDemo: true,
    hasRepo: true,
    hasScreenshots: true,
    hasTeam: true,
    hasSummary: true,
  },
);

const wallProject = normalizeWallProject({
  id: "abc",
  title: "Repo Radar",
  description: "GitHub scanner for project evidence",
  repoUrl: "https://github.com/acme/repo-radar",
});

assert.equal(wallProject.category, "Developer Tool");
assert.equal(wallProject.projectWallUrl.endsWith("?projectId=abc"), true);

const merged = mergeProjects([
  {
    name: "Repo Radar",
    repoUrl: "https://github.com/acme/repo-radar",
    sourceKinds: ["official-repo"],
    links: ["https://github.com/acme/repo-radar"],
    evidence: {},
  },
  wallProject,
]);

assert.equal(merged.length, 1);
assert.deepEqual(merged[0].sourceKinds.sort(), ["dynamic-wall", "official-repo"]);

const fixtureRoot = await mkdtemp(join(tmpdir(), "ucws-aggregator-"));
const officialRepo = join(fixtureRoot, "official");
const launchlens = join(fixtureRoot, "launchlens");
await mkdir(join(officialRepo, "projects", "sample"), { recursive: true });
await mkdir(join(launchlens, "data"), { recursive: true });
await writeFile(join(officialRepo, "README.md"), "# UCWS Fixture\n\nOfficial event overview.");
await writeFile(join(officialRepo, "RESOURCES.md"), "# Resources\n\nBuilder links and judging support.");
await writeFile(
  join(officialRepo, "projects", "sample", "project-payload.json"),
  JSON.stringify({
    name: "Sample Skill",
    track: "Skill",
    tagline: "A reusable delivery workflow",
    repoUrl: "https://github.com/acme/sample-skill",
  }),
);
await writeFile(
  join(launchlens, "data", "ucws-project-wall.json"),
  JSON.stringify({
    projects: [
      {
        id: "dynamic-1",
        name: "Dynamic App",
        description: "Customer application with a hosted demo",
        demoUrl: "https://dynamic.example.com",
      },
    ],
  }),
);

const index = await buildProjectIndex({
  officialRepoPath: officialRepo,
  launchlensPath: launchlens,
});

assert.equal(index.stats.projects, 2);
assert.equal(index.stats.officialProjects, 1);
assert.equal(index.stats.dynamicProjects, 1);
assert.equal(index.stats.resources >= 2, true);
assert.equal(index.stats.aggregatorResources >= 4, true);
assert.equal(index.stats.searchableRecords >= 4, true);
assert.equal(index.projectLinks.length, 2);
assert.equal(index.resources.some((resource) => resource.title === "UCWS Fixture"), true);
assert.equal(index.resources.some((resource) => resource.path === "SUBMISSION_FORM.en.md"), true);
assert.equal(index.resources.some((resource) => resource.path === "SUBMISSION_FORM.zh-CN.md"), true);
assert.equal(index.searchRecords.some((record) => record.type === "resource"), true);
assert.equal(index.searchRecords.some((record) => record.type === "project"), true);
assert.equal(index.skill.path, "skills/ucws-project-aggregation/SKILL.md");
assert.equal(index.skill.interfacePath, "skills/ucws-project-aggregation/agents/openai.yaml");
assert.equal(index.submissionForms.length, 2);

console.log("ucws-project-aggregator build-index tests passed");
