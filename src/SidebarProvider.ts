import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";
import * as cp from "child_process";
import { TerminalGridPanel } from "./TerminalGridPanel";
import { THEME_NAMES, resolveThemeColors } from "./themes";

interface CustomFont {
  name: string;
  path: string;
}

const VALID_FONT_EXTS = [".ttf", ".otf", ".woff", ".woff2"];

function hasNodePty(): boolean {
  try { require("node-pty"); return true; } catch { return false; }
}

export class SidebarProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = "terminalGrid.sidebarView";
  private _view?: vscode.WebviewView;
  private readonly _context: vscode.ExtensionContext;
  private _mcpPort = 0;

  constructor(context: vscode.ExtensionContext) {
    this._context = context;
  }

  public setMcpPort(port: number): void {
    this._mcpPort = port;
    this._view?.webview.postMessage({ type: "mcpPort", port });
  }

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ): void {
    this._view = webviewView;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._context.extensionUri],
    };

    webviewView.webview.html = this._getHtml();

    webviewView.webview.onDidReceiveMessage(async (msg) => {
      switch (msg.type) {
        case "openGrid":
          await vscode.commands.executeCommand(
            "terminalGrid.openCustomGrid",
            msg.rows,
            msg.cols
          );
          this.sendConfig();
          break;
        case "reload":
          await vscode.commands.executeCommand(
            "workbench.action.reloadWindow"
          );
          break;
        case "setConfig": {
          const cfg = vscode.workspace.getConfiguration("terminalGrid");
          if (msg.key && msg.value !== undefined) {
            await cfg.update(msg.key, msg.value, vscode.ConfigurationTarget.Global);
          }
          break;
        }
        case "getConfig": {
          this.sendConfig();
          break;
        }
        case "browseFont": {
          const uris = await vscode.window.showOpenDialog({
            canSelectMany: false,
            filters: { "Font Files": ["ttf", "otf", "woff", "woff2"] },
            title: vscode.l10n.t("Select Font File"),
          });
          if (!uris || uris.length === 0) break;

          const fontPath = uris[0].fsPath;
          const ext = path.extname(fontPath).toLowerCase();
          if (!VALID_FONT_EXTS.includes(ext)) {
            vscode.window.showWarningMessage(vscode.l10n.t("Unsupported font format. Use .ttf, .otf, .woff, or .woff2"));
            break;
          }

          try {
            fs.accessSync(fontPath, fs.constants.R_OK);
          } catch {
            vscode.window.showErrorMessage(vscode.l10n.t("Cannot read font file."));
            break;
          }

          const fontName = path.basename(fontPath, ext);
          const customFonts = this._context.globalState.get<CustomFont[]>("customFonts", []);

          if (!customFonts.some((f) => f.path === fontPath)) {
            customFonts.push({ name: fontName, path: fontPath });
            await this._context.globalState.update("customFonts", customFonts);
          }

          this.sendConfig();

          if (TerminalGridPanel.currentPanel) {
            TerminalGridPanel.currentPanel.loadCustomFonts([{ name: fontName, path: fontPath }]);
          }

          break;
        }
        case "removeFont": {
          const customFonts = this._context.globalState.get<CustomFont[]>("customFonts", []);
          const updated = customFonts.filter((f) => f.name !== msg.name);
          await this._context.globalState.update("customFonts", updated);
          this.sendConfig();
          break;
        }
        case "addStartupCommand": {
          const cmds = this._context.globalState.get<{command: string; count: number}[]>("startupCommands", []);
          cmds.push({ command: msg.command, count: 1 });
          await this._context.globalState.update("startupCommands", cmds);
          this.sendConfig();
          break;
        }
        case "removeStartupCommand": {
          const cmds = this._context.globalState.get<{command: string; count: number}[]>("startupCommands", []);
          cmds.splice(msg.index, 1);
          await this._context.globalState.update("startupCommands", cmds);
          this.sendConfig();
          break;
        }
        case "updateCommandCount": {
          const cmds = this._context.globalState.get<{command: string; count: number}[]>("startupCommands", []);
          if (cmds[msg.index]) {
            cmds[msg.index].count = Math.max(1, msg.count);
            await this._context.globalState.update("startupCommands", cmds);
          }
          this.sendConfig();
          break;
        }
        // ── Project Manager ──
        case "addProject": {
          const projects = this._context.globalState.get<{name: string; path: string}[]>("projects", []);
          if (!projects.some((p) => p.path === msg.path)) {
            projects.push({ name: msg.name, path: msg.path });
            await this._context.globalState.update("projects", projects);
          }
          this.sendConfig();
          break;
        }
        case "removeProject": {
          const projects = this._context.globalState.get<{name: string; path: string}[]>("projects", []);
          projects.splice(msg.index, 1);
          await this._context.globalState.update("projects", projects);
          this.sendConfig();
          break;
        }
        case "openProject": {
          const uri = vscode.Uri.file(msg.path);
          await vscode.commands.executeCommand("vscode.openFolder", uri, { forceNewWindow: !!msg.newWindow });
          break;
        }
        case "addCurrentProject": {
          const folder = vscode.workspace.workspaceFolders?.[0];
          if (!folder) {
            vscode.window.showWarningMessage(vscode.l10n.t("No workspace folder open."));
            break;
          }
          const projects = this._context.globalState.get<{name: string; path: string}[]>("projects", []);
          const folderPath = folder.uri.fsPath;
          if (!projects.some((p) => p.path === folderPath)) {
            projects.push({ name: folder.name, path: folderPath });
            await this._context.globalState.update("projects", projects);
          }
          this.sendConfig();
          break;
        }
        case "browseProject": {
          const uris = await vscode.window.showOpenDialog({
            canSelectFiles: false,
            canSelectFolders: true,
            canSelectMany: false,
            title: vscode.l10n.t("Select Project Folder"),
          });
          if (!uris || uris.length === 0) break;
          const folderPath = uris[0].fsPath;
          const folderName = path.basename(folderPath);
          const projects = this._context.globalState.get<{name: string; path: string}[]>("projects", []);
          if (!projects.some((p) => p.path === folderPath)) {
            projects.push({ name: folderName, path: folderPath });
            await this._context.globalState.update("projects", projects);
          }
          this.sendConfig();
          break;
        }
        // ── Presets ──
        case "savePreset": {
          await this._savePreset(msg.name);
          this.sendConfig();
          break;
        }
        case "loadPreset": {
          const presets = this._context.globalState.get<Record<string, unknown>[]>("presets", []);
          const preset = presets.find((p) => (p as {name: string}).name === msg.name) as {
            name: string; rows: number; cols: number;
            startupCommands: {command: string; count: number}[];
            cellLabels: string[]; zoomPercent: number;
            fontFamily: string; bgColor: string; fgColor: string;
            colorTheme?: string;
          } | undefined;
          if (!preset) break;
          const cfg = vscode.workspace.getConfiguration("terminalGrid");
          await cfg.update("defaultRows", preset.rows, vscode.ConfigurationTarget.Global);
          await cfg.update("defaultCols", preset.cols, vscode.ConfigurationTarget.Global);
          await cfg.update("zoomPercent", preset.zoomPercent, vscode.ConfigurationTarget.Global);
          await cfg.update("fontFamily", preset.fontFamily, vscode.ConfigurationTarget.Global);
          await cfg.update("backgroundColor", preset.bgColor, vscode.ConfigurationTarget.Global);
          await cfg.update("foregroundColor", preset.fgColor, vscode.ConfigurationTarget.Global);
          await cfg.update("colorTheme", preset.colorTheme || "", vscode.ConfigurationTarget.Global);
          await this._context.globalState.update("startupCommands", preset.startupCommands || []);
          await this._context.globalState.update("cellLabels", preset.cellLabels || []);
          // Auto-open grid with loaded preset dimensions
          TerminalGridPanel.createOrShow(this._context, preset.rows, preset.cols);
          this.sendConfig();
          break;
        }
        case "deletePreset": {
          const presets = this._context.globalState.get<Record<string, unknown>[]>("presets", []);
          const filtered = presets.filter((p) => (p as {name: string}).name !== msg.name);
          await this._context.globalState.update("presets", filtered);
          // Also remove any project links to this preset
          const projectPresets = this._context.globalState.get<Record<string, string>>("projectPresets", {});
          for (const key of Object.keys(projectPresets)) {
            if (projectPresets[key] === msg.name) {
              delete projectPresets[key];
            }
          }
          await this._context.globalState.update("projectPresets", projectPresets);
          this.sendConfig();
          break;
        }
        case "linkPreset": {
          const projectPresets = this._context.globalState.get<Record<string, string>>("projectPresets", {});
          if (msg.presetName) {
            projectPresets[msg.projectPath] = msg.presetName;
          } else {
            delete projectPresets[msg.projectPath];
          }
          await this._context.globalState.update("projectPresets", projectPresets);
          this.sendConfig();
          break;
        }
        // ── Broadcast ──
        case "broadcast": {
          if (TerminalGridPanel.currentPanel) {
            TerminalGridPanel.currentPanel.broadcastInput(msg.text);
          } else {
            vscode.window.showWarningMessage(vscode.l10n.t("No terminal grid is open."));
          }
          break;
        }
        case "broadcastToCell": {
          if (TerminalGridPanel.currentPanel) {
            for (const id of msg.cellIds as number[]) {
              TerminalGridPanel.currentPanel.sendInputToCell(id, msg.text);
            }
          } else {
            vscode.window.showWarningMessage(vscode.l10n.t("No terminal grid is open."));
          }
          break;
        }
        // ── Per-cell config ──
        case "setCellConfig": {
          const overrides = this._context.globalState.get<Record<number, {bgColor?: string; fgColor?: string; fontFamily?: string; themeName?: string}>>("cellOverrides", {});
          overrides[msg.cellId] = { bgColor: msg.bgColor || "", fgColor: msg.fgColor || "", fontFamily: msg.fontFamily || "", themeName: msg.themeName || "" };
          await this._context.globalState.update("cellOverrides", overrides);
          if (TerminalGridPanel.currentPanel) {
            const tc = msg.themeName ? resolveThemeColors(msg.themeName) : null;
            TerminalGridPanel.currentPanel.sendCellConfig(msg.cellId, msg.bgColor || "", msg.fgColor || "", msg.fontFamily || "", msg.themeName || "", tc);
          }
          break;
        }
        case "clearAllCellOverrides": {
          await this._context.globalState.update("cellOverrides", {});
          if (TerminalGridPanel.currentPanel) {
            TerminalGridPanel.currentPanel.clearCellOverrides();
          }
          break;
        }
        case "saveSectionStates": {
          await this._context.globalState.update("sectionStates", msg.states);
          break;
        }
        // ── node-pty install ──
        case "installNodePty": {
          try {
            await vscode.window.withProgress(
              { location: vscode.ProgressLocation.Notification, title: vscode.l10n.t("Installing node-pty…"), cancellable: false },
              () => new Promise<void>((resolve, reject) => {
                cp.exec("npm install node-pty", { cwd: this._context.extensionPath }, (err) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve();
                  }
                });
              })
            );
            // Notify sidebar of success
            this._view?.webview.postMessage({ type: "ptyInstallResult", success: true });
            const reloadLabel = vscode.l10n.t("Reload Window");
            const ans = await vscode.window.showInformationMessage(
              vscode.l10n.t("node-pty installed successfully. Reload window to activate."),
              reloadLabel
            );
            if (ans === reloadLabel) {
              vscode.commands.executeCommand("workbench.action.reloadWindow");
            }
          } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            vscode.window.showErrorMessage(vscode.l10n.t("node-pty install failed: {0}", message));
            this._view?.webview.postMessage({ type: "ptyInstallResult", success: false });
          }
          break;
        }
      }
    });

    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration("terminalGrid")) {
        this.sendConfig();
      }
    });
  }

  private async _savePreset(name: string): Promise<void> {
    const cfg = vscode.workspace.getConfiguration("terminalGrid");
    const preset = {
      name,
      rows: cfg.get<number>("defaultRows", 2),
      cols: cfg.get<number>("defaultCols", 3),
      startupCommands: this._context.globalState.get<{command: string; count: number}[]>("startupCommands", []),
      cellLabels: this._context.globalState.get<string[]>("cellLabels", []),
      zoomPercent: cfg.get<number>("zoomPercent", 100),
      fontFamily: cfg.get<string>("fontFamily", ""),
      bgColor: cfg.get<string>("backgroundColor", ""),
      fgColor: cfg.get<string>("foregroundColor", ""),
      colorTheme: cfg.get<string>("colorTheme", ""),
    };
    const presets = this._context.globalState.get<Record<string, unknown>[]>("presets", []);
    const existIdx = presets.findIndex((p) => (p as {name: string}).name === name);
    if (existIdx >= 0) {
      presets[existIdx] = preset;
    } else {
      presets.push(preset);
    }
    await this._context.globalState.update("presets", presets);
  }

  public sendConfig(): void {
    if (!this._view) return;
    const cfg = vscode.workspace.getConfiguration("terminalGrid");
    const customFonts = this._context.globalState.get<CustomFont[]>("customFonts", []);
    const startupCommands = this._context.globalState.get<{command: string; count: number}[]>("startupCommands", []);
    const projects = this._context.globalState.get<{name: string; path: string}[]>("projects", []);
    const presets = this._context.globalState.get<Record<string, unknown>[]>("presets", []);
    const projectPresets = this._context.globalState.get<Record<string, string>>("projectPresets", {});
    const cellLabels = this._context.globalState.get<string[]>("cellLabels", []);
    const cellOverrides = this._context.globalState.get<Record<number, {bgColor?: string; fgColor?: string; fontFamily?: string}>>("cellOverrides", {});
    const sectionStates = this._context.globalState.get<Record<string, boolean>>("sectionStates", {});
    const workspacePath = vscode.workspace.workspaceFolders?.[0]?.uri.fsPath || "";
    const panel = TerminalGridPanel.currentPanel;
    this._view.webview.postMessage({
      type: "configValues",
      zoom: cfg.get<number>("zoomPercent", 100),
      fontFamily: cfg.get<string>("fontFamily", ""),
      bgColor: cfg.get<string>("backgroundColor", ""),
      fgColor: cfg.get<string>("foregroundColor", ""),
      colorTheme: cfg.get<string>("colorTheme", ""),
      themeNames: THEME_NAMES,
      customFonts: customFonts.map((f) => f.name),
      startupCommands: startupCommands,
      projects: projects,
      presets: presets,
      projectPresets: projectPresets,
      cellLabels: cellLabels,
      cellOverrides: cellOverrides,
      sectionStates: sectionStates,
      workspacePath: workspacePath,
      gridRows: panel?.getRows() ?? 0,
      gridCols: panel?.getCols() ?? 0,
    });
  }

  private _getHtml(): string {
    const nonce = getNonce();

    return /*html*/ `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${nonce}';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: var(--vscode-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      color: var(--vscode-foreground);
      background: transparent;
      -webkit-font-smoothing: antialiased;
    }
    .container { padding: 16px 12px; display: flex; flex-direction: column; gap: 0; }
    .glass-card + .glass-card { margin-top: 10px; }
    .glass-card.collapsed + .glass-card { margin-top: 4px; }
    .glass-card + .glass-card.collapsed { margin-top: 4px; }
    .glass-card.collapsed + .glass-card.collapsed { margin-top: 2px; }
    .hint { margin-top: 10px; }

    .glass-card {
      background: rgba(255,255,255,0.025);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px; padding: 18px 16px;
      transition: border-color .3s, box-shadow .3s;
      position: relative;
    }
    .glass-card:has(.tip-wrap:hover) { z-index: 300; }
    .glass-card:hover { border-color: rgba(255,255,255,.10); box-shadow: 0 4px 24px rgba(0,0,0,.12); }

    .section-label {
      font-size: 11px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.8px; opacity: .5; margin-bottom: 16px; user-select: none;
      color: var(--vscode-textLink-foreground, #3794ff);
    }

    .grid-selector-wrap { display: flex; justify-content: center; margin-bottom: 14px; }
    .grid-selector { display: inline-grid; gap: 4px; }
    .grid-cell {
      width: 30px; height: 30px;
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 6px; cursor: pointer;
      transition: all .1s ease;
    }
    .grid-cell.highlight {
      background: linear-gradient(135deg,rgba(0,127,212,.30),rgba(0,200,255,.18));
      border-color: rgba(0,160,230,.45);
    }
    .grid-cell.selected {
      background: linear-gradient(135deg,rgba(0,127,212,.45),rgba(0,200,255,.28));
      border-color: rgba(0,160,230,.6);
      box-shadow: 0 0 10px rgba(0,150,230,.12);
    }

    .size-label {
      text-align: center; font-size: 15px; font-weight: 600;
      opacity: .65; margin-bottom: 16px; font-variant-numeric: tabular-nums;
    }
    .size-label .num { color: var(--vscode-textLink-foreground,#3794ff); font-size: 20px; font-weight: 700; }

    .glass-btn {
      width: 100%; padding: 11px 14px;
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 10px; color: var(--vscode-foreground);
      cursor: pointer; font-size: 12px; font-weight: 500; font-family: inherit;
      transition: all .2s ease;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      outline: none; user-select: none;
    }
    .glass-btn:hover {
      background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.14);
      transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.1);
    }
    .glass-btn:active { transform: translateY(0); box-shadow: none; }
    .glass-btn.primary {
      background: linear-gradient(135deg,rgba(0,127,212,.22),rgba(0,200,255,.10));
      border-color: rgba(0,150,220,.35);
    }
    .glass-btn.primary:hover {
      background: linear-gradient(135deg,rgba(0,127,212,.35),rgba(0,200,255,.18));
      border-color: rgba(0,150,220,.55);
      box-shadow: 0 4px 20px rgba(0,150,230,.12);
    }
    .btn-group { display: flex; flex-direction: column; gap: 8px; }
    .btn-icon { font-size: 15px; opacity: .75; line-height: 1; }

    /* ── Settings controls ── */
    .setting-row {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 12px; gap: 12px;
    }
    .setting-row:last-child { margin-bottom: 0; }
    .setting-label { font-size: 11px; opacity: .6; white-space: nowrap; flex-shrink: 0; }
    .stepper { display: flex; align-items: center; gap: 4px; }
    .stepper-btn {
      width: 24px; height: 24px;
      border: 1px solid rgba(255,255,255,.08); border-radius: 6px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      font-size: 14px; font-family: monospace;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all .15s ease; padding: 0; line-height: 1;
    }
    .stepper-btn:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.16); }
    .stepper-val {
      min-width: 40px; text-align: center; font-size: 12px; font-weight: 600;
      font-variant-numeric: tabular-nums; opacity: .8;
    }

    /* ── Font dropdown (opens upward) ── */
    .font-picker { position: relative; flex: 1; }
    .font-display {
      display: flex; align-items: center; justify-content: space-between;
      padding: 5px 8px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; cursor: pointer; transition: border-color .15s; user-select: none;
    }
    .font-display:hover { border-color: rgba(255,255,255,.16); }
    .font-display.open { border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .font-display-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
    .font-display-arrow { opacity: .4; font-size: 8px; margin-left: 6px; flex-shrink: 0; }
    .font-dropdown {
      display: none;
      position: absolute; bottom: calc(100% + 4px); left: 0; right: 0;
      background: var(--vscode-dropdown-background, #252526);
      border: 1px solid rgba(255,255,255,.12); border-radius: 8px;
      max-height: 220px; overflow-y: auto; z-index: 100; padding: 4px 0;
      box-shadow: 0 -4px 24px rgba(0,0,0,.3);
    }
    .font-dropdown.show { display: block; }
    .font-dropdown::-webkit-scrollbar { width: 4px; }
    .font-dropdown::-webkit-scrollbar-thumb { background: rgba(255,255,255,.12); border-radius: 2px; }
    .font-opt {
      display: flex; align-items: center; padding: 5px 10px; font-size: 11px;
      cursor: pointer; transition: background .1s;
    }
    .font-opt:hover { background: rgba(255,255,255,.06); }
    .font-opt.active { background: rgba(0,127,212,.18); }
    .font-opt-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .font-opt-del {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 14px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; margin-left: 4px; transition: all .1s;
    }
    .font-opt-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    .font-divider { height: 1px; background: rgba(255,255,255,.06); margin: 4px 8px; }
    .font-opt-add {
      display: flex; align-items: center; gap: 6px; padding: 5px 10px; font-size: 11px;
      cursor: pointer; transition: background .1s;
      color: var(--vscode-textLink-foreground, #3794ff);
    }
    .font-opt-add:hover { background: rgba(255,255,255,.06); }

    /* ── Color picker ── */
    .color-row { display: flex; align-items: center; gap: 6px; }
    .color-swatch {
      width: 24px; height: 24px; border-radius: 6px;
      border: 1px solid rgba(255,255,255,.12); cursor: pointer;
      position: relative; overflow: hidden; flex-shrink: 0;
    }
    .color-swatch input[type="color"] {
      position: absolute; top: -4px; left: -4px;
      width: 32px; height: 32px; border: none; cursor: pointer;
      opacity: 0;
    }
    .color-swatch-fill {
      width: 100%; height: 100%; border-radius: 5px;
    }
    .color-val {
      font-size: 11px; opacity: .6; flex: 1;
      font-family: monospace; font-variant-numeric: tabular-nums;
    }
    .color-reset {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 13px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all .1s; flex-shrink: 0;
    }
    .color-reset:hover { background: rgba(255,255,255,.08); color: var(--vscode-foreground); }
    .color-reset.hidden { visibility: hidden; }

    .hint {
      font-size: 11px; opacity: .35; text-align: center;
      line-height: 1.5; margin-top: 4px;
    }

    /* ── Tooltip ── */
    .section-header {
      display: flex; align-items: center; gap: 6px;
      margin-bottom: 16px; position: relative;
    }
    .section-header .section-label { margin-bottom: 0; }
    .tip-icon {
      width: 14px; height: 14px; border-radius: 50%;
      background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
      font-size: 9px; display: inline-flex; align-items: center; justify-content: center;
      cursor: help; opacity: .5; transition: opacity .15s; flex-shrink: 0;
    }
    .tip-icon:hover { opacity: .9; }
    .tip-wrap { display: inline-flex; }
    .tip-bubble {
      display: none; position: absolute;
      top: calc(100% + 4px); left: 0; right: 0;
      width: auto; padding: 10px 12px;
      background: var(--vscode-editorHoverWidget-background, #2d2d30);
      border: 1px solid var(--vscode-editorHoverWidget-border, rgba(255,255,255,.12));
      border-radius: 8px; font-size: 11px; line-height: 1.55;
      color: var(--vscode-editorHoverWidget-foreground, var(--vscode-foreground));
      box-shadow: 0 4px 20px rgba(0,0,0,.35);
      z-index: 200; white-space: normal; pointer-events: auto;
    }
    .tip-wrap:hover .tip-bubble { display: block; }
    .tip-bubble b { opacity: .9; }
    .tip-bubble .tip-example {
      margin-top: 8px; padding: 6px 8px;
      background: rgba(0,0,0,.2); border-radius: 5px;
      font-family: monospace; font-size: 10px; line-height: 1.6;
    }

    /* ── Startup Commands ── */
    .cmd-list { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
    .cmd-item {
      display: flex; align-items: center; gap: 6px;
      padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 6px; font-size: 11px;
    }
    .cmd-item-range {
      opacity: .35; font-size: 9px; min-width: 22px; flex-shrink: 0;
      font-variant-numeric: tabular-nums; text-align: right;
    }
    .cmd-item-text {
      flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: monospace; opacity: .85;
    }
    .cmd-count { display: flex; align-items: center; gap: 2px; flex-shrink: 0; }
    .cmd-count-btn {
      width: 18px; height: 18px;
      border: 1px solid rgba(255,255,255,.06); border-radius: 4px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      font-size: 12px; font-family: monospace;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all .12s; padding: 0; line-height: 1;
    }
    .cmd-count-btn:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.14); }
    .cmd-count-val {
      min-width: 18px; text-align: center; font-size: 11px; font-weight: 600;
      font-variant-numeric: tabular-nums; opacity: .7;
    }
    .cmd-item-del {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 14px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .1s; margin-left: 2px;
    }
    .cmd-item-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    .cmd-add-row { display: flex; gap: 6px; align-items: center; margin-bottom: 6px; }
    .glass-select {
      flex: 1; padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; font-family: inherit; outline: none; cursor: pointer;
    }
    .glass-select:hover { border-color: rgba(255,255,255,.16); }
    .glass-select option { background: var(--vscode-dropdown-background, #252526); }
    .glass-input {
      flex: 1; padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; font-family: monospace; outline: none;
    }
    .glass-input:focus { border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .cmd-empty { font-size: 11px; opacity: .35; text-align: center; padding: 8px 0; }

    /* ── Broadcast targets ── */
    .broadcast-targets {
      display: flex; flex-wrap: wrap; gap: 6px;
      margin-bottom: 10px;
    }
    .broadcast-targets.hidden { display: none; }
    .broadcast-target {
      display: flex; align-items: center; gap: 3px;
      font-size: 11px; opacity: .7; cursor: pointer; user-select: none;
    }
    .broadcast-target input[type="checkbox"] {
      accent-color: var(--vscode-textLink-foreground, #3794ff);
      cursor: pointer; margin: 0;
    }
    .broadcast-target.all-label { font-weight: 600; opacity: .85; margin-right: 4px; }

    /* ── Collapsible sections ── */
    .section-header.collapsible { cursor: pointer; user-select: none; }
    .collapse-icon {
      font-size: 10px; opacity: .4; transition: transform .2s;
      margin-left: auto; flex-shrink: 0;
    }
    .glass-card.collapsed .collapse-icon { transform: rotate(-90deg); }
    .glass-card.collapsed .section-body { display: none; }
    .glass-card.collapsed { padding: 8px 16px; }
    .glass-card.collapsed .section-header { margin-bottom: 0; }

    /* ── Settings tabs ── */
    .settings-tabs {
      display: flex; flex-wrap: wrap; gap: 4px;
      margin-bottom: 12px;
    }
    .settings-tabs.hidden { display: none; }
    .stab {
      padding: 3px 8px; font-size: 10px; font-weight: 600;
      border: 1px solid rgba(255,255,255,.08); border-radius: 6px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      cursor: pointer; transition: all .15s; font-family: inherit;
      opacity: .6; line-height: 1.4;
    }
    .stab:hover { background: rgba(255,255,255,.06); opacity: .8; }
    .stab.active {
      background: rgba(0,127,212,.18); border-color: rgba(0,150,220,.4);
      opacity: 1; color: var(--vscode-textLink-foreground, #3794ff);
    }
    .stab.has-override {
      border-color: rgba(255,170,0,.35);
    }
    /* ── node-pty banner ── */
    .pty-banner {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 14px;
      background: linear-gradient(135deg, rgba(255,170,0,.12), rgba(255,120,0,.08));
      border: 1px solid rgba(255,170,0,.25);
      border-radius: 10px;
      font-size: 11px; line-height: 1.45;
    }
    .pty-banner-icon { font-size: 16px; flex-shrink: 0; }
    .pty-banner-text { flex: 1; opacity: .85; }
    .pty-banner-btn {
      padding: 5px 10px;
      background: rgba(255,170,0,.18);
      border: 1px solid rgba(255,170,0,.35);
      border-radius: 6px; color: var(--vscode-foreground);
      cursor: pointer; font-size: 10px; font-weight: 600; font-family: inherit;
      white-space: nowrap; transition: all .15s; flex-shrink: 0;
    }
    .pty-banner-btn:hover {
      background: rgba(255,170,0,.3);
      border-color: rgba(255,170,0,.5);
    }
  </style>
</head>
<body>
  <div class="container">
    ${!hasNodePty() ? `
    <div class="pty-banner" id="ptyBanner">
      <span class="pty-banner-icon">\u26A0</span>
      <span class="pty-banner-text">${vscode.l10n.t("node-pty is required to use Terminal Grid.")}</span>
      <button class="pty-banner-btn" id="ptyInstallBtn">${vscode.l10n.t("Install")}</button>
    </div>
    ` : ''}
    <!-- Projects -->
    <div class="glass-card" data-section="projects">
      <div class="section-header collapsible">
        <div class="section-label">${vscode.l10n.t("Projects")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${vscode.l10n.t("Register projects and click to switch folders. Ctrl+Click to open in a new window. If a preset is linked, it will be auto-applied on switch.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="mcpPortInfo" style="font-size: 11px; opacity: 0.7; margin-bottom: 8px; display: ${this._mcpPort > 0 ? 'block' : 'none'};">
          MCP Port: <span id="mcpPortValue">${this._mcpPort}</span>
        </div>
        <div id="projectList" class="cmd-list"></div>
        <div class="btn-group" style="gap: 6px;">
          <button class="glass-btn" id="addCurrentProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">+</span> ${vscode.l10n.t("Add Current Folder")}
          </button>
          <button class="glass-btn" id="browseProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">&#128193;</span> ${vscode.l10n.t("Browse Folder")}
          </button>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="gridSize">
      <div class="section-header collapsible">
        <div class="section-label">${vscode.l10n.t("Select Grid Size")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${vscode.l10n.t("Hover to select the desired rows×cols size. Supports up to 4×5 (20 cells). Grid opens as an editor tab, each cell is an independent terminal.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="grid-selector-wrap">
          <div class="grid-selector" id="gridSelector"></div>
        </div>
        <div class="size-label" id="sizeLabel"></div>
        <button class="glass-btn primary" id="openGridBtn">
          <span class="btn-icon">&#9654;</span> ${vscode.l10n.t("Open Grid")}
        </button>
      </div>
    </div>

    <div class="glass-card" data-section="settings">
      <div class="section-header collapsible">
        <div class="section-label">${vscode.l10n.t("Terminal Settings")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${vscode.l10n.t("Zoom: Global font size (50–300%). Font/Color: Use tabs for global or per-cell settings. Changes in All tab apply to all cells. Set global first, then customize individual cells. Individual cells can be zoomed separately with Ctrl+Wheel.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="setting-row">
          <span class="setting-label">${vscode.l10n.t("Zoom")}</span>
          <div class="stepper">
            <button class="stepper-btn" id="zoomDown">\u2212</button>
            <span class="stepper-val" id="zoomVal">100%</span>
            <button class="stepper-btn" id="zoomUp">+</button>
          </div>
        </div>

        <div id="settingsTabs" class="settings-tabs hidden"></div>

        <div class="setting-row">
          <span class="setting-label">${vscode.l10n.t("Theme")}</span>
          <div class="font-picker" id="themePicker">
            <div class="font-display" id="themeDisplay">
              <span class="font-display-text" id="themeDisplayText">${vscode.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="themeDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${vscode.l10n.t("Font")}</span>
          <div class="font-picker" id="fontPicker">
            <div class="font-display" id="fontDisplay">
              <span class="font-display-text" id="fontDisplayText">${vscode.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="fontDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${vscode.l10n.t("Back Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="bgSwatch">
              <div class="color-swatch-fill" id="bgSwatchFill"></div>
              <input type="color" id="bgColorInput" value="#1e1e1e">
            </div>
            <span class="color-val" id="bgVal">${vscode.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="bgReset" title="${vscode.l10n.t("Reset to IDE Default")}">\u00d7</button>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${vscode.l10n.t("Font Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="fgSwatch">
              <div class="color-swatch-fill" id="fgSwatchFill"></div>
              <input type="color" id="fgColorInput" value="#cccccc">
            </div>
            <span class="color-val" id="fgVal">${vscode.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="fgReset" title="${vscode.l10n.t("Reset to IDE Default")}">\u00d7</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="startup">
      <div class="section-header collapsible">
        <div class="section-label">${vscode.l10n.t("Startup Commands")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${vscode.l10n.t("Commands are auto-executed in each cell when the grid opens. Use ×N to repeat the same command for N cells. Extra cells beyond the command list open as default terminals.")}
            <div class="tip-example">
              claude \xD73 + codex \xD71<br>
              \u2192 2\xD73 Grid:<br>
              &nbsp;&nbsp;Cell 1\u20133: claude<br>
              &nbsp;&nbsp;Cell 4: codex<br>
              &nbsp;&nbsp;Cell 5\u20136: default
            </div>
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-list" id="cmdList"></div>
        <div class="cmd-add-row">
          <select class="glass-select" id="cmdPreset">
            <option value="">${vscode.l10n.t("Add preset…")}</option>
            <option value="claude">claude</option>
            <option value="codex">codex</option>
            <option value="claude --dangerously-skip-permissions">claude --dangerously-skip-permissions</option>
            <option value="codex -s danger-full-access -a never">codex -s danger-full-access -a never</option>
          </select>
        </div>
        <div class="cmd-add-row">
          <input class="glass-input" id="cmdCustom" placeholder="${vscode.l10n.t("Custom command…")}" />
          <button class="stepper-btn" id="cmdAddBtn" title="${vscode.l10n.t("Add")}">+</button>
        </div>
      </div>
    </div>

    <!-- Presets -->
    <div class="glass-card" data-section="presets">
      <div class="section-header collapsible">
        <div class="section-label">${vscode.l10n.t("Presets")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${vscode.l10n.t("Save and load current grid settings (size, zoom, font, color, commands, cell labels) as presets. Use Link to project for per-project auto-apply.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-add-row">
          <input class="glass-input" id="presetNameInput" placeholder="${vscode.l10n.t("Preset name…")}" style="flex: 1;" />
        </div>
        <div class="cmd-add-row" style="margin-top: 4px;">
          <select class="glass-select" id="presetSelect" style="flex: 1;">
            <option value="">${vscode.l10n.t("Select preset…")}</option>
          </select>
        </div>
        <div class="btn-group" style="gap: 6px; margin-top: 8px;">
          <div style="display: flex; gap: 6px;">
            <button class="glass-btn" id="presetSaveBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${vscode.l10n.t("Save")}</button>
            <button class="glass-btn primary" id="presetLoadBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${vscode.l10n.t("Load")}</button>
            <button class="glass-btn" id="presetDeleteBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${vscode.l10n.t("Delete")}</button>
          </div>
          <div id="presetLinkRow" style="display: flex; align-items: center; gap: 6px; font-size: 11px; opacity: .7; margin-top: 4px;">
            <input type="checkbox" id="presetLinkCheck" style="margin: 0;" />
            <label id="presetLinkLabel" for="presetLinkCheck" style="cursor: pointer;">${vscode.l10n.t("Link to current project")}</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Broadcast Input -->
    <div class="glass-card" data-section="broadcast">
      <div class="section-header collapsible">
        <div class="section-label">${vscode.l10n.t("Broadcast Input")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${vscode.l10n.t("Send text to selected terminals. Check All to send to all cells, uncheck for individual selection.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="broadcastTargets" class="broadcast-targets hidden"></div>
        <div class="cmd-add-row" style="flex-direction: column; gap: 4px;">
          <textarea class="glass-input" id="broadcastInput" placeholder="${vscode.l10n.t("Type command…")}" rows="3" style="width: 100%; resize: vertical; font-family: var(--vscode-editor-fontFamily, monospace); font-size: 12px; line-height: 1.4;"></textarea>
          <div style="display: flex; justify-content: flex-end;">
            <button class="stepper-btn" id="broadcastSendBtn" title="${vscode.l10n.t("Send")}" style="width: 50px;">${vscode.l10n.t("Send")}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="actions">
      <div class="section-header collapsible">
        <div class="section-label">${vscode.l10n.t("Actions")}</div>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="btn-group">
          <button class="glass-btn" id="reloadBtn">
            <span class="btn-icon">&#8635;</span> ${vscode.l10n.t("Reload Window")}
          </button>
        </div>
      </div>
    </div>

    <div class="hint">
      ${vscode.l10n.t("Grid opens as an editor tab.\nCtrl+Wheel to zoom individual cells.").replace('\n', '<br>')}
    </div>
  </div>

  <script nonce="${nonce}">
    var __i18n = ${JSON.stringify({
      installing: vscode.l10n.t("Installing…"),
      ideDefault: vscode.l10n.t("IDE Default"),
      remove: vscode.l10n.t("Remove"),
      addFontFile: vscode.l10n.t("Add font file…"),
      all: vscode.l10n.t("All"),
      noStartupCommands: vscode.l10n.t("No startup commands configured"),
      noProjects: vscode.l10n.t("No projects registered"),
      linkedPrefix: vscode.l10n.t("Linked: {0}"),
      linkToProject: vscode.l10n.t("Link to current project"),
      selectPreset: vscode.l10n.t("Select preset…"),
      reload: vscode.l10n.t("Reload"),
      retry: vscode.l10n.t("Retry"),
      ptyInstalled: vscode.l10n.t("node-pty installed successfully!"),
      ptyInstalledHint: vscode.l10n.t("Reload the window to activate."),
      theme: vscode.l10n.t("Theme"),
    })};
    var vscode = acquireVsCodeApi();

    // node-pty install button
    var ptyInstallBtn = document.getElementById('ptyInstallBtn');
    if (ptyInstallBtn) {
      ptyInstallBtn.addEventListener('click', function() {
        ptyInstallBtn.textContent = __i18n.installing;
        ptyInstallBtn.disabled = true;
        vscode.postMessage({ type: 'installNodePty' });
      });
    }

    var MAX_ROWS = 4, MAX_COLS = 5;
    var selectedRows = 2, selectedCols = 3;
    var hoverRow = -1, hoverCol = -1;

    var saved = vscode.getState();
    if (saved) { selectedRows = saved.rows || 2; selectedCols = saved.cols || 3; }

    var gridEl = document.getElementById('gridSelector');
    gridEl.style.gridTemplateColumns = 'repeat(' + MAX_COLS + ', 1fr)';
    var cells = [];

    for (var r = 0; r < MAX_ROWS; r++) {
      for (var c = 0; c < MAX_COLS; c++) {
        (function(row, col) {
          var cell = document.createElement('div');
          cell.className = 'grid-cell';
          cell.addEventListener('mouseenter', function() { hoverRow = row; hoverCol = col; render(); });
          cell.addEventListener('click', function() {
            selectedRows = row + 1; selectedCols = col + 1;
            hoverRow = -1; hoverCol = -1;
            render();
            vscode.setState({ rows: selectedRows, cols: selectedCols });
          });
          gridEl.appendChild(cell);
          cells.push({ el: cell, row: row, col: col });
        })(r, c);
      }
    }

    gridEl.addEventListener('mouseleave', function() { hoverRow = -1; hoverCol = -1; render(); });

    function render() {
      var isH = hoverRow >= 0;
      var aR = isH ? hoverRow : selectedRows - 1;
      var aC = isH ? hoverCol : selectedCols - 1;
      for (var i = 0; i < cells.length; i++) {
        var inside = cells[i].row <= aR && cells[i].col <= aC;
        cells[i].el.classList.toggle('highlight', inside && isH);
        cells[i].el.classList.toggle('selected', inside && !isH);
      }
      var dR = aR + 1, dC = aC + 1;
      document.getElementById('sizeLabel').innerHTML =
        '<span class="num">' + dR + '</span> \\u00d7 <span class="num">' + dC + '</span>';
    }
    render();

    document.getElementById('openGridBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'openGrid', rows: selectedRows, cols: selectedCols });
    });
    document.getElementById('reloadBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'reload' });
    });

    // ── Collapsible sections ──
    var collapsedSections = {};
    document.querySelectorAll('.section-header.collapsible').forEach(function(header) {
      header.addEventListener('click', function(e) {
        if (e.target.closest('.tip-wrap')) return;
        var card = header.closest('.glass-card');
        if (!card) return;
        card.classList.toggle('collapsed');
        var section = card.dataset.section;
        if (section) {
          collapsedSections[section] = card.classList.contains('collapsed');
          vscode.postMessage({ type: 'saveSectionStates', states: collapsedSections });
        }
      });
    });

    function applySectionStates(states) {
      if (!states) return;
      collapsedSections = states;
      document.querySelectorAll('.glass-card[data-section]').forEach(function(card) {
        var section = card.dataset.section;
        if (states[section]) {
          card.classList.add('collapsed');
        } else {
          card.classList.remove('collapsed');
        }
      });
    }

    // ── Settings ──
    var curZoom = 100, curFontFamily = '', curBg = '', curFg = '';
    var curThemeName = '';
    var themeNames = [''];
    var activeSettingsTab = 'all';
    var cellOverrides = {}; // { 0: { bgColor, fgColor, fontFamily, themeName }, ... }
    var settingsTabsEl = document.getElementById('settingsTabs');
    var builtinFonts = [
      { value: '', label: __i18n.ideDefault },
      { value: 'Consolas', label: 'Consolas' },
      { value: 'Cascadia Code', label: 'Cascadia Code' },
      { value: 'Cascadia Mono', label: 'Cascadia Mono' },
      { value: 'JetBrains Mono', label: 'JetBrains Mono' },
      { value: 'Fira Code', label: 'Fira Code' },
      { value: 'Source Code Pro', label: 'Source Code Pro' },
      { value: 'D2Coding', label: 'D2Coding' },
      { value: 'Ubuntu Mono', label: 'Ubuntu Mono' },
      { value: 'Menlo', label: 'Menlo' },
      { value: 'Monaco', label: 'Monaco' },
      { value: 'Courier New', label: 'Courier New' }
    ];
    var customFontNames = [];
    var dropdownOpen = false;

    // ── Theme dropdown ──
    var themeDisplay = document.getElementById('themeDisplay');
    var themeDisplayText = document.getElementById('themeDisplayText');
    var themeDropdownEl = document.getElementById('themeDropdown');
    var themeDropdownOpen = false;

    function getThemeDisplayName(val) {
      if (!val) return __i18n.ideDefault;
      return val;
    }

    function toggleThemeDropdown(show) {
      themeDropdownOpen = typeof show === 'boolean' ? show : !themeDropdownOpen;
      themeDropdownEl.classList.toggle('show', themeDropdownOpen);
      themeDisplay.classList.toggle('open', themeDropdownOpen);
    }

    function selectTheme(name) {
      if (activeSettingsTab === 'all') {
        curThemeName = name;
        themeDisplayText.textContent = getThemeDisplayName(name);
        toggleThemeDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'colorTheme', value: name });
        cellOverrides = {};
        vscode.postMessage({ type: 'clearAllCellOverrides' });
        updateTabOverrideIndicators();
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
        cellOverrides[cid].themeName = name;
        themeDisplayText.textContent = getThemeDisplayName(name);
        toggleThemeDropdown(false);
        vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: name });
        updateTabOverrideIndicators();
      }
    }

    function buildThemeDropdown() {
      themeDropdownEl.innerHTML = '';
      var currentTheme = activeSettingsTab === 'all' ? curThemeName : (cellOverrides[parseInt(activeSettingsTab, 10)] || {}).themeName || curThemeName;
      for (var i = 0; i < themeNames.length; i++) {
        (function(name) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (currentTheme === name ? ' active' : '');
          var nameEl = document.createElement('span');
          nameEl.className = 'font-opt-name';
          nameEl.textContent = name || __i18n.ideDefault;
          opt.appendChild(nameEl);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectTheme(name); });
          themeDropdownEl.appendChild(opt);
        })(themeNames[i]);
      }
    }

    themeDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleDropdown(false); // close font dropdown
      buildThemeDropdown();
      toggleThemeDropdown();
    });

    // ── Font dropdown ──
    var fontDisplay = document.getElementById('fontDisplay');
    var fontDisplayText = document.getElementById('fontDisplayText');
    var fontDropdown = document.getElementById('fontDropdown');

    function getDisplayName(val) {
      if (!val) return __i18n.ideDefault;
      for (var i = 0; i < builtinFonts.length; i++) {
        if (builtinFonts[i].value === val) return builtinFonts[i].label;
      }
      return val;
    }

    function toggleDropdown(show) {
      dropdownOpen = typeof show === 'boolean' ? show : !dropdownOpen;
      fontDropdown.classList.toggle('show', dropdownOpen);
      fontDisplay.classList.toggle('open', dropdownOpen);
    }

    function selectFont(val) {
      if (activeSettingsTab === 'all') {
        curFontFamily = val;
        fontDisplayText.textContent = getDisplayName(val);
        toggleDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'fontFamily', value: val });
        cellOverrides = {};
        vscode.postMessage({ type: 'clearAllCellOverrides' });
        updateTabOverrideIndicators();
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
        cellOverrides[cid].fontFamily = val;
        fontDisplayText.textContent = getDisplayName(val);
        toggleDropdown(false);
        vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: val, themeName: cellOverrides[cid].themeName });
        updateTabOverrideIndicators();
      }
    }

    function buildDropdown() {
      fontDropdown.innerHTML = '';
      for (var i = 0; i < builtinFonts.length; i++) {
        (function(f) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (curFontFamily === f.value ? ' active' : '');
          var name = document.createElement('span');
          name.className = 'font-opt-name';
          name.textContent = f.label;
          opt.appendChild(name);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectFont(f.value); });
          fontDropdown.appendChild(opt);
        })(builtinFonts[i]);
      }
      if (customFontNames.length > 0) {
        var divider = document.createElement('div');
        divider.className = 'font-divider';
        fontDropdown.appendChild(divider);
        for (var j = 0; j < customFontNames.length; j++) {
          (function(name) {
            var opt = document.createElement('div');
            opt.className = 'font-opt' + (curFontFamily === name ? ' active' : '');
            var nameEl = document.createElement('span');
            nameEl.className = 'font-opt-name';
            nameEl.textContent = name;
            opt.appendChild(nameEl);
            var del = document.createElement('button');
            del.className = 'font-opt-del';
            del.textContent = '\\u00d7';
            del.title = __i18n.remove;
            del.addEventListener('click', function(e) {
              e.stopPropagation();
              vscode.postMessage({ type: 'removeFont', name: name });
              if (curFontFamily === name) selectFont('');
            });
            opt.appendChild(del);
            opt.addEventListener('click', function(e) { e.stopPropagation(); selectFont(name); });
            fontDropdown.appendChild(opt);
          })(customFontNames[j]);
        }
      }
      var divider2 = document.createElement('div');
      divider2.className = 'font-divider';
      fontDropdown.appendChild(divider2);
      var addBtn = document.createElement('div');
      addBtn.className = 'font-opt-add';
      addBtn.innerHTML = '<span>+</span><span>' + __i18n.addFontFile + '</span>';
      addBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown(false);
        vscode.postMessage({ type: 'browseFont' });
      });
      fontDropdown.appendChild(addBtn);
    }

    fontDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleThemeDropdown(false); // close theme dropdown
      buildDropdown();
      toggleDropdown();
    });
    document.addEventListener('click', function() { toggleDropdown(false); toggleThemeDropdown(false); });

    // ── Color pickers ──
    function setupColor(prefix, configKey) {
      var input = document.getElementById(prefix + 'ColorInput');
      var fill = document.getElementById(prefix + 'SwatchFill');
      var valEl = document.getElementById(prefix + 'Val');
      var resetBtn = document.getElementById(prefix + 'Reset');
      var overrideKey = prefix === 'bg' ? 'bgColor' : 'fgColor';

      function updateColorUI(color) {
        if (color) {
          fill.style.background = color;
          valEl.textContent = color;
          input.value = color;
          resetBtn.classList.remove('hidden');
        } else {
          fill.style.background = prefix === 'bg'
            ? 'var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e))'
            : 'var(--vscode-terminal-foreground, var(--vscode-editor-foreground, #ccc))';
          valEl.textContent = __i18n.ideDefault;
          resetBtn.classList.add('hidden');
        }
      }

      input.addEventListener('input', function() {
        var val = input.value;
        if (activeSettingsTab === 'all') {
          if (prefix === 'bg') curBg = val; else curFg = val;
          updateColorUI(val);
          vscode.postMessage({ type: 'setConfig', key: configKey, value: val });
          cellOverrides = {};
          vscode.postMessage({ type: 'clearAllCellOverrides' });
          updateTabOverrideIndicators();
        } else {
          var cid = parseInt(activeSettingsTab, 10);
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
          cellOverrides[cid][overrideKey] = val;
          updateColorUI(val);
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: cellOverrides[cid].themeName });
          updateTabOverrideIndicators();
        }
      });

      function doReset() {
        if (activeSettingsTab === 'all') {
          if (prefix === 'bg') curBg = ''; else curFg = '';
          updateColorUI('');
          vscode.postMessage({ type: 'setConfig', key: configKey, value: '' });
          cellOverrides = {};
          vscode.postMessage({ type: 'clearAllCellOverrides' });
          updateTabOverrideIndicators();
        } else {
          var cid = parseInt(activeSettingsTab, 10);
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
          cellOverrides[cid][overrideKey] = '';
          updateColorUI('');
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: cellOverrides[cid].themeName });
          updateTabOverrideIndicators();
        }
      }
      resetBtn.addEventListener('click', doReset);
      valEl.addEventListener('click', function() {
        // In All tab, always allow reset (clears per-cell overrides even if global is already IDE Default)
        if (valEl.textContent === __i18n.ideDefault && activeSettingsTab !== 'all') return;
        doReset();
      });
      valEl.style.cursor = 'pointer';

      return updateColorUI;
    }

    var updateBgUI = setupColor('bg', 'backgroundColor');
    var updateFgUI = setupColor('fg', 'foregroundColor');

    // ── Zoom ──
    document.getElementById('zoomDown').addEventListener('click', function() {
      curZoom = Math.max(50, curZoom - 10);
      updateSettingsUI();
      vscode.postMessage({ type: 'setConfig', key: 'zoomPercent', value: curZoom });
    });
    document.getElementById('zoomUp').addEventListener('click', function() {
      curZoom = Math.min(300, curZoom + 10);
      updateSettingsUI();
      vscode.postMessage({ type: 'setConfig', key: 'zoomPercent', value: curZoom });
    });

    function updateSettingsUI() {
      document.getElementById('zoomVal').textContent = curZoom + '%';
      showTabValues();
    }

    function showTabValues() {
      if (activeSettingsTab === 'all') {
        themeDisplayText.textContent = getThemeDisplayName(curThemeName);
        fontDisplayText.textContent = getDisplayName(curFontFamily);
        updateBgUI(curBg);
        updateFgUI(curFg);
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        var ov = cellOverrides[cid] || {};
        themeDisplayText.textContent = getThemeDisplayName(ov.themeName || curThemeName);
        fontDisplayText.textContent = getDisplayName(ov.fontFamily || curFontFamily);
        updateBgUI(ov.bgColor || curBg);
        updateFgUI(ov.fgColor || curFg);
      }
    }

    function buildSettingsTabs(total, labels) {
      settingsTabsEl.innerHTML = '';
      if (total <= 0) {
        settingsTabsEl.classList.add('hidden');
        activeSettingsTab = 'all';
        return;
      }
      settingsTabsEl.classList.remove('hidden');
      // All tab
      var allBtn = document.createElement('button');
      allBtn.className = 'stab active';
      allBtn.dataset.tab = 'all';
      allBtn.textContent = __i18n.all;
      allBtn.addEventListener('click', function() { switchSettingsTab('all'); });
      settingsTabsEl.appendChild(allBtn);
      // Per-cell tabs
      for (var i = 0; i < total; i++) {
        (function(idx) {
          var btn = document.createElement('button');
          btn.className = 'stab';
          btn.dataset.tab = String(idx);
          btn.textContent = labels[idx] || String(idx + 1);
          btn.addEventListener('click', function() { switchSettingsTab(String(idx)); });
          settingsTabsEl.appendChild(btn);
        })(i);
      }
      activeSettingsTab = 'all';
      updateTabOverrideIndicators();
    }

    function switchSettingsTab(tab) {
      activeSettingsTab = tab;
      var btns = settingsTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('active', btns[i].dataset.tab === tab);
      }
      showTabValues();
    }

    function updateTabOverrideIndicators() {
      var btns = settingsTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        var tab = btns[i].dataset.tab;
        if (tab === 'all') continue;
        var ov = cellOverrides[parseInt(tab, 10)];
        var hasOv = ov && (ov.bgColor || ov.fgColor || ov.fontFamily || ov.themeName);
        btns[i].classList.toggle('has-override', !!hasOv);
      }
    }

    // ── Startup Commands ──
    var startupCommands = []; // [{command, count}]

    function calcCellRange(cmds, idx) {
      var start = 0;
      for (var i = 0; i < idx; i++) start += (cmds[i].count || 1);
      var count = cmds[idx].count || 1;
      return { start: start + 1, end: start + count };
    }

    function renderCmdList() {
      var list = document.getElementById('cmdList');
      list.innerHTML = '';
      if (startupCommands.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'cmd-empty';
        empty.textContent = __i18n.noStartupCommands;
        list.appendChild(empty);
        return;
      }
      for (var i = 0; i < startupCommands.length; i++) {
        (function(idx) {
          var sc = startupCommands[idx];
          var range = calcCellRange(startupCommands, idx);
          var item = document.createElement('div');
          item.className = 'cmd-item';

          var rangeEl = document.createElement('span');
          rangeEl.className = 'cmd-item-range';
          rangeEl.textContent = range.start === range.end
            ? range.start + '.'
            : range.start + '-' + range.end + '.';
          item.appendChild(rangeEl);

          var text = document.createElement('span');
          text.className = 'cmd-item-text';
          text.textContent = sc.command;
          text.title = sc.command;
          item.appendChild(text);

          var countWrap = document.createElement('div');
          countWrap.className = 'cmd-count';
          var minusBtn = document.createElement('button');
          minusBtn.className = 'cmd-count-btn';
          minusBtn.textContent = '\\u2212';
          minusBtn.addEventListener('click', function() {
            if (sc.count > 1) {
              vscode.postMessage({ type: 'updateCommandCount', index: idx, count: sc.count - 1 });
            }
          });
          countWrap.appendChild(minusBtn);
          var countVal = document.createElement('span');
          countVal.className = 'cmd-count-val';
          countVal.textContent = sc.count;
          countWrap.appendChild(countVal);
          var plusBtn = document.createElement('button');
          plusBtn.className = 'cmd-count-btn';
          plusBtn.textContent = '+';
          plusBtn.addEventListener('click', function() {
            vscode.postMessage({ type: 'updateCommandCount', index: idx, count: sc.count + 1 });
          });
          countWrap.appendChild(plusBtn);
          item.appendChild(countWrap);

          var del = document.createElement('button');
          del.className = 'cmd-item-del';
          del.textContent = '\\u00d7';
          del.title = __i18n.remove;
          del.addEventListener('click', function() {
            vscode.postMessage({ type: 'removeStartupCommand', index: idx });
          });
          item.appendChild(del);
          list.appendChild(item);
        })(i);
      }
    }

    document.getElementById('cmdPreset').addEventListener('change', function() {
      var val = this.value;
      if (val) {
        vscode.postMessage({ type: 'addStartupCommand', command: val });
        this.value = '';
      }
    });

    document.getElementById('cmdAddBtn').addEventListener('click', function() {
      var input = document.getElementById('cmdCustom');
      var val = input.value.trim();
      if (val) {
        vscode.postMessage({ type: 'addStartupCommand', command: val });
        input.value = '';
      }
    });

    document.getElementById('cmdCustom').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('cmdAddBtn').click();
      }
    });

    renderCmdList();

    // ── Projects ──
    var projects = [];
    var workspacePath = '';

    document.getElementById('addCurrentProjectBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'addCurrentProject' });
    });
    document.getElementById('browseProjectBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'browseProject' });
    });

    function renderProjectList() {
      var list = document.getElementById('projectList');
      list.innerHTML = '';
      if (projects.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'cmd-empty';
        empty.textContent = __i18n.noProjects;
        list.appendChild(empty);
        return;
      }
      for (var i = 0; i < projects.length; i++) {
        (function(idx) {
          var p = projects[idx];
          var item = document.createElement('div');
          item.className = 'cmd-item';
          item.style.cursor = 'pointer';
          if (p.path === workspacePath) {
            item.style.borderColor = 'var(--vscode-focusBorder, rgba(0,127,212,0.6))';
            item.style.background = 'rgba(0,127,212,.06)';
          }

          var nameEl = document.createElement('span');
          nameEl.className = 'cmd-item-text';
          nameEl.style.fontFamily = 'inherit';
          nameEl.textContent = p.name;
          nameEl.title = p.path;
          item.appendChild(nameEl);

          // Show linked preset if any
          if (projectPresetsMap[p.path]) {
            var badge = document.createElement('span');
            badge.style.cssText = 'font-size:9px;opacity:.5;flex-shrink:0;margin-left:4px;';
            badge.textContent = projectPresetsMap[p.path];
            item.appendChild(badge);
          }

          var del = document.createElement('button');
          del.className = 'cmd-item-del';
          del.textContent = '\\u00d7';
          del.title = __i18n.remove;
          del.addEventListener('click', function(e) {
            e.stopPropagation();
            vscode.postMessage({ type: 'removeProject', index: idx });
          });
          item.appendChild(del);

          item.addEventListener('click', function(e) {
            vscode.postMessage({ type: 'openProject', path: p.path, newWindow: e.ctrlKey || e.metaKey });
          });

          list.appendChild(item);
        })(i);
      }
    }

    // ── Presets ──
    var presets = [];
    var projectPresetsMap = {};

    document.getElementById('presetSelect').addEventListener('change', function() {
      var nameInput = document.getElementById('presetNameInput');
      nameInput.value = this.value;
    });

    document.getElementById('presetSaveBtn').addEventListener('click', function() {
      var name = document.getElementById('presetNameInput').value.trim();
      if (!name) return;
      vscode.postMessage({ type: 'savePreset', name: name });
    });

    document.getElementById('presetLoadBtn').addEventListener('click', function() {
      var name = document.getElementById('presetSelect').value;
      if (!name) return;
      vscode.postMessage({ type: 'loadPreset', name: name });
    });

    document.getElementById('presetDeleteBtn').addEventListener('click', function() {
      var name = document.getElementById('presetSelect').value;
      if (!name) return;
      vscode.postMessage({ type: 'deletePreset', name: name });
    });

    document.getElementById('presetLinkCheck').addEventListener('change', function() {
      var sel = document.getElementById('presetSelect');
      var name = this.checked ? sel.value : '';
      if (this.checked && !name) return;
      vscode.postMessage({ type: 'linkPreset', projectPath: workspacePath, presetName: name });
    });

    function renderPresetDropdown() {
      var sel = document.getElementById('presetSelect');
      var nameInput = document.getElementById('presetNameInput');
      sel.innerHTML = '<option value="">' + __i18n.selectPreset + '</option>';
      var linkedPreset = workspacePath ? (projectPresetsMap[workspacePath] || '') : '';
      for (var i = 0; i < presets.length; i++) {
        var opt = document.createElement('option');
        opt.value = presets[i].name;
        opt.textContent = (presets[i].name === linkedPreset ? '\\u2605 ' : '') + presets[i].name;
        sel.appendChild(opt);
      }
      if (linkedPreset) {
        sel.value = linkedPreset;
        nameInput.value = linkedPreset;
      }
      var check = document.getElementById('presetLinkCheck');
      check.checked = !!linkedPreset;
      var linkLabel = document.getElementById('presetLinkLabel');
      linkLabel.textContent = linkedPreset
        ? __i18n.linkedPrefix.replace('{0}', linkedPreset)
        : __i18n.linkToProject;
    }

    // ── Broadcast ──
    var broadcastTargetsEl = document.getElementById('broadcastTargets');
    var curGridTotal = 0;

    function buildBroadcastTargets(total, labels) {
      curGridTotal = total;
      broadcastTargetsEl.innerHTML = '';
      if (total <= 0) {
        broadcastTargetsEl.classList.add('hidden');
        return;
      }
      broadcastTargetsEl.classList.remove('hidden');
      // All checkbox
      var allLabel = document.createElement('label');
      allLabel.className = 'broadcast-target all-label';
      var allCb = document.createElement('input');
      allCb.type = 'checkbox'; allCb.checked = true; allCb.dataset.cell = 'all';
      allLabel.appendChild(allCb);
      allLabel.appendChild(document.createTextNode(' ' + __i18n.all));
      broadcastTargetsEl.appendChild(allLabel);
      // Per-cell checkboxes (unchecked when All is active)
      for (var i = 0; i < total; i++) {
        var lbl = document.createElement('label');
        lbl.className = 'broadcast-target';
        var cb = document.createElement('input');
        cb.type = 'checkbox'; cb.checked = false;
        cb.dataset.cell = String(i);
        lbl.appendChild(cb);
        lbl.appendChild(document.createTextNode(' ' + (labels[i] || (i + 1))));
        broadcastTargetsEl.appendChild(lbl);
      }
      // All click → uncheck all individuals
      allCb.addEventListener('change', function() {
        if (allCb.checked) {
          var cbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
          for (var j = 0; j < cbs.length; j++) { cbs[j].checked = false; }
        }
      });
      // Individual click → uncheck All; if all individuals checked → switch to All
      var indivCbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
      for (var k = 0; k < indivCbs.length; k++) {
        indivCbs[k].addEventListener('change', function() {
          if (this.checked) allCb.checked = false;
          var allChecked = true;
          for (var j = 0; j < indivCbs.length; j++) {
            if (!indivCbs[j].checked) { allChecked = false; break; }
          }
          if (allChecked) {
            allCb.checked = true;
            for (var j = 0; j < indivCbs.length; j++) { indivCbs[j].checked = false; }
          }
        });
      }
    }

    function getSelectedCellIds() {
      var allCb = broadcastTargetsEl.querySelector('input[data-cell="all"]');
      if (allCb && allCb.checked) return null; // all
      var ids = [];
      var cbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
      for (var j = 0; j < cbs.length; j++) {
        if (cbs[j].checked) ids.push(parseInt(cbs[j].dataset.cell, 10));
      }
      return ids;
    }

    document.getElementById('broadcastSendBtn').addEventListener('click', function() {
      var input = document.getElementById('broadcastInput');
      var text = input.value;
      if (!text) return;
      var ids = getSelectedCellIds();
      if (ids === null) {
        vscode.postMessage({ type: 'broadcast', text: text });
      } else if (ids.length > 0) {
        vscode.postMessage({ type: 'broadcastToCell', cellIds: ids, text: text });
      }
      input.value = '';
    });

    document.getElementById('broadcastInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('broadcastSendBtn').click();
      }
    });

    // ── Messages ──
    window.addEventListener('message', function(event) {
      var msg = event.data;
      if (msg.type === 'ptyInstallResult') {
        var banner = document.getElementById('ptyBanner');
        var btn = document.getElementById('ptyInstallBtn');
        if (msg.success) {
          if (banner) {
            banner.style.borderColor = 'rgba(0,200,100,.35)';
            banner.style.background = 'linear-gradient(135deg, rgba(0,200,100,.12), rgba(0,180,80,.08))';
          }
          if (btn) {
            btn.textContent = __i18n.reload;
            btn.disabled = false;
            btn.onclick = function() { vscode.postMessage({ type: 'reload' }); };
          }
          var textEl = document.querySelector('.pty-banner-text');
          if (textEl) textEl.innerHTML = '<b>' + __i18n.ptyInstalled + '</b><br>' + __i18n.ptyInstalledHint;
        } else {
          if (btn) { btn.textContent = __i18n.retry; btn.disabled = false; }
        }
      }
      if (msg.type === 'mcpPort') {
        var portInfo = document.getElementById('mcpPortInfo');
        var portValue = document.getElementById('mcpPortValue');
        if (portInfo) portInfo.style.display = msg.port > 0 ? 'block' : 'none';
        if (portValue) portValue.textContent = msg.port;
      }
      if (msg.type === 'configValues') {
        curZoom = msg.zoom;
        curFontFamily = msg.fontFamily;
        curBg = msg.bgColor || '';
        curFg = msg.fgColor || '';
        curThemeName = msg.colorTheme || '';
        themeNames = msg.themeNames || [''];
        customFontNames = msg.customFonts || [];
        startupCommands = msg.startupCommands || [];
        projects = msg.projects || [];
        presets = msg.presets || [];
        projectPresetsMap = msg.projectPresets || {};
        workspacePath = msg.workspacePath || '';
        cellOverrides = msg.cellOverrides || {};
        updateSettingsUI();
        renderCmdList();
        renderProjectList();
        renderPresetDropdown();
        var gridTotal = (msg.gridRows || 0) * (msg.gridCols || 0);
        buildBroadcastTargets(gridTotal, msg.cellLabels || []);
        buildSettingsTabs(gridTotal, msg.cellLabels || []);
        applySectionStates(msg.sectionStates || {});
      }
    });

    vscode.postMessage({ type: 'getConfig' });
  </script>
</body>
</html>`;
  }
}

function getNonce(): string {
  let text = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 32; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return text;
}
