# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

> Múltiples terminales en una sola pestaña del editor — con xterm.js + node-pty

<p align="center">
  <img src="../images/icon.png" width="128" alt="Terminal Grid">
</p>

![Terminal Grid Screenshot](../images/screenshot.png)

## Características

- **Diseño en Cuadrícula** — Abre hasta 4x5 (20) terminales en una cuadrícula personalizable
- **Panel Lateral** — Gestiona tamaño, presets, broadcast, zoom, fuentes y colores
- **Broadcast** — Envía comandos a todos los terminales o celdas seleccionadas
- **Personalización por Celda** — Color de fondo, color de texto y fuente individual
- **Presets** — Guarda y carga configuraciones con comandos de inicio, etiquetas y estilos
- **Comandos de Inicio** — Ejecuta comandos automáticamente al crear terminales
- **Etiquetas de Celda** — Nombra cada celda del terminal
- **Menú Contextual** — Clic derecho para pegar, limpiar, reiniciar, terminar o renombrar
- **Servidor MCP** — Bridge HTTP integrado para orquestación LLM (Claude Code, etc.)
- **Agent API** — Control programático via comandos VS Code
- **Compatible con Remote-SSH** — Funciona con VS Code Remote-SSH de forma nativa
- **Secciones Plegables** — Las secciones del panel lateral se pliegan, estado persistido

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

## Requisitos

- VS Code 1.80.0+
- node-pty (instalación automática solicitada en el primer uso)

## Licencia

[MIT](../LICENSE)
