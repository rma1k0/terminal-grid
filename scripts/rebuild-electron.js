const { spawnSync } = require("child_process");

const target = process.env.npm_config_target || process.env.ELECTRON_VERSION;

if (!target) {
  console.error("Missing Electron target version. Run: npm run rebuild:electron --target=<electron-version>");
  process.exit(1);
}

const npm = process.platform === "win32" ? "npm.cmd" : "npm";
const args = [
  "rebuild",
  "node-pty",
  "--runtime=electron",
  `--target=${target}`,
  "--dist-url=https://electronjs.org/headers",
  "--build-from-source",
];

const result = spawnSync(npm, args, {
  cwd: process.cwd(),
  stdio: "inherit",
  env: process.env,
});

if (typeof result.status === "number") {
  process.exit(result.status);
}

console.error(result.error ? String(result.error) : "npm rebuild failed.");
process.exit(1);
