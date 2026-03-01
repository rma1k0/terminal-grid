# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/icon.png" width="128" alt="Terminal Grid">
</p>

> 1つのエディタタブに複数のターミナルを — xterm.js + node-pty ベースの tmux スタイルペイン

![Terminal Grid Screenshot](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/screenshot.png)

## 機能

### グリッドレイアウト

最大4x5（20個）のターミナルをカスタマイズ可能なグリッドに配置。セル境界をドラッグしてサイズ変更 — Excelのように。

![Grid Layout](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-grid-open.gif)

### 起動コマンド & プリセット

ターミナル作成時にコマンドを自動実行。グリッド全体の構成をプリセットとして保存 — プロジェクト別の自動読み込みに対応。

![Startup Commands](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-startup-commands.gif)

### セル別カスタマイズ

セルごとに背景色、前景色、フォントを個別設定。全セルに一括適用または個別にカスタマイズ可能。

![Cell Customization](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-cell-customize.gif)

### ブロードキャスト入力

すべてのターミナルまたは選択したセルにコマンドを一括送信。Claude Code、Codex などの LLM CLI ツール向けに CSI u（Kitty キーボードプロトコル）をサポート。

![Broadcast](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-broadcast.gif)

### MCPサーバー & Agent API

LLMオーケストレーション用の組み込みHTTPブリッジ。Claude Code、Codex、または任意のMCPクライアントからプログラムでターミナルを制御。

### その他の機能

- **セルラベル** — 各ターミナルに名前を付ける
- **コンテキストメニュー** — 右クリックで貼り付け、クリア、再起動、終了、名前変更
- **テーマ** — 8種類の組み込みカラーテーマ
- **カスタムフォント** — .ttf/.otf/.woff/.woff2 ファイルを読み込み
- **Remote-SSH対応** — すぐに使用可能
- **折りたたみ可能なサイドバー** — すべてのセクションを折りたたみ、状態を自動保存

## クイックスタート

1. 拡張機能をインストール
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. エディタ領域にターミナルグリッドが表示

## コマンド

| コマンド | 説明 |
|----------|------|
| `Terminal Grid: Open Grid` | デフォルトサイズでグリッドを開く |
| `Terminal Grid: Open 2x2` | 2x2グリッドを開く |
| `Terminal Grid: Open 2x3` | 2x3グリッドを開く |
| `Terminal Grid: Open 3x3` | 3x3グリッドを開く |
| `Terminal Grid: Open Custom Grid` | カスタムサイズのグリッドを開く |
| `Terminal Grid: Copy MCP Config` | MCP設定をクリップボードにコピー |

## 設定

| 設定 | デフォルト | 説明 |
|------|------------|------|
| `terminalGrid.defaultRows` | `2` | デフォルト行数 (1–4) |
| `terminalGrid.defaultCols` | `3` | デフォルト列数 (1–5) |
| `terminalGrid.zoomPercent` | `100` | グローバルフォントズーム (50–300%) |
| `terminalGrid.fontFamily` | `""` | フォント上書き（空 = IDEテーマ） |
| `terminalGrid.backgroundColor` | `""` | 背景色上書き（空 = IDEテーマ） |
| `terminalGrid.foregroundColor` | `""` | 前景色上書き（空 = IDEテーマ） |
| `terminalGrid.apiPort` | `7890` | MCP HTTPブリッジポート（0 = 無効） |

## MCP統合

Terminal GridにはLLMオーケストレーション用のMCP（Model Context Protocol）サーバーが組み込まれています。

### セットアップ

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. MCPクライアント設定に貼り付け（例：`~/.claude/settings.json`）

### MCPツール

| ツール | 説明 |
|--------|------|
| `get_grid_info` | グリッドサイズ、セル数、ラベルを取得 |
| `send_to_cell` | 指定セルにテキストを送信（`\r`で実行） |
| `read_cell` | セルのターミナル出力を読み取り |
| `broadcast` | すべてのセルに一括送信 |

## Agent API

他の拡張機能からVS Codeコマンドを使ってTerminal Gridをプログラムで制御できます：

```typescript
// グリッド情報を取得
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');

// セル0にコマンドを送信
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// セル0の出力を読み取り（直近10行）
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## 要件

- VS Code 1.80.0+
- node-pty（初回使用時に自動インストール案内）

## ライセンス

[MIT](../LICENSE)
