"use strict";var N=Object.create;var E=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var $=Object.getOwnPropertyNames;var A=Object.getPrototypeOf,U=Object.prototype.hasOwnProperty;var H=(d,o)=>{for(var s in o)E(d,s,{get:o[s],enumerable:!0})},F=(d,o,s,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let e of $(o))!U.call(d,e)&&e!==s&&E(d,e,{get:()=>o[e],enumerable:!(i=D(o,e))||i.enumerable});return d};var f=(d,o,s)=>(s=d!=null?N(A(d)):{},F(o||!d||!d.__esModule?E(s,"default",{value:d,enumerable:!0}):s,d)),W=d=>F(E({},"__esModule",{value:!0}),d);var X={};H(X,{activate:()=>Y,deactivate:()=>q});module.exports=W(X);var c=f(require("vscode")),G=f(require("path"));var n=f(require("vscode")),I=f(require("fs")),C=f(require("path")),M=f(require("child_process"));var u=f(require("vscode")),j=f(require("fs")),T=f(require("path")),O={".ttf":"truetype",".otf":"opentype",".woff":"woff",".woff2":"woff2"},g=class d{constructor(o,s,i,e){this._terminals=[];this._outputBuffers=[];this._disposed=!1;this._panel=o,this._context=s,this._rows=i,this._cols=e,this._panel.webview.html=this._getHtml(),this._panel.webview.onDidReceiveMessage(async t=>{switch(t.type){case"ready":if(this._createTerminals(t.defaultCols,t.defaultRows),t.cellDims&&Array.isArray(t.cellDims))for(let r=0;r<t.cellDims.length&&r<this._terminals.length;r++){let l=t.cellDims[r];if(l?.cols&&l?.rows)try{this._terminals[r].pty.resize(l.cols,l.rows)}catch{}}this.loadCustomFonts(this._context.globalState.get("customFonts",[]));let a=this._context.globalState.get("cellOverrides",{});for(let[r,l]of Object.entries(a))(l.bgColor||l.fgColor||l.fontFamily)&&this.sendCellConfig(parseInt(r),l.bgColor||"",l.fgColor||"",l.fontFamily||"");break;case"input":this._terminals[t.id]?.pty.write(t.data);break;case"resize":try{this._terminals[t.id]?.pty.resize(t.cols,t.rows)}catch{}break;case"clearTerminal":this._panel.webview.postMessage({type:"clear",id:t.id});break;case"killTerminal":try{this._terminals[t.id]?.pty.kill()}catch{}break;case"restartTerminal":this._restartTerminal(t.id);break;case"renameCell":{let r=this._context.globalState.get("cellLabels",[]),l=r[t.id]||"",p=await u.window.showInputBox({prompt:u.l10n.t("Rename cell {0}",t.id+1),value:l,placeHolder:u.l10n.t("Enter alias (empty to reset)")});p!==void 0&&(r[t.id]=p,await this._context.globalState.update("cellLabels",r),this.sendLabels(),u.commands.executeCommand("terminalGrid._refreshSidebar"));break}}}),this._configListener=u.workspace.onDidChangeConfiguration(t=>{if(t.affectsConfiguration("terminalGrid")){let a=u.workspace.getConfiguration("terminalGrid");this._panel.webview.postMessage({type:"configUpdate",zoom:a.get("zoomPercent",100),fontFamily:a.get("fontFamily",""),bgColor:a.get("backgroundColor",""),fgColor:a.get("foregroundColor","")})}}),this._panel.onDidDispose(()=>this.dispose()),this._panel.iconPath=u.Uri.joinPath(s.extensionUri,"images","sidebar.svg")}static{this.OUTPUT_BUFFER_SIZE=5e4}static _getNodePty(){if(d._nodePty===void 0)try{d._nodePty=require("node-pty")}catch{d._nodePty=null}return d._nodePty}static createOrShow(o,s,i){d.currentPanel&&d.currentPanel.dispose();let e=u.window.createWebviewPanel("terminalGrid",u.l10n.t("Terminal Grid {0}\xD7{1}",s,i),u.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[u.Uri.joinPath(o.extensionUri,"media")]});d.currentPanel=new d(e,o,s,i),o.globalState.update("lastGrid",{rows:s,cols:i})}static revive(o,s,i,e){d.currentPanel&&d.currentPanel.dispose(),d.currentPanel=new d(o,s,i,e),s.globalState.update("lastGrid",{rows:i,cols:e})}broadcastInput(o){for(let s of this._terminals)s.pty.write(o+"\r")}sendToCell(o,s){let i=this._terminals[o];return i?(i.pty.write(s),!0):!1}readCell(o,s){let i=this._outputBuffers[o];return i===void 0?null:s===void 0?i:s<=0?"":i.split(`
`).slice(-s).join(`
`)}getCellCount(){return this._terminals.length}getRows(){return this._rows}getCols(){return this._cols}getCellLabels(){let o=this._context.globalState.get("cellLabels",[]),s=this._rows*this._cols;return Array.from({length:s},(i,e)=>o[e]||String(e+1))}sendCellConfig(o,s,i,e){this._panel.webview.postMessage({type:"cellConfig",id:o,bgColor:s,fgColor:i,fontFamily:e})}clearCellOverrides(){this._panel.webview.postMessage({type:"clearCellOverrides"})}sendLabels(){let o=this._context.globalState.get("cellLabels",[]);this._panel.webview.postMessage({type:"setLabels",labels:o})}loadCustomFonts(o){for(let s of o){let i=this._readFontBase64(s.path);if(i){let e=T.extname(s.path).toLowerCase();this._panel.webview.postMessage({type:"loadFont",name:s.name,data:i,format:O[e]||"truetype"})}}}_readFontBase64(o){try{return j.readFileSync(o).toString("base64")}catch{return null}}_spawnPty(o,s,i,e){if(o){let l=process.platform==="win32"?"powershell.exe":process.env.SHELL||"bash",p=process.platform==="win32"?["-NoLogo","-NoProfile"]:[],m=o.spawn(l,p,{name:"xterm-256color",cols:s,rows:i,cwd:e,env:process.env});return{onData:b=>{m.onData(b)},write:b=>m.write(b),resize:(b,v)=>m.resize(b,v),kill:()=>m.kill()}}let{spawn:t}=require("child_process"),a=process.platform==="win32"?process.env.COMSPEC||"cmd.exe":process.env.SHELL||"bash",r=t(a,[],{cwd:e,env:process.env,windowsHide:!0});return{onData:l=>{r.stdout?.on("data",p=>l(p.toString())),r.stderr?.on("data",p=>l(p.toString()))},write:l=>{r.stdin?.write(l)},resize:()=>{},kill:()=>r.kill()}}_createTerminals(o,s){let i=u.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",e=this._rows*this._cols,t=d._getNodePty();t||u.window.showWarningMessage(u.l10n.t("node-pty not available. Falling back to basic shell (limited features)."));let a=this._context.globalState.get("startupCommands",[]),r=[];for(let m of a)if(typeof m=="string")r.push(m);else if(m&&typeof m=="object"&&"command"in m){let b=m;for(let v=0;v<(b.count||1);v++)r.push(b.command)}let l=o||80,p=s||24;for(let m=0;m<e;m++){let b=this._spawnPty(t,l,p,i),v=m;this._outputBuffers[v]="";let S=!1;b.onData(x=>{this._disposed||(this._outputBuffers[v]=(this._outputBuffers[v]||"")+x,this._outputBuffers[v].length>d.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[v]=this._outputBuffers[v].slice(-d.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:v,data:x}),!S&&r[v]&&(S=!0,this._terminals[v]?.pty.write(r[v]+"\r")))}),this._terminals.push({id:m,pty:b})}this.sendLabels()}_restartTerminal(o){let s=this._terminals[o];if(!s)return;try{s.pty.kill()}catch{}this._panel.webview.postMessage({type:"reset",id:o});let i=u.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",e=this._spawnPty(d._getNodePty(),80,24,i),t=this._context.globalState.get("startupCommands",[]),a=[];for(let p of t)if(typeof p=="string")a.push(p);else if(p&&typeof p=="object"&&"command"in p){let m=p;for(let b=0;b<(m.count||1);b++)a.push(m.command)}let r=a[o]||"",l=!1;this._outputBuffers[o]="",e.onData(p=>{this._disposed||(this._outputBuffers[o]=(this._outputBuffers[o]||"")+p,this._outputBuffers[o].length>d.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[o]=this._outputBuffers[o].slice(-d.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:o,data:p}),!l&&r&&(l=!0,this._terminals[o]?.pty.write(r+"\r")))}),this._terminals[o]={id:o,pty:e}}dispose(){this._disposed=!0,d.currentPanel=void 0,this._configListener?.dispose(),this._context.globalState.update("lastGrid",void 0);for(let o of this._terminals)try{o.pty.kill()}catch{}this._terminals=[],this._panel.dispose()}_buildCustomFontCss(){let o=this._context.globalState.get("customFonts",[]),s="";for(let i of o){let e=this._readFontBase64(i.path);if(!e)continue;let t=T.extname(i.path).toLowerCase(),a=O[t]||"truetype";s+=`@font-face { font-family: '${i.name}'; src: url(data:font/${t.slice(1)};base64,${e}) format('${a}'); font-display: swap; }
`}return s}_getHtml(){let o=this._panel.webview,s=o.asWebviewUri(u.Uri.joinPath(this._context.extensionUri,"media","gridTerminal.js")),i=o.asWebviewUri(u.Uri.joinPath(this._context.extensionUri,"media","xterm.css")),e=V(),t=this._buildCustomFontCss();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none';
                 style-src ${o.cspSource} 'unsafe-inline';
                 script-src 'nonce-${e}';
                 font-src ${o.cspSource} data:;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${i}">
  <style>
    ${t}
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
    <div class="ctx-menu-item" data-action="copy">${u.l10n.t("Copy")}</div>
    <div class="ctx-menu-item" data-action="paste">${u.l10n.t("Paste")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="clear">${u.l10n.t("Clear")}</div>
    <div class="ctx-menu-item" data-action="restart">${u.l10n.t("Restart")}</div>
    <div class="ctx-menu-item" data-action="kill">${u.l10n.t("Kill")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="rename">${u.l10n.t("Rename")}</div>
  </div>
  <script nonce="${e}">
    var __GRID_ROWS = ${this._rows};
    var __GRID_COLS = ${this._cols};
    var __GRID_ZOOM = ${u.workspace.getConfiguration("terminalGrid").get("zoomPercent",100)};
    var __GRID_FONT_FAMILY = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("fontFamily",""))};
    var __GRID_BG_COLOR = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("backgroundColor",""))};
    var __GRID_FG_COLOR = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("foregroundColor",""))};
  </script>
  <script nonce="${e}" src="${s}"></script>
</body>
</html>`}};function V(){let d="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<32;s++)d+=o.charAt(Math.floor(Math.random()*o.length));return d}var J=[".ttf",".otf",".woff",".woff2"];function Z(){try{return require("node-pty"),!0}catch{return!1}}var k=class{static{this.viewType="terminalGrid.sidebarView"}constructor(o){this._context=o}resolveWebviewView(o,s,i){this._view=o,o.webview.options={enableScripts:!0,localResourceRoots:[this._context.extensionUri]},o.webview.html=this._getHtml(),o.webview.onDidReceiveMessage(async e=>{switch(e.type){case"openGrid":await n.commands.executeCommand("terminalGrid.openCustomGrid",e.rows,e.cols),this.sendConfig();break;case"reload":await n.commands.executeCommand("workbench.action.reloadWindow");break;case"setConfig":{let t=n.workspace.getConfiguration("terminalGrid");e.key&&e.value!==void 0&&await t.update(e.key,e.value,n.ConfigurationTarget.Global);break}case"getConfig":{this.sendConfig();break}case"browseFont":{let t=await n.window.showOpenDialog({canSelectMany:!1,filters:{"Font Files":["ttf","otf","woff","woff2"]},title:n.l10n.t("Select Font File")});if(!t||t.length===0)break;let a=t[0].fsPath,r=C.extname(a).toLowerCase();if(!J.includes(r)){n.window.showWarningMessage(n.l10n.t("Unsupported font format. Use .ttf, .otf, .woff, or .woff2"));break}try{I.accessSync(a,I.constants.R_OK)}catch{n.window.showErrorMessage(n.l10n.t("Cannot read font file."));break}let l=C.basename(a,r),p=this._context.globalState.get("customFonts",[]);p.some(m=>m.path===a)||(p.push({name:l,path:a}),await this._context.globalState.update("customFonts",p)),this.sendConfig(),g.currentPanel&&g.currentPanel.loadCustomFonts([{name:l,path:a}]);break}case"removeFont":{let a=this._context.globalState.get("customFonts",[]).filter(r=>r.name!==e.name);await this._context.globalState.update("customFonts",a),this.sendConfig();break}case"addStartupCommand":{let t=this._context.globalState.get("startupCommands",[]);t.push({command:e.command,count:1}),await this._context.globalState.update("startupCommands",t),this.sendConfig();break}case"removeStartupCommand":{let t=this._context.globalState.get("startupCommands",[]);t.splice(e.index,1),await this._context.globalState.update("startupCommands",t),this.sendConfig();break}case"updateCommandCount":{let t=this._context.globalState.get("startupCommands",[]);t[e.index]&&(t[e.index].count=Math.max(1,e.count),await this._context.globalState.update("startupCommands",t)),this.sendConfig();break}case"addProject":{let t=this._context.globalState.get("projects",[]);t.some(a=>a.path===e.path)||(t.push({name:e.name,path:e.path}),await this._context.globalState.update("projects",t)),this.sendConfig();break}case"removeProject":{let t=this._context.globalState.get("projects",[]);t.splice(e.index,1),await this._context.globalState.update("projects",t),this.sendConfig();break}case"openProject":{let t=n.Uri.file(e.path);await n.commands.executeCommand("vscode.openFolder",t);break}case"addCurrentProject":{let t=n.workspace.workspaceFolders?.[0];if(!t){n.window.showWarningMessage(n.l10n.t("No workspace folder open."));break}let a=this._context.globalState.get("projects",[]),r=t.uri.fsPath;a.some(l=>l.path===r)||(a.push({name:t.name,path:r}),await this._context.globalState.update("projects",a)),this.sendConfig();break}case"browseProject":{let t=await n.window.showOpenDialog({canSelectFiles:!1,canSelectFolders:!0,canSelectMany:!1,title:n.l10n.t("Select Project Folder")});if(!t||t.length===0)break;let a=t[0].fsPath,r=C.basename(a),l=this._context.globalState.get("projects",[]);l.some(p=>p.path===a)||(l.push({name:r,path:a}),await this._context.globalState.update("projects",l)),this.sendConfig();break}case"savePreset":{await this._savePreset(e.name),this.sendConfig();break}case"loadPreset":{let a=this._context.globalState.get("presets",[]).find(l=>l.name===e.name);if(!a)break;let r=n.workspace.getConfiguration("terminalGrid");await r.update("defaultRows",a.rows,n.ConfigurationTarget.Global),await r.update("defaultCols",a.cols,n.ConfigurationTarget.Global),await r.update("zoomPercent",a.zoomPercent,n.ConfigurationTarget.Global),await r.update("fontFamily",a.fontFamily,n.ConfigurationTarget.Global),await r.update("backgroundColor",a.bgColor,n.ConfigurationTarget.Global),await r.update("foregroundColor",a.fgColor,n.ConfigurationTarget.Global),await this._context.globalState.update("startupCommands",a.startupCommands||[]),await this._context.globalState.update("cellLabels",a.cellLabels||[]),g.createOrShow(this._context,a.rows,a.cols),this.sendConfig();break}case"deletePreset":{let a=this._context.globalState.get("presets",[]).filter(l=>l.name!==e.name);await this._context.globalState.update("presets",a);let r=this._context.globalState.get("projectPresets",{});for(let l of Object.keys(r))r[l]===e.name&&delete r[l];await this._context.globalState.update("projectPresets",r),this.sendConfig();break}case"linkPreset":{let t=this._context.globalState.get("projectPresets",{});e.presetName?t[e.projectPath]=e.presetName:delete t[e.projectPath],await this._context.globalState.update("projectPresets",t),this.sendConfig();break}case"broadcast":{g.currentPanel?g.currentPanel.broadcastInput(e.text):n.window.showWarningMessage(n.l10n.t("No terminal grid is open."));break}case"broadcastToCell":{if(g.currentPanel)for(let t of e.cellIds)g.currentPanel.sendToCell(t,e.text+"\r");else n.window.showWarningMessage(n.l10n.t("No terminal grid is open."));break}case"setCellConfig":{let t=this._context.globalState.get("cellOverrides",{});t[e.cellId]={bgColor:e.bgColor||"",fgColor:e.fgColor||"",fontFamily:e.fontFamily||""},await this._context.globalState.update("cellOverrides",t),g.currentPanel&&g.currentPanel.sendCellConfig(e.cellId,e.bgColor||"",e.fgColor||"",e.fontFamily||"");break}case"clearAllCellOverrides":{await this._context.globalState.update("cellOverrides",{}),g.currentPanel&&g.currentPanel.clearCellOverrides();break}case"saveSectionStates":{await this._context.globalState.update("sectionStates",e.states);break}case"installNodePty":{try{await n.window.withProgress({location:n.ProgressLocation.Notification,title:n.l10n.t("Installing node-pty\u2026"),cancellable:!1},()=>new Promise((r,l)=>{M.exec("npm install node-pty",{cwd:this._context.extensionPath},p=>{p?l(p):r()})})),this._view?.webview.postMessage({type:"ptyInstallResult",success:!0});let t=n.l10n.t("Reload Window");await n.window.showInformationMessage(n.l10n.t("node-pty installed successfully. Reload window to activate."),t)===t&&n.commands.executeCommand("workbench.action.reloadWindow")}catch(t){let a=t instanceof Error?t.message:String(t);n.window.showErrorMessage(n.l10n.t("node-pty install failed: {0}",a)),this._view?.webview.postMessage({type:"ptyInstallResult",success:!1})}break}}}),n.workspace.onDidChangeConfiguration(e=>{e.affectsConfiguration("terminalGrid")&&this.sendConfig()})}async _savePreset(o){let s=n.workspace.getConfiguration("terminalGrid"),i={name:o,rows:s.get("defaultRows",2),cols:s.get("defaultCols",3),startupCommands:this._context.globalState.get("startupCommands",[]),cellLabels:this._context.globalState.get("cellLabels",[]),zoomPercent:s.get("zoomPercent",100),fontFamily:s.get("fontFamily",""),bgColor:s.get("backgroundColor",""),fgColor:s.get("foregroundColor","")},e=this._context.globalState.get("presets",[]),t=e.findIndex(a=>a.name===o);t>=0?e[t]=i:e.push(i),await this._context.globalState.update("presets",e)}sendConfig(){if(!this._view)return;let o=n.workspace.getConfiguration("terminalGrid"),s=this._context.globalState.get("customFonts",[]),i=this._context.globalState.get("startupCommands",[]),e=this._context.globalState.get("projects",[]),t=this._context.globalState.get("presets",[]),a=this._context.globalState.get("projectPresets",{}),r=this._context.globalState.get("cellLabels",[]),l=this._context.globalState.get("cellOverrides",{}),p=this._context.globalState.get("sectionStates",{}),m=n.workspace.workspaceFolders?.[0]?.uri.fsPath||"",b=g.currentPanel;this._view.webview.postMessage({type:"configValues",zoom:o.get("zoomPercent",100),fontFamily:o.get("fontFamily",""),bgColor:o.get("backgroundColor",""),fgColor:o.get("foregroundColor",""),customFonts:s.map(v=>v.name),startupCommands:i,projects:e,presets:t,projectPresets:a,cellLabels:r,cellOverrides:l,sectionStates:p,workspacePath:m,gridRows:b?.getRows()??0,gridCols:b?.getCols()??0})}_getHtml(){let o=K();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${o}';">
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
    ${Z()?"":`
    <div class="pty-banner" id="ptyBanner">
      <span class="pty-banner-icon">\u26A0</span>
      <span class="pty-banner-text">${n.l10n.t("node-pty is required to use Terminal Grid.")}</span>
      <button class="pty-banner-btn" id="ptyInstallBtn">${n.l10n.t("Install")}</button>
    </div>
    `}
    <!-- Projects -->
    <div class="glass-card" data-section="projects">
      <div class="section-header collapsible">
        <div class="section-label">${n.l10n.t("Projects")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${n.l10n.t("Register projects and click to switch folders. If a preset is linked, it will be auto-applied on switch.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="projectList" class="cmd-list"></div>
        <div class="btn-group" style="gap: 6px;">
          <button class="glass-btn" id="addCurrentProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">+</span> ${n.l10n.t("Add Current Folder")}
          </button>
          <button class="glass-btn" id="browseProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">&#128193;</span> ${n.l10n.t("Browse Folder")}
          </button>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="gridSize">
      <div class="section-header collapsible">
        <div class="section-label">${n.l10n.t("Select Grid Size")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${n.l10n.t("Hover to select the desired rows\xD7cols size. Supports up to 4\xD75 (20 cells). Grid opens as an editor tab, each cell is an independent terminal.")}
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
          <span class="btn-icon">&#9654;</span> ${n.l10n.t("Open Grid")}
        </button>
      </div>
    </div>

    <div class="glass-card" data-section="settings">
      <div class="section-header collapsible">
        <div class="section-label">${n.l10n.t("Terminal Settings")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${n.l10n.t("Zoom: Global font size (50\u2013300%). Font/Color: Use tabs for global or per-cell settings. Changes in All tab apply to all cells. Set global first, then customize individual cells. Individual cells can be zoomed separately with Ctrl+Wheel.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="setting-row">
          <span class="setting-label">${n.l10n.t("Zoom")}</span>
          <div class="stepper">
            <button class="stepper-btn" id="zoomDown">\u2212</button>
            <span class="stepper-val" id="zoomVal">100%</span>
            <button class="stepper-btn" id="zoomUp">+</button>
          </div>
        </div>

        <div id="settingsTabs" class="settings-tabs hidden"></div>

        <div class="setting-row">
          <span class="setting-label">${n.l10n.t("Font")}</span>
          <div class="font-picker" id="fontPicker">
            <div class="font-display" id="fontDisplay">
              <span class="font-display-text" id="fontDisplayText">${n.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="fontDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${n.l10n.t("Back Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="bgSwatch">
              <div class="color-swatch-fill" id="bgSwatchFill"></div>
              <input type="color" id="bgColorInput" value="#1e1e1e">
            </div>
            <span class="color-val" id="bgVal">${n.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="bgReset" title="${n.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${n.l10n.t("Font Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="fgSwatch">
              <div class="color-swatch-fill" id="fgSwatchFill"></div>
              <input type="color" id="fgColorInput" value="#cccccc">
            </div>
            <span class="color-val" id="fgVal">${n.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="fgReset" title="${n.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="startup">
      <div class="section-header collapsible">
        <div class="section-label">${n.l10n.t("Startup Commands")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${n.l10n.t("Commands are auto-executed in each cell when the grid opens. Use \xD7N to repeat the same command for N cells. Extra cells beyond the command list open as default terminals.")}
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
            <option value="">${n.l10n.t("Add preset\u2026")}</option>
            <option value="claude">claude</option>
            <option value="codex">codex</option>
            <option value="claude --dangerously-skip-permissions">claude --dangerously-skip-permissions</option>
            <option value="codex -s danger-full-access -a never">codex -s danger-full-access -a never</option>
          </select>
        </div>
        <div class="cmd-add-row">
          <input class="glass-input" id="cmdCustom" placeholder="${n.l10n.t("Custom command\u2026")}" />
          <button class="stepper-btn" id="cmdAddBtn" title="${n.l10n.t("Add")}">+</button>
        </div>
      </div>
    </div>

    <!-- Presets -->
    <div class="glass-card" data-section="presets">
      <div class="section-header collapsible">
        <div class="section-label">${n.l10n.t("Presets")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${n.l10n.t("Save and load current grid settings (size, zoom, font, color, commands, cell labels) as presets. Use Link to project for per-project auto-apply.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-add-row">
          <input class="glass-input" id="presetNameInput" placeholder="${n.l10n.t("Preset name\u2026")}" style="flex: 1;" />
        </div>
        <div class="cmd-add-row" style="margin-top: 4px;">
          <select class="glass-select" id="presetSelect" style="flex: 1;">
            <option value="">${n.l10n.t("Select preset\u2026")}</option>
          </select>
        </div>
        <div class="btn-group" style="gap: 6px; margin-top: 8px;">
          <div style="display: flex; gap: 6px;">
            <button class="glass-btn" id="presetSaveBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${n.l10n.t("Save")}</button>
            <button class="glass-btn primary" id="presetLoadBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${n.l10n.t("Load")}</button>
            <button class="glass-btn" id="presetDeleteBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${n.l10n.t("Delete")}</button>
          </div>
          <div id="presetLinkRow" style="display: flex; align-items: center; gap: 6px; font-size: 11px; opacity: .7; margin-top: 4px;">
            <input type="checkbox" id="presetLinkCheck" style="margin: 0;" />
            <label id="presetLinkLabel" for="presetLinkCheck" style="cursor: pointer;">${n.l10n.t("Link to current project")}</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Broadcast Input -->
    <div class="glass-card" data-section="broadcast">
      <div class="section-header collapsible">
        <div class="section-label">${n.l10n.t("Broadcast Input")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${n.l10n.t("Send text to selected terminals. Check All to send to all cells, uncheck for individual selection.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="broadcastTargets" class="broadcast-targets hidden"></div>
        <div class="cmd-add-row">
          <input class="glass-input" id="broadcastInput" placeholder="${n.l10n.t("Type command\u2026")}" style="flex: 1;" />
          <button class="stepper-btn" id="broadcastSendBtn" title="${n.l10n.t("Send")}" style="width: 50px;">${n.l10n.t("Send")}</button>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="actions">
      <div class="section-header collapsible">
        <div class="section-label">${n.l10n.t("Actions")}</div>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="btn-group">
          <button class="glass-btn" id="reloadBtn">
            <span class="btn-icon">&#8635;</span> ${n.l10n.t("Reload Window")}
          </button>
        </div>
      </div>
    </div>

    <div class="hint">
      ${n.l10n.t(`Grid opens as an editor tab.
Ctrl+Wheel to zoom individual cells.`).replace(`
`,"<br>")}
    </div>
  </div>

  <script nonce="${o}">
    var __i18n = ${JSON.stringify({installing:n.l10n.t("Installing\u2026"),ideDefault:n.l10n.t("IDE Default"),remove:n.l10n.t("Remove"),addFontFile:n.l10n.t("Add font file\u2026"),all:n.l10n.t("All"),noStartupCommands:n.l10n.t("No startup commands configured"),noProjects:n.l10n.t("No projects registered"),linkedPrefix:n.l10n.t("Linked: {0}"),linkToProject:n.l10n.t("Link to current project"),selectPreset:n.l10n.t("Select preset\u2026"),reload:n.l10n.t("Reload"),retry:n.l10n.t("Retry"),ptyInstalled:n.l10n.t("node-pty installed successfully!"),ptyInstalledHint:n.l10n.t("Reload the window to activate.")})};
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
    var activeSettingsTab = 'all';
    var cellOverrides = {}; // { 0: { bgColor, fgColor, fontFamily }, ... }
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
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '' };
        cellOverrides[cid].fontFamily = val;
        fontDisplayText.textContent = getDisplayName(val);
        toggleDropdown(false);
        vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: val });
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
      buildDropdown();
      toggleDropdown();
    });
    document.addEventListener('click', function() { toggleDropdown(false); });

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
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '' };
          cellOverrides[cid][overrideKey] = val;
          updateColorUI(val);
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily });
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
          if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '' };
          cellOverrides[cid][overrideKey] = '';
          updateColorUI('');
          vscode.postMessage({ type: 'setCellConfig', cellId: cid, bgColor: cellOverrides[cid].bgColor, fgColor: cellOverrides[cid].fgColor, fontFamily: cellOverrides[cid].fontFamily });
          updateTabOverrideIndicators();
        }
      }
      resetBtn.addEventListener('click', doReset);
      valEl.addEventListener('click', function() {
        if (valEl.textContent === __i18n.ideDefault) return;
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
        fontDisplayText.textContent = getDisplayName(curFontFamily);
        updateBgUI(curBg);
        updateFgUI(curFg);
      } else {
        var cid = parseInt(activeSettingsTab, 10);
        var ov = cellOverrides[cid] || {};
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
        var hasOv = ov && (ov.bgColor || ov.fgColor || ov.fontFamily);
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

          item.addEventListener('click', function() {
            vscode.postMessage({ type: 'openProject', path: p.path });
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
      if (e.key === 'Enter') {
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
      if (msg.type === 'configValues') {
        curZoom = msg.zoom;
        curFontFamily = msg.fontFamily;
        curBg = msg.bgColor || '';
        curFg = msg.fgColor || '';
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
</html>`}};function K(){let d="",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<32;s++)d+=o.charAt(Math.floor(Math.random()*o.length));return d}var R=f(require("http"));var L=class{constructor(o){this._server=null;this._port=o}start(){return new Promise((o,s)=>{this._server=R.createServer((i,e)=>{if(e.setHeader("Content-Type","application/json"),i.method==="OPTIONS"){e.writeHead(204),e.end();return}let t=new URL(i.url||"/",`http://127.0.0.1:${this._port}`);i.method==="GET"&&t.pathname==="/api/health"?(e.writeHead(200),e.end(JSON.stringify({status:"ok"}))):i.method==="GET"&&t.pathname==="/api/info"?this._handleInfo(e):i.method==="POST"&&t.pathname==="/api/send"?this._readBody(i).then(a=>this._handleSend(a,e)):i.method==="POST"&&t.pathname==="/api/read"?this._readBody(i).then(a=>this._handleRead(a,e)):i.method==="POST"&&t.pathname==="/api/broadcast"?this._readBody(i).then(a=>this._handleBroadcast(a,e)):(e.writeHead(404),e.end(JSON.stringify({error:"Not found"})))}),this._server.on("error",s),this._server.listen(this._port,"127.0.0.1",()=>{let i=this._server.address();this._port=i.port,o(this._port)})})}stop(){this._server?.close(),this._server=null}getPort(){return this._port}_handleInfo(o){let s=g.currentPanel;if(!s){o.writeHead(200),o.end(JSON.stringify({grid:null}));return}o.writeHead(200),o.end(JSON.stringify({grid:{rows:s.getRows(),cols:s.getCols(),cellCount:s.getCellCount(),cellLabels:s.getCellLabels()}}))}_handleSend(o,s){let i=g.currentPanel;if(!i){s.writeHead(200),s.end(JSON.stringify({success:!1,error:"No grid open"}));return}let e=typeof o.cellId=="number"?o.cellId:-1,t=typeof o.text=="string"?o.text:"",a=i.sendToCell(e,t);s.writeHead(200),s.end(JSON.stringify({success:a}))}_handleRead(o,s){let i=g.currentPanel;if(!i){s.writeHead(200),s.end(JSON.stringify({output:null,error:"No grid open"}));return}let e=typeof o.cellId=="number"?o.cellId:-1,t=typeof o.lines=="number"?o.lines:void 0,a=i.readCell(e,t);s.writeHead(200),s.end(JSON.stringify({output:a}))}_handleBroadcast(o,s){let i=g.currentPanel;if(!i){s.writeHead(200),s.end(JSON.stringify({success:!1,error:"No grid open"}));return}let e=typeof o.text=="string"?o.text:"",t=i.getCellCount();for(let a=0;a<t;a++)i.sendToCell(a,e);s.writeHead(200),s.end(JSON.stringify({success:!0,cellCount:t}))}_readBody(o){return new Promise(s=>{let i="";o.on("data",e=>{i+=e}),o.on("end",()=>{try{s(JSON.parse(i))}catch{s({})}})})}};var _,h;function Y(d){let o=c.workspace.workspaceFolders?.[0]?.uri.fsPath;if(o){let t=d.globalState.get("projectPresets",{})[o];if(t){let r=d.globalState.get("presets",[]).find(l=>l.name===t);if(r){let l=c.workspace.getConfiguration("terminalGrid");l.update("defaultRows",r.rows,c.ConfigurationTarget.Global),l.update("defaultCols",r.cols,c.ConfigurationTarget.Global),l.update("zoomPercent",r.zoomPercent,c.ConfigurationTarget.Global),l.update("fontFamily",r.fontFamily,c.ConfigurationTarget.Global),l.update("backgroundColor",r.bgColor,c.ConfigurationTarget.Global),l.update("foregroundColor",r.fgColor,c.ConfigurationTarget.Global),d.globalState.update("startupCommands",r.startupCommands||[]),d.globalState.update("cellLabels",r.cellLabels||[])}}}let s=c.workspace.getConfiguration("terminalGrid").get("apiPort",7890);s>0&&(_=new L(s),_.start().then(e=>{h=c.window.createStatusBarItem(c.StatusBarAlignment.Right,50),h.text=`$(broadcast) TG :${e}`,h.tooltip=c.l10n.t("Terminal Grid API active on port {0}",e),h.command="terminalGrid.copyMcpConfig",h.show(),d.subscriptions.push(h)}).catch(e=>{c.window.showWarningMessage(c.l10n.t("Terminal Grid API bridge failed to start: {0}",e.message))}));let i=new k(d);d.subscriptions.push(c.window.registerWebviewViewProvider(k.viewType,i)),d.subscriptions.push(c.commands.registerCommand("terminalGrid._refreshSidebar",()=>{i.sendConfig()})),d.subscriptions.push(c.window.registerWebviewPanelSerializer("terminalGrid",{async deserializeWebviewPanel(e,t){let a=d.globalState.get("lastGrid");a?g.revive(e,d,a.rows,a.cols):e.dispose()}})),d.subscriptions.push(c.commands.registerCommand("terminalGrid.openGrid",()=>{let e=c.workspace.getConfiguration("terminalGrid"),t=e.get("defaultRows",2),a=e.get("defaultCols",3);g.createOrShow(d,t,a)}),c.commands.registerCommand("terminalGrid.openCustomGrid",(e,t)=>{g.createOrShow(d,e,t)}),c.commands.registerCommand("terminalGrid.open2x2",()=>g.createOrShow(d,2,2)),c.commands.registerCommand("terminalGrid.open2x3",()=>g.createOrShow(d,2,3)),c.commands.registerCommand("terminalGrid.open3x3",()=>g.createOrShow(d,3,3)),c.commands.registerCommand("terminalGrid.sendToCell",(e,t)=>g.currentPanel?.sendToCell(e,t)??!1),c.commands.registerCommand("terminalGrid.readCell",(e,t)=>g.currentPanel?.readCell(e,t)??null),c.commands.registerCommand("terminalGrid.getGridInfo",()=>{let e=g.currentPanel;return e?{rows:e.getRows(),cols:e.getCols(),cellCount:e.getCellCount(),cellLabels:e.getCellLabels()}:null}),c.commands.registerCommand("terminalGrid.testAPI",async()=>{let e=c.window.createOutputChannel("Terminal Grid Tests");e.show(),e.appendLine(`=== Terminal Grid API Tests ===
`);let t=0,a=0;function r(w,y,P){let z=y?"PASS":"FAIL";y?t++:a++,e.appendLine(`[${z}] ${w}${P?" \u2014 "+P:""}`)}let l=await c.commands.executeCommand("terminalGrid.getGridInfo");if(!l){e.appendLine("[FAIL] getGridInfo returned null. Open a grid first.");return}r("getGridInfo returns object",!!l,JSON.stringify(l)),r("rows is number",typeof l.rows=="number",`rows=${l.rows}`),r("cols is number",typeof l.cols=="number",`cols=${l.cols}`),r("cellCount = rows*cols",l.cellCount===l.rows*l.cols,`${l.cellCount}`),r("cellLabels is array",Array.isArray(l.cellLabels),`length=${l.cellLabels.length}`),r("cellLabels.length = cellCount",l.cellLabels.length===l.cellCount);let p=await c.commands.executeCommand("terminalGrid.sendToCell",0,"echo __API_TEST__\r");r("sendToCell(0) returns true",p===!0);let m=await c.commands.executeCommand("terminalGrid.sendToCell",999,"x\r");r("sendToCell(999) returns false",m===!1,`got ${m}`);let b=await c.commands.executeCommand("terminalGrid.sendToCell",0,"TYPED_ONLY");r("sendToCell without \\r returns true",b===!0),await new Promise(w=>setTimeout(w,2e3)),await c.commands.executeCommand("terminalGrid.sendToCell",0,"");let v=await c.commands.executeCommand("terminalGrid.readCell",0);r("readCell(0) returns string",typeof v=="string",`length=${v?.length??0}`),r("readCell(0) contains test marker",!!v&&v.includes("__API_TEST__"));let S=await c.commands.executeCommand("terminalGrid.readCell",0,3);r("readCell(0, 3) returns string",typeof S=="string");let x=await c.commands.executeCommand("terminalGrid.readCell",0,0);r("readCell(0, 0) returns empty",x==="",`got "${x}"`);let B=await c.commands.executeCommand("terminalGrid.readCell",999);if(r("readCell(999) returns null",B===null,`got ${B}`),l.cellCount>1){let w=await c.commands.executeCommand("terminalGrid.sendToCell",1,"echo CELL1_OK\r");r("sendToCell(1) returns true",w===!0),await new Promise(P=>setTimeout(P,1500));let y=await c.commands.executeCommand("terminalGrid.readCell",1);r("readCell(1) contains CELL1_OK",!!y&&y.includes("CELL1_OK"))}e.appendLine(`
=== ${t} passed, ${a} failed ===`),a===0?c.window.showInformationMessage(c.l10n.t("Terminal Grid API: All {0} tests passed!",t)):c.window.showWarningMessage(c.l10n.t("Terminal Grid API: {0} test(s) failed. See output.",a))}),c.commands.registerCommand("terminalGrid.copyMcpConfig",()=>{let e=_?.getPort()??7890,a={mcpServers:{"terminal-grid":{command:"node",args:[G.join(d.extensionPath,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(e)}}}};c.env.clipboard.writeText(JSON.stringify(a,null,2)),c.window.showInformationMessage(c.l10n.t("Terminal Grid MCP config copied to clipboard (port {0})",e))}))}function q(){_?.stop(),_=void 0,g.currentPanel?.dispose()}0&&(module.exports={activate,deactivate});
