# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/icon.png" width="128" alt="Terminal Grid">
</p>

> Une grille de terminaux style tmux pour VS Code — divisez, fusionnez, diffusez et laissez l'IA contrôler vos terminaux via MCP.

![Terminal Grid Screenshot](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/screenshot.png)

## Intégration MCP — Contrôle de Terminal par IA

Terminal Grid inclut un serveur [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) intégré. Les agents IA comme Claude Code ou Codex peuvent voir votre grille, exécuter des commandes dans n'importe quelle cellule et lire la sortie — le tout en langage naturel.

![MCP Demo](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-mcp.gif)

**Un prompt, trois terminaux à la fois :**

> "Exécute ls dans la cellule 2, affiche git log dans la cellule 3 et lance git status dans la cellule 4"

L'IA appelle `get_grid_info` pour découvrir la disposition, puis `send_to_cell` pour chaque cible — les commandes s'exécutent simultanément dans toute la grille.

### Configuration

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. Collez dans les paramètres du client MCP (ex : `~/.claude/settings.json`)

C'est tout — le serveur MCP s'enregistre automatiquement à l'activation de l'extension.

### Outils MCP

| Outil | Description |
|-------|-------------|
| `get_grid_info` | Obtenir dimensions, nombre de cellules et labels |
| `send_to_cell` | Envoyer du texte/des commandes à une cellule |
| `read_cell` | Lire la sortie du terminal d'une cellule |
| `broadcast` | Envoyer à toutes les cellules |

### Exemple de Configuration

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

### Support LLM CLI

Exécutez des outils LLM CLI (Claude Code, Codex, etc.) directement dans les cellules de la grille. Terminal Grid détecte automatiquement les applications LLM TUI et envoie les séquences de touches correctes (CSI u / protocole clavier Kitty) — Enter, Tab et flèches fonctionnent nativement.

## Fonctionnalités

### Disposition en Grille

Ouvrez jusqu'à 4x5 (20) terminaux dans une grille personnalisable. Glissez les bordures des cellules pour redimensionner — comme dans Excel.

![Grid Layout](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-grid-open.gif)

### Fusion de Cellules

Fusionnez des cellules adjacentes en un seul terminal plus grand. Sélectionnez les cellules dans l'aperçu de la grille dans la barre latérale, cliquez sur Merge et ouvrez la grille — la région fusionnée devient un grand panneau. Utile pour donner plus d'espace au terminal principal tout en gardant de petites cellules pour la surveillance.

### Commandes de Démarrage & Préréglages

Exécutez automatiquement des commandes à la création des terminaux. Sauvegardez les configurations de grille complètes (taille, régions fusionnées, couleurs, commandes) en préréglages — avec chargement automatique par projet.

![Startup Commands](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-startup-commands.gif)

### Personnalisation par Cellule

Couleur de fond, couleur de texte et police individuelles par cellule. Appliquez à toutes les cellules ou personnalisez chacune.

![Cell Customization](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-cell-customize.gif)

### Diffusion

Envoyez des commandes à tous les terminaux ou aux cellules sélectionnées.

![Broadcast](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-broadcast.gif)

### Autres Fonctionnalités

- **Labels de Cellule** — Nommez chaque terminal
- **Menu Contextuel** — Clic droit pour coller, effacer, redémarrer, terminer ou renommer
- **Thèmes** — 8 thèmes de couleurs intégrés
- **Polices Personnalisées** — Chargez des fichiers .ttf/.otf/.woff/.woff2
- **Compatible Remote-SSH** — Fonctionne nativement
- **Panneau Latéral Repliable** — Toutes les sections se replient, état persisté

## Démarrage Rapide

1. Installez l'extension
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. Une grille de terminaux apparaît dans la zone de l'éditeur

## Commandes

| Commande | Description |
|----------|-------------|
| `Terminal Grid: Open Grid` | Ouvrir la grille avec la taille par défaut |
| `Terminal Grid: Open 2x2` | Ouvrir une grille 2x2 |
| `Terminal Grid: Open 2x3` | Ouvrir une grille 2x3 |
| `Terminal Grid: Open 3x3` | Ouvrir une grille 3x3 |
| `Terminal Grid: Open Custom Grid` | Ouvrir une grille aux dimensions personnalisées |
| `Terminal Grid: Copy MCP Config` | Copier la configuration MCP dans le presse-papiers |

## Paramètres

| Paramètre | Par défaut | Description |
|-----------|------------|-------------|
| `terminalGrid.defaultRows` | `2` | Nombre de lignes par défaut (1-4) |
| `terminalGrid.defaultCols` | `3` | Nombre de colonnes par défaut (1-5) |
| `terminalGrid.zoomPercent` | `100` | Zoom global de police (50-300%) |
| `terminalGrid.fontFamily` | `""` | Police personnalisée (vide = thème IDE) |
| `terminalGrid.backgroundColor` | `""` | Couleur de fond (vide = thème IDE) |
| `terminalGrid.foregroundColor` | `""` | Couleur de texte (vide = thème IDE) |
| `terminalGrid.apiPort` | `7890` | Port HTTP du bridge MCP (0 = désactivé) |

## Agent API

Les extensions peuvent contrôler Terminal Grid programmatiquement via les commandes VS Code :

```typescript
// Obtenir les informations de la grille
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');

// Envoyer une commande à la cellule 0
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// Lire la sortie de la cellule 0 (10 dernières lignes)
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## Prérequis

- VS Code 1.80.0+

## Licence

[MIT](../LICENSE)
