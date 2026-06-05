import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const port = Number(process.env.PORT || 8082);
const root = resolve(process.cwd());

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

function safePath(urlPath) {
  const decoded = decodeURIComponent((urlPath || "/").split("?")[0]);
  const requested = decoded === "/" ? "/index.html" : decoded;
  const fullPath = normalize(join(root, requested));
  if (!fullPath.startsWith(root)) return null;
  return fullPath;
}

const server = createServer(async (req, res) => {
  const filePath = safePath(req.url);
  if (!filePath) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  try {
    const body = await readFile(filePath);
    res.writeHead(200, {
      "Content-Type": types[extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(body);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`UCWS Project Aggregator demo at http://127.0.0.1:${port}/`);
});
