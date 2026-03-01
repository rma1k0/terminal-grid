# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/icon.png" width="128" alt="Terminal Grid">
</p>

> Múltiples terminales en una sola pestaña del editor — paneles estilo tmux con xterm.js + node-pty

![Terminal Grid Screenshot](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/screenshot.png)

## Características

### Diseño en Cuadrícula

Abre hasta 4x5 (20) terminales en una cuadrícula personalizable. Arrastra los bordes de las celdas para redimensionar — como en Excel.

![Grid Layout](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-grid-open.gif)

### Comandos de Inicio & Presets

Ejecuta comandos automáticamente al crear terminales. Guarda configuraciones completas de la cuadrícula como presets — con carga automática por proyecto.

![Startup Commands](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-startup-commands.gif)

### Personalización por Celda

Color de fondo, color de texto y fuente individual por celda. Aplica a todas las celdas a la vez o personaliza cada una.

![Cell Customization](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-cell-customize.gif)

### Broadcast

Envía comandos a todos los terminales o celdas seleccionadas a la vez. Soporta CSI u (protocolo de teclado Kitty) para herramientas CLI LLM como Claude Code y Codex.

![Broadcast](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-broadcast.gif)

### Servidor MCP & Agent API

Bridge HTTP integrado para orquestación LLM. Controla terminales programáticamente desde Claude Code, Codex o cualquier cliente MCP.

### Más Funciones

- **Etiquetas de Celda** — Nombra cada terminal
- **Menú Contextual** — Clic derecho para pegar, limpiar, reiniciar, terminar o renombrar
- **Temas** — 8 temas de colores integrados
- **Fuentes Personalizadas** — Carga archivos .ttf/.otf/.woff/.woff2
- **Compatible con Remote-SSH** — Funciona de forma nativa
- **Panel Lateral Plegable** — Todas las secciones se pliegan, estado persistido

## Inicio Rápido

1. Instala la extensión
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. Aparece una cuadrícula de terminales en el área del editor

## Comandos

| Comando | Descripción |
|---------|-------------|
| `Terminal Grid: Open Grid` | Abrir cuadrícula con tamaño predeterminado |
| `Terminal Grid: Open 2x2` | Abrir cuadrícula 2x2 |
| `Terminal Grid: Open 2x3` | Abrir cuadrícula 2x3 |
| `Terminal Grid: Open 3x3` | Abrir cuadrícula 3x3 |
| `Terminal Grid: Open Custom Grid` | Abrir cuadrícula con dimensiones personalizadas |
| `Terminal Grid: Copy MCP Config` | Copiar configuración MCP al portapapeles |

## Configuración

| Configuración | Predeterminado | Descripción |
|---------------|----------------|-------------|
| `terminalGrid.defaultRows` | `2` | Filas predeterminadas (1–4) |
| `terminalGrid.defaultCols` | `3` | Columnas predeterminadas (1–5) |
| `terminalGrid.zoomPercent` | `100` | Zoom global de fuente (50–300%) |
| `terminalGrid.fontFamily` | `""` | Fuente personalizada (vacío = tema IDE) |
| `terminalGrid.backgroundColor` | `""` | Color de fondo (vacío = tema IDE) |
| `terminalGrid.foregroundColor` | `""` | Color de texto (vacío = tema IDE) |
| `terminalGrid.apiPort` | `7890` | Puerto HTTP del bridge MCP (0 = desactivado) |

## Integración MCP

Terminal Grid incluye un servidor MCP (Model Context Protocol) integrado para orquestación LLM.

### Configuración

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. Pega en la configuración del cliente MCP (ej: `~/.claude/settings.json`)

### Herramientas MCP

| Herramienta | Descripción |
|-------------|-------------|
| `get_grid_info` | Obtener dimensiones, cantidad de celdas y etiquetas |
| `send_to_cell` | Enviar texto a una celda (`\r` para ejecutar) |
| `read_cell` | Leer salida del terminal de una celda |
| `broadcast` | Enviar a todas las celdas |

## Agent API

Las extensiones pueden controlar Terminal Grid programáticamente via comandos VS Code:

```typescript
// Obtener información de la cuadrícula
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');

// Enviar comando a la celda 0
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// Leer salida de la celda 0 (últimas 10 líneas)
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## Requisitos

- VS Code 1.80.0+
- node-pty (instalación automática solicitada en el primer uso)

## Licencia

[MIT](../LICENSE)
