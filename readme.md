# Terminal Grid

[English](./README.md) | [한국어](./docs/README.ko.md) | [中文](./docs/README.zh-CN.md) | [日本語](./docs/README.ja.md) | [Português (Brasil)](./docs/README.pt-BR.md) | [Español](./docs/README.es.md) | [Français](./docs/README.fr.md) | [Deutsch](./docs/README.de.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/icon.png" width="128" alt="Terminal Grid">
</p>

> Multiple terminals in a single editor tab — tmux-like panes powered by xterm.js + node-pty

![Terminal Grid Screenshot](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/screenshot.png)

## Features

### Grid Layout

Open up to 4x5 (20) terminals arranged in a customizable grid. Drag cell borders to resize — just like Excel.

![Grid Layout](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-grid-open.gif)

### Startup Commands & Presets

Auto-run commands when terminals spawn. Save entire grid configurations as presets — per-project auto-load supported.

![Startup Commands](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-startup-commands.gif)

### Per-Cell Customization

Individual background color, foreground color, and font per cell. Apply to all cells at once or customize each one.

![Cell Customization](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-cell-customize.gif)

### Broadcast Input

Send commands to all terminals or selected cells at once. Supports CSI u (Kitty keyboard protocol) for LLM CLI tools like Claude Code and Codex.

![Broadcast](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-broadcast.gif)

### MCP Server & Agent API

Built-in HTTP bridge for LLM orchestration. Control terminals programmatically from Claude Code, Codex, or any MCP client.

### And More

- **Cell Labels** — Name each terminal for easy identification
- **Context Menu** — Right-click to paste, clear, restart, kill, or rename
- **Themes** — 8 built-in color themes
- **Custom Fonts** — Load .ttf/.otf/.woff/.woff2 files
- **Remote-SSH Compatible** — Works out of the box
- **Collapsible Sidebar** — All sections collapse, state persisted

## Quick Start

1. Install the extension
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. A terminal grid appears in the editor area

## Commands

| Command | Description |
|---------|-------------|
| `Terminal Grid: Open Grid` | Open grid with default size (settings) |
| `Terminal Grid: Open 2x2` | Open a 2x2 grid |
| `Terminal Grid: Open 2x3` | Open a 2x3 grid |
| `Terminal Grid: Open 3x3` | Open a 3x3 grid |
| `Terminal Grid: Open Custom Grid` | Open grid with custom dimensions |
| `Terminal Grid: Copy MCP Config` | Copy MCP server configuration to clipboard |

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `terminalGrid.defaultRows` | `2` | Default number of rows (1–4) |
| `terminalGrid.defaultCols` | `3` | Default number of columns (1–5) |
| `terminalGrid.zoomPercent` | `100` | Global terminal font zoom (50–300%) |
| `terminalGrid.fontFamily` | `""` | Font family override (empty = IDE theme) |
| `terminalGrid.backgroundColor` | `""` | Background color override (empty = IDE theme) |
| `terminalGrid.foregroundColor` | `""` | Foreground color override (empty = IDE theme) |
| `terminalGrid.apiPort` | `7890` | MCP HTTP bridge port (0 = disabled) |

## MCP Integration

Terminal Grid includes a built-in MCP (Model Context Protocol) server for LLM orchestration.

### Setup

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. Paste into your MCP client settings (e.g., `~/.claude/settings.json`)

### MCP Tools

| Tool | Description |
|------|-------------|
| `get_grid_info` | Get grid dimensions, cell count, and labels |
| `send_to_cell` | Send text to a specific cell (append `\r` to execute) |
| `read_cell` | Read terminal output from a cell |
| `broadcast` | Send text to all cells at once |

### Example

```json
{
  "mcpServers": {
    "terminal-grid": {
      "command": "node",
      "args": ["/path/to/extension/mcp-server.js"],
      "env": { "TERMINAL_GRID_PORT": "7890" }
    }
  }
}
```

## Agent API

Extensions can programmatically control Terminal Grid via VS Code commands:

```typescript
// Get grid info
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');
// { rows: 2, cols: 3, cellCount: 6, cellLabels: ['1','2',...] }

// Send command to cell 0
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// Read output from cell 0 (last 10 lines)
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## Requirements

- VS Code 1.80.0+
- node-pty (auto-prompted for installation on first use)

## License

[MIT](LICENSE)
