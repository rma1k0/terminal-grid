import { Terminal, ITheme } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";

declare function acquireVsCodeApi(): {
  postMessage(msg: unknown): void;
  getState(): unknown;
  setState(state: unknown): void;
};

declare const __GRID_ROWS: number;
declare const __GRID_COLS: number;
declare const __GRID_ZOOM: number;
declare const __GRID_FONT_FAMILY: string;
declare const __GRID_BG_COLOR: string;
declare const __GRID_FG_COLOR: string;

const vscode = acquireVsCodeApi();
const rows = __GRID_ROWS;
const cols = __GRID_COLS;
const total = rows * cols;

let globalZoom = __GRID_ZOOM;
let fontFamilyOverride = __GRID_FONT_FAMILY;
let bgColorOverride = __GRID_BG_COLOR;
let fgColorOverride = __GRID_FG_COLOR;

const ZOOM_STEP = 10;
const ZOOM_MIN = 50;
const ZOOM_MAX = 300;

// ── Read IDE theme via CSS variables ──
function css(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function buildTheme(): ITheme {
  const bg = bgColorOverride || css("--vscode-terminal-background") || css("--vscode-editor-background") || "";
  const fg = fgColorOverride || css("--vscode-terminal-foreground") || css("--vscode-editor-foreground") || "";
  return {
    background: bg || undefined,
    foreground: fg || undefined,
    cursor: css("--vscode-terminalCursor-foreground") || fg || undefined,
    cursorAccent: bg || undefined,
    selectionBackground: css("--vscode-terminal-selectionBackground") || undefined,
    selectionForeground: css("--vscode-terminal-selectionForeground") || undefined,
    black: css("--vscode-terminal-ansiBlack") || undefined,
    brightBlack: css("--vscode-terminal-ansiBrightBlack") || undefined,
    red: css("--vscode-terminal-ansiRed") || undefined,
    brightRed: css("--vscode-terminal-ansiBrightRed") || undefined,
    green: css("--vscode-terminal-ansiGreen") || undefined,
    brightGreen: css("--vscode-terminal-ansiBrightGreen") || undefined,
    yellow: css("--vscode-terminal-ansiYellow") || undefined,
    brightYellow: css("--vscode-terminal-ansiBrightYellow") || undefined,
    blue: css("--vscode-terminal-ansiBlue") || undefined,
    brightBlue: css("--vscode-terminal-ansiBrightBlue") || undefined,
    magenta: css("--vscode-terminal-ansiMagenta") || undefined,
    brightMagenta: css("--vscode-terminal-ansiBrightMagenta") || undefined,
    cyan: css("--vscode-terminal-ansiCyan") || undefined,
    brightCyan: css("--vscode-terminal-ansiBrightCyan") || undefined,
    white: css("--vscode-terminal-ansiWhite") || undefined,
    brightWhite: css("--vscode-terminal-ansiBrightWhite") || undefined,
  };
}

function getTermFontFamily(): string {
  if (fontFamilyOverride) return fontFamilyOverride;
  return (
    css("--vscode-terminal-fontFamily") ||
    css("--vscode-editor-fontFamily") ||
    'Consolas, "Courier New", monospace'
  );
}

function baseFontSize(): number {
  const raw = css("--vscode-terminal-fontSize") || css("--vscode-editor-fontSize");
  const n = parseInt(raw, 10);
  return n > 0 ? n : 13;
}

// ── Zoom helpers ──
function calcFontSize(cellZoom: number): number {
  const base = baseFontSize();
  return Math.max(6, Math.round(base * (globalZoom / 100) * (cellZoom / 100)));
}

function displayPct(cellZoom: number): number {
  const raw = Math.round((globalZoom / 100) * cellZoom);
  return Math.round(raw / 10) * 10;
}

function applyZoom(cell: Cell): void {
  cell.terminal.options.fontSize = calcFontSize(cell.zoom);
  cell.fitAddon.fit();
  const pct = displayPct(cell.zoom);
  cell.zoomLabel.textContent = pct === 100 ? "" : pct + "%";
  vscode.postMessage({
    type: "resize",
    id: cells.indexOf(cell),
    cols: cell.terminal.cols,
    rows: cell.terminal.rows,
  });
}

// ── Apply background color override to containers ──
function applyBgOverride(): void {
  const bg = bgColorOverride;
  if (!bg) return;
  document.body.style.background = bg;
  grid.style.background = bg;
  for (const cell of cells) {
    cell.el.style.background = bg;
    cell.el.querySelectorAll<HTMLElement>(".term-container, .xterm, .xterm-viewport, .xterm-screen").forEach(el => {
      el.style.backgroundColor = bg;
    });
  }
}

// ── Build cells ──
interface Cell {
  terminal: Terminal;
  fitAddon: FitAddon;
  el: HTMLDivElement;
  zoom: number;
  zoomLabel: HTMLSpanElement;
  labelEl: HTMLSpanElement;
}

const cells: Cell[] = [];
const grid = document.getElementById("grid")!;

for (let i = 0; i < total; i++) {
  const cellDiv = document.createElement("div");
  cellDiv.className = "cell";

  // Info bar: number + zoom %
  const info = document.createElement("div");
  info.className = "cell-info";

  const zoomLabel = document.createElement("span");
  zoomLabel.className = "cell-zoom-pct";
  info.appendChild(zoomLabel);

  const label = document.createElement("span");
  label.className = "cell-label";
  label.textContent = `${i + 1}`;
  info.appendChild(label);

  cellDiv.appendChild(info);

  const termContainer = document.createElement("div");
  termContainer.className = "term-container";
  cellDiv.appendChild(termContainer);

  grid.appendChild(cellDiv);

  const terminal = new Terminal({
    fontSize: calcFontSize(100),
    fontFamily: getTermFontFamily(),
    theme: buildTheme(),
    cursorBlink: true,
    scrollback: 5000,
    allowTransparency: true,
  });

  const fitAddon = new FitAddon();
  terminal.loadAddon(fitAddon);
  terminal.open(termContainer);

  terminal.onData((data: string) => {
    vscode.postMessage({ type: "input", id: i, data });
  });

  terminal.textarea?.addEventListener("focus", () => cellDiv.classList.add("focused"));
  terminal.textarea?.addEventListener("blur", () => cellDiv.classList.remove("focused"));

  const cell: Cell = { terminal, fitAddon, el: cellDiv, zoom: 100, zoomLabel, labelEl: label };
  cells.push(cell);

  // Ctrl+Wheel zoom — capture phase so it fires BEFORE xterm.js handles scroll
  cellDiv.addEventListener("wheel", (e: WheelEvent) => {
    if (!e.ctrlKey) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    if (e.deltaY < 0) {
      cell.zoom = Math.min(ZOOM_MAX, cell.zoom + ZOOM_STEP);
    } else {
      cell.zoom = Math.max(ZOOM_MIN, cell.zoom - ZOOM_STEP);
    }
    applyZoom(cell);
  }, { capture: true, passive: false });

  // Ctrl+0 reset zoom, Ctrl+C copy when selection exists
  terminal.attachCustomKeyEventHandler((e: KeyboardEvent) => {
    if (e.ctrlKey && e.type === "keydown" && e.key === "0") {
      cell.zoom = 100;
      applyZoom(cell);
      return false;
    }
    if (e.ctrlKey && e.type === "keydown" && e.key === "c") {
      const sel = terminal.getSelection();
      if (sel) {
        navigator.clipboard.writeText(sel).catch(() => {});
        terminal.clearSelection();
        return false;
      }
    }
    return true;
  });
}

// ── Context menu ──
const ctxMenu = document.getElementById("ctxMenu")!;
let ctxTargetId = -1;

for (let i = 0; i < cells.length; i++) {
  cells[i].el.addEventListener("contextmenu", (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    ctxTargetId = i;
    ctxMenu.style.left = e.clientX + "px";
    ctxMenu.style.top = e.clientY + "px";
    ctxMenu.classList.add("show");
  });
}

document.addEventListener("click", () => {
  ctxMenu.classList.remove("show");
});

ctxMenu.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLElement;
  const action = target.dataset.action;
  if (!action || ctxTargetId < 0) return;
  ctxMenu.classList.remove("show");
  switch (action) {
    case "copy": {
      const sel = cells[ctxTargetId]?.terminal.getSelection();
      if (sel) {
        navigator.clipboard.writeText(sel).catch(() => {});
      }
      break;
    }
    case "paste":
      navigator.clipboard.readText().then((text) => {
        if (text && ctxTargetId >= 0) {
          vscode.postMessage({ type: "input", id: ctxTargetId, data: text });
        }
      }).catch(() => {});
      break;
    case "clear":
      vscode.postMessage({ type: "clearTerminal", id: ctxTargetId });
      break;
    case "restart":
      vscode.postMessage({ type: "restartTerminal", id: ctxTargetId });
      break;
    case "kill":
      vscode.postMessage({ type: "killTerminal", id: ctxTargetId });
      break;
    case "rename":
      vscode.postMessage({ type: "renameCell", id: ctxTargetId });
      break;
  }
});

// Apply initial background override if set
applyBgOverride();

// ── Initial fit + notify extension ──
// Send ready immediately with default dims to start PTY spawning ASAP
vscode.postMessage({
  type: "ready",
  defaultCols: 80,
  defaultRows: 24,
  cellDims: Array.from({ length: total }, () => ({ cols: 80, rows: 24 })),
});

// Fit asynchronously and send accurate resize corrections
requestAnimationFrame(() => {
  for (const cell of cells) {
    cell.fitAddon.fit();
  }
  // Re-fit after layout is fully settled, then send per-cell resize
  setTimeout(() => {
    for (let i = 0; i < cells.length; i++) {
      cells[i].fitAddon.fit();
      vscode.postMessage({
        type: "resize",
        id: i,
        cols: cells[i].terminal.cols,
        rows: cells[i].terminal.rows,
      });
    }
  }, 100);
});

// ── Per-cell overrides ──
const cellOverrides: Record<number, { bgColor: string; fgColor: string; fontFamily: string }> = {};

function buildCellTheme(cellId: number): ITheme {
  const ov = cellOverrides[cellId];
  if (!ov) return buildTheme();
  const base = buildTheme();
  if (ov.bgColor) {
    base.background = ov.bgColor;
    base.cursorAccent = ov.bgColor;
  }
  if (ov.fgColor) {
    base.foreground = ov.fgColor;
    base.cursor = ov.fgColor;
  }
  return base;
}

function applyCellBgOverride(cell: Cell, bg: string): void {
  if (!bg) {
    // Revert to global
    const globalBg = bgColorOverride;
    if (globalBg) {
      cell.el.style.background = globalBg;
      cell.el.querySelectorAll<HTMLElement>(".term-container, .xterm, .xterm-viewport, .xterm-screen").forEach(el => {
        el.style.backgroundColor = globalBg;
      });
    } else {
      cell.el.style.background = "";
      cell.el.querySelectorAll<HTMLElement>(".term-container, .xterm, .xterm-viewport, .xterm-screen").forEach(el => {
        el.style.backgroundColor = "";
      });
    }
    return;
  }
  cell.el.style.background = bg;
  cell.el.querySelectorAll<HTMLElement>(".term-container, .xterm, .xterm-viewport, .xterm-screen").forEach(el => {
    el.style.backgroundColor = bg;
  });
}

// ── Messages from extension ──
window.addEventListener("message", (event) => {
  const msg = event.data;
  switch (msg.type) {
    case "output":
      cells[msg.id]?.terminal.write(msg.data);
      break;
    case "clear":
      cells[msg.id]?.terminal.clear();
      break;
    case "reset":
      cells[msg.id]?.terminal.reset();
      break;
    case "setLabels": {
      const labels: string[] = msg.labels || [];
      for (let i = 0; i < cells.length; i++) {
        cells[i].labelEl.textContent = labels[i] || `${i + 1}`;
      }
      break;
    }
    case "configUpdate":
      globalZoom = msg.zoom;
      fontFamilyOverride = msg.fontFamily;
      bgColorOverride = msg.bgColor || "";
      fgColorOverride = msg.fgColor || "";
      {
        for (let ci = 0; ci < cells.length; ci++) {
          const ov = cellOverrides[ci];
          if (ov && (ov.bgColor || ov.fgColor || ov.fontFamily)) {
            cells[ci].terminal.options.theme = buildCellTheme(ci);
            cells[ci].terminal.options.fontFamily = ov.fontFamily || getTermFontFamily();
          } else {
            cells[ci].terminal.options.theme = buildTheme();
            cells[ci].terminal.options.fontFamily = getTermFontFamily();
          }
          applyZoom(cells[ci]);
        }
        // Apply bg: per-cell overrides take priority
        applyBgOverride();
        for (let ci = 0; ci < cells.length; ci++) {
          const ov = cellOverrides[ci];
          if (ov?.bgColor) {
            applyCellBgOverride(cells[ci], ov.bgColor);
          }
        }
      }
      break;
    case "loadFont": {
      const style = document.createElement("style");
      style.textContent = `@font-face { font-family: '${msg.name}'; src: url(data:font/${msg.format};base64,${msg.data}) format('${msg.format}'); font-display: swap; }`;
      document.head.appendChild(style);
      // Re-apply if this font is currently selected
      if (fontFamilyOverride === msg.name) {
        for (const cell of cells) {
          cell.terminal.options.fontFamily = getTermFontFamily();
          cell.fitAddon.fit();
        }
      }
      break;
    }
    case "cellConfig": {
      const cell = cells[msg.id];
      if (!cell) break;
      cellOverrides[msg.id] = {
        bgColor: msg.bgColor || "",
        fgColor: msg.fgColor || "",
        fontFamily: msg.fontFamily || "",
      };
      cell.terminal.options.theme = buildCellTheme(msg.id);
      cell.terminal.options.fontFamily = msg.fontFamily || getTermFontFamily();
      cell.fitAddon.fit();
      applyCellBgOverride(cell, msg.bgColor || "");
      break;
    }
    case "clearCellOverrides": {
      // Reset all cells to global theme
      for (const key of Object.keys(cellOverrides)) {
        delete cellOverrides[parseInt(key)];
      }
      const globalTheme = buildTheme();
      const globalFf = getTermFontFamily();
      for (const cell of cells) {
        cell.terminal.options.theme = globalTheme;
        cell.terminal.options.fontFamily = globalFf;
        cell.fitAddon.fit();
      }
      applyBgOverride();
      break;
    }
  }
});

// ── Resize ──
let resizeTimer: ReturnType<typeof setTimeout>;
const ro = new ResizeObserver(() => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      const prevCols = cell.terminal.cols;
      const prevRows = cell.terminal.rows;
      cell.fitAddon.fit();
      if (cell.terminal.cols !== prevCols || cell.terminal.rows !== prevRows) {
        vscode.postMessage({
          type: "resize",
          id: i,
          cols: cell.terminal.cols,
          rows: cell.terminal.rows,
        });
      }
    }
  }, 150);
});
ro.observe(grid);

// ── Watch for theme changes ──
const themeObserver = new MutationObserver(() => {
  for (let ci = 0; ci < cells.length; ci++) {
    const ov = cellOverrides[ci];
    if (ov && (ov.bgColor || ov.fgColor || ov.fontFamily)) {
      cells[ci].terminal.options.theme = buildCellTheme(ci);
      cells[ci].terminal.options.fontFamily = ov.fontFamily || getTermFontFamily();
    } else {
      cells[ci].terminal.options.theme = buildTheme();
      cells[ci].terminal.options.fontFamily = getTermFontFamily();
    }
    cells[ci].terminal.options.fontSize = calcFontSize(cells[ci].zoom);
    cells[ci].fitAddon.fit();
  }
});
themeObserver.observe(document.body, {
  attributes: true,
  attributeFilter: ["class", "data-vscode-theme-kind"],
});
