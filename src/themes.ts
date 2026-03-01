export interface TerminalColorTheme {
  name: string;
  background: string;
  foreground: string;
  cursor: string;
  cursorAccent: string;
  selectionBackground: string;
  black: string; brightBlack: string;
  red: string; brightRed: string;
  green: string; brightGreen: string;
  yellow: string; brightYellow: string;
  blue: string; brightBlue: string;
  magenta: string; brightMagenta: string;
  cyan: string; brightCyan: string;
  white: string; brightWhite: string;
}

export const BUILTIN_THEMES: Record<string, TerminalColorTheme | null> = {
  "": null, // IDE Default

  "Dracula": {
    name: "Dracula",
    background: "#282a36", foreground: "#f8f8f2",
    cursor: "#f8f8f2", cursorAccent: "#282a36",
    selectionBackground: "#44475a",
    black: "#21222c", brightBlack: "#6272a4",
    red: "#ff5555", brightRed: "#ff6e6e",
    green: "#50fa7b", brightGreen: "#69ff94",
    yellow: "#f1fa8c", brightYellow: "#ffffa5",
    blue: "#bd93f9", brightBlue: "#d6acff",
    magenta: "#ff79c6", brightMagenta: "#ff92df",
    cyan: "#8be9fd", brightCyan: "#a4ffff",
    white: "#f8f8f2", brightWhite: "#ffffff",
  },

  "Monokai": {
    name: "Monokai",
    background: "#272822", foreground: "#f8f8f2",
    cursor: "#f8f8f0", cursorAccent: "#272822",
    selectionBackground: "#49483e",
    black: "#272822", brightBlack: "#75715e",
    red: "#f92672", brightRed: "#f92672",
    green: "#a6e22e", brightGreen: "#a6e22e",
    yellow: "#f4bf75", brightYellow: "#f4bf75",
    blue: "#66d9ef", brightBlue: "#66d9ef",
    magenta: "#ae81ff", brightMagenta: "#ae81ff",
    cyan: "#a1efe4", brightCyan: "#a1efe4",
    white: "#f8f8f2", brightWhite: "#f9f8f5",
  },

  "Solarized Dark": {
    name: "Solarized Dark",
    background: "#002b36", foreground: "#839496",
    cursor: "#839496", cursorAccent: "#002b36",
    selectionBackground: "#073642",
    black: "#073642", brightBlack: "#586e75",
    red: "#dc322f", brightRed: "#cb4b16",
    green: "#859900", brightGreen: "#586e75",
    yellow: "#b58900", brightYellow: "#657b83",
    blue: "#268bd2", brightBlue: "#839496",
    magenta: "#d33682", brightMagenta: "#6c71c4",
    cyan: "#2aa198", brightCyan: "#93a1a1",
    white: "#eee8d5", brightWhite: "#fdf6e3",
  },

  "Solarized Light": {
    name: "Solarized Light",
    background: "#fdf6e3", foreground: "#657b83",
    cursor: "#657b83", cursorAccent: "#fdf6e3",
    selectionBackground: "#eee8d5",
    black: "#073642", brightBlack: "#586e75",
    red: "#dc322f", brightRed: "#cb4b16",
    green: "#859900", brightGreen: "#586e75",
    yellow: "#b58900", brightYellow: "#657b83",
    blue: "#268bd2", brightBlue: "#839496",
    magenta: "#d33682", brightMagenta: "#6c71c4",
    cyan: "#2aa198", brightCyan: "#93a1a1",
    white: "#eee8d5", brightWhite: "#fdf6e3",
  },

  "Nord": {
    name: "Nord",
    background: "#2e3440", foreground: "#d8dee9",
    cursor: "#d8dee9", cursorAccent: "#2e3440",
    selectionBackground: "#434c5e",
    black: "#3b4252", brightBlack: "#4c566a",
    red: "#bf616a", brightRed: "#bf616a",
    green: "#a3be8c", brightGreen: "#a3be8c",
    yellow: "#ebcb8b", brightYellow: "#ebcb8b",
    blue: "#81a1c1", brightBlue: "#81a1c1",
    magenta: "#b48ead", brightMagenta: "#b48ead",
    cyan: "#88c0d0", brightCyan: "#8fbcbb",
    white: "#e5e9f0", brightWhite: "#eceff4",
  },

  "One Dark": {
    name: "One Dark",
    background: "#282c34", foreground: "#abb2bf",
    cursor: "#528bff", cursorAccent: "#282c34",
    selectionBackground: "#3e4451",
    black: "#282c34", brightBlack: "#5c6370",
    red: "#e06c75", brightRed: "#e06c75",
    green: "#98c379", brightGreen: "#98c379",
    yellow: "#e5c07b", brightYellow: "#d19a66",
    blue: "#61afef", brightBlue: "#61afef",
    magenta: "#c678dd", brightMagenta: "#c678dd",
    cyan: "#56b6c2", brightCyan: "#56b6c2",
    white: "#abb2bf", brightWhite: "#ffffff",
  },

  "Gruvbox Dark": {
    name: "Gruvbox Dark",
    background: "#282828", foreground: "#ebdbb2",
    cursor: "#ebdbb2", cursorAccent: "#282828",
    selectionBackground: "#504945",
    black: "#282828", brightBlack: "#928374",
    red: "#cc241d", brightRed: "#fb4934",
    green: "#98971a", brightGreen: "#b8bb26",
    yellow: "#d79921", brightYellow: "#fabd2f",
    blue: "#458588", brightBlue: "#83a598",
    magenta: "#b16286", brightMagenta: "#d3869b",
    cyan: "#689d6a", brightCyan: "#8ec07c",
    white: "#a89984", brightWhite: "#ebdbb2",
  },

  "Tokyo Night": {
    name: "Tokyo Night",
    background: "#1a1b26", foreground: "#a9b1d6",
    cursor: "#c0caf5", cursorAccent: "#1a1b26",
    selectionBackground: "#33467c",
    black: "#15161e", brightBlack: "#414868",
    red: "#f7768e", brightRed: "#f7768e",
    green: "#9ece6a", brightGreen: "#9ece6a",
    yellow: "#e0af68", brightYellow: "#e0af68",
    blue: "#7aa2f7", brightBlue: "#7aa2f7",
    magenta: "#bb9af7", brightMagenta: "#bb9af7",
    cyan: "#7dcfff", brightCyan: "#7dcfff",
    white: "#a9b1d6", brightWhite: "#c0caf5",
  },
};

export const THEME_NAMES = Object.keys(BUILTIN_THEMES);

/** Resolve a theme name to its color map (or null for IDE Default) */
export function resolveThemeColors(name: string): Record<string, string> | null {
  const theme = BUILTIN_THEMES[name];
  if (!theme) return null;
  const { name: _n, ...colors } = theme;
  return colors;
}
