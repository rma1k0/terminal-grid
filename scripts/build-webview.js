const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

fs.mkdirSync("media", { recursive: true });

// Copy xterm.css
fs.copyFileSync(
  path.join("node_modules", "@xterm", "xterm", "css", "xterm.css"),
  path.join("media", "xterm.css")
);

// Bundle webview code + xterm.js
esbuild.buildSync({
  entryPoints: ["src/webview/gridTerminal.ts"],
  bundle: true,
  outfile: "media/gridTerminal.js",
  format: "iife",
  platform: "browser",
  target: "es2020",
  minify: false,
  sourcemap: false,
});

console.log("Webview built successfully.");
