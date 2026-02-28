# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

> Mehrere Terminals in einem einzigen Editor-Tab — basierend auf xterm.js + node-pty

<p align="center">
  <img src="../images/icon.png" width="128" alt="Terminal Grid">
</p>

![Terminal Grid Screenshot](../images/screenshot.png)

## Funktionen

- **Raster-Layout** — Bis zu 4x5 (20) Terminals in einem anpassbaren Raster
- **Seitenleisten-Panel** — Rastergröße, Vorlagen, Broadcast, Zoom, Schriften und Farben verwalten
- **Broadcast** — Befehle an alle Terminals oder ausgewählte Zellen senden
- **Zell-Anpassung** — Individuelle Hintergrundfarbe, Textfarbe und Schrift pro Zelle
- **Vorlagen** — Rasterkonfigurationen mit Startbefehlen, Labels und Stilen speichern/laden
- **Startbefehle** — Befehle beim Erstellen der Terminals automatisch ausführen
- **Zell-Labels** — Jede Terminal-Zelle benennen
- **Kontextmenü** — Rechtsklick zum Einfügen, Löschen, Neustarten, Beenden oder Umbenennen
- **MCP-Server** — Integrierte HTTP-Bridge für LLM-Orchestrierung (Claude Code, etc.)
- **Agent API** — Programmatische Steuerung über VS Code-Befehle
- **Remote-SSH-kompatibel** — Funktioniert sofort mit VS Code Remote-SSH
- **Einklappbare Abschnitte** — Seitenleisten-Abschnitte einklappbar, Zustand gespeichert

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

## Voraussetzungen

- VS Code 1.80.0+
- node-pty (automatische Installation beim ersten Start)

## Lizenz

[MIT](../LICENSE)
