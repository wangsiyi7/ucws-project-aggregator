import { execFileSync } from "node:child_process";

const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN;
const owner = process.env.GITHUB_OWNER || "wangsiyi7";
const repoName = process.env.GITHUB_REPO || "ucws-project-aggregator";
const description =
  process.env.GITHUB_DESCRIPTION ||
  "UCWS Project Aggregator: companion index, norms, skill, and judge-facing demo for LaunchLens.";
const isPrivate = /^(1|true|yes)$/i.test(process.env.GITHUB_PRIVATE || "");
const createOnly = process.argv.includes("--create-only");

if (!token) {
  console.error("Missing GITHUB_TOKEN or GH_TOKEN.");
  console.error("Create a GitHub token with repo permissions, then run:");
  console.error("  $env:GITHUB_TOKEN='...'; npm.cmd run publish:github");
  process.exit(1);
}

function run(command, args, options = {}) {
  return execFileSync(command, args, {
    stdio: options.capture ? "pipe" : "inherit",
    encoding: "utf8",
    env: { ...process.env, ...(options.env || {}) },
  });
}

async function github(path, options = {}) {
  const response = await fetch(`https://api.github.com${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });
  const json = await response.json().catch(() => ({}));
  return { response, json };
}

async function ensureRepo() {
  const existing = await github(`/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repoName)}`);
  if (existing.response.ok) return existing.json;

  const created = await github("/user/repos", {
    method: "POST",
    body: JSON.stringify({
      name: repoName,
      description,
      private: isPrivate,
      has_issues: true,
      has_projects: false,
      has_wiki: false,
      auto_init: false,
    }),
  });

  if (!created.response.ok) {
    console.error("Could not create GitHub repository.");
    console.error(JSON.stringify(created.json, null, 2));
    process.exit(1);
  }
  return created.json;
}

await ensureRepo();

const repoUrl = `https://github.com/${owner}/${repoName}`;
const remoteUrl = `${repoUrl}.git`;
const pagesUrl = `https://${owner}.github.io/${repoName}/`;

console.log(`Repository ready: ${repoUrl}`);

if (createOnly) {
  console.log(`Pages URL after first successful workflow: ${pagesUrl}`);
  process.exit(0);
}

const isRepo = run("git", ["rev-parse", "--is-inside-work-tree"], { capture: true }).trim() === "true";
if (!isRepo) {
  run("git", ["init"]);
}

run("npm.cmd", ["run", "build"]);
run("npm.cmd", ["test"]);
run("git", ["add", "."]);

const status = run("git", ["status", "--short"], { capture: true }).trim();
if (status) {
  run("git", ["commit", "-m", "Publish UCWS project aggregator"]);
}

const remotes = run("git", ["remote"], { capture: true })
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean);

if (remotes.includes("origin")) {
  run("git", ["remote", "set-url", "origin", remoteUrl]);
} else {
  run("git", ["remote", "add", "origin", remoteUrl]);
}

run("git", ["branch", "-M", "main"]);

const basic = Buffer.from(`x-access-token:${token}`).toString("base64");
run("git", ["push", "-u", "origin", "main"], {
  env: {
    GIT_CONFIG_COUNT: "1",
    GIT_CONFIG_KEY_0: "http.https://github.com/.extraheader",
    GIT_CONFIG_VALUE_0: `Authorization: Basic ${basic}`,
  },
});

console.log("UCWS Project Aggregator pushed to GitHub.");
console.log(`Repo URL: ${repoUrl}`);
console.log(`GitHub Pages URL: ${pagesUrl}`);
