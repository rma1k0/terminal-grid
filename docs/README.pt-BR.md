# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

> Vários terminais em uma única aba do editor — powered by xterm.js + node-pty

<p align="center">
  <img src="../images/icon.png" width="128" alt="Terminal Grid">
</p>

![Terminal Grid Screenshot](../images/screenshot.png)

## Funcionalidades

- **Layout em Grade** — Abra até 4x5 (20) terminais em uma grade personalizável
- **Painel Lateral** — Gerencie tamanho da grade, presets, broadcast, zoom, fontes e cores
- **Broadcast** — Envie comandos para todos os terminais ou células selecionadas
- **Personalização por Célula** — Cor de fundo, cor de texto e fonte individual por célula
- **Presets** — Salve e carregue configurações com comandos de inicialização, rótulos e estilos
- **Comandos de Inicialização** — Execute comandos automaticamente ao criar terminais
- **Rótulos de Célula** — Nomeie cada célula do terminal
- **Menu de Contexto** — Clique direito para colar, limpar, reiniciar, encerrar ou renomear
- **Servidor MCP** — Bridge HTTP integrado para orquestração LLM (Claude Code, etc.)
- **Agent API** — Controle programático via comandos VS Code
- **Compatível com Remote-SSH** — Funciona com VS Code Remote-SSH nativamente
- **Seções Recolhíveis** — Seções do painel lateral recolhem, estado persistido

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

## Requisitos

- VS Code 1.80.0+
- node-pty (instalação automática solicitada no primeiro uso)

## Licença

[MIT](../LICENSE)
