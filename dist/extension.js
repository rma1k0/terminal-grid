"use strict";var A=Object.create;var P=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var W=Object.getOwnPropertyNames;var H=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty;var J=(c,e)=>{for(var n in e)P(c,n,{get:e[n],enumerable:!0})},N=(c,e,n,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of W(e))!V.call(c,t)&&t!==n&&P(c,t,{get:()=>e[t],enumerable:!(l=U(e,t))||l.enumerable});return c};var v=(c,e,n)=>(n=c!=null?A(H(c)):{},N(e||!c||!c.__esModule?P(n,"default",{value:c,enumerable:!0}):n,c)),Z=c=>N(P({},"__esModule",{value:!0}),c);var te={};J(te,{activate:()=>Q,deactivate:()=>ee});module.exports=Z(te);var d=v(require("vscode")),G=v(require("path"));var a=v(require("vscode")),I=v(require("fs")),k=v(require("path")),z=v(require("child_process"));var g=v(require("vscode")),R=v(require("fs")),L=v(require("path"));var D={"":null,Dracula:{name:"Dracula",background:"#282a36",foreground:"#f8f8f2",cursor:"#f8f8f2",cursorAccent:"#282a36",selectionBackground:"#44475a",black:"#21222c",brightBlack:"#6272a4",red:"#ff5555",brightRed:"#ff6e6e",green:"#50fa7b",brightGreen:"#69ff94",yellow:"#f1fa8c",brightYellow:"#ffffa5",blue:"#bd93f9",brightBlue:"#d6acff",magenta:"#ff79c6",brightMagenta:"#ff92df",cyan:"#8be9fd",brightCyan:"#a4ffff",white:"#f8f8f2",brightWhite:"#ffffff"},Monokai:{name:"Monokai",background:"#272822",foreground:"#f8f8f2",cursor:"#f8f8f0",cursorAccent:"#272822",selectionBackground:"#49483e",black:"#272822",brightBlack:"#75715e",red:"#f92672",brightRed:"#f92672",green:"#a6e22e",brightGreen:"#a6e22e",yellow:"#f4bf75",brightYellow:"#f4bf75",blue:"#66d9ef",brightBlue:"#66d9ef",magenta:"#ae81ff",brightMagenta:"#ae81ff",cyan:"#a1efe4",brightCyan:"#a1efe4",white:"#f8f8f2",brightWhite:"#f9f8f5"},"Solarized Dark":{name:"Solarized Dark",background:"#002b36",foreground:"#839496",cursor:"#839496",cursorAccent:"#002b36",selectionBackground:"#073642",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},"Solarized Light":{name:"Solarized Light",background:"#fdf6e3",foreground:"#657b83",cursor:"#657b83",cursorAccent:"#fdf6e3",selectionBackground:"#eee8d5",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},Nord:{name:"Nord",background:"#2e3440",foreground:"#d8dee9",cursor:"#d8dee9",cursorAccent:"#2e3440",selectionBackground:"#434c5e",black:"#3b4252",brightBlack:"#4c566a",red:"#bf616a",brightRed:"#bf616a",green:"#a3be8c",brightGreen:"#a3be8c",yellow:"#ebcb8b",brightYellow:"#ebcb8b",blue:"#81a1c1",brightBlue:"#81a1c1",magenta:"#b48ead",brightMagenta:"#b48ead",cyan:"#88c0d0",brightCyan:"#8fbcbb",white:"#e5e9f0",brightWhite:"#eceff4"},"One Dark":{name:"One Dark",background:"#282c34",foreground:"#abb2bf",cursor:"#528bff",cursorAccent:"#282c34",selectionBackground:"#3e4451",black:"#282c34",brightBlack:"#5c6370",red:"#e06c75",brightRed:"#e06c75",green:"#98c379",brightGreen:"#98c379",yellow:"#e5c07b",brightYellow:"#d19a66",blue:"#61afef",brightBlue:"#61afef",magenta:"#c678dd",brightMagenta:"#c678dd",cyan:"#56b6c2",brightCyan:"#56b6c2",white:"#abb2bf",brightWhite:"#ffffff"},"Gruvbox Dark":{name:"Gruvbox Dark",background:"#282828",foreground:"#ebdbb2",cursor:"#ebdbb2",cursorAccent:"#282828",selectionBackground:"#504945",black:"#282828",brightBlack:"#928374",red:"#cc241d",brightRed:"#fb4934",green:"#98971a",brightGreen:"#b8bb26",yellow:"#d79921",brightYellow:"#fabd2f",blue:"#458588",brightBlue:"#83a598",magenta:"#b16286",brightMagenta:"#d3869b",cyan:"#689d6a",brightCyan:"#8ec07c",white:"#a89984",brightWhite:"#ebdbb2"},"Tokyo Night":{name:"Tokyo Night",background:"#1a1b26",foreground:"#a9b1d6",cursor:"#c0caf5",cursorAccent:"#1a1b26",selectionBackground:"#33467c",black:"#15161e",brightBlack:"#414868",red:"#f7768e",brightRed:"#f7768e",green:"#9ece6a",brightGreen:"#9ece6a",yellow:"#e0af68",brightYellow:"#e0af68",blue:"#7aa2f7",brightBlue:"#7aa2f7",magenta:"#bb9af7",brightMagenta:"#bb9af7",cyan:"#7dcfff",brightCyan:"#7dcfff",white:"#a9b1d6",brightWhite:"#c0caf5"}},O=Object.keys(D);function w(c){let e=D[c];if(!e)return null;let{name:n,...l}=e;return l}var M={".ttf":"truetype",".otf":"opentype",".woff":"woff",".woff2":"woff2"},u=class c{constructor(e,n,l,t){this._terminals=[];this._outputBuffers=[];this._csiUMode=[];this._disposed=!1;this._panel=e,this._context=n,this._rows=l,this._cols=t,this._panel.webview.html=this._getHtml(),this._panel.webview.onDidReceiveMessage(async o=>{switch(o.type){case"ready":if(this._createTerminals(o.defaultCols,o.defaultRows),o.cellDims&&Array.isArray(o.cellDims))for(let r=0;r<o.cellDims.length&&r<this._terminals.length;r++){let i=o.cellDims[r];if(i?.cols&&i?.rows)try{this._terminals[r].pty.resize(i.cols,i.rows)}catch{}}this.loadCustomFonts(this._context.globalState.get("customFonts",[]));let s=this._context.globalState.get("cellOverrides",{});for(let[r,i]of Object.entries(s))if(i.bgColor||i.fgColor||i.fontFamily||i.themeName){let p=i.themeName?w(i.themeName):null;this.sendCellConfig(parseInt(r),i.bgColor||"",i.fgColor||"",i.fontFamily||"",i.themeName||"",p)}break;case"input":this._terminals[o.id]?.pty.write(o.data);break;case"resize":try{this._terminals[o.id]?.pty.resize(o.cols,o.rows)}catch{}break;case"clearTerminal":this._panel.webview.postMessage({type:"clear",id:o.id});break;case"killTerminal":try{this._terminals[o.id]?.pty.kill()}catch{}break;case"restartTerminal":this._restartTerminal(o.id);break;case"renameCell":{let r=this._context.globalState.get("cellLabels",[]),i=r[o.id]||"",p=await g.window.showInputBox({prompt:g.l10n.t("Rename cell {0}",o.id+1),value:i,placeHolder:g.l10n.t("Enter alias (empty to reset)")});p!==void 0&&(r[o.id]=p,await this._context.globalState.update("cellLabels",r),this.sendLabels(),g.commands.executeCommand("terminalGrid._refreshSidebar"));break}}}),this._configListener=g.workspace.onDidChangeConfiguration(o=>{if(o.affectsConfiguration("terminalGrid")){let s=g.workspace.getConfiguration("terminalGrid"),r=s.get("colorTheme","");this._panel.webview.postMessage({type:"configUpdate",zoom:s.get("zoomPercent",100),fontFamily:s.get("fontFamily",""),bgColor:s.get("backgroundColor",""),fgColor:s.get("foregroundColor",""),themeName:r,themeColors:w(r)})}}),this._panel.onDidDispose(()=>this.dispose()),this._panel.iconPath=g.Uri.joinPath(n.extensionUri,"images","sidebar.svg")}static{this.OUTPUT_BUFFER_SIZE=5e4}static{this.CSI_U_ENABLE=/\x1b\[>[0-9]+u/}static{this.CSI_U_DISABLE=/\x1b\[<[0-9]*u/}static _getNodePty(){if(c._nodePty===void 0)try{c._nodePty=require("node-pty")}catch{c._nodePty=null}return c._nodePty}static createOrShow(e,n,l){c.currentPanel&&c.currentPanel.dispose();let t=g.window.createWebviewPanel("terminalGrid",g.l10n.t("Terminal Grid {0}\xD7{1}",n,l),g.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[g.Uri.joinPath(e.extensionUri,"media")]});c.currentPanel=new c(t,e,n,l),e.globalState.update("lastGrid",{rows:n,cols:l})}static revive(e,n,l,t){c.currentPanel&&c.currentPanel.dispose(),c.currentPanel=new c(e,n,l,t),n.globalState.update("lastGrid",{rows:l,cols:t})}_enterSeq(e){return this._csiUMode[e]?"\x1B[13u":"\r"}broadcastInput(e){let l=/\r?\n/.test(e)?"\x1B[200~"+e+"\x1B[201~":e;for(let t of this._terminals)t.pty.write(l+this._enterSeq(t.id))}sendToCell(e,n){let l=this._terminals[e];return l?(l.pty.write(n),!0):!1}sendInputToCell(e,n){let l=this._terminals[e];if(!l)return!1;let o=/\r?\n/.test(n)?"\x1B[200~"+n+"\x1B[201~":n;return l.pty.write(o+this._enterSeq(e)),!0}readCell(e,n){let l=this._outputBuffers[e];return l===void 0?null:n===void 0?l:n<=0?"":l.split(`
`).slice(-n).join(`
`)}getCellCount(){return this._terminals.length}getRows(){return this._rows}getCols(){return this._cols}getCellLabels(){let e=this._context.globalState.get("cellLabels",[]),n=this._rows*this._cols;return Array.from({length:n},(l,t)=>e[t]||String(t+1))}sendCellConfig(e,n,l,t,o,s){this._panel.webview.postMessage({type:"cellConfig",id:e,bgColor:n,fgColor:l,fontFamily:t,themeName:o??"",themeColors:s??null})}clearCellOverrides(){this._panel.webview.postMessage({type:"clearCellOverrides"})}sendLabels(){let e=this._context.globalState.get("cellLabels",[]);this._panel.webview.postMessage({type:"setLabels",labels:e})}loadCustomFonts(e){for(let n of e){let l=this._readFontBase64(n.path);if(l){let t=L.extname(n.path).toLowerCase();this._panel.webview.postMessage({type:"loadFont",name:n.name,data:l,format:M[t]||"truetype"})}}}_readFontBase64(e){try{return R.readFileSync(e).toString("base64")}catch{return null}}_spawnPty(e,n,l,t){if(e){let i=process.platform==="win32"?"powershell.exe":process.env.SHELL||"bash",p=process.platform==="win32"?["-NoLogo","-NoProfile"]:[],m=e.spawn(i,p,{name:"xterm-256color",cols:n,rows:l,cwd:t,env:process.env});return{onData:f=>{m.onData(f)},write:f=>m.write(f),resize:(f,b)=>m.resize(f,b),kill:()=>m.kill()}}let{spawn:o}=require("child_process"),s=process.platform==="win32"?process.env.COMSPEC||"cmd.exe":process.env.SHELL||"bash",r=o(s,[],{cwd:t,env:process.env,windowsHide:!0});return{onData:i=>{r.stdout?.on("data",p=>i(p.toString())),r.stderr?.on("data",p=>i(p.toString()))},write:i=>{r.stdin?.write(i)},resize:()=>{},kill:()=>r.kill()}}_createTerminals(e,n){let l=g.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",t=this._rows*this._cols,o=c._getNodePty();o||g.window.showWarningMessage(g.l10n.t("node-pty not available. Falling back to basic shell (limited features)."));let s=this._context.globalState.get("startupCommands",[]),r=[];for(let m of s)if(typeof m=="string")r.push(m);else if(m&&typeof m=="object"&&"command"in m){let f=m;for(let b=0;b<(f.count||1);b++)r.push(f.command)}let i=e||80,p=n||24;for(let m=0;m<t;m++){let f=this._spawnPty(o,i,p,l),b=m;this._outputBuffers[b]="",this._csiUMode[b]=!1;let E=!1;f.onData(h=>{this._disposed||(c.CSI_U_ENABLE.test(h)&&(this._csiUMode[b]=!0),c.CSI_U_DISABLE.test(h)&&(this._csiUMode[b]=!1),this._outputBuffers[b]=(this._outputBuffers[b]||"")+h,this._outputBuffers[b].length>c.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[b]=this._outputBuffers[b].slice(-c.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:b,data:h}),!E&&r[b]&&(E=!0,this._terminals[b]?.pty.write(r[b]+"\r")))}),this._terminals.push({id:m,pty:f})}this.sendLabels()}_restartTerminal(e){let n=this._terminals[e];if(!n)return;try{n.pty.kill()}catch{}this._panel.webview.postMessage({type:"reset",id:e});let l=g.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",t=this._spawnPty(c._getNodePty(),80,24,l),o=this._context.globalState.get("startupCommands",[]),s=[];for(let p of o)if(typeof p=="string")s.push(p);else if(p&&typeof p=="object"&&"command"in p){let m=p;for(let f=0;f<(m.count||1);f++)s.push(m.command)}let r=s[e]||"",i=!1;this._outputBuffers[e]="",this._csiUMode[e]=!1,t.onData(p=>{this._disposed||(c.CSI_U_ENABLE.test(p)&&(this._csiUMode[e]=!0),c.CSI_U_DISABLE.test(p)&&(this._csiUMode[e]=!1),this._outputBuffers[e]=(this._outputBuffers[e]||"")+p,this._outputBuffers[e].length>c.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[e]=this._outputBuffers[e].slice(-c.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:e,data:p}),!i&&r&&(i=!0,this._terminals[e]?.pty.write(r+"\r")))}),this._terminals[e]={id:e,pty:t}}dispose(){this._disposed=!0,c.currentPanel=void 0,this._configListener?.dispose(),this._context.globalState.update("lastGrid",void 0);for(let e of this._terminals)try{e.pty.kill()}catch{}this._terminals=[],this._panel.dispose()}_buildCustomFontCss(){let e=this._context.globalState.get("customFonts",[]),n="";for(let l of e){let t=this._readFontBase64(l.path);if(!t)continue;let o=L.extname(l.path).toLowerCase(),s=M[o]||"truetype";n+=`@font-face { font-family: '${l.name}'; src: url(data:font/${o.slice(1)};base64,${t}) format('${s}'); font-display: swap; }
`}return n}_getHtml(){let e=this._panel.webview,n=e.asWebviewUri(g.Uri.joinPath(this._context.extensionUri,"media","gridTerminal.js")),l=e.asWebviewUri(g.Uri.joinPath(this._context.extensionUri,"media","xterm.css")),t=Y(),o=this._buildCustomFontCss();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none';
                 style-src ${e.cspSource} 'unsafe-inline';
                 script-src 'nonce-${t}';
                 font-src ${e.cspSource} data:;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${l}">
  <style>
    ${o}
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      width: 100%; height: 100%;
      overflow: hidden;
      background: var(--vscode-editor-background, #1e1e1e);
    }
    #grid {
      display: grid;
      grid-template-rows: repeat(${this._rows}, 1fr);
      grid-template-columns: repeat(${this._cols}, 1fr);
      width: 100%; height: 100%;
      gap: 2px;
      padding: 2px;
      position: relative;
    }
    .cell {
      overflow: hidden;
      contain: strict;
      background: var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e));
      border-radius: 6px;
      border: 1px solid var(--vscode-panel-border, rgba(255,255,255,0.04));
      display: flex;
      flex-direction: column;
      position: relative;
      transition: border-color 0.2s ease;
    }
    .cell.focused {
      border-color: var(--vscode-focusBorder, rgba(0, 127, 212, 0.6));
      box-shadow: 0 0 8px color-mix(in srgb, var(--vscode-focusBorder, #007fd4) 25%, transparent);
    }
    .cell-info {
      position: absolute;
      top: 4px; right: 8px;
      display: flex; align-items: center; gap: 6px;
      font-size: 10px;
      font-family: var(--vscode-terminal-fontFamily, var(--vscode-editor-fontFamily, monospace));
      z-index: 1;
      pointer-events: none;
      user-select: none;
    }
    .cell-label {
      color: var(--vscode-textLink-foreground, #3794ff);
      opacity: 0.6;
    }
    .cell-zoom-pct {
      font-size: 9px;
      color: var(--vscode-textLink-foreground, #3794ff);
      opacity: 0.7;
    }
    .grid-resizer {
      position: absolute;
      z-index: 20;
      background: transparent;
    }
    .grid-resizer:hover, .grid-resizer.active {
      background: var(--vscode-focusBorder, #007fd4);
      opacity: 0.45;
    }
    .grid-resizer.col-resizer {
      top: 0; width: 6px; height: 100%;
      cursor: col-resize;
    }
    .grid-resizer.row-resizer {
      left: 0; height: 6px; width: 100%;
      cursor: row-resize;
    }
    body.resizing-col, body.resizing-col * { cursor: col-resize !important; }
    body.resizing-row, body.resizing-row * { cursor: row-resize !important; }
    .term-container {
      flex: 1;
      overflow: hidden;
      padding: 4px 0 0 4px;
      background: var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e));
    }
    .term-container .xterm,
    .term-container .xterm-viewport,
    .term-container .xterm-screen {
      height: 100%;
    }
    .term-container .xterm-viewport {
      overflow-y: scroll !important;
      will-change: transform;
    }
    .term-container .xterm-viewport::-webkit-scrollbar { width: 4px; }
    .term-container .xterm-viewport::-webkit-scrollbar-thumb {
      background: var(--vscode-scrollbarSlider-background, rgba(255,255,255,0.1));
      border-radius: 2px;
    }
    .term-container .xterm-viewport::-webkit-scrollbar-thumb:hover {
      background: var(--vscode-scrollbarSlider-hoverBackground, rgba(255,255,255,0.2));
    }
    .ctx-menu {
      position: fixed; display: none; z-index: 1000;
      background: var(--vscode-menu-background, #252526);
      border: 1px solid rgba(255,255,255,.12); border-radius: 8px;
      padding: 4px 0; min-width: 140px;
      box-shadow: 0 4px 20px rgba(0,0,0,.4);
    }
    .ctx-menu.show { display: block; }
    .ctx-menu-item {
      padding: 6px 12px; font-size: 12px; cursor: pointer;
      color: var(--vscode-menu-foreground, var(--vscode-foreground));
      transition: background .1s;
    }
    .ctx-menu-item:hover { background: rgba(255,255,255,.06); }
    .ctx-menu-sep { height: 1px; background: rgba(255,255,255,.06); margin: 4px 8px; }
  </style>
</head>
<body>
  <div id="grid"></div>
  <div class="ctx-menu" id="ctxMenu">
    <div class="ctx-menu-item" data-action="copy">${g.l10n.t("Copy")}</div>
    <div class="ctx-menu-item" data-action="paste">${g.l10n.t("Paste")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="clear">${g.l10n.t("Clear")}</div>
    <div class="ctx-menu-item" data-action="restart">${g.l10n.t("Restart")}</div>
    <div class="ctx-menu-item" data-action="kill">${g.l10n.t("Kill")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="rename">${g.l10n.t("Rename")}</div>
  </div>
  <script nonce="${t}">
    var __GRID_ROWS = ${this._rows};
    var __GRID_COLS = ${this._cols};
    var __GRID_ZOOM = ${g.workspace.getConfiguration("terminalGrid").get("zoomPercent",100)};
    var __GRID_FONT_FAMILY = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("fontFamily",""))};
    var __GRID_BG_COLOR = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("backgroundColor",""))};
    var __GRID_FG_COLOR = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("foregroundColor",""))};
    var __GRID_THEME = ${JSON.stringify(g.workspace.getConfiguration("terminalGrid").get("colorTheme",""))};
    var __GRID_THEME_COLORS = ${JSON.stringify(w(g.workspace.getConfiguration("terminalGrid").get("colorTheme","")))};
  </script>
  <script nonce="${t}" src="${n}"></script>
</body>
</html>`}};function Y(){let c="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<32;n++)c+=e.charAt(Math.floor(Math.random()*e.length));return c}var K=[".ttf",".otf",".woff",".woff2"];function q(){try{return require("node-pty"),!0}catch{return!1}}var _=class{constructor(e){this._mcpPort=0;this._context=e}static{this.viewType="terminalGrid.sidebarView"}setMcpPort(e){this._mcpPort=e,this._view?.webview.postMessage({type:"mcpPort",port:e})}resolveWebviewView(e,n,l){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._context.extensionUri]},e.webview.html=this._getHtml(),e.webview.onDidReceiveMessage(async t=>{switch(t.type){case"openGrid":await a.commands.executeCommand("terminalGrid.openCustomGrid",t.rows,t.cols),this.sendConfig();break;case"reload":await a.commands.executeCommand("workbench.action.reloadWindow");break;case"setConfig":{let o=a.workspace.getConfiguration("terminalGrid");t.key&&t.value!==void 0&&await o.update(t.key,t.value,a.ConfigurationTarget.Global);break}case"getConfig":{this.sendConfig();break}case"browseFont":{let o=await a.window.showOpenDialog({canSelectMany:!1,filters:{"Font Files":["ttf","otf","woff","woff2"]},title:a.l10n.t("Select Font File")});if(!o||o.length===0)break;let s=o[0].fsPath,r=k.extname(s).toLowerCase();if(!K.includes(r)){a.window.showWarningMessage(a.l10n.t("Unsupported font format. Use .ttf, .otf, .woff, or .woff2"));break}try{I.accessSync(s,I.constants.R_OK)}catch{a.window.showErrorMessage(a.l10n.t("Cannot read font file."));break}let i=k.basename(s,r),p=this._context.globalState.get("customFonts",[]);p.some(m=>m.path===s)||(p.push({name:i,path:s}),await this._context.globalState.update("customFonts",p)),this.sendConfig(),u.currentPanel&&u.currentPanel.loadCustomFonts([{name:i,path:s}]);break}case"removeFont":{let s=this._context.globalState.get("customFonts",[]).filter(r=>r.name!==t.name);await this._context.globalState.update("customFonts",s),this.sendConfig();break}case"addStartupCommand":{let o=this._context.globalState.get("startupCommands",[]);o.push({command:t.command,count:1}),await this._context.globalState.update("startupCommands",o),this.sendConfig();break}case"removeStartupCommand":{let o=this._context.globalState.get("startupCommands",[]);o.splice(t.index,1),await this._context.globalState.update("startupCommands",o),this.sendConfig();break}case"updateCommandCount":{let o=this._context.globalState.get("startupCommands",[]);o[t.index]&&(o[t.index].count=Math.max(1,t.count),await this._context.globalState.update("startupCommands",o)),this.sendConfig();break}case"addProject":{let o=this._context.globalState.get("projects",[]);o.some(s=>s.path===t.path)||(o.push({name:t.name,path:t.path}),await this._context.globalState.update("projects",o)),this.sendConfig();break}case"removeProject":{let o=this._context.globalState.get("projects",[]);o.splice(t.index,1),await this._context.globalState.update("projects",o),this.sendConfig();break}case"openProject":{let o=a.Uri.file(t.path);await a.commands.executeCommand("vscode.openFolder",o,{forceNewWindow:!!t.newWindow});break}case"addCurrentProject":{let o=a.workspace.workspaceFolders?.[0];if(!o){a.window.showWarningMessage(a.l10n.t("No workspace folder open."));break}let s=this._context.globalState.get("projects",[]),r=o.uri.fsPath;s.some(i=>i.path===r)||(s.push({name:o.name,path:r}),await this._context.globalState.update("projects",s)),this.sendConfig();break}case"browseProject":{let o=await a.window.showOpenDialog({canSelectFiles:!1,canSelectFolders:!0,canSelectMany:!1,title:a.l10n.t("Select Project Folder")});if(!o||o.length===0)break;let s=o[0].fsPath,r=k.basename(s),i=this._context.globalState.get("projects",[]);i.some(p=>p.path===s)||(i.push({name:r,path:s}),await this._context.globalState.update("projects",i)),this.sendConfig();break}case"savePreset":{await this._savePreset(t.name),this.sendConfig();break}case"loadPreset":{let s=this._context.globalState.get("presets",[]).find(i=>i.name===t.name);if(!s)break;let r=a.workspace.getConfiguration("terminalGrid");await r.update("defaultRows",s.rows,a.ConfigurationTarget.Global),await r.update("defaultCols",s.cols,a.ConfigurationTarget.Global),await r.update("zoomPercent",s.zoomPercent,a.ConfigurationTarget.Global),await r.update("fontFamily",s.fontFamily,a.ConfigurationTarget.Global),await r.update("backgroundColor",s.bgColor,a.ConfigurationTarget.Global),await r.update("foregroundColor",s.fgColor,a.ConfigurationTarget.Global),await r.update("colorTheme",s.colorTheme||"",a.ConfigurationTarget.Global),await this._context.globalState.update("startupCommands",s.startupCommands||[]),await this._context.globalState.update("cellLabels",s.cellLabels||[]),u.createOrShow(this._context,s.rows,s.cols),this.sendConfig();break}case"deletePreset":{let s=this._context.globalState.get("presets",[]).filter(i=>i.name!==t.name);await this._context.globalState.update("presets",s);let r=this._context.globalState.get("projectPresets",{});for(let i of Object.keys(r))r[i]===t.name&&delete r[i];await this._context.globalState.update("projectPresets",r),this.sendConfig();break}case"linkPreset":{let o=this._context.globalState.get("projectPresets",{});t.presetName?o[t.projectPath]=t.presetName:delete o[t.projectPath],await this._context.globalState.update("projectPresets",o),this.sendConfig();break}case"broadcast":{u.currentPanel?u.currentPanel.broadcastInput(t.text):a.window.showWarningMessage(a.l10n.t("No terminal grid is open."));break}case"broadcastToCell":{if(u.currentPanel)for(let o of t.cellIds)u.currentPanel.sendInputToCell(o,t.text);else a.window.showWarningMessage(a.l10n.t("No terminal grid is open."));break}case"setCellConfig":{let o=this._context.globalState.get("cellOverrides",{});if(o[t.cellId]={bgColor:t.bgColor||"",fgColor:t.fgColor||"",fontFamily:t.fontFamily||"",themeName:t.themeName||""},await this._context.globalState.update("cellOverrides",o),u.currentPanel){let s=t.themeName?w(t.themeName):null;u.currentPanel.sendCellConfig(t.cellId,t.bgColor||"",t.fgColor||"",t.fontFamily||"",t.themeName||"",s)}break}case"clearAllCellOverrides":{await this._context.globalState.update("cellOverrides",{}),u.currentPanel&&u.currentPanel.clearCellOverrides();break}case"saveSectionStates":{await this._context.globalState.update("sectionStates",t.states);break}case"installNodePty":{try{await a.window.withProgress({location:a.ProgressLocation.Notification,title:a.l10n.t("Installing node-pty\u2026"),cancellable:!1},()=>new Promise((r,i)=>{z.exec("npm install node-pty",{cwd:this._context.extensionPath},p=>{p?i(p):r()})})),this._view?.webview.postMessage({type:"ptyInstallResult",success:!0});let o=a.l10n.t("Reload Window");await a.window.showInformationMessage(a.l10n.t("node-pty installed successfully. Reload window to activate."),o)===o&&a.commands.executeCommand("workbench.action.reloadWindow")}catch(o){let s=o instanceof Error?o.message:String(o);a.window.showErrorMessage(a.l10n.t("node-pty install failed: {0}",s)),this._view?.webview.postMessage({type:"ptyInstallResult",success:!1})}break}}}),a.workspace.onDidChangeConfiguration(t=>{t.affectsConfiguration("terminalGrid")&&this.sendConfig()})}async _savePreset(e){let n=a.workspace.getConfiguration("terminalGrid"),l={name:e,rows:n.get("defaultRows",2),cols:n.get("defaultCols",3),startupCommands:this._context.globalState.get("startupCommands",[]),cellLabels:this._context.globalState.get("cellLabels",[]),zoomPercent:n.get("zoomPercent",100),fontFamily:n.get("fontFamily",""),bgColor:n.get("backgroundColor",""),fgColor:n.get("foregroundColor",""),colorTheme:n.get("colorTheme","")},t=this._context.globalState.get("presets",[]),o=t.findIndex(s=>s.name===e);o>=0?t[o]=l:t.push(l),await this._context.globalState.update("presets",t)}sendConfig(){if(!this._view)return;let e=a.workspace.getConfiguration("terminalGrid"),n=this._context.globalState.get("customFonts",[]),l=this._context.globalState.get("startupCommands",[]),t=this._context.globalState.get("projects",[]),o=this._context.globalState.get("presets",[]),s=this._context.globalState.get("projectPresets",{}),r=this._context.globalState.get("cellLabels",[]),i=this._context.globalState.get("cellOverrides",{}),p=this._context.globalState.get("sectionStates",{}),m=a.workspace.workspaceFolders?.[0]?.uri.fsPath||"",f=u.currentPanel;this._view.webview.postMessage({type:"configValues",zoom:e.get("zoomPercent",100),fontFamily:e.get("fontFamily",""),bgColor:e.get("backgroundColor",""),fgColor:e.get("foregroundColor",""),colorTheme:e.get("colorTheme",""),themeNames:O,customFonts:n.map(b=>b.name),startupCommands:l,projects:t,presets:o,projectPresets:s,cellLabels:r,cellOverrides:i,sectionStates:p,workspacePath:m,gridRows:f?.getRows()??0,gridCols:f?.getCols()??0})}_getHtml(){let e=X();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${e}';">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: var(--vscode-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      color: var(--vscode-foreground);
      background: transparent;
      -webkit-font-smoothing: antialiased;
    }
    .container { padding: 16px 12px; display: flex; flex-direction: column; gap: 0; }
    .glass-card + .glass-card { margin-top: 10px; }
    .glass-card.collapsed + .glass-card { margin-top: 4px; }
    .glass-card + .glass-card.collapsed { margin-top: 4px; }
    .glass-card.collapsed + .glass-card.collapsed { margin-top: 2px; }
    .hint { margin-top: 10px; }

    .glass-card {
      background: rgba(255,255,255,0.025);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px; padding: 18px 16px;
      transition: border-color .3s, box-shadow .3s;
      position: relative;
    }
    .glass-card:has(.tip-wrap:hover) { z-index: 300; }
    .glass-card:hover { border-color: rgba(255,255,255,.10); box-shadow: 0 4px 24px rgba(0,0,0,.12); }

    .section-label {
      font-size: 11px; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.8px; opacity: .5; margin-bottom: 16px; user-select: none;
      color: var(--vscode-textLink-foreground, #3794ff);
    }

    .grid-selector-wrap { display: flex; justify-content: center; margin-bottom: 14px; }
    .grid-selector { display: inline-grid; gap: 4px; }
    .grid-cell {
      width: 30px; height: 30px;
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 6px; cursor: pointer;
      transition: all .1s ease;
    }
    .grid-cell.highlight {
      background: linear-gradient(135deg,rgba(0,127,212,.30),rgba(0,200,255,.18));
      border-color: rgba(0,160,230,.45);
    }
    .grid-cell.selected {
      background: linear-gradient(135deg,rgba(0,127,212,.45),rgba(0,200,255,.28));
      border-color: rgba(0,160,230,.6);
      box-shadow: 0 0 10px rgba(0,150,230,.12);
    }

    .size-label {
      text-align: center; font-size: 15px; font-weight: 600;
      opacity: .65; margin-bottom: 16px; font-variant-numeric: tabular-nums;
    }
    .size-label .num { color: var(--vscode-textLink-foreground,#3794ff); font-size: 20px; font-weight: 700; }

    .glass-btn {
      width: 100%; padding: 11px 14px;
      background: rgba(255,255,255,.035);
      border: 1px solid rgba(255,255,255,.07);
      border-radius: 10px; color: var(--vscode-foreground);
      cursor: pointer; font-size: 12px; font-weight: 500; font-family: inherit;
      transition: all .2s ease;
      display: flex; align-items: center; justify-content: center; gap: 8px;
      outline: none; user-select: none;
    }
    .glass-btn:hover {
      background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.14);
      transform: translateY(-1px); box-shadow: 0 4px 12px rgba(0,0,0,.1);
    }
    .glass-btn:active { transform: translateY(0); box-shadow: none; }
    .glass-btn.primary {
      background: linear-gradient(135deg,rgba(0,127,212,.22),rgba(0,200,255,.10));
      border-color: rgba(0,150,220,.35);
    }
    .glass-btn.primary:hover {
      background: linear-gradient(135deg,rgba(0,127,212,.35),rgba(0,200,255,.18));
      border-color: rgba(0,150,220,.55);
      box-shadow: 0 4px 20px rgba(0,150,230,.12);
    }
    .btn-group { display: flex; flex-direction: column; gap: 8px; }
    .btn-icon { font-size: 15px; opacity: .75; line-height: 1; }

    /* \u2500\u2500 Settings controls \u2500\u2500 */
    .setting-row {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 12px; gap: 12px;
    }
    .setting-row:last-child { margin-bottom: 0; }
    .setting-label { font-size: 11px; opacity: .6; white-space: nowrap; flex-shrink: 0; }
    .stepper { display: flex; align-items: center; gap: 4px; }
    .stepper-btn {
      width: 24px; height: 24px;
      border: 1px solid rgba(255,255,255,.08); border-radius: 6px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      font-size: 14px; font-family: monospace;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all .15s ease; padding: 0; line-height: 1;
    }
    .stepper-btn:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.16); }
    .stepper-val {
      min-width: 40px; text-align: center; font-size: 12px; font-weight: 600;
      font-variant-numeric: tabular-nums; opacity: .8;
    }

    /* \u2500\u2500 Font dropdown (opens upward) \u2500\u2500 */
    .font-picker { position: relative; flex: 1; }
    .font-display {
      display: flex; align-items: center; justify-content: space-between;
      padding: 5px 8px;
      background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; cursor: pointer; transition: border-color .15s; user-select: none;
    }
    .font-display:hover { border-color: rgba(255,255,255,.16); }
    .font-display.open { border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .font-display-text { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1; }
    .font-display-arrow { opacity: .4; font-size: 8px; margin-left: 6px; flex-shrink: 0; }
    .font-dropdown {
      display: none;
      position: absolute; bottom: calc(100% + 4px); left: 0; right: 0;
      background: var(--vscode-dropdown-background, #252526);
      border: 1px solid rgba(255,255,255,.12); border-radius: 8px;
      max-height: 220px; overflow-y: auto; z-index: 100; padding: 4px 0;
      box-shadow: 0 -4px 24px rgba(0,0,0,.3);
    }
    .font-dropdown.show { display: block; }
    .font-dropdown::-webkit-scrollbar { width: 4px; }
    .font-dropdown::-webkit-scrollbar-thumb { background: rgba(255,255,255,.12); border-radius: 2px; }
    .font-opt {
      display: flex; align-items: center; padding: 5px 10px; font-size: 11px;
      cursor: pointer; transition: background .1s;
    }
    .font-opt:hover { background: rgba(255,255,255,.06); }
    .font-opt.active { background: rgba(0,127,212,.18); }
    .font-opt-name { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .font-opt-del {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 14px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; margin-left: 4px; transition: all .1s;
    }
    .font-opt-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    .font-divider { height: 1px; background: rgba(255,255,255,.06); margin: 4px 8px; }
    .font-opt-add {
      display: flex; align-items: center; gap: 6px; padding: 5px 10px; font-size: 11px;
      cursor: pointer; transition: background .1s;
      color: var(--vscode-textLink-foreground, #3794ff);
    }
    .font-opt-add:hover { background: rgba(255,255,255,.06); }

    /* \u2500\u2500 Color picker \u2500\u2500 */
    .color-row { display: flex; align-items: center; gap: 6px; }
    .color-swatch {
      width: 24px; height: 24px; border-radius: 6px;
      border: 1px solid rgba(255,255,255,.12); cursor: pointer;
      position: relative; overflow: hidden; flex-shrink: 0;
    }
    .color-swatch input[type="color"] {
      position: absolute; top: -4px; left: -4px;
      width: 32px; height: 32px; border: none; cursor: pointer;
      opacity: 0;
    }
    .color-swatch-fill {
      width: 100%; height: 100%; border-radius: 5px;
    }
    .color-val {
      font-size: 11px; opacity: .6; flex: 1;
      font-family: monospace; font-variant-numeric: tabular-nums;
    }
    .color-reset {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 13px; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: all .1s; flex-shrink: 0;
    }
    .color-reset:hover { background: rgba(255,255,255,.08); color: var(--vscode-foreground); }
    .color-reset.hidden { visibility: hidden; }

    .hint {
      font-size: 11px; opacity: .35; text-align: center;
      line-height: 1.5; margin-top: 4px;
    }

    /* \u2500\u2500 Tooltip \u2500\u2500 */
    .section-header {
      display: flex; align-items: center; gap: 6px;
      margin-bottom: 16px; position: relative;
    }
    .section-header .section-label { margin-bottom: 0; }
    .tip-icon {
      width: 14px; height: 14px; border-radius: 50%;
      background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
      font-size: 9px; display: inline-flex; align-items: center; justify-content: center;
      cursor: help; opacity: .5; transition: opacity .15s; flex-shrink: 0;
    }
    .tip-icon:hover { opacity: .9; }
    .tip-wrap { display: inline-flex; }
    .tip-bubble {
      display: none; position: absolute;
      top: calc(100% + 4px); left: 0; right: 0;
      width: auto; padding: 10px 12px;
      background: var(--vscode-editorHoverWidget-background, #2d2d30);
      border: 1px solid var(--vscode-editorHoverWidget-border, rgba(255,255,255,.12));
      border-radius: 8px; font-size: 11px; line-height: 1.55;
      color: var(--vscode-editorHoverWidget-foreground, var(--vscode-foreground));
      box-shadow: 0 4px 20px rgba(0,0,0,.35);
      z-index: 200; white-space: normal; pointer-events: auto;
    }
    .tip-wrap:hover .tip-bubble { display: block; }
    .tip-bubble b { opacity: .9; }
    .tip-bubble .tip-example {
      margin-top: 8px; padding: 6px 8px;
      background: rgba(0,0,0,.2); border-radius: 5px;
      font-family: monospace; font-size: 10px; line-height: 1.6;
    }

    /* \u2500\u2500 Startup Commands \u2500\u2500 */
    .cmd-list { display: flex; flex-direction: column; gap: 4px; margin-bottom: 10px; }
    .cmd-item {
      display: flex; align-items: center; gap: 6px;
      padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.06);
      border-radius: 6px; font-size: 11px;
    }
    .cmd-item-range {
      opacity: .35; font-size: 9px; min-width: 22px; flex-shrink: 0;
      font-variant-numeric: tabular-nums; text-align: right;
    }
    .cmd-item-text {
      flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: monospace; opacity: .85;
    }
    .cmd-count { display: flex; align-items: center; gap: 2px; flex-shrink: 0; }
    .cmd-count-btn {
      width: 18px; height: 18px;
      border: 1px solid rgba(255,255,255,.06); border-radius: 4px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      font-size: 12px; font-family: monospace;
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all .12s; padding: 0; line-height: 1;
    }
    .cmd-count-btn:hover { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.14); }
    .cmd-count-val {
      min-width: 18px; text-align: center; font-size: 11px; font-weight: 600;
      font-variant-numeric: tabular-nums; opacity: .7;
    }
    .cmd-item-del {
      width: 18px; height: 18px; border: none; border-radius: 4px;
      background: transparent; color: rgba(255,255,255,.3);
      font-size: 14px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .1s; margin-left: 2px;
    }
    .cmd-item-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    .cmd-add-row { display: flex; gap: 6px; align-items: center; margin-bottom: 6px; }
    .glass-select {
      flex: 1; padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; font-family: inherit; outline: none; cursor: pointer;
    }
    .glass-select:hover { border-color: rgba(255,255,255,.16); }
    .glass-select option { background: var(--vscode-dropdown-background, #252526); }
    .glass-input {
      flex: 1; padding: 5px 8px;
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 6px; color: var(--vscode-foreground);
      font-size: 11px; font-family: monospace; outline: none;
    }
    .glass-input:focus { border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .cmd-empty { font-size: 11px; opacity: .35; text-align: center; padding: 8px 0; }

    /* \u2500\u2500 Broadcast targets \u2500\u2500 */
    .broadcast-targets {
      display: flex; flex-wrap: wrap; gap: 6px;
      margin-bottom: 10px;
    }
    .broadcast-targets.hidden { display: none; }
    .broadcast-target {
      display: flex; align-items: center; gap: 3px;
      font-size: 11px; opacity: .7; cursor: pointer; user-select: none;
    }
    .broadcast-target input[type="checkbox"] {
      accent-color: var(--vscode-textLink-foreground, #3794ff);
      cursor: pointer; margin: 0;
    }
    .broadcast-target.all-label { font-weight: 600; opacity: .85; margin-right: 4px; }

    /* \u2500\u2500 Collapsible sections \u2500\u2500 */
    .section-header.collapsible { cursor: pointer; user-select: none; }
    .collapse-icon {
      font-size: 10px; opacity: .4; transition: transform .2s;
      margin-left: auto; flex-shrink: 0;
    }
    .glass-card.collapsed .collapse-icon { transform: rotate(-90deg); }
    .glass-card.collapsed .section-body { display: none; }
    .glass-card.collapsed { padding: 8px 16px; }
    .glass-card.collapsed .section-header { margin-bottom: 0; }

    /* \u2500\u2500 Settings tabs \u2500\u2500 */
    .settings-tabs {
      display: flex; flex-wrap: wrap; gap: 4px;
      margin-bottom: 12px;
    }
    .settings-tabs.hidden { display: none; }
    .stab {
      padding: 3px 8px; font-size: 10px; font-weight: 600;
      border: 1px solid rgba(255,255,255,.08); border-radius: 6px;
      background: rgba(255,255,255,.03); color: var(--vscode-foreground);
      cursor: pointer; transition: all .15s; font-family: inherit;
      opacity: .6; line-height: 1.4;
    }
    .stab:hover { background: rgba(255,255,255,.06); opacity: .8; }
    .stab.active {
      background: rgba(0,127,212,.18); border-color: rgba(0,150,220,.4);
      opacity: 1; color: var(--vscode-textLink-foreground, #3794ff);
    }
    .stab.has-override {
      border-color: rgba(255,170,0,.35);
    }
    /* \u2500\u2500 node-pty banner \u2500\u2500 */
    .pty-banner {
      display: flex; align-items: center; gap: 10px;
      padding: 10px 14px;
      background: linear-gradient(135deg, rgba(255,170,0,.12), rgba(255,120,0,.08));
      border: 1px solid rgba(255,170,0,.25);
      border-radius: 10px;
      font-size: 11px; line-height: 1.45;
    }
    .pty-banner-icon { font-size: 16px; flex-shrink: 0; }
    .pty-banner-text { flex: 1; opacity: .85; }
    .pty-banner-btn {
      padding: 5px 10px;
      background: rgba(255,170,0,.18);
      border: 1px solid rgba(255,170,0,.35);
      border-radius: 6px; color: var(--vscode-foreground);
      cursor: pointer; font-size: 10px; font-weight: 600; font-family: inherit;
      white-space: nowrap; transition: all .15s; flex-shrink: 0;
    }
    .pty-banner-btn:hover {
      background: rgba(255,170,0,.3);
      border-color: rgba(255,170,0,.5);
    }
  </style>
</head>
<body>
  <div class="container">
    ${q()?"":`
    <div class="pty-banner" id="ptyBanner">
      <span class="pty-banner-icon">\u26A0</span>
      <span class="pty-banner-text">${a.l10n.t("node-pty is required to use Terminal Grid.")}</span>
      <button class="pty-banner-btn" id="ptyInstallBtn">${a.l10n.t("Install")}</button>
    </div>
    `}
    <!-- Projects -->
    <div class="glass-card" data-section="projects">
      <div class="section-header collapsible">
        <div class="section-label">${a.l10n.t("Projects")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${a.l10n.t("Register projects and click to switch folders. Ctrl+Click to open in a new window. If a preset is linked, it will be auto-applied on switch.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="mcpPortInfo" style="font-size: 11px; opacity: 0.7; margin-bottom: 8px; display: ${this._mcpPort>0?"block":"none"};">
          MCP Port: <span id="mcpPortValue">${this._mcpPort}</span>
        </div>
        <div id="projectList" class="cmd-list"></div>
        <div class="btn-group" style="gap: 6px;">
          <button class="glass-btn" id="addCurrentProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">+</span> ${a.l10n.t("Add Current Folder")}
          </button>
          <button class="glass-btn" id="browseProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">&#128193;</span> ${a.l10n.t("Browse Folder")}
          </button>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="gridSize">
      <div class="section-header collapsible">
        <div class="section-label">${a.l10n.t("Select Grid Size")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${a.l10n.t("Hover to select the desired rows\xD7cols size. Supports up to 4\xD75 (20 cells). Grid opens as an editor tab, each cell is an independent terminal.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="grid-selector-wrap">
          <div class="grid-selector" id="gridSelector"></div>
        </div>
        <div class="size-label" id="sizeLabel"></div>
        <button class="glass-btn primary" id="openGridBtn">
          <span class="btn-icon">&#9654;</span> ${a.l10n.t("Open Grid")}
        </button>
      </div>
    </div>

    <div class="glass-card" data-section="settings">
      <div class="section-header collapsible">
        <div class="section-label">${a.l10n.t("Terminal Settings")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${a.l10n.t("Zoom: Global font size (50\u2013300%). Font/Color: Use tabs for global or per-cell settings. Changes in All tab apply to all cells. Set global first, then customize individual cells. Individual cells can be zoomed separately with Ctrl+Wheel.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="setting-row">
          <span class="setting-label">${a.l10n.t("Zoom")}</span>
          <div class="stepper">
            <button class="stepper-btn" id="zoomDown">\u2212</button>
            <span class="stepper-val" id="zoomVal">100%</span>
            <button class="stepper-btn" id="zoomUp">+</button>
          </div>
        </div>

        <div id="settingsTabs" class="settings-tabs hidden"></div>

        <div class="setting-row">
          <span class="setting-label">${a.l10n.t("Theme")}</span>
          <div class="font-picker" id="themePicker">
            <div class="font-display" id="themeDisplay">
              <span class="font-display-text" id="themeDisplayText">${a.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="themeDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${a.l10n.t("Font")}</span>
          <div class="font-picker" id="fontPicker">
            <div class="font-display" id="fontDisplay">
              <span class="font-display-text" id="fontDisplayText">${a.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="fontDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${a.l10n.t("Back Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="bgSwatch">
              <div class="color-swatch-fill" id="bgSwatchFill"></div>
              <input type="color" id="bgColorInput" value="#1e1e1e">
            </div>
            <span class="color-val" id="bgVal">${a.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="bgReset" title="${a.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${a.l10n.t("Font Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="fgSwatch">
              <div class="color-swatch-fill" id="fgSwatchFill"></div>
              <input type="color" id="fgColorInput" value="#cccccc">
            </div>
            <span class="color-val" id="fgVal">${a.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="fgReset" title="${a.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="startup">
      <div class="section-header collapsible">
        <div class="section-label">${a.l10n.t("Startup Commands")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${a.l10n.t("Commands are auto-executed in each cell when the grid opens. Use \xD7N to repeat the same command for N cells. Extra cells beyond the command list open as default terminals.")}
            <div class="tip-example">
              claude \xD73 + codex \xD71<br>
              \u2192 2\xD73 Grid:<br>
              &nbsp;&nbsp;Cell 1\u20133: claude<br>
              &nbsp;&nbsp;Cell 4: codex<br>
              &nbsp;&nbsp;Cell 5\u20136: default
            </div>
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-list" id="cmdList"></div>
        <div class="cmd-add-row">
          <select class="glass-select" id="cmdPreset">
            <option value="">${a.l10n.t("Add preset\u2026")}</option>
            <option value="claude">claude</option>
            <option value="codex">codex</option>
            <option value="claude --dangerously-skip-permissions">claude --dangerously-skip-permissions</option>
            <option value="codex -s danger-full-access -a never">codex -s danger-full-access -a never</option>
          </select>
        </div>
        <div class="cmd-add-row">
          <input class="glass-input" id="cmdCustom" placeholder="${a.l10n.t("Custom command\u2026")}" />
          <button class="stepper-btn" id="cmdAddBtn" title="${a.l10n.t("Add")}">+</button>
        </div>
      </div>
    </div>

    <!-- Presets -->
    <div class="glass-card" data-section="presets">
      <div class="section-header collapsible">
        <div class="section-label">${a.l10n.t("Presets")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${a.l10n.t("Save and load current grid settings (size, zoom, font, color, commands, cell labels) as presets. Use Link to project for per-project auto-apply.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-add-row">
          <input class="glass-input" id="presetNameInput" placeholder="${a.l10n.t("Preset name\u2026")}" style="flex: 1;" />
        </div>
        <div class="cmd-add-row" style="margin-top: 4px;">
          <select class="glass-select" id="presetSelect" style="flex: 1;">
            <option value="">${a.l10n.t("Select preset\u2026")}</option>
          </select>
        </div>
        <div class="btn-group" style="gap: 6px; margin-top: 8px;">
          <div style="display: flex; gap: 6px;">
            <button class="glass-btn" id="presetSaveBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${a.l10n.t("Save")}</button>
            <button class="glass-btn primary" id="presetLoadBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${a.l10n.t("Load")}</button>
            <button class="glass-btn" id="presetDeleteBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${a.l10n.t("Delete")}</button>
          </div>
          <div id="presetLinkRow" style="display: flex; align-items: center; gap: 6px; font-size: 11px; opacity: .7; margin-top: 4px;">
            <input type="checkbox" id="presetLinkCheck" style="margin: 0;" />
            <label id="presetLinkLabel" for="presetLinkCheck" style="cursor: pointer;">${a.l10n.t("Link to current project")}</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Broadcast Input -->
    <div class="glass-card" data-section="broadcast">
      <div class="section-header collapsible">
        <div class="section-label">${a.l10n.t("Broadcast Input")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${a.l10n.t("Send text to selected terminals. Check All to send to all cells, uncheck for individual selection.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="broadcastTargets" class="broadcast-targets hidden"></div>
        <div class="cmd-add-row" style="flex-direction: column; gap: 4px;">
          <textarea class="glass-input" id="broadcastInput" placeholder="${a.l10n.t("Type command\u2026")}" rows="3" style="width: 100%; resize: vertical; font-family: var(--vscode-editor-fontFamily, monospace); font-size: 12px; line-height: 1.4;"></textarea>
          <div style="display: flex; justify-content: flex-end;">
            <button class="stepper-btn" id="broadcastSendBtn" title="${a.l10n.t("Send")}" style="width: 50px;">${a.l10n.t("Send")}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="actions">
      <div class="section-header collapsible">
        <div class="section-label">${a.l10n.t("Actions")}</div>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="btn-group">
          <button class="glass-btn" id="reloadBtn">
            <span class="btn-icon">&#8635;</span> ${a.l10n.t("Reload Window")}
          </button>
        </div>
      </div>
    </div>

    <div class="hint">
      ${a.l10n.t(`Grid opens as an editor tab.
Ctrl+Wheel to zoom individual cells.`).replace(`
`,"<br>")}
    </div>
  </div>

  <script nonce="${e}">
    var __i18n = ${JSON.stringify({installing:a.l10n.t("Installing\u2026"),ideDefault:a.l10n.t("IDE Default"),remove:a.l10n.t("Remove"),addFontFile:a.l10n.t("Add font file\u2026"),all:a.l10n.t("All"),noStartupCommands:a.l10n.t("No startup commands configured"),noProjects:a.l10n.t("No projects registered"),linkedPrefix:a.l10n.t("Linked: {0}"),linkToProject:a.l10n.t("Link to current project"),selectPreset:a.l10n.t("Select preset\u2026"),reload:a.l10n.t("Reload"),retry:a.l10n.t("Retry"),ptyInstalled:a.l10n.t("node-pty installed successfully!"),ptyInstalledHint:a.l10n.t("Reload the window to activate."),theme:a.l10n.t("Theme")})};
    var vscode = acquireVsCodeApi();

    // node-pty install button
    var ptyInstallBtn = document.getElementById('ptyInstallBtn');
    if (ptyInstallBtn) {
      ptyInstallBtn.addEventListener('click', function() {
        ptyInstallBtn.textContent = __i18n.installing;
        ptyInstallBtn.disabled = true;
        vscode.postMessage({ type: 'installNodePty' });
      });
    }

    var MAX_ROWS = 4, MAX_COLS = 5;
    var selectedRows = 2, selectedCols = 3;
    var hoverRow = -1, hoverCol = -1;

    var saved = vscode.getState();
    if (saved) { selectedRows = saved.rows || 2; selectedCols = saved.cols || 3; }

    var gridEl = document.getElementById('gridSelector');
    gridEl.style.gridTemplateColumns = 'repeat(' + MAX_COLS + ', 1fr)';
    var cells = [];

    for (var r = 0; r < MAX_ROWS; r++) {
      for (var c = 0; c < MAX_COLS; c++) {
        (function(row, col) {
          var cell = document.createElement('div');
          cell.className = 'grid-cell';
          cell.addEventListener('mouseenter', function() { hoverRow = row; hoverCol = col; render(); });
          cell.addEventListener('click', function() {
            selectedRows = row + 1; selectedCols = col + 1;
            hoverRow = -1; hoverCol = -1;
            render();
            vscode.setState({ rows: selectedRows, cols: selectedCols });
          });
          gridEl.appendChild(cell);
          cells.push({ el: cell, row: row, col: col });
        })(r, c);
      }
    }

    gridEl.addEventListener('mouseleave', function() { hoverRow = -1; hoverCol = -1; render(); });

    function render() {
      var isH = hoverRow >= 0;
      var aR = isH ? hoverRow : selectedRows - 1;
      var aC = isH ? hoverCol : selectedCols - 1;
      for (var i = 0; i < cells.length; i++) {
        var inside = cells[i].row <= aR && cells[i].col <= aC;
        cells[i].el.classList.toggle('highlight', inside && isH);
        cells[i].el.classList.toggle('selected', inside && !isH);
      }
      var dR = aR + 1, dC = aC + 1;
      document.getElementById('sizeLabel').innerHTML =
        '<span class="num">' + dR + '</span> \\u00d7 <span class="num">' + dC + '</span>';
    }
    render();

    document.getElementById('openGridBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'openGrid', rows: selectedRows, cols: selectedCols });
    });
    document.getElementById('reloadBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'reload' });
    });

    // \u2500\u2500 Collapsible sections \u2500\u2500
    var collapsedSections = {};
    document.querySelectorAll('.section-header.collapsible').forEach(function(header) {
      header.addEventListener('click', function(e) {
        if (e.target.closest('.tip-wrap')) return;
        var card = header.closest('.glass-card');
        if (!card) return;
        card.classList.toggle('collapsed');
        var section = card.dataset.section;
        if (section) {
          collapsedSections[section] = card.classList.contains('collapsed');
          vscode.postMessage({ type: 'saveSectionStates', states: collapsedSections });
        }
      });
    });

    function applySectionStates(states) {
      if (!states) return;
      collapsedSections = states;
      document.querySelectorAll('.glass-card[data-section]').forEach(function(card) {
        var section = card.dataset.section;
        if (states[section]) {
          card.classList.add('collapsed');
        } else {
          card.classList.remove('collapsed');
        }
      });
    }

    // \u2500\u2500 Settings \u2500\u2500
    var curZoom = 100, curFontFamily = '', curBg = '', curFg = '';
    var curThemeName = '';
    var themeNames = [''];
    var activeSettingsTab = 'all';
    var cellOverrides = {}; // { 0: { bgColor, fgColor, fontFamily, themeName }, ... }
    var settingsTabsEl = document.getElementById('settingsTabs');
    var builtinFonts = [
      { value: '', label: __i18n.ideDefault },
      { value: 'Consolas', label: 'Consolas' },
      { value: 'Cascadia Code', label: 'Cascadia Code' },
      { value: 'Cascadia Mono', label: 'Cascadia Mono' },
      { value: 'JetBrains Mono', label: 'JetBrains Mono' },
      { value: 'Fira Code', label: 'Fira Code' },
      { value: 'Source Code Pro', label: 'Source Code Pro' },
      { value: 'D2Coding', label: 'D2Coding' },
      { value: 'Ubuntu Mono', label: 'Ubuntu Mono' },
      { value: 'Menlo', label: 'Menlo' },
      { value: 'Monaco', label: 'Monaco' },
      { value: 'Courier New', label: 'Courier New' }
    ];
    var customFontNames = [];
    var dropdownOpen = false;

    // \u2500\u2500 Theme dropdown \u2500\u2500
    var themeDisplay = document.getElementById('themeDisplay');
    var themeDisplayText = document.getElementById('themeDisplayText');
    var themeDropdownEl = document.getElementById('themeDropdown');
    var themeDropdownOpen = false;

    function getThemeDisplayName(val) {
      if (!val) return __i18n.ideDefault;
      return val;
    }

    function toggleThemeDropdown(show) {
      themeDropdownOpen = typeof show === 'boolean' ? show : !themeDropdownOpen;
      themeDropdownEl.classList.toggle('show', themeDropdownOpen);
      themeDisplay.classList.toggle('open', themeDropdownOpen);
    }

    function selectTheme(name) {
      if (activeSettingsTab === 'all') {
        curThemeName = name;
        themeDisplayText.textContent = getThemeDisplayName(name);
        toggleThemeDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'colorTheme', value: name });
        cellOverrides = {};
        vscode.postMessage({ type: 'clearAllCellOverrides' });
        updateTabOverrideIndicators();
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
        cellOverrides[cid].themeName = name;
        themeDisplayText.textContent = getThemeDisplayName(name);
        toggleThemeDropdown(false);
        vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: name });
        updateTabOverrideIndicators();
      }
    }

    function buildThemeDropdown() {
      themeDropdownEl.innerHTML = '';
      var currentTheme = activeSettingsTab === 'all' ? curThemeName : (cellOverrides[parseInt(activeSettingsTab, 10)] || {}).themeName || curThemeName;
      for (var i = 0; i < themeNames.length; i++) {
        (function(name) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (currentTheme === name ? ' active' : '');
          var nameEl = document.createElement('span');
          nameEl.className = 'font-opt-name';
          nameEl.textContent = name || __i18n.ideDefault;
          opt.appendChild(nameEl);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectTheme(name); });
          themeDropdownEl.appendChild(opt);
        })(themeNames[i]);
      }
    }

    themeDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleDropdown(false); // close font dropdown
      buildThemeDropdown();
      toggleThemeDropdown();
    });

    // \u2500\u2500 Font dropdown \u2500\u2500
    var fontDisplay = document.getElementById('fontDisplay');
    var fontDisplayText = document.getElementById('fontDisplayText');
    var fontDropdown = document.getElementById('fontDropdown');

    function getDisplayName(val) {
      if (!val) return __i18n.ideDefault;
      for (var i = 0; i < builtinFonts.length; i++) {
        if (builtinFonts[i].value === val) return builtinFonts[i].label;
      }
      return val;
    }

    function toggleDropdown(show) {
      dropdownOpen = typeof show === 'boolean' ? show : !dropdownOpen;
      fontDropdown.classList.toggle('show', dropdownOpen);
      fontDisplay.classList.toggle('open', dropdownOpen);
    }

    function selectFont(val) {
      if (activeSettingsTab === 'all') {
        curFontFamily = val;
        fontDisplayText.textContent = getDisplayName(val);
        toggleDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'fontFamily', value: val });
        cellOverrides = {};
        vscode.postMessage({ type: 'clearAllCellOverrides' });
        updateTabOverrideIndicators();
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
        cellOverrides[cid].fontFamily = val;
        fontDisplayText.textContent = getDisplayName(val);
        toggleDropdown(false);
        vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: val, themeName: cellOverrides[cid].themeName });
        updateTabOverrideIndicators();
      }
    }

    function buildDropdown() {
      fontDropdown.innerHTML = '';
      for (var i = 0; i < builtinFonts.length; i++) {
        (function(f) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (curFontFamily === f.value ? ' active' : '');
          var name = document.createElement('span');
          name.className = 'font-opt-name';
          name.textContent = f.label;
          opt.appendChild(name);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectFont(f.value); });
          fontDropdown.appendChild(opt);
        })(builtinFonts[i]);
      }
      if (customFontNames.length > 0) {
        var divider = document.createElement('div');
        divider.className = 'font-divider';
        fontDropdown.appendChild(divider);
        for (var j = 0; j < customFontNames.length; j++) {
          (function(name) {
            var opt = document.createElement('div');
            opt.className = 'font-opt' + (curFontFamily === name ? ' active' : '');
            var nameEl = document.createElement('span');
            nameEl.className = 'font-opt-name';
            nameEl.textContent = name;
            opt.appendChild(nameEl);
            var del = document.createElement('button');
            del.className = 'font-opt-del';
            del.textContent = '\\u00d7';
            del.title = __i18n.remove;
            del.addEventListener('click', function(e) {
              e.stopPropagation();
              vscode.postMessage({ type: 'removeFont', name: name });
              if (curFontFamily === name) selectFont('');
            });
            opt.appendChild(del);
            opt.addEventListener('click', function(e) { e.stopPropagation(); selectFont(name); });
            fontDropdown.appendChild(opt);
          })(customFontNames[j]);
        }
      }
      var divider2 = document.createElement('div');
      divider2.className = 'font-divider';
      fontDropdown.appendChild(divider2);
      var addBtn = document.createElement('div');
      addBtn.className = 'font-opt-add';
      addBtn.innerHTML = '<span>+</span><span>' + __i18n.addFontFile + '</span>';
      addBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleDropdown(false);
        vscode.postMessage({ type: 'browseFont' });
      });
      fontDropdown.appendChild(addBtn);
    }

    fontDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleThemeDropdown(false); // close theme dropdown
      buildDropdown();
      toggleDropdown();
    });
    document.addEventListener('click', function() { toggleDropdown(false); toggleThemeDropdown(false); });

    // \u2500\u2500 Color pickers \u2500\u2500
    function setupColor(prefix, configKey) {
      var input = document.getElementById(prefix + 'ColorInput');
      var fill = document.getElementById(prefix + 'SwatchFill');
      var valEl = document.getElementById(prefix + 'Val');
      var resetBtn = document.getElementById(prefix + 'Reset');
      var overrideKey = prefix === 'bg' ? 'bgColor' : 'fgColor';

      function updateColorUI(color) {
        if (color) {
          fill.style.background = color;
          valEl.textContent = color;
          input.value = color;
          resetBtn.classList.remove('hidden');
        } else {
          fill.style.background = prefix === 'bg'
            ? 'var(--vscode-terminal-background, var(--vscode-editor-background, #1e1e1e))'
            : 'var(--vscode-terminal-foreground, var(--vscode-editor-foreground, #ccc))';
          valEl.textContent = __i18n.ideDefault;
          resetBtn.classList.add('hidden');
        }
      }

      input.addEventListener('input', function() {
        var val = input.value;
        if (activeSettingsTab === 'all') {
          if (prefix === 'bg') curBg = val; else curFg = val;
          updateColorUI(val);
          vscode.postMessage({ type: 'setConfig', key: configKey, value: val });
          cellOverrides = {};
          vscode.postMessage({ type: 'clearAllCellOverrides' });
          updateTabOverrideIndicators();
        } else {
          var cid = parseInt(activeSettingsTab, 10);
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
          cellOverrides[cid][overrideKey] = val;
          updateColorUI(val);
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: cellOverrides[cid].themeName });
          updateTabOverrideIndicators();
        }
      });

      function doReset() {
        if (activeSettingsTab === 'all') {
          if (prefix === 'bg') curBg = ''; else curFg = '';
          updateColorUI('');
          vscode.postMessage({ type: 'setConfig', key: configKey, value: '' });
          cellOverrides = {};
          vscode.postMessage({ type: 'clearAllCellOverrides' });
          updateTabOverrideIndicators();
        } else {
          var cid = parseInt(activeSettingsTab, 10);
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '' };
          cellOverrides[cid][overrideKey] = '';
          updateColorUI('');
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily, themeName: cellOverrides[cid].themeName });
          updateTabOverrideIndicators();
        }
      }
      resetBtn.addEventListener('click', doReset);
      valEl.addEventListener('click', function() {
        // In All tab, always allow reset (clears per-cell overrides even if global is already IDE Default)
        if (valEl.textContent === __i18n.ideDefault && activeSettingsTab !== 'all') return;
        doReset();
      });
      valEl.style.cursor = 'pointer';

      return updateColorUI;
    }

    var updateBgUI = setupColor('bg', 'backgroundColor');
    var updateFgUI = setupColor('fg', 'foregroundColor');

    // \u2500\u2500 Zoom \u2500\u2500
    document.getElementById('zoomDown').addEventListener('click', function() {
      curZoom = Math.max(50, curZoom - 10);
      updateSettingsUI();
      vscode.postMessage({ type: 'setConfig', key: 'zoomPercent', value: curZoom });
    });
    document.getElementById('zoomUp').addEventListener('click', function() {
      curZoom = Math.min(300, curZoom + 10);
      updateSettingsUI();
      vscode.postMessage({ type: 'setConfig', key: 'zoomPercent', value: curZoom });
    });

    function updateSettingsUI() {
      document.getElementById('zoomVal').textContent = curZoom + '%';
      showTabValues();
    }

    function showTabValues() {
      if (activeSettingsTab === 'all') {
        themeDisplayText.textContent = getThemeDisplayName(curThemeName);
        fontDisplayText.textContent = getDisplayName(curFontFamily);
        updateBgUI(curBg);
        updateFgUI(curFg);
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        var ov = cellOverrides[cid] || {};
        themeDisplayText.textContent = getThemeDisplayName(ov.themeName || curThemeName);
        fontDisplayText.textContent = getDisplayName(ov.fontFamily || curFontFamily);
        updateBgUI(ov.bgColor || curBg);
        updateFgUI(ov.fgColor || curFg);
      }
    }

    function buildSettingsTabs(total, labels) {
      settingsTabsEl.innerHTML = '';
      if (total <= 0) {
        settingsTabsEl.classList.add('hidden');
        activeSettingsTab = 'all';
        return;
      }
      settingsTabsEl.classList.remove('hidden');
      // All tab
      var allBtn = document.createElement('button');
      allBtn.className = 'stab active';
      allBtn.dataset.tab = 'all';
      allBtn.textContent = __i18n.all;
      allBtn.addEventListener('click', function() { switchSettingsTab('all'); });
      settingsTabsEl.appendChild(allBtn);
      // Per-cell tabs
      for (var i = 0; i < total; i++) {
        (function(idx) {
          var btn = document.createElement('button');
          btn.className = 'stab';
          btn.dataset.tab = String(idx);
          btn.textContent = labels[idx] || String(idx + 1);
          btn.addEventListener('click', function() { switchSettingsTab(String(idx)); });
          settingsTabsEl.appendChild(btn);
        })(i);
      }
      activeSettingsTab = 'all';
      updateTabOverrideIndicators();
    }

    function switchSettingsTab(tab) {
      activeSettingsTab = tab;
      var btns = settingsTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('active', btns[i].dataset.tab === tab);
      }
      showTabValues();
    }

    function updateTabOverrideIndicators() {
      var btns = settingsTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        var tab = btns[i].dataset.tab;
        if (tab === 'all') continue;
        var ov = cellOverrides[parseInt(tab, 10)];
        var hasOv = ov && (ov.bgColor || ov.fgColor || ov.fontFamily || ov.themeName);
        btns[i].classList.toggle('has-override', !!hasOv);
      }
    }

    // \u2500\u2500 Startup Commands \u2500\u2500
    var startupCommands = []; // [{command, count}]

    function calcCellRange(cmds, idx) {
      var start = 0;
      for (var i = 0; i < idx; i++) start += (cmds[i].count || 1);
      var count = cmds[idx].count || 1;
      return { start: start + 1, end: start + count };
    }

    function renderCmdList() {
      var list = document.getElementById('cmdList');
      list.innerHTML = '';
      if (startupCommands.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'cmd-empty';
        empty.textContent = __i18n.noStartupCommands;
        list.appendChild(empty);
        return;
      }
      for (var i = 0; i < startupCommands.length; i++) {
        (function(idx) {
          var sc = startupCommands[idx];
          var range = calcCellRange(startupCommands, idx);
          var item = document.createElement('div');
          item.className = 'cmd-item';

          var rangeEl = document.createElement('span');
          rangeEl.className = 'cmd-item-range';
          rangeEl.textContent = range.start === range.end
            ? range.start + '.'
            : range.start + '-' + range.end + '.';
          item.appendChild(rangeEl);

          var text = document.createElement('span');
          text.className = 'cmd-item-text';
          text.textContent = sc.command;
          text.title = sc.command;
          item.appendChild(text);

          var countWrap = document.createElement('div');
          countWrap.className = 'cmd-count';
          var minusBtn = document.createElement('button');
          minusBtn.className = 'cmd-count-btn';
          minusBtn.textContent = '\\u2212';
          minusBtn.addEventListener('click', function() {
            if (sc.count > 1) {
              vscode.postMessage({ type: 'updateCommandCount', index: idx, count: sc.count - 1 });
            }
          });
          countWrap.appendChild(minusBtn);
          var countVal = document.createElement('span');
          countVal.className = 'cmd-count-val';
          countVal.textContent = sc.count;
          countWrap.appendChild(countVal);
          var plusBtn = document.createElement('button');
          plusBtn.className = 'cmd-count-btn';
          plusBtn.textContent = '+';
          plusBtn.addEventListener('click', function() {
            vscode.postMessage({ type: 'updateCommandCount', index: idx, count: sc.count + 1 });
          });
          countWrap.appendChild(plusBtn);
          item.appendChild(countWrap);

          var del = document.createElement('button');
          del.className = 'cmd-item-del';
          del.textContent = '\\u00d7';
          del.title = __i18n.remove;
          del.addEventListener('click', function() {
            vscode.postMessage({ type: 'removeStartupCommand', index: idx });
          });
          item.appendChild(del);
          list.appendChild(item);
        })(i);
      }
    }

    document.getElementById('cmdPreset').addEventListener('change', function() {
      var val = this.value;
      if (val) {
        vscode.postMessage({ type: 'addStartupCommand', command: val });
        this.value = '';
      }
    });

    document.getElementById('cmdAddBtn').addEventListener('click', function() {
      var input = document.getElementById('cmdCustom');
      var val = input.value.trim();
      if (val) {
        vscode.postMessage({ type: 'addStartupCommand', command: val });
        input.value = '';
      }
    });

    document.getElementById('cmdCustom').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('cmdAddBtn').click();
      }
    });

    renderCmdList();

    // \u2500\u2500 Projects \u2500\u2500
    var projects = [];
    var workspacePath = '';

    document.getElementById('addCurrentProjectBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'addCurrentProject' });
    });
    document.getElementById('browseProjectBtn').addEventListener('click', function() {
      vscode.postMessage({ type: 'browseProject' });
    });

    function renderProjectList() {
      var list = document.getElementById('projectList');
      list.innerHTML = '';
      if (projects.length === 0) {
        var empty = document.createElement('div');
        empty.className = 'cmd-empty';
        empty.textContent = __i18n.noProjects;
        list.appendChild(empty);
        return;
      }
      for (var i = 0; i < projects.length; i++) {
        (function(idx) {
          var p = projects[idx];
          var item = document.createElement('div');
          item.className = 'cmd-item';
          item.style.cursor = 'pointer';
          if (p.path === workspacePath) {
            item.style.borderColor = 'var(--vscode-focusBorder, rgba(0,127,212,0.6))';
            item.style.background = 'rgba(0,127,212,.06)';
          }

          var nameEl = document.createElement('span');
          nameEl.className = 'cmd-item-text';
          nameEl.style.fontFamily = 'inherit';
          nameEl.textContent = p.name;
          nameEl.title = p.path;
          item.appendChild(nameEl);

          // Show linked preset if any
          if (projectPresetsMap[p.path]) {
            var badge = document.createElement('span');
            badge.style.cssText = 'font-size:9px;opacity:.5;flex-shrink:0;margin-left:4px;';
            badge.textContent = projectPresetsMap[p.path];
            item.appendChild(badge);
          }

          var del = document.createElement('button');
          del.className = 'cmd-item-del';
          del.textContent = '\\u00d7';
          del.title = __i18n.remove;
          del.addEventListener('click', function(e) {
            e.stopPropagation();
            vscode.postMessage({ type: 'removeProject', index: idx });
          });
          item.appendChild(del);

          item.addEventListener('click', function(e) {
            vscode.postMessage({ type: 'openProject', path: p.path, newWindow: e.ctrlKey || e.metaKey });
          });

          list.appendChild(item);
        })(i);
      }
    }

    // \u2500\u2500 Presets \u2500\u2500
    var presets = [];
    var projectPresetsMap = {};

    document.getElementById('presetSelect').addEventListener('change', function() {
      var nameInput = document.getElementById('presetNameInput');
      nameInput.value = this.value;
    });

    document.getElementById('presetSaveBtn').addEventListener('click', function() {
      var name = document.getElementById('presetNameInput').value.trim();
      if (!name) return;
      vscode.postMessage({ type: 'savePreset', name: name });
    });

    document.getElementById('presetLoadBtn').addEventListener('click', function() {
      var name = document.getElementById('presetSelect').value;
      if (!name) return;
      vscode.postMessage({ type: 'loadPreset', name: name });
    });

    document.getElementById('presetDeleteBtn').addEventListener('click', function() {
      var name = document.getElementById('presetSelect').value;
      if (!name) return;
      vscode.postMessage({ type: 'deletePreset', name: name });
    });

    document.getElementById('presetLinkCheck').addEventListener('change', function() {
      var sel = document.getElementById('presetSelect');
      var name = this.checked ? sel.value : '';
      if (this.checked && !name) return;
      vscode.postMessage({ type: 'linkPreset', projectPath: workspacePath, presetName: name });
    });

    function renderPresetDropdown() {
      var sel = document.getElementById('presetSelect');
      var nameInput = document.getElementById('presetNameInput');
      sel.innerHTML = '<option value="">' + __i18n.selectPreset + '</option>';
      var linkedPreset = workspacePath ? (projectPresetsMap[workspacePath] || '') : '';
      for (var i = 0; i < presets.length; i++) {
        var opt = document.createElement('option');
        opt.value = presets[i].name;
        opt.textContent = (presets[i].name === linkedPreset ? '\\u2605 ' : '') + presets[i].name;
        sel.appendChild(opt);
      }
      if (linkedPreset) {
        sel.value = linkedPreset;
        nameInput.value = linkedPreset;
      }
      var check = document.getElementById('presetLinkCheck');
      check.checked = !!linkedPreset;
      var linkLabel = document.getElementById('presetLinkLabel');
      linkLabel.textContent = linkedPreset
        ? __i18n.linkedPrefix.replace('{0}', linkedPreset)
        : __i18n.linkToProject;
    }

    // \u2500\u2500 Broadcast \u2500\u2500
    var broadcastTargetsEl = document.getElementById('broadcastTargets');
    var curGridTotal = 0;

    function buildBroadcastTargets(total, labels) {
      curGridTotal = total;
      broadcastTargetsEl.innerHTML = '';
      if (total <= 0) {
        broadcastTargetsEl.classList.add('hidden');
        return;
      }
      broadcastTargetsEl.classList.remove('hidden');
      // All checkbox
      var allLabel = document.createElement('label');
      allLabel.className = 'broadcast-target all-label';
      var allCb = document.createElement('input');
      allCb.type = 'checkbox'; allCb.checked = true; allCb.dataset.cell = 'all';
      allLabel.appendChild(allCb);
      allLabel.appendChild(document.createTextNode(' ' + __i18n.all));
      broadcastTargetsEl.appendChild(allLabel);
      // Per-cell checkboxes (unchecked when All is active)
      for (var i = 0; i < total; i++) {
        var lbl = document.createElement('label');
        lbl.className = 'broadcast-target';
        var cb = document.createElement('input');
        cb.type = 'checkbox'; cb.checked = false;
        cb.dataset.cell = String(i);
        lbl.appendChild(cb);
        lbl.appendChild(document.createTextNode(' ' + (labels[i] || (i + 1))));
        broadcastTargetsEl.appendChild(lbl);
      }
      // All click \u2192 uncheck all individuals
      allCb.addEventListener('change', function() {
        if (allCb.checked) {
          var cbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
          for (var j = 0; j < cbs.length; j++) { cbs[j].checked = false; }
        }
      });
      // Individual click \u2192 uncheck All; if all individuals checked \u2192 switch to All
      var indivCbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
      for (var k = 0; k < indivCbs.length; k++) {
        indivCbs[k].addEventListener('change', function() {
          if (this.checked) allCb.checked = false;
          var allChecked = true;
          for (var j = 0; j < indivCbs.length; j++) {
            if (!indivCbs[j].checked) { allChecked = false; break; }
          }
          if (allChecked) {
            allCb.checked = true;
            for (var j = 0; j < indivCbs.length; j++) { indivCbs[j].checked = false; }
          }
        });
      }
    }

    function getSelectedCellIds() {
      var allCb = broadcastTargetsEl.querySelector('input[data-cell="all"]');
      if (allCb && allCb.checked) return null; // all
      var ids = [];
      var cbs = broadcastTargetsEl.querySelectorAll('input[data-cell]:not([data-cell="all"])');
      for (var j = 0; j < cbs.length; j++) {
        if (cbs[j].checked) ids.push(parseInt(cbs[j].dataset.cell, 10));
      }
      return ids;
    }

    document.getElementById('broadcastSendBtn').addEventListener('click', function() {
      var input = document.getElementById('broadcastInput');
      var text = input.value;
      if (!text) return;
      var ids = getSelectedCellIds();
      if (ids === null) {
        vscode.postMessage({ type: 'broadcast', text: text });
      } else if (ids.length > 0) {
        vscode.postMessage({ type: 'broadcastToCell', cellIds: ids, text: text });
      }
      input.value = '';
    });

    document.getElementById('broadcastInput').addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        document.getElementById('broadcastSendBtn').click();
      }
    });

    // \u2500\u2500 Messages \u2500\u2500
    window.addEventListener('message', function(event) {
      var msg = event.data;
      if (msg.type === 'ptyInstallResult') {
        var banner = document.getElementById('ptyBanner');
        var btn = document.getElementById('ptyInstallBtn');
        if (msg.success) {
          if (banner) {
            banner.style.borderColor = 'rgba(0,200,100,.35)';
            banner.style.background = 'linear-gradient(135deg, rgba(0,200,100,.12), rgba(0,180,80,.08))';
          }
          if (btn) {
            btn.textContent = __i18n.reload;
            btn.disabled = false;
            btn.onclick = function() { vscode.postMessage({ type: 'reload' }); };
          }
          var textEl = document.querySelector('.pty-banner-text');
          if (textEl) textEl.innerHTML = '<b>' + __i18n.ptyInstalled + '</b><br>' + __i18n.ptyInstalledHint;
        } else {
          if (btn) { btn.textContent = __i18n.retry; btn.disabled = false; }
        }
      }
      if (msg.type === 'mcpPort') {
        var portInfo = document.getElementById('mcpPortInfo');
        var portValue = document.getElementById('mcpPortValue');
        if (portInfo) portInfo.style.display = msg.port > 0 ? 'block' : 'none';
        if (portValue) portValue.textContent = msg.port;
      }
      if (msg.type === 'configValues') {
        curZoom = msg.zoom;
        curFontFamily = msg.fontFamily;
        curBg = msg.bgColor || '';
        curFg = msg.fgColor || '';
        curThemeName = msg.colorTheme || '';
        themeNames = msg.themeNames || [''];
        customFontNames = msg.customFonts || [];
        startupCommands = msg.startupCommands || [];
        projects = msg.projects || [];
        presets = msg.presets || [];
        projectPresetsMap = msg.projectPresets || {};
        workspacePath = msg.workspacePath || '';
        cellOverrides = msg.cellOverrides || {};
        updateSettingsUI();
        renderCmdList();
        renderProjectList();
        renderPresetDropdown();
        var gridTotal = (msg.gridRows || 0) * (msg.gridCols || 0);
        buildBroadcastTargets(gridTotal, msg.cellLabels || []);
        buildSettingsTabs(gridTotal, msg.cellLabels || []);
        applySectionStates(msg.sectionStates || {});
      }
    });

    vscode.postMessage({ type: 'getConfig' });
  </script>
</body>
</html>`}};function X(){let c="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let n=0;n<32;n++)c+=e.charAt(Math.floor(Math.random()*e.length));return c}var j=v(require("http"));var B=class{constructor(e){this._server=null;this._port=e}start(e=10){return new Promise((n,l)=>{this._server=this._createServer();let t=o=>{this._server.removeAllListeners("error"),this._server.on("error",s=>{s.code==="EADDRINUSE"&&o<e?(this._port++,t(o+1)):l(s)}),this._server.listen(this._port,"127.0.0.1",()=>{let s=this._server.address();this._port=s.port,n(this._port)})};t(0)})}_createServer(){return j.createServer((e,n)=>{if(n.setHeader("Content-Type","application/json"),e.method==="OPTIONS"){n.writeHead(204),n.end();return}let l=new URL(e.url||"/",`http://127.0.0.1:${this._port}`);e.method==="GET"&&l.pathname==="/api/health"?(n.writeHead(200),n.end(JSON.stringify({status:"ok"}))):e.method==="GET"&&l.pathname==="/api/info"?this._handleInfo(n):e.method==="POST"&&l.pathname==="/api/send"?this._readBody(e).then(t=>this._handleSend(t,n)):e.method==="POST"&&l.pathname==="/api/read"?this._readBody(e).then(t=>this._handleRead(t,n)):e.method==="POST"&&l.pathname==="/api/broadcast"?this._readBody(e).then(t=>this._handleBroadcast(t,n)):(n.writeHead(404),n.end(JSON.stringify({error:"Not found"})))})}stop(){this._server?.close(),this._server=null}getPort(){return this._port}_handleInfo(e){let n=u.currentPanel;if(!n){e.writeHead(200),e.end(JSON.stringify({grid:null}));return}e.writeHead(200),e.end(JSON.stringify({grid:{rows:n.getRows(),cols:n.getCols(),cellCount:n.getCellCount(),cellLabels:n.getCellLabels()}}))}_handleSend(e,n){let l=u.currentPanel;if(!l){n.writeHead(200),n.end(JSON.stringify({success:!1,error:"No grid open"}));return}let t=typeof e.cellId=="number"?e.cellId:-1,o=typeof e.text=="string"?e.text:"",s=l.sendToCell(t,o);n.writeHead(200),n.end(JSON.stringify({success:s}))}_handleRead(e,n){let l=u.currentPanel;if(!l){n.writeHead(200),n.end(JSON.stringify({output:null,error:"No grid open"}));return}let t=typeof e.cellId=="number"?e.cellId:-1,o=typeof e.lines=="number"?e.lines:void 0,s=l.readCell(t,o);n.writeHead(200),n.end(JSON.stringify({output:s}))}_handleBroadcast(e,n){let l=u.currentPanel;if(!l){n.writeHead(200),n.end(JSON.stringify({success:!1,error:"No grid open"}));return}let t=typeof e.text=="string"?e.text:"",o=l.getCellCount();for(let s=0;s<o;s++)l.sendToCell(s,t);n.writeHead(200),n.end(JSON.stringify({success:!0,cellCount:o}))}_readBody(e){return new Promise(n=>{let l="";e.on("data",t=>{l+=t}),e.on("end",()=>{try{n(JSON.parse(l))}catch{n({})}})})}};var S,x;function Q(c){let e=d.workspace.workspaceFolders?.[0]?.uri.fsPath;if(e){let o=c.globalState.get("projectPresets",{})[e];if(o){let r=c.globalState.get("presets",[]).find(i=>i.name===o);if(r){let i=d.workspace.getConfiguration("terminalGrid");i.update("defaultRows",r.rows,d.ConfigurationTarget.Global),i.update("defaultCols",r.cols,d.ConfigurationTarget.Global),i.update("zoomPercent",r.zoomPercent,d.ConfigurationTarget.Global),i.update("fontFamily",r.fontFamily,d.ConfigurationTarget.Global),i.update("backgroundColor",r.bgColor,d.ConfigurationTarget.Global),i.update("foregroundColor",r.fgColor,d.ConfigurationTarget.Global),i.update("colorTheme",r.colorTheme||"",d.ConfigurationTarget.Global),c.globalState.update("startupCommands",r.startupCommands||[]),c.globalState.update("cellLabels",r.cellLabels||[])}}}let n=new _(c),l=d.workspace.getConfiguration("terminalGrid").get("apiPort",7890);l>0&&(S=new B(l),S.start().then(t=>{x=d.window.createStatusBarItem(d.StatusBarAlignment.Right,50),x.text=`$(broadcast) TG :${t}`,x.tooltip=d.l10n.t("Terminal Grid API active on port {0}",t),x.command="terminalGrid.copyMcpConfig",x.show(),c.subscriptions.push(x),n.setMcpPort(t)}).catch(t=>{d.window.showWarningMessage(d.l10n.t("Terminal Grid API bridge failed to start: {0}",t.message))})),c.subscriptions.push(d.window.registerWebviewViewProvider(_.viewType,n)),c.subscriptions.push(d.commands.registerCommand("terminalGrid._refreshSidebar",()=>{n.sendConfig()})),c.subscriptions.push(d.window.registerWebviewPanelSerializer("terminalGrid",{async deserializeWebviewPanel(t,o){let s=c.globalState.get("lastGrid");s?u.revive(t,c,s.rows,s.cols):t.dispose()}})),c.subscriptions.push(d.commands.registerCommand("terminalGrid.openGrid",()=>{let t=d.workspace.getConfiguration("terminalGrid"),o=t.get("defaultRows",2),s=t.get("defaultCols",3);u.createOrShow(c,o,s)}),d.commands.registerCommand("terminalGrid.openCustomGrid",(t,o)=>{u.createOrShow(c,t,o)}),d.commands.registerCommand("terminalGrid.open2x2",()=>u.createOrShow(c,2,2)),d.commands.registerCommand("terminalGrid.open2x3",()=>u.createOrShow(c,2,3)),d.commands.registerCommand("terminalGrid.open3x3",()=>u.createOrShow(c,3,3)),d.commands.registerCommand("terminalGrid.sendToCell",(t,o)=>u.currentPanel?.sendToCell(t,o)??!1),d.commands.registerCommand("terminalGrid.readCell",(t,o)=>u.currentPanel?.readCell(t,o)??null),d.commands.registerCommand("terminalGrid.getGridInfo",()=>{let t=u.currentPanel;return t?{rows:t.getRows(),cols:t.getCols(),cellCount:t.getCellCount(),cellLabels:t.getCellLabels()}:null}),d.commands.registerCommand("terminalGrid.testAPI",async()=>{let t=d.window.createOutputChannel("Terminal Grid Tests");t.show(),t.appendLine(`=== Terminal Grid API Tests ===
`);let o=0,s=0;function r(y,C,T){let $=C?"PASS":"FAIL";C?o++:s++,t.appendLine(`[${$}] ${y}${T?" \u2014 "+T:""}`)}let i=await d.commands.executeCommand("terminalGrid.getGridInfo");if(!i){t.appendLine("[FAIL] getGridInfo returned null. Open a grid first.");return}r("getGridInfo returns object",!!i,JSON.stringify(i)),r("rows is number",typeof i.rows=="number",`rows=${i.rows}`),r("cols is number",typeof i.cols=="number",`cols=${i.cols}`),r("cellCount = rows*cols",i.cellCount===i.rows*i.cols,`${i.cellCount}`),r("cellLabels is array",Array.isArray(i.cellLabels),`length=${i.cellLabels.length}`),r("cellLabels.length = cellCount",i.cellLabels.length===i.cellCount);let p=await d.commands.executeCommand("terminalGrid.sendToCell",0,"echo __API_TEST__\r");r("sendToCell(0) returns true",p===!0);let m=await d.commands.executeCommand("terminalGrid.sendToCell",999,"x\r");r("sendToCell(999) returns false",m===!1,`got ${m}`);let f=await d.commands.executeCommand("terminalGrid.sendToCell",0,"TYPED_ONLY");r("sendToCell without \\r returns true",f===!0),await new Promise(y=>setTimeout(y,2e3)),await d.commands.executeCommand("terminalGrid.sendToCell",0,"");let b=await d.commands.executeCommand("terminalGrid.readCell",0);r("readCell(0) returns string",typeof b=="string",`length=${b?.length??0}`),r("readCell(0) contains test marker",!!b&&b.includes("__API_TEST__"));let E=await d.commands.executeCommand("terminalGrid.readCell",0,3);r("readCell(0, 3) returns string",typeof E=="string");let h=await d.commands.executeCommand("terminalGrid.readCell",0,0);r("readCell(0, 0) returns empty",h==="",`got "${h}"`);let F=await d.commands.executeCommand("terminalGrid.readCell",999);if(r("readCell(999) returns null",F===null,`got ${F}`),i.cellCount>1){let y=await d.commands.executeCommand("terminalGrid.sendToCell",1,"echo CELL1_OK\r");r("sendToCell(1) returns true",y===!0),await new Promise(T=>setTimeout(T,1500));let C=await d.commands.executeCommand("terminalGrid.readCell",1);r("readCell(1) contains CELL1_OK",!!C&&C.includes("CELL1_OK"))}t.appendLine(`
=== ${o} passed, ${s} failed ===`),s===0?d.window.showInformationMessage(d.l10n.t("Terminal Grid API: All {0} tests passed!",o)):d.window.showWarningMessage(d.l10n.t("Terminal Grid API: {0} test(s) failed. See output.",s))}),d.commands.registerCommand("terminalGrid.copyMcpConfig",()=>{let t=S?.getPort()??7890,s={mcpServers:{"terminal-grid":{command:"node",args:[G.join(c.extensionPath,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(t)}}}};d.env.clipboard.writeText(JSON.stringify(s,null,2)),d.window.showInformationMessage(d.l10n.t("Terminal Grid MCP config copied to clipboard (port {0})",t))}))}function ee(){S?.stop(),S=void 0,u.currentPanel?.dispose()}0&&(module.exports={activate,deactivate});
