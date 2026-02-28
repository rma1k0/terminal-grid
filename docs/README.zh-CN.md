# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

> 在单个编辑器标签页中打开多个终端 — 基于 xterm.js + node-pty

<p align="center">
  <img src="../images/icon.png" width="128" alt="Terminal Grid">
</p>

![Terminal Grid Screenshot](../images/screenshot.png)

## 功能

- **网格布局** — 最多 4x5（20个）终端，可自定义网格排列
- **侧边栏控制面板** — 管理网格大小、预设、广播、缩放、字体和颜色
- **广播输入** — 向所有终端或选定单元格同时发送命令
- **单元格自定义** — 每个单元格可独立设置背景色、前景色和字体
- **预设** — 保存和加载包含启动命令、标签和样式的网格配置
- **启动命令** — 终端创建时自动执行命令
- **单元格标签** — 为每个终端单元格命名
- **右键菜单** — 粘贴、清除、重启、终止或重命名单元格
- **MCP 服务器** — 内置 HTTP 桥接，用于 LLM 编排（Claude Code 等）
- **Agent API** — 通过 VS Code 命令进行编程控制
- **Remote-SSH 兼容** — 开箱即用支持 VS Code Remote-SSH
- **可折叠区域** — 侧边栏区域可折叠，状态自动保存

## 快速开始

1. 安装扩展
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. 编辑器区域显示终端网格

## 命令

| 命令 | 描述 |
|------|------|
| `Terminal Grid: Open Grid` | 以默认大小打开网格 |
| `Terminal Grid: Open 2x2` | 打开 2x2 网格 |
| `Terminal Grid: Open 2x3` | 打开 2x3 网格 |
| `Terminal Grid: Open 3x3` | 打开 3x3 网格 |
| `Terminal Grid: Open Custom Grid` | 打开自定义大小网格 |
| `Terminal Grid: Copy MCP Config` | 复制 MCP 服务器配置到剪贴板 |

## 设置

| 设置 | 默认值 | 描述 |
|------|--------|------|
| `terminalGrid.defaultRows` | `2` | 默认行数 (1–4) |
| `terminalGrid.defaultCols` | `3` | 默认列数 (1–5) |
| `terminalGrid.zoomPercent` | `100` | 全局终端字体缩放 (50–300%) |
| `terminalGrid.fontFamily` | `""` | 字体覆盖（空 = IDE 主题） |
| `terminalGrid.backgroundColor` | `""` | 背景色覆盖（空 = IDE 主题） |
| `terminalGrid.foregroundColor` | `""` | 前景色覆盖（空 = IDE 主题） |
| `terminalGrid.apiPort` | `7890` | MCP HTTP 桥接端口（0 = 禁用） |

## MCP 集成

Terminal Grid 内置 MCP（Model Context Protocol）服务器，用于 LLM 编排。

### 设置方法

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. 粘贴到 MCP 客户端配置中（如 `~/.claude/settings.json`）

### MCP 工具

| 工具 | 描述 |
|------|------|
| `get_grid_info` | 获取网格尺寸、单元格数量和标签 |
| `send_to_cell` | 向指定单元格发送文本（追加 `\r` 执行） |
| `read_cell` | 读取单元格终端输出 |
| `broadcast` | 向所有单元格同时发送 |

## Agent API

```typescript
// 获取网格信息
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');

// 向单元格 0 发送命令
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// 读取单元格 0 输出（最近 10 行）
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## 要求

- VS Code 1.80.0+
- node-pty（首次使用时自动提示安装）

## 许可证

[MIT](../LICENSE)
