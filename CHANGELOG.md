# Changelog

## [0.3.1] - 2025

### Added
- MCP server integration — built-in HTTP bridge for LLM orchestration
- `Terminal Grid: Copy MCP Config` command
- `broadcast` MCP tool for sending to all cells
- Health check auto-shutdown for MCP server process
- Remote-SSH compatibility (`extensionKind: ["workspace"]`)
- `terminalGrid.apiPort` setting

### Fixed
- MCP server zombie process prevention (stdin close + health check)

## [0.3.0] - 2025

### Added
- Per-cell terminal customization (background, foreground, font)
- Settings tabs UI — [All] [1] [2] [3]... for global/per-cell control
- Collapsible sidebar sections with persisted state
- Selective broadcast — choose which cells receive broadcast input
- Agent API: `sendToCell`, `readCell`, `getGridInfo` commands
- `getCellLabels` in grid info response
- Built-in API test command (`Terminal Grid: Test API`)

### Fixed
- Override indicator (yellow border) clearing on global reset
- Settings tabs not appearing after grid open
- Preset load timing — config sent after grid creation
- `readCell(id, 0)` now returns empty string instead of full buffer
- node-pty install banner stuck on "Installing..."
- Dynamic spacing between collapsed/expanded sections

## [0.2.0] - 2025

### Added
- Sidebar control panel with glass-morphism UI
- Preset system — save/load/delete grid configurations
- Per-project preset auto-load
- Startup commands with per-cell assignment
- Cell labels and renaming
- Broadcast input to all terminals
- Custom font file loading (.ttf, .otf, .woff, .woff2)
- Terminal zoom control (50–300%)
- Color customization (background, foreground)
- Context menu (paste, clear, restart, kill, rename)
- Grid panel serialization (restore on VS Code restart)
- node-pty installation flow with sidebar banner

## [0.1.0] - 2025

### Added
- Initial release
- Grid terminal layout in editor tab
- Configurable rows and columns
- xterm.js terminal emulation
- node-pty pseudo-terminal backend
- Fallback to child_process when node-pty unavailable
