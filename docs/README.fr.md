# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

> Plusieurs terminaux dans un seul onglet d'éditeur — propulsé par xterm.js + node-pty

<p align="center">
  <img src="../images/icon.png" width="128" alt="Terminal Grid">
</p>

![Terminal Grid Screenshot](../images/screenshot.png)

## Fonctionnalités

- **Disposition en Grille** — Ouvrez jusqu'à 4x5 (20) terminaux dans une grille personnalisable
- **Panneau Latéral** — Gérez la taille, les préréglages, la diffusion, le zoom, les polices et les couleurs
- **Diffusion** — Envoyez des commandes à tous les terminaux ou aux cellules sélectionnées
- **Personnalisation par Cellule** — Couleur de fond, couleur de texte et police individuelles
- **Préréglages** — Sauvegardez et chargez des configurations avec commandes de démarrage, labels et styles
- **Commandes de Démarrage** — Exécutez automatiquement des commandes à la création des terminaux
- **Labels de Cellule** — Nommez chaque cellule du terminal
- **Menu Contextuel** — Clic droit pour coller, effacer, redémarrer, terminer ou renommer
- **Serveur MCP** — Bridge HTTP intégré pour l'orchestration LLM (Claude Code, etc.)
- **Agent API** — Contrôle programmatique via les commandes VS Code
- **Compatible Remote-SSH** — Fonctionne nativement avec VS Code Remote-SSH
- **Sections Repliables** — Les sections du panneau latéral se replient, état persisté

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
| `terminalGrid.defaultRows` | `2` | Nombre de lignes par défaut (1–4) |
| `terminalGrid.defaultCols` | `3` | Nombre de colonnes par défaut (1–5) |
| `terminalGrid.zoomPercent` | `100` | Zoom global de police (50–300%) |
| `terminalGrid.fontFamily` | `""` | Police personnalisée (vide = thème IDE) |
| `terminalGrid.backgroundColor` | `""` | Couleur de fond (vide = thème IDE) |
| `terminalGrid.foregroundColor` | `""` | Couleur de texte (vide = thème IDE) |
| `terminalGrid.apiPort` | `7890` | Port HTTP du bridge MCP (0 = désactivé) |

## Intégration MCP

### Configuration

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. Collez dans les paramètres du client MCP (ex : `~/.claude/settings.json`)

### Outils MCP

| Outil | Description |
|-------|-------------|
| `get_grid_info` | Obtenir dimensions, nombre de cellules et labels |
| `send_to_cell` | Envoyer du texte à une cellule (`\r` pour exécuter) |
| `read_cell` | Lire la sortie du terminal d'une cellule |
| `broadcast` | Envoyer à toutes les cellules |

## Prérequis

- VS Code 1.80.0+
- node-pty (installation automatique proposée au premier lancement)

## Licence

[MIT](../LICENSE)
