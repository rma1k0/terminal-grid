# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/icon.png" width="128" alt="Terminal Grid">
</p>

> Mehrere Terminals in einem einzigen Editor-Tab — tmux-ähnliche Panels mit xterm.js + node-pty

![Terminal Grid Screenshot](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/screenshot.png)

## Funktionen

### Raster-Layout

Bis zu 4x5 (20) Terminals in einem anpassbaren Raster. Ziehen Sie Zellgrenzen zum Ändern der Größe — wie in Excel.

![Grid Layout](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-grid-open.gif)

### Startbefehle & Vorlagen

Befehle beim Erstellen der Terminals automatisch ausführen. Gesamte Rasterkonfigurationen als Vorlagen speichern — mit automatischem Laden pro Projekt.

![Startup Commands](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-startup-commands.gif)

### Zell-Anpassung

Individuelle Hintergrundfarbe, Textfarbe und Schrift pro Zelle. Auf alle Zellen gleichzeitig anwenden oder einzeln anpassen.

![Cell Customization](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-cell-customize.gif)

### Broadcast

Befehle an alle Terminals oder ausgewählte Zellen gleichzeitig senden. Unterstützt CSI u (Kitty-Tastaturprotokoll) für LLM-CLI-Tools wie Claude Code und Codex.

![Broadcast](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-broadcast.gif)

### MCP-Server & Agent API

Integrierte HTTP-Bridge für LLM-Orchestrierung. Terminals programmatisch von Claude Code, Codex oder jedem MCP-Client steuern.

### Weitere Funktionen

- **Zell-Labels** — Jedes Terminal benennen
- **Kontextmenü** — Rechtsklick zum Einfügen, Löschen, Neustarten, Beenden oder Umbenennen
- **Themes** — 8 integrierte Farbthemen
- **Benutzerdefinierte Schriften** — .ttf/.otf/.woff/.woff2-Dateien laden
- **Remote-SSH-kompatibel** — Funktioniert sofort
- **Einklappbare Seitenleiste** — Alle Abschnitte einklappbar, Zustand gespeichert

## Schnellstart

1. Erweiterung installieren
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. Ein Terminal-Raster erscheint im Editor-Bereich

## Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `Terminal Grid: Open Grid` | Raster mit Standardgröße öffnen |
| `Terminal Grid: Open 2x2` | 2x2-Raster öffnen |
| `Terminal Grid: Open 2x3` | 2x3-Raster öffnen |
| `Terminal Grid: Open 3x3` | 3x3-Raster öffnen |
| `Terminal Grid: Open Custom Grid` | Raster mit benutzerdefinierten Abmessungen öffnen |
| `Terminal Grid: Copy MCP Config` | MCP-Konfiguration in die Zwischenablage kopieren |

## Einstellungen

| Einstellung | Standard | Beschreibung |
|-------------|----------|-------------|
| `terminalGrid.defaultRows` | `2` | Standard-Zeilenanzahl (1–4) |
| `terminalGrid.defaultCols` | `3` | Standard-Spaltenanzahl (1–5) |
| `terminalGrid.zoomPercent` | `100` | Globaler Schrift-Zoom (50–300%) |
| `terminalGrid.fontFamily` | `""` | Schrift-Überschreibung (leer = IDE-Theme) |
| `terminalGrid.backgroundColor` | `""` | Hintergrundfarbe (leer = IDE-Theme) |
| `terminalGrid.foregroundColor` | `""` | Textfarbe (leer = IDE-Theme) |
| `terminalGrid.apiPort` | `7890` | MCP HTTP-Bridge-Port (0 = deaktiviert) |

## MCP-Integration

Terminal Grid enthält einen integrierten MCP-Server (Model Context Protocol) für LLM-Orchestrierung.

### Einrichtung

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. In die MCP-Client-Einstellungen einfügen (z.B. `~/.claude/settings.json`)

### MCP-Werkzeuge

| Werkzeug | Beschreibung |
|----------|-------------|
| `get_grid_info` | Rasterabmessungen, Zellenanzahl und Labels abrufen |
| `send_to_cell` | Text an eine Zelle senden (`\r` zum Ausführen) |
| `read_cell` | Terminal-Ausgabe einer Zelle lesen |
| `broadcast` | An alle Zellen senden |

## Agent API

Erweiterungen können Terminal Grid programmatisch über VS Code-Befehle steuern:

```typescript
// Raster-Informationen abrufen
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');

// Befehl an Zelle 0 senden
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// Ausgabe von Zelle 0 lesen (letzte 10 Zeilen)
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## Voraussetzungen

- VS Code 1.80.0+
- node-pty (automatische Installation beim ersten Start)

## Lizenz

[MIT](../LICENSE)
