# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/icon.png" width="128" alt="Terminal Grid">
</p>

> Vários terminais em uma única aba do editor — painéis estilo tmux com xterm.js + node-pty

![Terminal Grid Screenshot](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/screenshot.png)

## Funcionalidades

### Layout em Grade

Abra até 4x5 (20) terminais em uma grade personalizável. Arraste as bordas das células para redimensionar — como no Excel.

![Grid Layout](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-grid-open.gif)

### Comandos de Inicialização & Presets

Execute comandos automaticamente ao criar terminais. Salve configurações completas da grade como presets — com carregamento automático por projeto.

![Startup Commands](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-startup-commands.gif)

### Personalização por Célula

Cor de fundo, cor de texto e fonte individual por célula. Aplique a todas as células de uma vez ou personalize cada uma.

![Cell Customization](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-cell-customize.gif)

### Broadcast

Envie comandos para todos os terminais ou células selecionadas de uma vez. Suporta CSI u (protocolo de teclado Kitty) para ferramentas CLI LLM como Claude Code e Codex.

![Broadcast](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-broadcast.gif)

### Servidor MCP & Agent API

Bridge HTTP integrado para orquestração LLM. Controle terminais programaticamente a partir do Claude Code, Codex ou qualquer cliente MCP.

### Mais Recursos

- **Rótulos de Célula** — Nomeie cada terminal
- **Menu de Contexto** — Clique direito para colar, limpar, reiniciar, encerrar ou renomear
- **Temas** — 8 temas de cores integrados
- **Fontes Personalizadas** — Carregue arquivos .ttf/.otf/.woff/.woff2
- **Compatível com Remote-SSH** — Funciona nativamente
- **Painel Lateral Recolhível** — Todas as seções recolhem, estado persistido

## Início Rápido

1. Instale a extensão
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. Uma grade de terminais aparece na área do editor

## Comandos

| Comando | Descrição |
|---------|-----------|
| `Terminal Grid: Open Grid` | Abrir grade com tamanho padrão |
| `Terminal Grid: Open 2x2` | Abrir grade 2x2 |
| `Terminal Grid: Open 2x3` | Abrir grade 2x3 |
| `Terminal Grid: Open 3x3` | Abrir grade 3x3 |
| `Terminal Grid: Open Custom Grid` | Abrir grade com dimensões personalizadas |
| `Terminal Grid: Copy MCP Config` | Copiar configuração MCP para a área de transferência |

## Configurações

| Configuração | Padrão | Descrição |
|--------------|--------|-----------|
| `terminalGrid.defaultRows` | `2` | Número padrão de linhas (1–4) |
| `terminalGrid.defaultCols` | `3` | Número padrão de colunas (1–5) |
| `terminalGrid.zoomPercent` | `100` | Zoom global da fonte (50–300%) |
| `terminalGrid.fontFamily` | `""` | Fonte personalizada (vazio = tema do IDE) |
| `terminalGrid.backgroundColor` | `""` | Cor de fundo (vazio = tema do IDE) |
| `terminalGrid.foregroundColor` | `""` | Cor de texto (vazio = tema do IDE) |
| `terminalGrid.apiPort` | `7890` | Porta HTTP do bridge MCP (0 = desativado) |

## Integração MCP

Terminal Grid inclui um servidor MCP (Model Context Protocol) integrado para orquestração LLM.

### Configuração

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. Cole nas configurações do cliente MCP (ex: `~/.claude/settings.json`)

### Ferramentas MCP

| Ferramenta | Descrição |
|------------|-----------|
| `get_grid_info` | Obter dimensões, contagem e rótulos |
| `send_to_cell` | Enviar texto para uma célula (`\r` para executar) |
| `read_cell` | Ler saída do terminal de uma célula |
| `broadcast` | Enviar para todas as células |

## Agent API

Extensões podem controlar o Terminal Grid programaticamente via comandos VS Code:

```typescript
// Obter informações da grade
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');

// Enviar comando para a célula 0
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// Ler saída da célula 0 (últimas 10 linhas)
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## Requisitos

- VS Code 1.80.0+
- node-pty (instalação automática solicitada no primeiro uso)

## Licença

[MIT](../LICENSE)
