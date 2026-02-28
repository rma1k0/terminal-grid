import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

interface PtyLike {
  onData(cb: (data: string) => void): void;
  write(data: string): void;
  resize(cols: number, rows: number): void;
  kill(): void;
}

interface TerminalInstance {
  id: number;
  pty: PtyLike;
}

interface CustomFont {
  name: string;
  path: string;
}

const FONT_FORMATS: Record<string, string> = {
  ".ttf": "truetype",
  ".otf": "opentype",
  ".woff": "woff",
  ".woff2": "woff2",
};

export class TerminalGridPanel {
  public static currentPanel: TerminalGridPanel | undefined;
  private static _nodePty: typeof import("node-pty") | null | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private readonly _context: vscode.ExtensionContext;
  private _terminals: TerminalInstance[] = [];
  private _outputBuffers: string[] = [];
  private static readonly OUTPUT_BUFFER_SIZE = 50000;
  private _disposed = false;
  private _rows: number;
  private _cols: number;
  private _configListener: vscode.Disposable | undefined;

  private static _getNodePty(): typeof import("node-pty") | null {
    if (TerminalGridPanel._nodePty === undefined) {
      try {
        TerminalGridPanel._nodePty = require("node-pty");
      } catch {
        TerminalGridPanel._nodePty = null;
      }
    }
    return TerminalGridPanel._nodePty as typeof import("node-pty") | null;
  }

  public static createOrShow(
    context: vscode.ExtensionContext,
    rows: number,
    cols: number
  ): void {
    if (TerminalGridPanel.currentPanel) {
      TerminalGridPanel.currentPanel.dispose();
    }

    const panel = vscode.window.createWebviewPanel(
      "terminalGrid",
      vscode.l10n.t("Terminal Grid {0}×{1}", rows, cols),
      vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [
          vscode.Uri.joinPath(context.extensionUri, "media"),
        ],
      }
    );

    TerminalGridPanel.currentPanel = new TerminalGridPanel(
      panel,
      context,
      rows,
      cols
    );
    context.globalState.update("lastGrid", { rows, cols });
  }

  public static revive(
    panel: vscode.WebviewPanel,
    context: vscode.ExtensionContext,
    rows: number,
    cols: number
  ): void {
    if (TerminalGridPanel.currentPanel) {
      TerminalGridPanel.currentPanel.dispose();
    }
    TerminalGridPanel.currentPanel = new TerminalGridPanel(
      panel,
      context,
      rows,
      cols
    );
    context.globalState.update("lastGrid", { rows, cols });
  }

  /** Broadcast text to all terminals */
  public broadcastInput(text: string): void {
    for (const t of this._terminals) {
      t.pty.write(text + "\r");
    }
  }

  /** Send text to a specific terminal cell */
  public sendToCell(cellId: number, text: string): boolean {
    const t = this._terminals[cellId];
    if (!t) return false;
    t.pty.write(text);
    return true;
  }

  /** Read recent output from a specific terminal cell */
  public readCell(cellId: number, lines?: number): string | null {
    const buf = this._outputBuffers[cellId];
    if (buf === undefined) return null;
    if (lines === undefined) return buf;
    if (lines <= 0) return "";
    const allLines = buf.split("\n");
    return allLines.slice(-lines).join("\n");
  }

  /** Get total number of terminal cells */
  public getCellCount(): number {
    return this._terminals.length;
  }

  /** Get grid row count */
  public getRows(): number {
    return this._rows;
  }

  /** Get grid column count */
  public getCols(): number {
    return this._cols;
  }

  /** Get cell labels */
  public getCellLabels(): string[] {
    const labels = this._context.globalState.get<string[]>("cellLabels", []);
    const total = this._rows * this._cols;
    return Array.from({ length: total }, (_, i) => labels[i] || String(i + 1));
  }

  /** Send per-cell config to webview */
  public sendCellConfig(cellId: number, bgColor: string, fgColor: string, fontFamily: string): void {
    this._panel.webview.postMessage({ type: "cellConfig", id: cellId, bgColor, fgColor, fontFamily });
  }

  /** Clear all per-cell overrides in webview */
  public clearCellOverrides(): void {
    this._panel.webview.postMessage({ type: "clearCellOverrides" });
  }

  /** Send current cell labels to webview */
  public sendLabels(): void {
    const labels = this._context.globalState.get<string[]>("cellLabels", []);
    this._panel.webview.postMessage({ type: "setLabels", labels });
  }

  /** Send custom font data to an open terminal panel */
  public loadCustomFonts(fonts: CustomFont[]): void {
    for (const font of fonts) {
      const data = this._readFontBase64(font.path);
      if (data) {
        const ext = path.extname(font.path).toLowerCase();
        this._panel.webview.postMessage({
          type: "loadFont",
          name: font.name,
          data,
          format: FONT_FORMATS[ext] || "truetype",
        });
      }
    }
  }

  private constructor(
    panel: vscode.WebviewPanel,
    context: vscode.ExtensionContext,
    rows: number,
    cols: number
  ) {
    this._panel = panel;
    this._context = context;
    this._rows = rows;
    this._cols = cols;

    this._panel.webview.html = this._getHtml();

    this._panel.webview.onDidReceiveMessage(async (msg) => {
      switch (msg.type) {
        case "ready":
          this._createTerminals(msg.defaultCols, msg.defaultRows);
          // Apply per-cell dimensions if available
          if (msg.cellDims && Array.isArray(msg.cellDims)) {
            for (let i = 0; i < msg.cellDims.length && i < this._terminals.length; i++) {
              const d = msg.cellDims[i] as { cols: number; rows: number };
              if (d?.cols && d?.rows) {
                try { this._terminals[i].pty.resize(d.cols, d.rows); } catch { /* ignore */ }
              }
            }
          }
          // Load custom fonts into webview
          this.loadCustomFonts(
            this._context.globalState.get<CustomFont[]>("customFonts", [])
          );
          // Apply stored per-cell overrides
          const cellOverrides = this._context.globalState.get<Record<number, {bgColor?: string; fgColor?: string; fontFamily?: string}>>("cellOverrides", {});
          for (const [id, ov] of Object.entries(cellOverrides)) {
            if (ov.bgColor || ov.fgColor || ov.fontFamily) {
              this.sendCellConfig(parseInt(id), ov.bgColor || "", ov.fgColor || "", ov.fontFamily || "");
            }
          }
          break;
        case "input":
          this._terminals[msg.id]?.pty.write(msg.data);
          break;
        case "resize":
          try {
            this._terminals[msg.id]?.pty.resize(msg.cols, msg.rows);
          } catch {
            // resize may fail if process exited
          }
          break;
        case "clearTerminal":
          this._panel.webview.postMessage({ type: "clear", id: msg.id });
          break;
        case "killTerminal":
          try {
            this._terminals[msg.id]?.pty.kill();
          } catch {
            // ignore
          }
          break;
        case "restartTerminal":
          this._restartTerminal(msg.id);
          break;
        case "renameCell": {
          const labels = this._context.globalState.get<string[]>("cellLabels", []);
          const current = labels[msg.id] || "";
          const newName = await vscode.window.showInputBox({
            prompt: vscode.l10n.t("Rename cell {0}", msg.id + 1),
            value: current,
            placeHolder: vscode.l10n.t("Enter alias (empty to reset)"),
          });
          if (newName !== undefined) {
            labels[msg.id] = newName;
            await this._context.globalState.update("cellLabels", labels);
            this.sendLabels();
            vscode.commands.executeCommand("terminalGrid._refreshSidebar");
          }
          break;
        }
      }
    });

    // Watch for config changes
    this._configListener = vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("terminalGrid")) {
        const cfg = vscode.workspace.getConfiguration("terminalGrid");
        this._panel.webview.postMessage({
          type: "configUpdate",
          zoom: cfg.get<number>("zoomPercent", 100),
          fontFamily: cfg.get<string>("fontFamily", ""),
          bgColor: cfg.get<string>("backgroundColor", ""),
          fgColor: cfg.get<string>("foregroundColor", ""),
        });
      }
    });

    this._panel.onDidDispose(() => this.dispose());

    this._panel.iconPath = vscode.Uri.joinPath(
      context.extensionUri,
      "images",
      "sidebar.svg"
    );
  }

  private _readFontBase64(fontPath: string): string | null {
    try {
      const buf = fs.readFileSync(fontPath);
      return buf.toString("base64");
    } catch {
      return null;
    }
  }

  private _spawnPty(
    nodePty: typeof import("node-pty") | null,
    cols: number, rows: number, cwd: string
  ): PtyLike {
    if (nodePty) {
      const shell =
        process.platform === "win32"
          ? "powershell.exe"
          : process.env.SHELL || "bash";
      const args = process.platform === "win32" ? ["-NoLogo", "-NoProfile"] : [];
      const proc = nodePty.spawn(shell, args, {
        name: "xterm-256color",
        cols, rows, cwd,
        env: process.env as Record<string, string>,
      });
      return {
        onData: (cb) => { proc.onData(cb); },
        write: (data) => proc.write(data),
        resize: (c, r) => proc.resize(c, r),
        kill: () => proc.kill(),
      };
    }
    // Fallback: child_process.spawn
    const { spawn } = require("child_process") as typeof import("child_process");
    const shell =
      process.platform === "win32"
        ? process.env.COMSPEC || "cmd.exe"
        : process.env.SHELL || "bash";
    const proc = spawn(shell, [], { cwd, env: process.env, windowsHide: true });
    return {
      onData: (cb) => {
        proc.stdout?.on("data", (d: Buffer) => cb(d.toString()));
        proc.stderr?.on("data", (d: Buffer) => cb(d.toString()));
      },
      write: (data) => { proc.stdin?.write(data); },
      resize: () => {},
      kill: () => proc.kill(),
    };
  }

  private _createTerminals(defaultCols: number, defaultRows: number): void {
    const cwd =
      vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ||
      process.env.USERPROFILE ||
      process.env.HOME ||
      ".";

    const total = this._rows * this._cols;
    const nodePty = TerminalGridPanel._getNodePty();
    if (!nodePty) {
      vscode.window.showWarningMessage(
        vscode.l10n.t("node-pty not available. Falling back to basic shell (limited features).")
      );
    }

    // Expand startup commands {command, count}[] → flat list, apply 1:1 to cells
    const rawCmds = this._context.globalState.get<unknown[]>("startupCommands", []);
    const pendingCmds: string[] = [];
    for (const item of rawCmds) {
      if (typeof item === "string") {
        pendingCmds.push(item);
      } else if (item && typeof item === "object" && "command" in item) {
        const sc = item as { command: string; count: number };
        for (let j = 0; j < (sc.count || 1); j++) {
          pendingCmds.push(sc.command);
        }
      }
    }

    const c = defaultCols || 80;
    const r = defaultRows || 24;

    // Spawn + wire handler immediately per cell (handler must be registered
    // before the first PTY output arrives, so spawn and onData stay together)
    for (let i = 0; i < total; i++) {
      const pty = this._spawnPty(nodePty, c, r, cwd);
      const id = i;
      this._outputBuffers[id] = "";
      let startupSent = false;
      pty.onData((data: string) => {
        if (!this._disposed) {
          this._outputBuffers[id] = (this._outputBuffers[id] || "") + data;
          if (this._outputBuffers[id].length > TerminalGridPanel.OUTPUT_BUFFER_SIZE) {
            this._outputBuffers[id] = this._outputBuffers[id].slice(-TerminalGridPanel.OUTPUT_BUFFER_SIZE);
          }
          this._panel.webview.postMessage({ type: "output", id, data });
          if (!startupSent && pendingCmds[id]) {
            startupSent = true;
            this._terminals[id]?.pty.write(pendingCmds[id] + "\r");
          }
        }
      });
      this._terminals.push({ id: i, pty });
    }

    // Send cell labels
    this.sendLabels();
  }

  private _restartTerminal(id: number): void {
    const t = this._terminals[id];
    if (!t) return;

    // Kill old PTY
    try { t.pty.kill(); } catch { /* ignore */ }

    // Reset the webview terminal (full clear + reset state)
    this._panel.webview.postMessage({ type: "reset", id });

    const cwd =
      vscode.workspace.workspaceFolders?.[0]?.uri.fsPath ||
      process.env.USERPROFILE ||
      process.env.HOME ||
      ".";

    const pty = this._spawnPty(TerminalGridPanel._getNodePty(), 80, 24, cwd);

    // Re-apply startup command for this cell
    const rawCmds = this._context.globalState.get<unknown[]>("startupCommands", []);
    const expanded: string[] = [];
    for (const item of rawCmds) {
      if (typeof item === "string") {
        expanded.push(item);
      } else if (item && typeof item === "object" && "command" in item) {
        const sc = item as { command: string; count: number };
        for (let j = 0; j < (sc.count || 1); j++) {
          expanded.push(sc.command);
        }
      }
    }
    const pendingCmd = expanded[id] || "";
    let startupSent = false;
    this._outputBuffers[id] = "";

    pty.onData((data: string) => {
      if (!this._disposed) {
        this._outputBuffers[id] = (this._outputBuffers[id] || "") + data;
        if (this._outputBuffers[id].length > TerminalGridPanel.OUTPUT_BUFFER_SIZE) {
          this._outputBuffers[id] = this._outputBuffers[id].slice(-TerminalGridPanel.OUTPUT_BUFFER_SIZE);
        }
        this._panel.webview.postMessage({ type: "output", id, data });
        if (!startupSent && pendingCmd) {
          startupSent = true;
          this._terminals[id]?.pty.write(pendingCmd + "\r");
        }
      }
    });

    this._terminals[id] = { id, pty };
  }

  public dispose(): void {
    this._disposed = true;
    TerminalGridPanel.currentPanel = undefined;
    this._configListener?.dispose();
    this._context.globalState.update("lastGrid", undefined);

    for (const t of this._terminals) {
      try {
        t.pty.kill();
      } catch {
        // ignore
      }
    }
    this._terminals = [];
    this._panel.dispose();
  }

  private _buildCustomFontCss(): string {
    const fonts = this._context.globalState.get<CustomFont[]>("customFonts", []);
    let css = "";
    for (const font of fonts) {
      const data = this._readFontBase64(font.path);
      if (!data) continue;
      const ext = path.extname(font.path).toLowerCase();
      const format = FONT_FORMATS[ext] || "truetype";
      css += `@font-face { font-family: '${font.name}'; src: url(data:font/${ext.slice(1)};base64,${data}) format('${format}'); font-display: swap; }\n`;
    }
    return css;
  }

  private _getHtml(): string {
    const webview = this._panel.webview;
    const gridTerminalJs = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, "media", "gridTerminal.js")
    );
    const xtermCss = webview.asWebviewUri(
      vscode.Uri.joinPath(this._context.extensionUri, "media", "xterm.css")
    );
    const nonce = getNonce();
    const customFontCss = this._buildCustomFontCss();

    return /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none';
                 style-src ${webview.cspSource} 'unsafe-inline';
                 script-src 'nonce-${nonce}';
                 font-src ${webview.cspSource} data:;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${xtermCss}">
  <style>
    ${customFontCss}
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%; height: 100%;
      overflow: hidden;
      background: var(--vscode-editor-background, #1e1e1e);
    }
    #grid {
      display: grid;
      grid-template-rows: repeat(${this._rows}, 1fr);
      grid-template-columns: repeat(${this._cols}, 1fr);
      width: 100%; height: 100%;
      gap: 2px;
      padding: 2px;
    }
    .cell {
      overflow: hidden;
      contain: strict;
      background: var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e));
      border-radius: 6px;
      border: 1px solid var(--vscode-panel-border, rgba(255,255,255,0.04));
      display: flex;
      flex-direction: column;
      position: relative;
      transition: border-color 0.2s ease;
    }
    .cell.focused {
      border-color: var(--vscode-focusBorder, rgba(0, 127, 212, 0.6));
      box-shadow: 0 0 8px color-mix(in srgb, var(--vscode-focusBorder, #007fd4) 25%, transparent);
    }
    .cell-info {
      position: absolute;
      top: 4px; right: 8px;
      display: flex; align-items: center; gap: 6px;
      font-size: 10px;
      font-family: var(--vscode-terminal-fontFamily, var(--vscode-editor-fontFamily, monospace));
      z-index: 1;
      pointer-events: none;
      user-select: none;
    }
    .cell-label {
      color: var(--vscode-textLink-foreground, #3794ff);
      opacity: 0.6;
    }
    .cell-zoom-pct {
      font-size: 9px;
      color: var(--vscode-textLink-foreground, #3794ff);
      opacity: 0.7;
    }
    .term-container {
      flex: 1;
      overflow: hidden;
      padding: 4px 0 0 4px;
      background: var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e));
    }
    .term-container .xterm,
    .term-container .xterm-viewport,
    .term-container .xterm-screen {
      height: 100%;
    }
    .term-container .xterm-viewport {
      overflow-y: scroll !important;
      will-change: transform;
    }
    .term-container .xterm-viewport::-webkit-scrollbar { width: 4px; }
    .term-container .xterm-viewport::-webkit-scrollbar-thumb {
      background: var(--vscode-scrollbarSlider-background, rgba(255,255,255,0.1));
      border-radius: 2px;
    }
    .term-container .xterm-viewport::-webkit-scrollbar-thumb:hover {
      background: var(--vscode-scrollbarSlider-hoverBackground, rgba(255,255,255,0.2));
    }
    .ctx-menu {
      position: fixed; display: none; z-index: 1000;
      background: var(--vscode-menu-background, #252526);
      border: 1px solid rgba(255,255,255,.12); border-radius: 8px;
      padding: 4px 0; min-width: 140px;
      box-shadow: 0 4px 20px rgba(0,0,0,.4);
    }
    .ctx-menu.show { display: block; }
    .ctx-menu-item {
      padding: 6px 12px; font-size: 12px; cursor: pointer;
      color: var(--vscode-menu-foreground, var(--vscode-foreground));
      transition: background .1s;
    }
    .ctx-menu-item:hover { background: rgba(255,255,255,.06); }
    .ctx-menu-sep { height: 1px; background: rgba(255,255,255,.06); margin: 4px 8px; }
  </style>
</head>
<body>
  <div id="grid"></div>
  <div class="ctx-menu" id="ctxMenu">
    <div class="ctx-menu-item" data-action="copy">${vscode.l10n.t("Copy")}</div>
    <div class="ctx-menu-item" data-action="paste">${vscode.l10n.t("Paste")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="clear">${vscode.l10n.t("Clear")}</div>
    <div class="ctx-menu-item" data-action="restart">${vscode.l10n.t("Restart")}</div>
    <div class="ctx-menu-item" data-action="kill">${vscode.l10n.t("Kill")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="rename">${vscode.l10n.t("Rename")}</div>
  </div>
  <script nonce="${nonce}">
    var __GRID_ROWS = ${this._rows};
    var __GRID_COLS = ${this._cols};
    var __GRID_ZOOM = ${vscode.workspace.getConfiguration("terminalGrid").get<number>("zoomPercent", 100)};
    var __GRID_FONT_FAMILY = ${JSON.stringify(vscode.workspace.getConfiguration("terminalGrid").get<string>("fontFamily", ""))};
    var __GRID_BG_COLOR = ${JSON.stringify(vscode.workspace.getConfiguration("terminalGrid").get<string>("backgroundColor", ""))};
    var __GRID_FG_COLOR = ${JSON.stringify(vscode.workspace.getConfiguration("terminalGrid").get<string>("foregroundColor", ""))};
  </script>
  <script nonce="${nonce}" src="${gridTerminalJs}"></script>
</body>
</html>`;
  }
}

function getNonce(): string {
  let text = "";
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}
