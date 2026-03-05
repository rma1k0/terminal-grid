"use strict";var Q=Object.create;var R=Object.defineProperty;var ee=Object.getOwnPropertyDescriptor;var te=Object.getOwnPropertyNames;var ne=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var se=(r,t)=>{for(var s in t)R(r,s,{get:t[s],enumerable:!0})},A=(r,t,s,d)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of te(t))!ae.call(r,n)&&n!==s&&R(r,n,{get:()=>t[n],enumerable:!(d=ee(t,n))||d.enumerable});return r};var y=(r,t,s)=>(s=r!=null?Q(ne(r)):{},A(t||!r||!r.__esModule?R(s,"default",{value:r,enumerable:!0}):s,r)),oe=r=>A(R({},"__esModule",{value:!0}),r);var ye={};se(ye,{activate:()=>ve,deactivate:()=>he});module.exports=oe(ye);var p=y(require("vscode")),S=y(require("path")),k=y(require("fs")),O=y(require("os"));var o=y(require("vscode")),M=y(require("fs")),B=y(require("path")),q=y(require("child_process"));var u=y(require("vscode")),V=y(require("os")),Z=y(require("fs")),G=y(require("path"));var z={"":null,Dracula:{name:"Dracula",background:"#282a36",foreground:"#f8f8f2",cursor:"#f8f8f2",cursorAccent:"#282a36",selectionBackground:"#44475a",black:"#21222c",brightBlack:"#6272a4",red:"#ff5555",brightRed:"#ff6e6e",green:"#50fa7b",brightGreen:"#69ff94",yellow:"#f1fa8c",brightYellow:"#ffffa5",blue:"#bd93f9",brightBlue:"#d6acff",magenta:"#ff79c6",brightMagenta:"#ff92df",cyan:"#8be9fd",brightCyan:"#a4ffff",white:"#f8f8f2",brightWhite:"#ffffff"},Monokai:{name:"Monokai",background:"#272822",foreground:"#f8f8f2",cursor:"#f8f8f0",cursorAccent:"#272822",selectionBackground:"#49483e",black:"#272822",brightBlack:"#75715e",red:"#f92672",brightRed:"#f92672",green:"#a6e22e",brightGreen:"#a6e22e",yellow:"#f4bf75",brightYellow:"#f4bf75",blue:"#66d9ef",brightBlue:"#66d9ef",magenta:"#ae81ff",brightMagenta:"#ae81ff",cyan:"#a1efe4",brightCyan:"#a1efe4",white:"#f8f8f2",brightWhite:"#f9f8f5"},"Solarized Dark":{name:"Solarized Dark",background:"#002b36",foreground:"#839496",cursor:"#839496",cursorAccent:"#002b36",selectionBackground:"#073642",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},"Solarized Light":{name:"Solarized Light",background:"#fdf6e3",foreground:"#657b83",cursor:"#657b83",cursorAccent:"#fdf6e3",selectionBackground:"#eee8d5",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},Nord:{name:"Nord",background:"#2e3440",foreground:"#d8dee9",cursor:"#d8dee9",cursorAccent:"#2e3440",selectionBackground:"#434c5e",black:"#3b4252",brightBlack:"#4c566a",red:"#bf616a",brightRed:"#bf616a",green:"#a3be8c",brightGreen:"#a3be8c",yellow:"#ebcb8b",brightYellow:"#ebcb8b",blue:"#81a1c1",brightBlue:"#81a1c1",magenta:"#b48ead",brightMagenta:"#b48ead",cyan:"#88c0d0",brightCyan:"#8fbcbb",white:"#e5e9f0",brightWhite:"#eceff4"},"One Dark":{name:"One Dark",background:"#282c34",foreground:"#abb2bf",cursor:"#528bff",cursorAccent:"#282c34",selectionBackground:"#3e4451",black:"#282c34",brightBlack:"#5c6370",red:"#e06c75",brightRed:"#e06c75",green:"#98c379",brightGreen:"#98c379",yellow:"#e5c07b",brightYellow:"#d19a66",blue:"#61afef",brightBlue:"#61afef",magenta:"#c678dd",brightMagenta:"#c678dd",cyan:"#56b6c2",brightCyan:"#56b6c2",white:"#abb2bf",brightWhite:"#ffffff"},"Gruvbox Dark":{name:"Gruvbox Dark",background:"#282828",foreground:"#ebdbb2",cursor:"#ebdbb2",cursorAccent:"#282828",selectionBackground:"#504945",black:"#282828",brightBlack:"#928374",red:"#cc241d",brightRed:"#fb4934",green:"#98971a",brightGreen:"#b8bb26",yellow:"#d79921",brightYellow:"#fabd2f",blue:"#458588",brightBlue:"#83a598",magenta:"#b16286",brightMagenta:"#d3869b",cyan:"#689d6a",brightCyan:"#8ec07c",white:"#a89984",brightWhite:"#ebdbb2"},"Tokyo Night":{name:"Tokyo Night",background:"#1a1b26",foreground:"#a9b1d6",cursor:"#c0caf5",cursorAccent:"#1a1b26",selectionBackground:"#33467c",black:"#15161e",brightBlack:"#414868",red:"#f7768e",brightRed:"#f7768e",green:"#9ece6a",brightGreen:"#9ece6a",yellow:"#e0af68",brightYellow:"#e0af68",blue:"#7aa2f7",brightBlue:"#7aa2f7",magenta:"#bb9af7",brightMagenta:"#bb9af7",cyan:"#7dcfff",brightCyan:"#7dcfff",white:"#a9b1d6",brightWhite:"#c0caf5"}},$=Object.keys(z);function L(r){let t=z[r];if(!t)return null;let{name:s,...d}=t;return d}function T(r){return new Promise(t=>setTimeout(t,r))}var re=3e3,ie=15e3,le=200,de=[/[❯>✻⏵›]\s*$/m,/aider>\s*$/m],U=(()=>{if(process.platform!=="win32")return 0;let r=V.release().split(".");return parseInt(r[2]||"0",10)})(),H=U>0&&U<22e3?"\r":"\x1B[13u",ce=["claude","codex","gemini","copilot","aider","claude --dangerously-skip-permissions","codex -s danger-full-access -a never"];function j(r){let t=r.trim();return ce.some(s=>t===s||t.startsWith(s+" "))}function pe(r){let t=r.toLowerCase();return t.includes("powershell")||t.includes("pwsh")||t.includes("cmd")?`\r
`:"\r"}function W(r,t,s,d,n){let e=r[n];return e?.startupSteps&&e.startupSteps.length>0?e.startupSteps:e?.startupCommand?[{type:"command",input:e.startupCommand}]:t[n]?[{type:"command",input:t[n]}]:s.length>0?s:d?[{type:"command",input:d}]:[]}var J={".ttf":"truetype",".otf":"opentype",".woff":"woff",".woff2":"woff2"},m=class r{constructor(t,s,d,n){this._terminals=[];this._outputBuffers=[];this._csiUMode=[];this._insideLlm=[];this._cellShellType=[];this._disposed=!1;this._stepGeneration={};this._panel=t,this._context=s,this._rows=d,this._cols=n,this._panel.webview.options={enableScripts:!0,localResourceRoots:[u.Uri.joinPath(s.extensionUri,"media")]},this._panel.webview.html=this._getHtml(),this._panel.webview.onDidReceiveMessage(async e=>{switch(e.type){case"ready":if(this._createTerminals(e.defaultCols,e.defaultRows),e.cellDims&&Array.isArray(e.cellDims))for(let i=0;i<e.cellDims.length&&i<this._terminals.length;i++){let l=e.cellDims[i];if(l?.cols&&l?.rows)try{this._terminals[i].pty.resize(l.cols,l.rows)}catch{}}this.loadCustomFonts(this._context.globalState.get("customFonts",[]));let a=this._context.globalState.get("cellOverrides",{});for(let[i,l]of Object.entries(a))if(l.bgColor||l.fgColor||l.fontFamily||l.themeName){let c=l.themeName?L(l.themeName):null;this.sendCellConfig(parseInt(i),l.bgColor||"",l.fgColor||"",l.fontFamily||"",l.themeName||"",c)}break;case"input":{let i=this._terminals[e.id]?.pty;i&&this._chunkedWrite(i,e.data);break}case"resize":try{this._terminals[e.id]?.pty.resize(e.cols,e.rows)}catch{}break;case"clearTerminal":this._panel.webview.postMessage({type:"clear",id:e.id});break;case"killTerminal":try{this._terminals[e.id]?.pty.kill()}catch{}break;case"restartTerminal":this._restartTerminal(e.id);break;case"renameCell":{let i=this._context.globalState.get("cellLabels",[]),l=i[e.id]||"",c=await u.window.showInputBox({prompt:u.l10n.t("Rename cell {0}",e.id+1),value:l,placeHolder:u.l10n.t("Enter alias (empty to reset)")});c!==void 0&&(i[e.id]=c,await this._context.globalState.update("cellLabels",i),this.sendLabels(),u.commands.executeCommand("terminalGrid._refreshSidebar"));break}}}),this._configListener=u.workspace.onDidChangeConfiguration(e=>{if(e.affectsConfiguration("terminalGrid")){let a=u.workspace.getConfiguration("terminalGrid"),i=a.get("colorTheme","");this._panel.webview.postMessage({type:"configUpdate",zoom:a.get("zoomPercent",100),fontFamily:a.get("fontFamily",""),bgColor:a.get("backgroundColor",""),fgColor:a.get("foregroundColor",""),themeName:i,themeColors:L(i)})}}),this._panel.onDidDispose(()=>this.dispose()),this._panel.iconPath=u.Uri.joinPath(s.extensionUri,"images","sidebar.svg")}static{this.OUTPUT_BUFFER_SIZE=5e4}static{this.CSI_U_ENABLE=/\x1b\[>[0-9]+u/}static{this.CSI_U_DISABLE=/\x1b\[<[0-9]*u/}static _getLog(){return r._log||(r._log=u.window.createOutputChannel("Terminal Grid")),r._log}static _getNodePty(){if(r._nodePty===void 0)try{r._nodePty=require("node-pty")}catch{r._nodePty=null}return r._nodePty}static getAvailableShells(){let t=[{name:"IDE Default",path:"",args:[]}];try{let a=function(g){try{if(/[/\\]/.test(g))return d.existsSync(g);let b=process.platform==="win32"?`where ${g}`:`which ${g}`;return n.execSync(b,{stdio:"ignore",timeout:500}),!0}catch{return!1}};var s=a;let d=require("fs"),n=require("child_process"),e=new Set,i=process.platform==="win32"?"windows":process.platform==="darwin"?"osx":"linux",l=u.workspace.getConfiguration(`terminal.integrated.profiles.${i}`);if(l)for(let g of Object.keys(l))try{let b=l.get(g);if(!b||typeof b!="object")continue;let h=Array.isArray(b.path)?b.path[0]:b.path;h&&a(h)&&(t.push({name:g,path:h,args:b.args||[]}),e.add(h.toLowerCase()))}catch{}let c=process.platform==="win32"?[{name:"PowerShell",path:"powershell.exe",args:["-NoLogo"]},{name:"PowerShell 7",path:"pwsh.exe",args:["-NoLogo"]},{name:"Command Prompt",path:"cmd.exe",args:[]},{name:"Git Bash",path:"C:\\Program Files\\Git\\bin\\bash.exe",args:["--login"]},{name:"WSL",path:"wsl.exe",args:[]}]:[{name:"Bash",path:"/bin/bash",args:["--login"]},{name:"Zsh",path:"/bin/zsh",args:["--login"]},{name:"Fish",path:"/usr/bin/fish",args:[]},{name:"sh",path:"/bin/sh",args:[]}];for(let g of c)!e.has(g.path.toLowerCase())&&a(g.path)&&(t.push(g),e.add(g.path.toLowerCase()))}catch{}return t}_resolveShell(t){if(!t)return process.platform==="win32"?r._getNodePty()?{path:"powershell.exe",args:["-NoLogo","-NoProfile"]}:{path:process.env.COMSPEC||"cmd.exe",args:[]}:{path:process.env.SHELL||"bash",args:[]};let d=r.getAvailableShells().find(e=>e.path===t||e.name===t);if(d&&d.path)return{path:d.path,args:d.args};let n=t.toLowerCase();return n.includes("powershell")||n.includes("pwsh")?{path:t,args:["-NoLogo"]}:n.includes("bash")||n.includes("zsh")?{path:t,args:["--login"]}:{path:t,args:[]}}static createOrShow(t,s,d){r.currentPanel&&r.currentPanel.dispose();let n=u.window.createWebviewPanel("terminalGrid",u.l10n.t("Terminal Grid {0}\xD7{1}",s,d),u.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[u.Uri.joinPath(t.extensionUri,"media")]});r.currentPanel=new r(n,t,s,d),t.globalState.update("lastGrid",{rows:s,cols:d}),u.commands.executeCommand("terminalGrid._refreshSidebar")}static revive(t,s,d,n){r.currentPanel&&r.currentPanel.dispose(),r.currentPanel=new r(t,s,d,n),s.globalState.update("lastGrid",{rows:d,cols:n}),u.commands.executeCommand("terminalGrid._refreshSidebar")}_enterSeq(t){return this._csiUMode[t]||this._insideLlm[t]?H:pe(this._cellShellType[t]||"")}broadcastInput(t){for(let s of this._terminals){if(this._insideLlm[s.id])this._typeToCell(s.id,t).then(()=>T(50)).then(()=>{s.pty.write(this._enterSeq(s.id))});else{let n=/\r?\n/.test(t)?"\x1B[200~"+t+"\x1B[201~":t;s.pty.write(n+this._enterSeq(s.id))}j(t)&&(this._insideLlm[s.id]=!0),t.trim()==="exit"&&(this._insideLlm[s.id]=!1)}}sendToCell(t,s){let d=this._terminals[t];return d?(this._chunkedWrite(d.pty,s),!0):!1}sendInputToCell(t,s){let d=this._terminals[t];if(!d)return!1;if(this._insideLlm[t])this._typeToCell(t,s).then(()=>T(50)).then(()=>{d.pty.write(this._enterSeq(t))});else{let e=/\r?\n/.test(s)?"\x1B[200~"+s+"\x1B[201~":s;d.pty.write(e+this._enterSeq(t))}return j(s)&&(this._insideLlm[t]=!0),s.trim()==="exit"&&(this._insideLlm[t]=!1),!0}static _stripAnsi(t){return t.replace(/\x1b\[[0-9;?]*[a-zA-Z]/g,"").replace(/\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g,"").replace(/\x1b[()][0-9A-Z]/g,"").replace(/\x1b[78DEHM]/g,"").replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/\n{3,}/g,`

`)}readCell(t,s){let d=this._outputBuffers[t];if(d===void 0)return null;let n=r._stripAnsi(d);return s===void 0?n:s<=0?"":n.split(`
`).slice(-s).join(`
`)}getCellCount(){return this._terminals.length}getRows(){return this._rows}getCols(){return this._cols}getCellLabels(){let t=this._context.globalState.get("cellLabels",[]),s=this._rows*this._cols;return Array.from({length:s},(d,n)=>t[n]||String(n+1))}sendCellConfig(t,s,d,n,e,a){this._panel.webview.postMessage({type:"cellConfig",id:t,bgColor:s,fgColor:d,fontFamily:n,themeName:e??"",themeColors:a??null})}clearCellOverrides(){this._panel.webview.postMessage({type:"clearCellOverrides"})}sendLabels(){let t=this._context.globalState.get("cellLabels",[]);this._panel.webview.postMessage({type:"setLabels",labels:t})}loadCustomFonts(t){for(let s of t){let d=this._readFontBase64(s.path);if(d){let n=G.extname(s.path).toLowerCase();this._panel.webview.postMessage({type:"loadFont",name:s.name,data:d,format:J[n]||"truetype"})}}}_readFontBase64(t){try{return Z.readFileSync(t).toString("base64")}catch{return null}}_spawnPty(t,s,d,n,e){let a=this._resolveShell(e);if(t){let c=t.spawn(a.path,a.args,{name:"xterm-256color",cols:s,rows:d,cwd:n,env:process.env});return{onData:g=>{c.onData(g)},write:g=>c.write(g),resize:(g,b)=>c.resize(g,b),kill:()=>c.kill()}}let{spawn:i}=require("child_process"),l=i(a.path,a.args,{cwd:n,env:process.env,windowsHide:!0});return{onData:c=>{l.stdout?.on("data",g=>c(g.toString())),l.stderr?.on("data",g=>c(g.toString()))},write:c=>{l.stdin?.write(c)},resize:()=>{},kill:()=>l.kill()}}_createTerminals(t,s){let d=u.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",n=this._rows*this._cols,e=r._getNodePty();e||u.window.showWarningMessage(u.l10n.t("node-pty not available. Falling back to basic shell (limited features)."));let a=this._context.globalState.get("startupCommands",[]),i=[];for(let f of a)if(typeof f=="string")i.push(f);else if(f&&typeof f=="object"&&"command"in f){let x=f;for(let C=0;C<(x.count||1);C++)i.push(x.command)}let l=this._context.globalState.get("defaultCommand",""),c=this._context.globalState.get("defaultSteps",[]),g=t||80,b=s||24,h=u.workspace.getConfiguration("terminalGrid").get("shellType",""),w=this._context.globalState.get("cellOverrides",{});for(let f=0;f<n;f++){let x=w[f]?.shellType||h||"",C=this._spawnPty(e,g,b,d,x||void 0),v=f,_=W(w,i,c,l,f);this._cellShellType[v]=x,this._insideLlm[v]=!1,this._outputBuffers[v]="",this._csiUMode[v]=!1;let E=!1;C.onData(P=>{this._disposed||(r.CSI_U_ENABLE.test(P)&&(this._csiUMode[v]=!0),r.CSI_U_DISABLE.test(P)&&(this._csiUMode[v]=!1),this._outputBuffers[v]=(this._outputBuffers[v]||"")+P,this._outputBuffers[v].length>r.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[v]=this._outputBuffers[v].slice(-r.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:v,data:P}),!E&&_.length>0&&(E=!0,this._executeSteps(v,_,this._cellShellType[v]||"")))}),this._terminals.push({id:f,pty:C})}this.sendLabels()}_restartTerminal(t){let s=this._terminals[t];if(!s)return;try{s.pty.kill()}catch{}this._panel.webview.postMessage({type:"reset",id:t});let d=u.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",n=u.workspace.getConfiguration("terminalGrid").get("shellType",""),e=this._context.globalState.get("cellOverrides",{}),a=e[t]?.shellType||n||"",i=this._spawnPty(r._getNodePty(),80,24,d,a||void 0),l=this._context.globalState.get("startupCommands",[]),c=[];for(let f of l)if(typeof f=="string")c.push(f);else if(f&&typeof f=="object"&&"command"in f){let x=f;for(let C=0;C<(x.count||1);C++)c.push(x.command)}let g=this._context.globalState.get("defaultCommand",""),b=this._context.globalState.get("defaultSteps",[]),h=W(e,c,b,g,t);this._cellShellType[t]=a,this._insideLlm[t]=!1;let w=!1;this._outputBuffers[t]="",this._csiUMode[t]=!1,i.onData(f=>{this._disposed||(r.CSI_U_ENABLE.test(f)&&(this._csiUMode[t]=!0),r.CSI_U_DISABLE.test(f)&&(this._csiUMode[t]=!1),this._outputBuffers[t]=(this._outputBuffers[t]||"")+f,this._outputBuffers[t].length>r.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[t]=this._outputBuffers[t].slice(-r.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:t,data:f}),!w&&h.length>0&&(w=!0,this._executeSteps(t,h,this._cellShellType[t]||"")))}),this._terminals[t]={id:t,pty:i}}static{this.CHUNK_SIZE=65536}_chunkedWrite(t,s){if(s.length<=r.CHUNK_SIZE){t.write(s);return}let d=0,n=()=>{if(d>=s.length)return;let e=s.slice(d,d+r.CHUNK_SIZE);d+=r.CHUNK_SIZE,t.write(e),d<s.length&&setTimeout(n,5)};n()}async _typeToCell(t,s){let d=this._terminals[t]?.pty;if(d)for(let n of s)d.write(n),await T(20)}static{this.LLM_TYPE_MAX_RETRIES=5}static{this.LLM_ECHO_WAIT=2e3}async _waitForLlmPrompt(t){let s=(this._outputBuffers[t]||"").length,d=Date.now()+ie;for(;Date.now()<d;){await T(le);let n=this._outputBuffers[t]||"",e=r._stripAnsi(n.slice(s));if(de.some(a=>a.test(e)))return!0;if(this._disposed)return!1}return!1}async _typeWithRetry(t,s){let d=this._terminals[t]?.pty;if(!d)return!1;for(let n=0;n<r.LLM_TYPE_MAX_RETRIES;n++){let e=(this._outputBuffers[t]||"").length;await this._typeToCell(t,s);let a=Date.now()+r.LLM_ECHO_WAIT;for(;Date.now()<a;){await T(50);let i=this._outputBuffers[t]||"";if(r._stripAnsi(i.slice(e)).includes(s))return!0;if(this._disposed)return!1}for(let i=0;i<s.length;i++)d.write("\x7F");await T(300)}return!1}async _executeSteps(t,s,d){this._stepGeneration[t]||(this._stepGeneration[t]=0);let n=++this._stepGeneration[t],e=!1;for(let a=0;a<s.length;a++){if(this._disposed||this._stepGeneration[t]!==n)return;let i=s[a];if(i.type==="timeout")await T(i.ms);else if(i.type==="command"){if(a>0&&(e?await this._waitForLlmPrompt(t):s[a-1].type==="command"&&await T(re)),this._disposed||this._stepGeneration[t]!==n)return;let l=e?H:this._enterSeq(t);e?(await this._typeWithRetry(t,i.input),this._terminals[t]?.pty.write(l)):this._terminals[t]?.pty.write(i.input+l),j(i.input)&&(e=!0),i.input.trim()==="exit"&&(e=!1),this._insideLlm[t]=e}}}restartCell(t){this._restartTerminal(t)}restartAllCells(){for(let t of this._terminals)this._restartTerminal(t.id)}dispose(){this._disposed=!0,r.currentPanel=void 0,this._configListener?.dispose(),this._context.globalState.update("lastGrid",void 0);for(let t of this._terminals)try{t.pty.kill()}catch{}this._terminals=[],this._panel.dispose()}_buildCustomFontCss(){let t=this._context.globalState.get("customFonts",[]),s="";for(let d of t){let n=this._readFontBase64(d.path);if(!n)continue;let e=G.extname(d.path).toLowerCase(),a=J[e]||"truetype";s+=`@font-face { font-family: '${d.name}'; src: url(data:font/${e.slice(1)};base64,${n}) format('${a}'); font-display: swap; }
`}return s}_getHtml(){let t=this._panel.webview,s=t.asWebviewUri(u.Uri.joinPath(this._context.extensionUri,"media","gridTerminal.js")),d=t.asWebviewUri(u.Uri.joinPath(this._context.extensionUri,"media","xterm.css")),n=ue(),e=this._buildCustomFontCss();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none';
                 style-src ${t.cspSource} 'unsafe-inline';
                 script-src 'nonce-${n}';
                 font-src ${t.cspSource} data:;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${d}">
  <style>
    ${e}
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
    <div class="ctx-menu-item" data-action="copy">${u.l10n.t("Copy")}</div>
    <div class="ctx-menu-item" data-action="paste">${u.l10n.t("Paste")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="clear">${u.l10n.t("Clear")}</div>
    <div class="ctx-menu-item" data-action="restart">${u.l10n.t("Restart")}</div>
    <div class="ctx-menu-item" data-action="kill">${u.l10n.t("Kill")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="rename">${u.l10n.t("Rename")}</div>
  </div>
  <script nonce="${n}">
    var __GRID_ROWS = ${this._rows};
    var __GRID_COLS = ${this._cols};
    var __GRID_ZOOM = ${u.workspace.getConfiguration("terminalGrid").get("zoomPercent",100)};
    var __GRID_FONT_FAMILY = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("fontFamily",""))};
    var __GRID_BG_COLOR = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("backgroundColor",""))};
    var __GRID_FG_COLOR = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("foregroundColor",""))};
    var __GRID_THEME = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("colorTheme",""))};
    var __GRID_THEME_COLORS = ${JSON.stringify(L(u.workspace.getConfiguration("terminalGrid").get("colorTheme","")))};
  </script>
  <script nonce="${n}" src="${s}"></script>
</body>
</html>`}};function ue(){let r="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<32;s++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}var ge=[".ttf",".otf",".woff",".woff2"];function me(){try{return require("node-pty"),!0}catch{return!1}}var D=class{constructor(t){this._mcpPort=0;this._context=t}static{this.viewType="terminalGrid.sidebarView"}setMcpPort(t){this._mcpPort=t,this._view?.webview.postMessage({type:"mcpPort",port:t})}resolveWebviewView(t,s,d){this._view=t,t.webview.options={enableScripts:!0,localResourceRoots:[this._context.extensionUri]},t.webview.html=this._getHtml(),t.webview.onDidReceiveMessage(async n=>{switch(n.type){case"openGrid":await o.commands.executeCommand("terminalGrid.openCustomGrid",n.rows,n.cols),this.sendConfig();break;case"reload":await o.commands.executeCommand("workbench.action.reloadWindow");break;case"setConfig":{let e=o.workspace.getConfiguration("terminalGrid");n.key&&n.value!==void 0&&await e.update(n.key,n.value,o.ConfigurationTarget.Global),n.key==="shellType"&&m.currentPanel&&m.currentPanel.restartAllCells();break}case"getConfig":{this.sendConfig();break}case"browseFont":{let e=await o.window.showOpenDialog({canSelectMany:!1,filters:{"Font Files":["ttf","otf","woff","woff2"]},title:o.l10n.t("Select Font File")});if(!e||e.length===0)break;let a=e[0].fsPath,i=B.extname(a).toLowerCase();if(!ge.includes(i)){o.window.showWarningMessage(o.l10n.t("Unsupported font format. Use .ttf, .otf, .woff, or .woff2"));break}try{M.accessSync(a,M.constants.R_OK)}catch{o.window.showErrorMessage(o.l10n.t("Cannot read font file."));break}let l=B.basename(a,i),c=this._context.globalState.get("customFonts",[]);c.some(g=>g.path===a)||(c.push({name:l,path:a}),await this._context.globalState.update("customFonts",c)),this.sendConfig(),m.currentPanel&&m.currentPanel.loadCustomFonts([{name:l,path:a}]);break}case"removeFont":{let a=this._context.globalState.get("customFonts",[]).filter(i=>i.name!==n.name);await this._context.globalState.update("customFonts",a),this.sendConfig();break}case"addStartupCommand":{let e=this._context.globalState.get("startupCommands",[]);e.push({command:n.command,count:1}),await this._context.globalState.update("startupCommands",e),this.sendConfig();break}case"removeStartupCommand":{let e=this._context.globalState.get("startupCommands",[]);e.splice(n.index,1),await this._context.globalState.update("startupCommands",e),this.sendConfig();break}case"updateCommandCount":{let e=this._context.globalState.get("startupCommands",[]);e[n.index]&&(e[n.index].count=Math.max(1,n.count),await this._context.globalState.update("startupCommands",e)),this.sendConfig();break}case"addStep":{if(n.target==="all"){let e=this._context.globalState.get("defaultSteps",[]);e.push(n.step),await this._context.globalState.update("defaultSteps",e);let a=e.find(i=>i.type==="command");await this._context.globalState.update("defaultCommand",a?.input||"")}else{let e=this._context.globalState.get("cellOverrides",{}),a=n.target;e[a]||(e[a]={}),Array.isArray(e[a].startupSteps)||(e[a].startupSteps=[]),e[a].startupSteps.push(n.step);let i=e[a].startupSteps.find(l=>l.type==="command");e[a].startupCommand=i?.input||"",await this._context.globalState.update("cellOverrides",e)}this.sendConfig();break}case"removeStep":{if(n.target==="all"){let e=this._context.globalState.get("defaultSteps",[]);e.splice(n.index,1),await this._context.globalState.update("defaultSteps",e);let a=e.find(i=>i.type==="command");await this._context.globalState.update("defaultCommand",a?.input||"")}else{let e=this._context.globalState.get("cellOverrides",{}),a=n.target;if(Array.isArray(e[a]?.startupSteps)){e[a].startupSteps.splice(n.index,1);let i=e[a].startupSteps.find(l=>l.type==="command");e[a].startupCommand=i?.input||"",await this._context.globalState.update("cellOverrides",e)}}this.sendConfig();break}case"reorderSteps":{if(n.target==="all"){await this._context.globalState.update("defaultSteps",n.steps);let e=n.steps.find(a=>a.type==="command");await this._context.globalState.update("defaultCommand",e?.input||"")}else{let e=this._context.globalState.get("cellOverrides",{}),a=n.target;e[a]||(e[a]={}),e[a].startupSteps=n.steps;let i=n.steps.find(l=>l.type==="command");e[a].startupCommand=i?.input||"",await this._context.globalState.update("cellOverrides",e)}this.sendConfig();break}case"updateStep":{if(n.target==="all"){let e=this._context.globalState.get("defaultSteps",[]);n.index>=0&&n.index<e.length&&(e[n.index]=n.step,await this._context.globalState.update("defaultSteps",e))}else{let e=this._context.globalState.get("cellOverrides",{}),a=n.target,i=e[a]?.startupSteps||[];n.index>=0&&n.index<i.length&&(i[n.index]=n.step,e[a]||(e[a]={}),e[a].startupSteps=i,await this._context.globalState.update("cellOverrides",e))}this.sendConfig();break}case"addProject":{let e=this._context.globalState.get("projects",[]);e.some(a=>a.path===n.path)||(e.push({name:n.name,path:n.path}),await this._context.globalState.update("projects",e)),this.sendConfig();break}case"removeProject":{let e=this._context.globalState.get("projects",[]);e.splice(n.index,1),await this._context.globalState.update("projects",e),this.sendConfig();break}case"openProject":{let e=o.Uri.file(n.path);await o.commands.executeCommand("vscode.openFolder",e,{forceNewWindow:!!n.newWindow});break}case"addCurrentProject":{let e=o.workspace.workspaceFolders?.[0];if(!e){o.window.showWarningMessage(o.l10n.t("No workspace folder open."));break}let a=this._context.globalState.get("projects",[]),i=e.uri.fsPath;a.some(l=>l.path===i)||(a.push({name:e.name,path:i}),await this._context.globalState.update("projects",a)),this.sendConfig();break}case"browseProject":{let e=await o.window.showOpenDialog({canSelectFiles:!1,canSelectFolders:!0,canSelectMany:!1,title:o.l10n.t("Select Project Folder")});if(!e||e.length===0)break;let a=e[0].fsPath,i=B.basename(a),l=this._context.globalState.get("projects",[]);l.some(c=>c.path===a)||(l.push({name:i,path:a}),await this._context.globalState.update("projects",l)),this.sendConfig();break}case"savePreset":{await this._savePreset(n.name),this.sendConfig();break}case"loadPreset":{let a=this._context.globalState.get("presets",[]).find(l=>l.name===n.name);if(!a)break;let i=o.workspace.getConfiguration("terminalGrid");if(await i.update("defaultRows",a.rows,o.ConfigurationTarget.Global),await i.update("defaultCols",a.cols,o.ConfigurationTarget.Global),await i.update("zoomPercent",a.zoomPercent,o.ConfigurationTarget.Global),await i.update("fontFamily",a.fontFamily,o.ConfigurationTarget.Global),await i.update("backgroundColor",a.bgColor,o.ConfigurationTarget.Global),await i.update("foregroundColor",a.fgColor,o.ConfigurationTarget.Global),await i.update("colorTheme",a.colorTheme||"",o.ConfigurationTarget.Global),await i.update("shellType",a.shellType||"",o.ConfigurationTarget.Global),await this._context.globalState.update("startupCommands",a.startupCommands||[]),await this._context.globalState.update("cellLabels",a.cellLabels||[]),await this._context.globalState.update("defaultCommand",a.defaultCommand||""),a.defaultSteps?await this._context.globalState.update("defaultSteps",a.defaultSteps):a.defaultCommand?await this._context.globalState.update("defaultSteps",[{type:"command",input:a.defaultCommand}]):await this._context.globalState.update("defaultSteps",[]),a.cellStepsOverrides){let l=this._context.globalState.get("cellOverrides",{});for(let[c,g]of Object.entries(a.cellStepsOverrides))l[Number(c)]||(l[Number(c)]={}),Array.isArray(g.startupSteps)&&(l[Number(c)].startupSteps=g.startupSteps);await this._context.globalState.update("cellOverrides",l)}m.createOrShow(this._context,a.rows,a.cols),this.sendConfig();break}case"deletePreset":{let a=this._context.globalState.get("presets",[]).filter(l=>l.name!==n.name);await this._context.globalState.update("presets",a);let i=this._context.globalState.get("projectPresets",{});for(let l of Object.keys(i))i[l]===n.name&&delete i[l];await this._context.globalState.update("projectPresets",i),this.sendConfig();break}case"linkPreset":{let e=this._context.globalState.get("projectPresets",{});n.presetName?e[n.projectPath]=n.presetName:delete e[n.projectPath],await this._context.globalState.update("projectPresets",e),this.sendConfig();break}case"broadcast":{m.currentPanel?m.currentPanel.broadcastInput(n.text):o.window.showWarningMessage(o.l10n.t("No terminal grid is open."));break}case"broadcastToCell":{if(m.currentPanel)for(let e of n.cellIds)m.currentPanel.sendInputToCell(e,n.text);else o.window.showWarningMessage(o.l10n.t("No terminal grid is open."));break}case"setCellConfig":{let e=this._context.globalState.get("cellOverrides",{});if(e[n.cellId]={bgColor:n.bgColor||"",fgColor:n.fgColor||"",fontFamily:n.fontFamily||"",themeName:n.themeName||"",shellType:e[n.cellId]?.shellType||""},await this._context.globalState.update("cellOverrides",e),m.currentPanel){let a=n.themeName?L(n.themeName):null;m.currentPanel.sendCellConfig(n.cellId,n.bgColor||"",n.fgColor||"",n.fontFamily||"",n.themeName||"",a)}break}case"setShellForCell":{let e=this._context.globalState.get("cellOverrides",{});e[n.cellId]||(e[n.cellId]={}),e[n.cellId].shellType=n.shellType||"",await this._context.globalState.update("cellOverrides",e),m.currentPanel&&m.currentPanel.restartCell(n.cellId);break}case"setDefaultCommand":{let e=n.command||"";await this._context.globalState.update("defaultCommand",e),await this._context.globalState.update("defaultSteps",e?[{type:"command",input:e}]:[]),this.sendConfig();break}case"setCellCommand":{let e=this._context.globalState.get("cellOverrides",{});e[n.cellId]||(e[n.cellId]={});let a=n.command||"";e[n.cellId].startupCommand=a,e[n.cellId].startupSteps=a?[{type:"command",input:a}]:[],await this._context.globalState.update("cellOverrides",e),this.sendConfig();break}case"clearAllCellOverrides":{await this._context.globalState.update("cellOverrides",{}),m.currentPanel&&m.currentPanel.clearCellOverrides();break}case"clearAllCellShells":{let e=this._context.globalState.get("cellOverrides",{});for(let a of Object.keys(e))e[parseInt(a)]&&(e[parseInt(a)].shellType="");await this._context.globalState.update("cellOverrides",e);break}case"saveSectionStates":{await this._context.globalState.update("sectionStates",n.states);break}case"installNodePty":{try{await o.window.withProgress({location:o.ProgressLocation.Notification,title:o.l10n.t("Installing node-pty\u2026"),cancellable:!1},()=>new Promise((i,l)=>{q.exec("npm install node-pty",{cwd:this._context.extensionPath},c=>{c?l(c):i()})})),this._view?.webview.postMessage({type:"ptyInstallResult",success:!0});let e=o.l10n.t("Reload Window");await o.window.showInformationMessage(o.l10n.t("node-pty installed successfully. Reload window to activate."),e)===e&&o.commands.executeCommand("workbench.action.reloadWindow")}catch(e){let a=e instanceof Error?e.message:String(e);o.window.showErrorMessage(o.l10n.t("node-pty install failed: {0}",a)),this._view?.webview.postMessage({type:"ptyInstallResult",success:!1})}break}}}),o.workspace.onDidChangeConfiguration(n=>{n.affectsConfiguration("terminalGrid")&&this.sendConfig()})}async _savePreset(t){let s=o.workspace.getConfiguration("terminalGrid"),d={name:t,rows:s.get("defaultRows",2),cols:s.get("defaultCols",3),startupCommands:this._context.globalState.get("startupCommands",[]),cellLabels:this._context.globalState.get("cellLabels",[]),zoomPercent:s.get("zoomPercent",100),fontFamily:s.get("fontFamily",""),bgColor:s.get("backgroundColor",""),fgColor:s.get("foregroundColor",""),colorTheme:s.get("colorTheme",""),shellType:s.get("shellType",""),defaultCommand:this._context.globalState.get("defaultCommand",""),defaultSteps:this._context.globalState.get("defaultSteps",[]),cellStepsOverrides:this._context.globalState.get("cellOverrides",{})},n=this._context.globalState.get("presets",[]),e=n.findIndex(a=>a.name===t);e>=0?n[e]=d:n.push(d),await this._context.globalState.update("presets",n)}async _migrateSteps(){let t=!1,s=this._context.globalState.get("defaultSteps",[]),d=this._context.globalState.get("defaultCommand","");d&&s.length===0?(await this._context.globalState.update("defaultSteps",[{type:"command",input:d}]),await this._context.globalState.update("defaultCommand",""),t=!0):d&&s.length>0&&(await this._context.globalState.update("defaultCommand",""),t=!0);let n=this._context.globalState.get("cellOverrides",{});for(let a of Object.keys(n)){let i=n[Number(a)];if(!i)continue;let l=i.startupCommand,c=i.startupSteps;l&&(!c||c.length===0)?(i.startupSteps=[{type:"command",input:l}],delete i.startupCommand,t=!0):l&&c&&c.length>0&&(delete i.startupCommand,t=!0)}this._context.globalState.get("startupCommands",[]).length>0&&(await this._context.globalState.update("startupCommands",[]),t=!0),t&&await this._context.globalState.update("cellOverrides",n)}sendConfig(){if(!this._view)return;this._migrateSteps();let t=o.workspace.getConfiguration("terminalGrid"),s=this._context.globalState.get("customFonts",[]),d=this._context.globalState.get("startupCommands",[]),n=this._context.globalState.get("projects",[]),e=this._context.globalState.get("presets",[]),a=this._context.globalState.get("projectPresets",{}),i=this._context.globalState.get("cellLabels",[]),l=this._context.globalState.get("cellOverrides",{}),c=this._context.globalState.get("defaultSteps",[]),g=this._context.globalState.get("sectionStates",{}),b=o.workspace.workspaceFolders?.[0]?.uri.fsPath||"",h=m.currentPanel,w=m.getAvailableShells();this._view.webview.postMessage({type:"configValues",zoom:t.get("zoomPercent",100),fontFamily:t.get("fontFamily",""),bgColor:t.get("backgroundColor",""),fgColor:t.get("foregroundColor",""),colorTheme:t.get("colorTheme",""),shellType:t.get("shellType",""),defaultCommand:this._context.globalState.get("defaultCommand",""),themeNames:$,availableShells:w.map(f=>({name:f.name,path:f.path})),customFonts:s.map(f=>f.name),startupCommands:d,projects:n,presets:e,projectPresets:a,cellLabels:i,cellOverrides:l,defaultSteps:c,sectionStates:g,workspacePath:b,gridRows:h?.getRows()??0,gridCols:h?.getCols()??0})}_getHtml(){let t=fe();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none'; style-src 'unsafe-inline'; script-src 'nonce-${t}';">
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
    /* \u2500\u2500 Command summary \u2500\u2500 */
    .cmd-summary-divider {
      height: 1px; background: rgba(255,255,255,.06); margin: 10px 0 8px;
    }
    .cmd-summary-list { display: flex; flex-direction: column; gap: 3px; }
    .cmd-summary-item {
      display: flex; align-items: center; gap: 6px;
      padding: 4px 8px;
      background: rgba(255,255,255,.02);
      border: 1px solid rgba(255,255,255,.04);
      border-radius: 5px; font-size: 10px;
    }
    .cmd-summary-label {
      opacity: .45; font-weight: 600; min-width: 28px; flex-shrink: 0;
      font-variant-numeric: tabular-nums;
    }
    .cmd-summary-text {
      flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: monospace; opacity: .75; font-size: 10px;
    }
    .cmd-summary-del {
      width: 16px; height: 16px; border: none; border-radius: 3px;
      background: transparent; color: rgba(255,255,255,.25);
      font-size: 12px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .1s;
    }
    .cmd-summary-del:hover { background: rgba(255,80,80,.2); color: #f55; }
    /* \u2500\u2500 Step groups (sequential startup commands) \u2500\u2500 */
    .cmd-step-group { margin-bottom: 6px; }
    .cmd-step-group-header {
      font-size: 9px; font-weight: 700; text-transform: uppercase;
      letter-spacing: .5px; opacity: .4; margin-bottom: 4px; padding: 0 4px;
      color: var(--vscode-textLink-foreground, #3794ff);
    }
    .cmd-step-list { display: flex; flex-direction: column; gap: 2px; min-height: 4px; }
    .cmd-step-item {
      display: flex; align-items: center; gap: 5px;
      padding: 4px 6px; background: rgba(255,255,255,.025);
      border: 1px solid rgba(255,255,255,.05); border-radius: 5px;
      font-size: 10px; cursor: grab; transition: background .15s, border-color .15s, opacity .15s;
      user-select: none;
    }
    .cmd-step-item:hover { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.10); }
    .cmd-step-item.dragging { opacity: .4; border-color: var(--vscode-focusBorder, rgba(0,127,212,.6)); }
    .cmd-step-handle { cursor: grab; opacity: .3; font-size: 14px; line-height: 1; flex-shrink: 0; width: 14px; text-align: center; }
    .cmd-step-handle:hover { opacity: .6; }
    .cmd-step-num {
      opacity: .3; font-size: 9px; font-weight: 700; min-width: 14px;
      text-align: center; flex-shrink: 0; font-variant-numeric: tabular-nums;
    }
    .cmd-step-icon { opacity: .5; font-size: 9px; margin-right: 2px; }
    .cmd-step-text {
      flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
      font-family: monospace; opacity: .75; font-size: 10px;
    }
    .cmd-step-del {
      width: 16px; height: 16px; border: none; border-radius: 3px;
      background: transparent; color: rgba(255,255,255,.25);
      font-size: 12px; line-height: 1; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; transition: all .1s;
    }
    .cmd-step-del:hover { background: rgba(255,80,80,.2); color: #f55; }
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
    ${me()?"":`
    <div class="pty-banner" id="ptyBanner">
      <span class="pty-banner-icon">\u26A0</span>
      <span class="pty-banner-text">${o.l10n.t("node-pty is required to use Terminal Grid.")}</span>
      <button class="pty-banner-btn" id="ptyInstallBtn">${o.l10n.t("Install")}</button>
    </div>
    `}
    <!-- Projects -->
    <div class="glass-card" data-section="projects">
      <div class="section-header collapsible">
        <div class="section-label">${o.l10n.t("Projects")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${o.l10n.t("Register projects and click to switch folders. Ctrl+Click to open in a new window. If a preset is linked, it will be auto-applied on switch.")}
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
            <span class="btn-icon" style="font-size: 12px;">+</span> ${o.l10n.t("Add Current Folder")}
          </button>
          <button class="glass-btn" id="browseProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">&#128193;</span> ${o.l10n.t("Browse Folder")}
          </button>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="gridSize">
      <div class="section-header collapsible">
        <div class="section-label">${o.l10n.t("Select Grid Size")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${o.l10n.t("Hover to select the desired rows\xD7cols size. Supports up to 4\xD75 (20 cells). Grid opens as an editor tab, each cell is an independent terminal.")}
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
          <span class="btn-icon">&#9654;</span> ${o.l10n.t("Open Grid")}
        </button>
      </div>
    </div>

    <div class="glass-card" data-section="settings">
      <div class="section-header collapsible">
        <div class="section-label">${o.l10n.t("Terminal Settings")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${o.l10n.t("Zoom: Global font size (50\u2013300%). Font/Color: Use tabs for global or per-cell settings. Changes in All tab apply to all cells. Set global first, then customize individual cells. Individual cells can be zoomed separately with Ctrl+Wheel.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="setting-row">
          <span class="setting-label">${o.l10n.t("Zoom")}</span>
          <div class="stepper">
            <button class="stepper-btn" id="zoomDown">\u2212</button>
            <span class="stepper-val" id="zoomVal">100%</span>
            <button class="stepper-btn" id="zoomUp">+</button>
          </div>
        </div>

        <div id="settingsTabs" class="settings-tabs hidden"></div>

        <div class="setting-row">
          <span class="setting-label">${o.l10n.t("Theme")}</span>
          <div class="font-picker" id="themePicker">
            <div class="font-display" id="themeDisplay">
              <span class="font-display-text" id="themeDisplayText">${o.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="themeDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${o.l10n.t("Font")}</span>
          <div class="font-picker" id="fontPicker">
            <div class="font-display" id="fontDisplay">
              <span class="font-display-text" id="fontDisplayText">${o.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="fontDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${o.l10n.t("Back Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="bgSwatch">
              <div class="color-swatch-fill" id="bgSwatchFill"></div>
              <input type="color" id="bgColorInput" value="#1e1e1e">
            </div>
            <span class="color-val" id="bgVal">${o.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="bgReset" title="${o.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${o.l10n.t("Font Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="fgSwatch">
              <div class="color-swatch-fill" id="fgSwatchFill"></div>
              <input type="color" id="fgColorInput" value="#cccccc">
            </div>
            <span class="color-val" id="fgVal">${o.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="fgReset" title="${o.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

      </div>
    </div>

    <!-- Startup Commands -->
    <div class="glass-card" data-section="startup">
      <div class="section-header collapsible">
        <div class="section-label">${o.l10n.t("Startup Commands")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${o.l10n.t("Set shell type and startup command per cell. Use All tab for global defaults, or individual tabs for per-cell overrides.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="cmdTabs" class="settings-tabs hidden"></div>
        <div class="setting-row">
          <span class="setting-label">${o.l10n.t("Shell")}</span>
          <div class="font-picker" id="shellPicker">
            <div class="font-display" id="shellDisplay">
              <span class="font-display-text" id="shellDisplayText">${o.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="shellDropdown"></div>
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${o.l10n.t("Command")}</span>
          <select class="glass-select" id="cmdPreset" style="flex:1;min-width:0;">
            <option value="">${o.l10n.t("Select command\u2026")}</option>
            <option value="claude">claude</option>
            <option value="codex">codex</option>
            <option value="claude --dangerously-skip-permissions">claude --dangerously-skip-permissions</option>
            <option value="codex -s danger-full-access -a never">codex -s danger-full-access -a never</option>
            <option value="npm run dev">npm run dev</option>
            <option value="npm start">npm start</option>
            <option value="npm test">npm test</option>
            <option value="python">python</option>
            <option value="node">node</option>
            <option value="docker compose up">docker compose up</option>
            <option value="ssh">ssh</option>
            <option value="htop">htop</option>
            <option value="/resume">/resume</option>
            <option value="/compact">/compact</option>
            <option value="yes">yes</option>
            <option value="exit">exit</option>
            <option value="__enter__">Enter (\u21B5)</option>
            <option value="__custom__">${o.l10n.t("Custom command\u2026")}</option>
            <option value="__timeout__">${o.l10n.t("Timeout (ms)\u2026")}</option>
          </select>
        </div>
        <div class="cmd-add-row" id="cmdCustomRow" style="display:none;">
          <input class="glass-input" id="cmdCustom" placeholder="${o.l10n.t("Custom command\u2026")}" style="flex:1;min-width:0;" />
          <button class="stepper-btn" id="cmdApplyBtn" title="${o.l10n.t("Apply")}">&#10003;</button>
        </div>
        <div class="cmd-add-row" id="cmdTimeoutRow" style="display:none;">
          <input class="glass-input" type="number" id="cmdTimeoutMs" placeholder="${o.l10n.t("Milliseconds (e.g. 1500)")}" min="100" step="100" style="flex:1;min-width:0;" />
          <button class="stepper-btn" id="cmdTimeoutApplyBtn" title="${o.l10n.t("Apply")}">&#10003;</button>
        </div>
        <div class="cmd-summary-divider"></div>
        <div id="cmdSummaryList" class="cmd-summary-list"></div>
      </div>
    </div>

    <!-- Presets -->
    <div class="glass-card" data-section="presets">
      <div class="section-header collapsible">
        <div class="section-label">${o.l10n.t("Presets")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${o.l10n.t("Save and load current grid settings (size, zoom, font, color, commands, cell labels) as presets. Use Link to project for per-project auto-apply.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-add-row">
          <input class="glass-input" id="presetNameInput" placeholder="${o.l10n.t("Preset name\u2026")}" style="flex: 1;" />
        </div>
        <div class="cmd-add-row" style="margin-top: 4px;">
          <select class="glass-select" id="presetSelect" style="flex: 1;">
            <option value="">${o.l10n.t("Select preset\u2026")}</option>
          </select>
        </div>
        <div class="btn-group" style="gap: 6px; margin-top: 8px;">
          <div style="display: flex; gap: 6px;">
            <button class="glass-btn" id="presetSaveBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${o.l10n.t("Save")}</button>
            <button class="glass-btn primary" id="presetLoadBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${o.l10n.t("Load")}</button>
            <button class="glass-btn" id="presetDeleteBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${o.l10n.t("Delete")}</button>
          </div>
          <div id="presetLinkRow" style="display: flex; align-items: center; gap: 6px; font-size: 11px; opacity: .7; margin-top: 4px;">
            <input type="checkbox" id="presetLinkCheck" style="margin: 0;" />
            <label id="presetLinkLabel" for="presetLinkCheck" style="cursor: pointer;">${o.l10n.t("Link to current project")}</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Broadcast Input -->
    <div class="glass-card" data-section="broadcast">
      <div class="section-header collapsible">
        <div class="section-label">${o.l10n.t("Broadcast Input")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${o.l10n.t("Send text to selected terminals. Check All to send to all cells, uncheck for individual selection.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="broadcastTargets" class="broadcast-targets hidden"></div>
        <div class="cmd-add-row" style="flex-direction: column; gap: 4px;">
          <textarea class="glass-input" id="broadcastInput" placeholder="${o.l10n.t("Type command\u2026")}" rows="3" style="width: 100%; resize: vertical; font-family: var(--vscode-editor-fontFamily, monospace); font-size: 12px; line-height: 1.4;"></textarea>
          <div style="display: flex; justify-content: flex-end;">
            <button class="stepper-btn" id="broadcastSendBtn" title="${o.l10n.t("Send")}" style="width: 50px;">${o.l10n.t("Send")}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="actions">
      <div class="section-header collapsible">
        <div class="section-label">${o.l10n.t("Actions")}</div>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="btn-group">
          <button class="glass-btn" id="reloadBtn">
            <span class="btn-icon">&#8635;</span> ${o.l10n.t("Reload Window")}
          </button>
        </div>
      </div>
    </div>

    <div class="hint">
      ${o.l10n.t(`Grid opens as an editor tab.
Ctrl+Wheel to zoom individual cells.`).replace(`
`,"<br>")}
    </div>
  </div>

  <script nonce="${t}">
    var __i18n = ${JSON.stringify({installing:o.l10n.t("Installing\u2026"),ideDefault:o.l10n.t("IDE Default"),remove:o.l10n.t("Remove"),addFontFile:o.l10n.t("Add font file\u2026"),all:o.l10n.t("All"),noStartupCommands:o.l10n.t("No startup commands configured"),noProjects:o.l10n.t("No projects registered"),linkedPrefix:o.l10n.t("Linked: {0}"),linkToProject:o.l10n.t("Link to current project"),selectPreset:o.l10n.t("Select preset\u2026"),reload:o.l10n.t("Reload"),retry:o.l10n.t("Retry"),ptyInstalled:o.l10n.t("node-pty installed successfully!"),ptyInstalledHint:o.l10n.t("Reload the window to activate."),theme:o.l10n.t("Theme"),shellAuto:o.l10n.t("IDE Default"),shell:o.l10n.t("Shell")})};
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
      toggleShellDropdown(false); // close shell dropdown
      buildThemeDropdown();
      toggleThemeDropdown();
    });

    // \u2500\u2500 Shell dropdown \u2500\u2500
    var shellDisplay = document.getElementById('shellDisplay');
    var shellDisplayText = document.getElementById('shellDisplayText');
    var shellDropdownEl = document.getElementById('shellDropdown');
    var shellDropdownOpen = false;
    var curShellType = '';
    var availableShells = [{ name: __i18n.shellAuto, path: '' }];

    function getShellDisplayName(val) {
      if (!val) return __i18n.shellAuto;
      var lv = val.toLowerCase();
      for (var i = 0; i < availableShells.length; i++) {
        if (availableShells[i].path.toLowerCase() === lv) return availableShells[i].name;
      }
      // Match by filename only (e.g. "cmd.exe" matches "C:WindowsSystem32cmd.exe")
      var base = lv.replace(/^.*[\\/\\\\]/, '');
      for (var i = 0; i < availableShells.length; i++) {
        var sp = availableShells[i].path.toLowerCase().replace(/^.*[\\/\\\\]/, '');
        if (sp === base) return availableShells[i].name;
      }
      return val;
    }

    function toggleShellDropdown(show) {
      shellDropdownOpen = typeof show === 'boolean' ? show : !shellDropdownOpen;
      shellDropdownEl.classList.toggle('show', shellDropdownOpen);
      shellDisplay.classList.toggle('open', shellDropdownOpen);
    }

    function selectShell(path) {
      if (activeCmdTab === 'all') {
        curShellType = path;
        shellDisplayText.textContent = getShellDisplayName(path);
        toggleShellDropdown(false);
        vscode.postMessage({ type: 'setConfig', key: 'shellType', value: path });
        // Clear all per-cell shell overrides
        for (var k in cellOverrides) {
          if (cellOverrides[k]) cellOverrides[k].shellType = '';
        }
        vscode.postMessage({ type: 'clearAllCellShells' });
        renderCmdSummary();
      } else {
        var cid = parseInt(activeCmdTab, 10);
        if (!cellOverrides[cid]) cellOverrides[cid] = { bgColor: '', fgColor: '', fontFamily: '', themeName: '', shellType: '' };
        cellOverrides[cid].shellType = path;
        shellDisplayText.textContent = getShellDisplayName(path);
        toggleShellDropdown(false);
        vscode.postMessage({ type: 'setShellForCell', cellId: cid, shellType: path });
        updateCmdTabIndicators();
      }
    }

    function buildShellDropdown() {
      shellDropdownEl.innerHTML = '';
      var currentShell = activeCmdTab === 'all' ? curShellType : (cellOverrides[parseInt(activeCmdTab, 10)] || {}).shellType || curShellType;
      for (var i = 0; i < availableShells.length; i++) {
        (function(shell) {
          var opt = document.createElement('div');
          opt.className = 'font-opt' + (currentShell === shell.path ? ' active' : '');
          var nameEl = document.createElement('span');
          nameEl.className = 'font-opt-name';
          nameEl.textContent = shell.name;
          opt.appendChild(nameEl);
          opt.addEventListener('click', function(e) { e.stopPropagation(); selectShell(shell.path); });
          shellDropdownEl.appendChild(opt);
        })(availableShells[i]);
      }
    }

    shellDisplay.addEventListener('click', function(e) {
      e.stopPropagation();
      toggleDropdown(false);
      toggleThemeDropdown(false);
      buildShellDropdown();
      toggleShellDropdown();
    });

    // \u2500\u2500 Per-cell sequential startup steps \u2500\u2500
    var cmdPresetEl = document.getElementById('cmdPreset');
    var cmdCustomRow = document.getElementById('cmdCustomRow');
    var cmdCustomInput = document.getElementById('cmdCustom');
    var cmdTimeoutRow = document.getElementById('cmdTimeoutRow');
    var cmdTimeoutMsInput = document.getElementById('cmdTimeoutMs');
    var defaultSteps = [];

    function getStepsForTarget(target) {
      if (target === 'all') return defaultSteps || [];
      var ov = cellOverrides[parseInt(String(target), 10)] || {};
      if (ov.startupSteps && ov.startupSteps.length > 0) return ov.startupSteps;
      if (ov.startupCommand) return [{ type: 'command', input: ov.startupCommand }];
      return [];
    }

    function addStep(step) {
      var target = activeCmdTab === 'all' ? 'all' : parseInt(activeCmdTab, 10);
      if (target === 'all') {
        defaultSteps.push(step);
      } else {
        if (!cellOverrides[target]) cellOverrides[target] = {};
        if (!cellOverrides[target].startupSteps) cellOverrides[target].startupSteps = [];
        cellOverrides[target].startupSteps.push(step);
      }
      vscode.postMessage({ type: 'addStep', target: target, step: step });
      updateCmdTabIndicators();
    }

    cmdPresetEl.addEventListener('change', function() {
      var val = this.value;
      if (val === '__custom__') {
        cmdCustomRow.style.display = 'flex';
        cmdTimeoutRow.style.display = 'none';
        cmdCustomInput.focus();
        this.value = '';
        return;
      }
      if (val === '__timeout__') {
        cmdTimeoutRow.style.display = 'flex';
        cmdCustomRow.style.display = 'none';
        cmdTimeoutMsInput.focus();
        this.value = '';
        return;
      }
      if (val === '__enter__') {
        cmdCustomRow.style.display = 'none';
        cmdTimeoutRow.style.display = 'none';
        addStep({ type: 'command', input: '' });
        this.value = '';
        return;
      }
      if (val) {
        cmdCustomRow.style.display = 'none';
        cmdTimeoutRow.style.display = 'none';
        addStep({ type: 'command', input: val });
        this.value = '';
      }
    });

    document.getElementById('cmdApplyBtn').addEventListener('click', function() {
      var val = cmdCustomInput.value.trim();
      if (val) {
        addStep({ type: 'command', input: val });
        cmdCustomInput.value = '';
        cmdCustomRow.style.display = 'none';
      }
    });

    cmdCustomInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('cmdApplyBtn').click();
      }
    });

    document.getElementById('cmdTimeoutApplyBtn').addEventListener('click', function() {
      var ms = parseInt(cmdTimeoutMsInput.value, 10);
      if (ms > 0) {
        addStep({ type: 'timeout', ms: ms });
        cmdTimeoutMsInput.value = '';
        cmdTimeoutRow.style.display = 'none';
      }
    });

    cmdTimeoutMsInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        document.getElementById('cmdTimeoutApplyBtn').click();
      }
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
      toggleShellDropdown(false); // close shell dropdown
      buildDropdown();
      toggleDropdown();
    });
    document.addEventListener('click', function() { toggleDropdown(false); toggleThemeDropdown(false); toggleShellDropdown(false); });

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

    function showCmdTabValues() {
      if (activeCmdTab === 'all') {
        shellDisplayText.textContent = getShellDisplayName(curShellType);
      } else {
        var cid = parseInt(activeCmdTab, 10);
        var ov = cellOverrides[cid] || {};
        shellDisplayText.textContent = getShellDisplayName(ov.shellType || curShellType);
      }
      cmdPresetEl.value = '';
      cmdCustomRow.style.display = 'none';
      cmdTimeoutRow.style.display = 'none';
      renderCmdSummary();
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

    // \u2500\u2500 Startup Commands tabs (independent) \u2500\u2500
    var cmdTabsEl = document.getElementById('cmdTabs');
    var activeCmdTab = 'all';

    function buildCmdTabs(total, labels) {
      var prevTab = activeCmdTab;
      cmdTabsEl.innerHTML = '';
      if (total <= 0) {
        cmdTabsEl.classList.add('hidden');
        activeCmdTab = 'all';
        return;
      }
      cmdTabsEl.classList.remove('hidden');
      // Check if previous tab still valid
      var validPrev = prevTab === 'all' || (parseInt(prevTab, 10) < total);
      var restoreTab = validPrev ? prevTab : 'all';
      var allBtn = document.createElement('button');
      allBtn.className = 'stab' + (restoreTab === 'all' ? ' active' : '');
      allBtn.dataset.tab = 'all';
      allBtn.textContent = __i18n.all;
      allBtn.addEventListener('click', function() { switchCmdTab('all'); });
      cmdTabsEl.appendChild(allBtn);
      for (var i = 0; i < total; i++) {
        (function(idx) {
          var btn = document.createElement('button');
          btn.className = 'stab' + (restoreTab === String(idx) ? ' active' : '');
          btn.dataset.tab = String(idx);
          btn.textContent = labels[idx] || String(idx + 1);
          btn.addEventListener('click', function() { switchCmdTab(String(idx)); });
          cmdTabsEl.appendChild(btn);
        })(i);
      }
      activeCmdTab = restoreTab;
      updateCmdTabIndicators();
    }

    function switchCmdTab(tab) {
      activeCmdTab = tab;
      var btns = cmdTabsEl.querySelectorAll('.stab');
      for (var i = 0; i < btns.length; i++) {
        btns[i].classList.toggle('active', btns[i].dataset.tab === tab);
      }
      showCmdTabValues();
    }

    function updateCmdTabIndicators() {
      var btns = cmdTabsEl.querySelectorAll('.stab');
      for (var b = 0; b < btns.length; b++) {
        var tab = btns[b].dataset.tab;
        if (tab === 'all') continue;
        var cid = parseInt(tab, 10);
        var ov = cellOverrides[cid] || {};
        var hasOv = ov.shellType || (ov.startupSteps && ov.startupSteps.length > 0) || ov.startupCommand;
        btns[b].classList.toggle('has-override', !!hasOv);
      }
      renderCmdSummary();
    }

    function getCellLabel(idx) {
      var btns = cmdTabsEl.querySelectorAll('.stab');
      for (var j = 0; j < btns.length; j++) {
        if (btns[j].dataset.tab === String(idx)) return btns[j].textContent;
      }
      return String(idx + 1);
    }

    function escapeStepHtml(str) {
      var d = document.createElement('div');
      d.textContent = str;
      return d.innerHTML;
    }

    function getDragAfterElement(container, y) {
      var elements = Array.prototype.slice.call(container.querySelectorAll('.cmd-step-item:not(.dragging)'));
      var closest = null;
      var closestOffset = Number.NEGATIVE_INFINITY;
      for (var i = 0; i < elements.length; i++) {
        var box = elements[i].getBoundingClientRect();
        var offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closestOffset) {
          closestOffset = offset;
          closest = elements[i];
        }
      }
      return closest;
    }

    function renderStepGroup(container, target, label, steps, shellInfo) {
      var group = document.createElement('div');
      group.className = 'cmd-step-group';

      var header = document.createElement('div');
      header.className = 'cmd-step-group-header';
      var headerText = label;
      if (shellInfo) headerText += ' \xB7 ' + shellInfo;
      header.textContent = headerText;
      group.appendChild(header);

      var stepList = document.createElement('div');
      stepList.className = 'cmd-step-list';
      stepList.dataset.target = String(target);

      for (var i = 0; i < steps.length; i++) {
        (function(step, idx) {
          var row = document.createElement('div');
          row.className = 'cmd-step-item';
          row.draggable = true;
          row.dataset.index = String(idx);

          var handle = document.createElement('span');
          handle.className = 'cmd-step-handle';
          handle.textContent = '\u2261';
          row.appendChild(handle);

          var num = document.createElement('span');
          num.className = 'cmd-step-num';
          num.textContent = String(idx + 1);
          row.appendChild(num);

          var txt = document.createElement('span');
          txt.className = 'cmd-step-text';
          if (step.type === 'timeout') {
            txt.innerHTML = '<span class="cmd-step-icon">\u23F1</span> ' + step.ms + 'ms';
            txt.title = 'Click to edit timeout';
            txt.style.cursor = 'pointer';
            (function(st, ix, tgt) {
              txt.addEventListener('click', function() {
                var cur = st.ms;
                var inp = document.createElement('input');
                inp.type = 'number';
                inp.min = '100';
                inp.step = '100';
                inp.value = String(cur);
                inp.style.cssText = 'width:70px;font-size:11px;padding:1px 4px;background:var(--vscode-input-background);color:var(--vscode-input-foreground);border:1px solid var(--vscode-input-border,#555);border-radius:3px;';
                txt.textContent = '';
                txt.appendChild(inp);
                inp.focus();
                inp.select();
                function commit() {
                  var v = parseInt(inp.value, 10);
                  if (!v || v < 0) v = cur;
                  st.ms = v;
                  txt.innerHTML = '<span class="cmd-step-icon">\u23F1</span> ' + v + 'ms';
                  vscode.postMessage({ type: 'updateStep', target: tgt, index: ix, step: { type: 'timeout', ms: v } });
                }
                inp.addEventListener('blur', commit);
                inp.addEventListener('keydown', function(ev) {
                  if (ev.key === 'Enter') { inp.blur(); }
                  if (ev.key === 'Escape') { inp.value = String(cur); inp.blur(); }
                });
              });
            })(step, idx, target);
          } else if (step.input === '' || step.input === undefined) {
            txt.innerHTML = '<span class="cmd-step-icon">\u21B5</span> Enter';
            txt.title = 'Enter';
          } else {
            txt.innerHTML = '<span class="cmd-step-icon">\u25B6</span> ' + escapeStepHtml(step.input);
            txt.title = step.input;
          }
          row.appendChild(txt);

          var del = document.createElement('button');
          del.className = 'cmd-step-del';
          del.textContent = '\xD7';
          del.addEventListener('click', function() {
            if (target === 'all') {
              defaultSteps.splice(idx, 1);
            } else {
              var ov = cellOverrides[target];
              if (ov && ov.startupSteps) ov.startupSteps.splice(idx, 1);
            }
            vscode.postMessage({ type: 'removeStep', target: target, index: idx });
            updateCmdTabIndicators();
          });
          row.appendChild(del);

          row.addEventListener('dragstart', function(e) {
            e.dataTransfer.setData('text/plain', JSON.stringify({ target: target, index: idx }));
            e.dataTransfer.effectAllowed = 'move';
            row.classList.add('dragging');
          });
          row.addEventListener('dragend', function() {
            row.classList.remove('dragging');
          });

          stepList.appendChild(row);
        })(steps[i], i);
      }

      // Drop zone
      stepList.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        var dragging = stepList.querySelector('.dragging');
        if (!dragging) return;
        var afterEl = getDragAfterElement(stepList, e.clientY);
        if (afterEl) {
          stepList.insertBefore(dragging, afterEl);
        } else {
          stepList.appendChild(dragging);
        }
      });

      stepList.addEventListener('drop', function(e) {
        e.preventDefault();
        var items = stepList.querySelectorAll('.cmd-step-item');
        var newSteps = [];
        for (var j = 0; j < items.length; j++) {
          var oldIdx = parseInt(items[j].dataset.index, 10);
          newSteps.push(steps[oldIdx]);
        }
        if (target === 'all') {
          defaultSteps = newSteps;
        } else {
          if (!cellOverrides[target]) cellOverrides[target] = {};
          cellOverrides[target].startupSteps = newSteps;
        }
        vscode.postMessage({ type: 'reorderSteps', target: target, steps: newSteps });
        updateCmdTabIndicators();
      });

      group.appendChild(stepList);
      container.appendChild(group);
    }

    function renderCmdSummary() {
      var list = document.getElementById('cmdSummaryList');
      list.innerHTML = '';

      // "All" group: shell info + default steps
      var allShell = curShellType ? getShellDisplayName(curShellType) : '';
      var allSteps = defaultSteps || [];
      if (allShell || allSteps.length > 0) {
        renderStepGroup(list, 'all', __i18n.all, allSteps, allShell);
      }

      // Per-cell groups
      var total = cmdTabsEl.querySelectorAll('.stab:not([data-tab="all"])').length;
      for (var i = 0; i < total; i++) {
        var ov = cellOverrides[i] || {};
        var cellShell = ov.shellType ? getShellDisplayName(ov.shellType) : '';
        var cellSteps = getStepsForTarget(i);
        if (cellShell || cellSteps.length > 0) {
          renderStepGroup(list, i, getCellLabel(i), cellSteps, cellShell);
        }
      }
    }

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
        curShellType = msg.shellType || '';
        themeNames = msg.themeNames || [''];
        availableShells = msg.availableShells || [{ name: __i18n.shellAuto, path: '' }];
        customFontNames = msg.customFonts || [];
        projects = msg.projects || [];
        presets = msg.presets || [];
        projectPresetsMap = msg.projectPresets || {};
        workspacePath = msg.workspacePath || '';
        cellOverrides = msg.cellOverrides || {};
        defaultSteps = msg.defaultSteps || [];
        updateSettingsUI();
        renderProjectList();
        renderPresetDropdown();
        var gridTotal = (msg.gridRows || 0) * (msg.gridCols || 0);
        buildBroadcastTargets(gridTotal, msg.cellLabels || []);
        buildSettingsTabs(gridTotal, msg.cellLabels || []);
        buildCmdTabs(gridTotal, msg.cellLabels || []);
        showCmdTabValues();
        applySectionStates(msg.sectionStates || {});
      }
    });

    vscode.postMessage({ type: 'getConfig' });
  </script>
</body>
</html>`}};function fe(){let r="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let s=0;s<32;s++)r+=t.charAt(Math.floor(Math.random()*t.length));return r}var Y=y(require("http"));var F=class{constructor(t){this._server=null;this._port=t}start(t=10){return new Promise((s,d)=>{this._server=this._createServer();let n=e=>{this._server.removeAllListeners("error"),this._server.on("error",a=>{a.code==="EADDRINUSE"&&e<t?(this._port++,n(e+1)):d(a)}),this._server.listen(this._port,"127.0.0.1",()=>{let a=this._server.address();this._port=a.port,s(this._port)})};n(0)})}_createServer(){return Y.createServer((t,s)=>{if(s.setHeader("Content-Type","application/json"),t.method==="OPTIONS"){s.writeHead(204),s.end();return}let d=new URL(t.url||"/",`http://127.0.0.1:${this._port}`);t.method==="GET"&&d.pathname==="/api/health"?(s.writeHead(200),s.end(JSON.stringify({status:"ok"}))):t.method==="GET"&&d.pathname==="/api/info"?this._handleInfo(s):t.method==="POST"&&d.pathname==="/api/send"?this._readBody(t).then(n=>this._handleSend(n,s)):t.method==="POST"&&d.pathname==="/api/read"?this._readBody(t).then(n=>this._handleRead(n,s)):t.method==="POST"&&d.pathname==="/api/broadcast"?this._readBody(t).then(n=>this._handleBroadcast(n,s)):(s.writeHead(404),s.end(JSON.stringify({error:"Not found"})))})}stop(){this._server?.close(),this._server=null}getPort(){return this._port}_handleInfo(t){let s=m.currentPanel;if(!s){t.writeHead(200),t.end(JSON.stringify({grid:null}));return}t.writeHead(200),t.end(JSON.stringify({grid:{rows:s.getRows(),cols:s.getCols(),cellCount:s.getCellCount(),cellLabels:s.getCellLabels()}}))}_handleSend(t,s){let d=m.currentPanel;if(!d){s.writeHead(200),s.end(JSON.stringify({success:!1,error:"No grid open"}));return}let n=typeof t.cellId=="number"?t.cellId:-1,e=typeof t.text=="string"?t.text:"",i=t.submit===!0?d.sendInputToCell(n,e):d.sendToCell(n,e);s.writeHead(200),s.end(JSON.stringify({success:i}))}_handleRead(t,s){let d=m.currentPanel;if(!d){s.writeHead(200),s.end(JSON.stringify({output:null,error:"No grid open"}));return}let n=typeof t.cellId=="number"?t.cellId:-1,e=typeof t.lines=="number"?t.lines:void 0,a=d.readCell(n,e);s.writeHead(200),s.end(JSON.stringify({output:a}))}_handleBroadcast(t,s){let d=m.currentPanel;if(!d){s.writeHead(200),s.end(JSON.stringify({success:!1,error:"No grid open"}));return}let n=typeof t.text=="string"?t.text:"",e=t.submit===!0,a=d.getCellCount();if(e)d.broadcastInput(n);else for(let i=0;i<a;i++)d.sendToCell(i,n);s.writeHead(200),s.end(JSON.stringify({success:!0,cellCount:a}))}_readBody(t){return new Promise(s=>{let d="";t.on("data",n=>{d+=n}),t.on("end",()=>{try{s(JSON.parse(d))}catch{s({})}})})}};function be(r,t){return{command:"node",args:[S.join(r,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(t)}}}function K(r,t,s){try{let d=S.dirname(r);k.existsSync(d)||k.mkdirSync(d,{recursive:!0});let n={};k.existsSync(r)&&(n=JSON.parse(k.readFileSync(r,"utf-8"))),(!n.mcpServers||typeof n.mcpServers!="object")&&(n.mcpServers={}),n.mcpServers["terminal-grid"]=be(t,s),k.writeFileSync(r,JSON.stringify(n,null,2),"utf-8")}catch{}}function X(r,t){K(S.join(O.homedir(),".claude.json"),r,t);let s=process.platform==="win32"?process.env.APPDATA||S.join(O.homedir(),"AppData","Roaming"):process.platform==="darwin"?S.join(O.homedir(),"Library","Application Support"):S.join(O.homedir(),".config");K(S.join(s,"Claude","claude_desktop_config.json"),r,t)}var N,I;function ve(r){let t=p.workspace.workspaceFolders?.[0]?.uri.fsPath;if(t){let a=r.globalState.get("projectPresets",{})[t];if(a){let l=r.globalState.get("presets",[]).find(c=>c.name===a);if(l){let c=p.workspace.getConfiguration("terminalGrid");if(c.update("defaultRows",l.rows,p.ConfigurationTarget.Global),c.update("defaultCols",l.cols,p.ConfigurationTarget.Global),c.update("zoomPercent",l.zoomPercent,p.ConfigurationTarget.Global),c.update("fontFamily",l.fontFamily,p.ConfigurationTarget.Global),c.update("backgroundColor",l.bgColor,p.ConfigurationTarget.Global),c.update("foregroundColor",l.fgColor,p.ConfigurationTarget.Global),c.update("colorTheme",l.colorTheme||"",p.ConfigurationTarget.Global),c.update("shellType",l.shellType||"",p.ConfigurationTarget.Global),r.globalState.update("startupCommands",l.startupCommands||[]),r.globalState.update("cellLabels",l.cellLabels||[]),r.globalState.update("defaultCommand",l.defaultCommand||""),l.defaultSteps?r.globalState.update("defaultSteps",l.defaultSteps):l.defaultCommand?r.globalState.update("defaultSteps",[{type:"command",input:l.defaultCommand}]):r.globalState.update("defaultSteps",[]),l.cellStepsOverrides){let g=r.globalState.get("cellOverrides",{});for(let[b,h]of Object.entries(l.cellStepsOverrides))g[Number(b)]||(g[Number(b)]={}),Array.isArray(h.startupSteps)&&(g[Number(b)].startupSteps=h.startupSteps);r.globalState.update("cellOverrides",g)}}}}let s=new D(r),d=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890);d>0&&(N=new F(d),N.start().then(e=>{I=p.window.createStatusBarItem(p.StatusBarAlignment.Right,50),I.text=`$(broadcast) TG :${e}`,I.tooltip=p.l10n.t("Terminal Grid API active on port {0}",e),I.command="terminalGrid.copyMcpConfig",I.show(),r.subscriptions.push(I),s.setMcpPort(e),X(r.extensionPath,e)}).catch(e=>{p.window.showWarningMessage(p.l10n.t("Terminal Grid API bridge failed to start: {0}",e.message))}));let n=p.lm;if(typeof n?.registerMcpServerDefinitionProvider=="function"){let e=new p.EventEmitter,a=d,i=n.registerMcpServerDefinitionProvider;r.subscriptions.push(i("terminalGrid",{onDidChangeMcpServerDefinitions:e.event,provideMcpServerDefinitions:async()=>{if(a<=0)return[];let l=p.McpStdioServerDefinition;return l?[new l("Terminal Grid","node",[S.join(r.extensionPath,"mcp-server.js")],{TERMINAL_GRID_PORT:String(a)},r.extension.packageJSON.version)]:[]}}),e),r.subscriptions.push(p.workspace.onDidChangeConfiguration(l=>{l.affectsConfiguration("terminalGrid.apiPort")&&(a=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890),e.fire())}))}r.subscriptions.push(p.workspace.onDidChangeConfiguration(e=>{if(e.affectsConfiguration("terminalGrid.apiPort")){let a=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890);a>0&&X(r.extensionPath,a)}})),r.subscriptions.push(p.window.registerWebviewViewProvider(D.viewType,s)),r.subscriptions.push(p.commands.registerCommand("terminalGrid._refreshSidebar",()=>{s.sendConfig()})),r.subscriptions.push(p.window.registerWebviewPanelSerializer("terminalGrid",{async deserializeWebviewPanel(e,a){let i=r.globalState.get("lastGrid");i?m.revive(e,r,i.rows,i.cols):e.dispose()}})),r.subscriptions.push(p.commands.registerCommand("terminalGrid.openGrid",()=>{let e=p.workspace.getConfiguration("terminalGrid"),a=e.get("defaultRows",2),i=e.get("defaultCols",3);m.createOrShow(r,a,i)}),p.commands.registerCommand("terminalGrid.openCustomGrid",(e,a)=>{m.createOrShow(r,e,a)}),p.commands.registerCommand("terminalGrid.open2x2",()=>m.createOrShow(r,2,2)),p.commands.registerCommand("terminalGrid.open2x3",()=>m.createOrShow(r,2,3)),p.commands.registerCommand("terminalGrid.open3x3",()=>m.createOrShow(r,3,3)),p.commands.registerCommand("terminalGrid.sendToCell",(e,a)=>m.currentPanel?.sendToCell(e,a)??!1),p.commands.registerCommand("terminalGrid.readCell",(e,a)=>m.currentPanel?.readCell(e,a)??null),p.commands.registerCommand("terminalGrid.getGridInfo",()=>{let e=m.currentPanel;return e?{rows:e.getRows(),cols:e.getCols(),cellCount:e.getCellCount(),cellLabels:e.getCellLabels()}:null}),p.commands.registerCommand("terminalGrid.testAPI",async()=>{let e=p.window.createOutputChannel("Terminal Grid Tests");e.show(),e.appendLine(`=== Terminal Grid API Tests ===
`);let a=0,i=0;function l(v,_,E){let P=_?"PASS":"FAIL";_?a++:i++,e.appendLine(`[${P}] ${v}${E?" \u2014 "+E:""}`)}let c=await p.commands.executeCommand("terminalGrid.getGridInfo");if(!c){e.appendLine("[FAIL] getGridInfo returned null. Open a grid first.");return}l("getGridInfo returns object",!!c,JSON.stringify(c)),l("rows is number",typeof c.rows=="number",`rows=${c.rows}`),l("cols is number",typeof c.cols=="number",`cols=${c.cols}`),l("cellCount = rows*cols",c.cellCount===c.rows*c.cols,`${c.cellCount}`),l("cellLabels is array",Array.isArray(c.cellLabels),`length=${c.cellLabels.length}`),l("cellLabels.length = cellCount",c.cellLabels.length===c.cellCount);let g=await p.commands.executeCommand("terminalGrid.sendToCell",0,"echo __API_TEST__\r");l("sendToCell(0) returns true",g===!0);let b=await p.commands.executeCommand("terminalGrid.sendToCell",999,"x\r");l("sendToCell(999) returns false",b===!1,`got ${b}`);let h=await p.commands.executeCommand("terminalGrid.sendToCell",0,"TYPED_ONLY");l("sendToCell without \\r returns true",h===!0),await new Promise(v=>setTimeout(v,2e3)),await p.commands.executeCommand("terminalGrid.sendToCell",0,"");let w=await p.commands.executeCommand("terminalGrid.readCell",0);l("readCell(0) returns string",typeof w=="string",`length=${w?.length??0}`),l("readCell(0) contains test marker",!!w&&w.includes("__API_TEST__"));let f=await p.commands.executeCommand("terminalGrid.readCell",0,3);l("readCell(0, 3) returns string",typeof f=="string");let x=await p.commands.executeCommand("terminalGrid.readCell",0,0);l("readCell(0, 0) returns empty",x==="",`got "${x}"`);let C=await p.commands.executeCommand("terminalGrid.readCell",999);if(l("readCell(999) returns null",C===null,`got ${C}`),c.cellCount>1){let v=await p.commands.executeCommand("terminalGrid.sendToCell",1,"echo CELL1_OK\r");l("sendToCell(1) returns true",v===!0),await new Promise(E=>setTimeout(E,1500));let _=await p.commands.executeCommand("terminalGrid.readCell",1);l("readCell(1) contains CELL1_OK",!!_&&_.includes("CELL1_OK"))}e.appendLine(`
=== ${a} passed, ${i} failed ===`),i===0?p.window.showInformationMessage(p.l10n.t("Terminal Grid API: All {0} tests passed!",a)):p.window.showWarningMessage(p.l10n.t("Terminal Grid API: {0} test(s) failed. See output.",i))}),p.commands.registerCommand("terminalGrid.copyMcpConfig",()=>{let e=N?.getPort()??7890,i={mcpServers:{"terminal-grid":{command:"node",args:[S.join(r.extensionPath,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(e)}}}};p.env.clipboard.writeText(JSON.stringify(i,null,2)),p.window.showInformationMessage(p.l10n.t("Terminal Grid MCP config copied to clipboard (port {0})",e))}))}function he(){N?.stop(),N=void 0,m.currentPanel?.dispose()}0&&(module.exports={activate,deactivate});
