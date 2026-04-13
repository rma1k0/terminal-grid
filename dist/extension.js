"use strict";var te=Object.create;var N=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var re=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,se=Object.prototype.hasOwnProperty;var ae=(a,e)=>{for(var o in e)N(a,o,{get:e[o],enumerable:!0})},z=(a,e,o,d)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of re(e))!se.call(a,r)&&r!==o&&N(a,r,{get:()=>e[r],enumerable:!(d=ne(e,r))||d.enumerable});return a};var k=(a,e,o)=>(o=a!=null?te(oe(a)):{},z(e||!a||!a.__esModule?N(o,"default",{value:a,enumerable:!0}):o,a)),ie=a=>z(N({},"__esModule",{value:!0}),a);var ke={};ae(ke,{activate:()=>Ce,deactivate:()=>Se});module.exports=ie(ke);var p=k(require("vscode")),y=k(require("path")),h=k(require("fs")),D=k(require("os"));var i=k(require("vscode")),I=k(require("fs")),P=k(require("path")),Y=k(require("child_process"));var u=k(require("vscode")),V=k(require("os")),Z=k(require("fs")),j=k(require("path"));var A={"":null,Dracula:{name:"Dracula",background:"#282a36",foreground:"#f8f8f2",cursor:"#f8f8f2",cursorAccent:"#282a36",selectionBackground:"#44475a",black:"#21222c",brightBlack:"#6272a4",red:"#ff5555",brightRed:"#ff6e6e",green:"#50fa7b",brightGreen:"#69ff94",yellow:"#f1fa8c",brightYellow:"#ffffa5",blue:"#bd93f9",brightBlue:"#d6acff",magenta:"#ff79c6",brightMagenta:"#ff92df",cyan:"#8be9fd",brightCyan:"#a4ffff",white:"#f8f8f2",brightWhite:"#ffffff"},Monokai:{name:"Monokai",background:"#272822",foreground:"#f8f8f2",cursor:"#f8f8f0",cursorAccent:"#272822",selectionBackground:"#49483e",black:"#272822",brightBlack:"#75715e",red:"#f92672",brightRed:"#f92672",green:"#a6e22e",brightGreen:"#a6e22e",yellow:"#f4bf75",brightYellow:"#f4bf75",blue:"#66d9ef",brightBlue:"#66d9ef",magenta:"#ae81ff",brightMagenta:"#ae81ff",cyan:"#a1efe4",brightCyan:"#a1efe4",white:"#f8f8f2",brightWhite:"#f9f8f5"},"Solarized Dark":{name:"Solarized Dark",background:"#002b36",foreground:"#839496",cursor:"#839496",cursorAccent:"#002b36",selectionBackground:"#073642",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},"Solarized Light":{name:"Solarized Light",background:"#fdf6e3",foreground:"#657b83",cursor:"#657b83",cursorAccent:"#fdf6e3",selectionBackground:"#eee8d5",black:"#073642",brightBlack:"#586e75",red:"#dc322f",brightRed:"#cb4b16",green:"#859900",brightGreen:"#586e75",yellow:"#b58900",brightYellow:"#657b83",blue:"#268bd2",brightBlue:"#839496",magenta:"#d33682",brightMagenta:"#6c71c4",cyan:"#2aa198",brightCyan:"#93a1a1",white:"#eee8d5",brightWhite:"#fdf6e3"},Nord:{name:"Nord",background:"#2e3440",foreground:"#d8dee9",cursor:"#d8dee9",cursorAccent:"#2e3440",selectionBackground:"#434c5e",black:"#3b4252",brightBlack:"#4c566a",red:"#bf616a",brightRed:"#bf616a",green:"#a3be8c",brightGreen:"#a3be8c",yellow:"#ebcb8b",brightYellow:"#ebcb8b",blue:"#81a1c1",brightBlue:"#81a1c1",magenta:"#b48ead",brightMagenta:"#b48ead",cyan:"#88c0d0",brightCyan:"#8fbcbb",white:"#e5e9f0",brightWhite:"#eceff4"},"One Dark":{name:"One Dark",background:"#282c34",foreground:"#abb2bf",cursor:"#528bff",cursorAccent:"#282c34",selectionBackground:"#3e4451",black:"#282c34",brightBlack:"#5c6370",red:"#e06c75",brightRed:"#e06c75",green:"#98c379",brightGreen:"#98c379",yellow:"#e5c07b",brightYellow:"#d19a66",blue:"#61afef",brightBlue:"#61afef",magenta:"#c678dd",brightMagenta:"#c678dd",cyan:"#56b6c2",brightCyan:"#56b6c2",white:"#abb2bf",brightWhite:"#ffffff"},"Gruvbox Dark":{name:"Gruvbox Dark",background:"#282828",foreground:"#ebdbb2",cursor:"#ebdbb2",cursorAccent:"#282828",selectionBackground:"#504945",black:"#282828",brightBlack:"#928374",red:"#cc241d",brightRed:"#fb4934",green:"#98971a",brightGreen:"#b8bb26",yellow:"#d79921",brightYellow:"#fabd2f",blue:"#458588",brightBlue:"#83a598",magenta:"#b16286",brightMagenta:"#d3869b",cyan:"#689d6a",brightCyan:"#8ec07c",white:"#a89984",brightWhite:"#ebdbb2"},"Tokyo Night":{name:"Tokyo Night",background:"#1a1b26",foreground:"#a9b1d6",cursor:"#c0caf5",cursorAccent:"#1a1b26",selectionBackground:"#33467c",black:"#15161e",brightBlack:"#414868",red:"#f7768e",brightRed:"#f7768e",green:"#9ece6a",brightGreen:"#9ece6a",yellow:"#e0af68",brightYellow:"#e0af68",blue:"#7aa2f7",brightBlue:"#7aa2f7",magenta:"#bb9af7",brightMagenta:"#bb9af7",cyan:"#7dcfff",brightCyan:"#7dcfff",white:"#a9b1d6",brightWhite:"#c0caf5"}},$=Object.keys(A);function R(a){let e=A[a];if(!e)return null;let{name:o,...d}=e;return d}function L(a){return new Promise(e=>setTimeout(e,a))}var le=3e3,de=15e3,ce=200,pe=[/[❯>✻⏵›]\s*$/m,/aider>\s*$/m],U=(()=>{if(process.platform!=="win32")return 0;let a=V.release().split(".");return parseInt(a[2]||"0",10)})(),H=U>0&&U<22e3?"\r":"\x1B[13u",ge=["claude","codex","gemini","copilot","aider","claude --dangerously-skip-permissions","codex -s danger-full-access -a never"];function G(a){let e=a.trim();return ge.some(o=>e===o||e.startsWith(o+" "))}function ue(a){let e=a.toLowerCase();return e.includes("powershell")||e.includes("pwsh")||e.includes("cmd")?`\r
`:"\r"}function W(a,e,o,d,r){let t=a[r];return t?.startupSteps&&t.startupSteps.length>0?t.startupSteps:t?.startupCommand?[{type:"command",input:t.startupCommand}]:e[r]?[{type:"command",input:e[r]}]:o.length>0?o:d?[{type:"command",input:d}]:[]}var J={".ttf":"truetype",".otf":"opentype",".woff":"woff",".woff2":"woff2"},f=class a{constructor(e,o,d,r){this._terminals=[];this._outputBuffers=[];this._csiUMode=[];this._insideLlm=[];this._cellShellType=[];this._disposed=!1;this._stepGeneration={};this._panel=e,this._context=o,this._rows=d,this._cols=r;let t=o.globalState.get("mergedRegions",[]).filter(n=>n.startRow+n.rowSpan<=d&&n.startCol+n.colSpan<=r);this._hiddenCells=new Set;for(let n of t)for(let l=n.startRow;l<n.startRow+n.rowSpan;l++)for(let s=n.startCol;s<n.startCol+n.colSpan;s++)l===n.startRow&&s===n.startCol||this._hiddenCells.add(l*r+s);this._panel.webview.options={enableScripts:!0,localResourceRoots:[u.Uri.joinPath(o.extensionUri,"media")]},this._panel.webview.html=this._getHtml(),this._panel.webview.onDidReceiveMessage(async n=>{switch(n.type){case"ready":if(this._createTerminals(n.defaultCols,n.defaultRows),n.cellDims&&Array.isArray(n.cellDims))for(let s=0;s<n.cellDims.length&&s<this._terminals.length;s++){let c=n.cellDims[s];if(c?.cols&&c?.rows)try{this._terminals[s].pty.resize(c.cols,c.rows)}catch{}}this.loadCustomFonts(this._context.globalState.get("customFonts",[]));let l=this._context.globalState.get("cellOverrides",{});for(let[s,c]of Object.entries(l))if(c.bgColor||c.fgColor||c.fontFamily||c.themeName){let g=c.themeName?R(c.themeName):null;this.sendCellConfig(parseInt(s),c.bgColor||"",c.fgColor||"",c.fontFamily||"",c.themeName||"",g)}break;case"input":{let s=this._terminals[n.id]?.pty;s&&this._chunkedWrite(s,n.data);break}case"clipboardWrite":u.env.clipboard.writeText(n.text);break;case"resize":try{this._terminals[n.id]?.pty.resize(n.cols,n.rows)}catch{}break;case"clearTerminal":this._panel.webview.postMessage({type:"clear",id:n.id});break;case"killTerminal":try{this._terminals[n.id]?.pty.kill()}catch{}break;case"restartTerminal":this._restartTerminal(n.id);break;case"renameCell":{let s=this._context.globalState.get("cellLabels",[]),c=s[n.id]||"",g=await u.window.showInputBox({prompt:u.l10n.t("Rename cell {0}",n.id+1),value:c,placeHolder:u.l10n.t("Enter alias (empty to reset)")});g!==void 0&&(s[n.id]=g,await this._context.globalState.update("cellLabels",s),this.sendLabels(),u.commands.executeCommand("terminalGrid._refreshSidebar"));break}}}),this._configListener=u.workspace.onDidChangeConfiguration(n=>{if(n.affectsConfiguration("terminalGrid")){let l=u.workspace.getConfiguration("terminalGrid"),s=l.get("colorTheme","");this._panel.webview.postMessage({type:"configUpdate",zoom:l.get("zoomPercent",100),fontFamily:l.get("fontFamily",""),bgColor:l.get("backgroundColor",""),fgColor:l.get("foregroundColor",""),themeName:s,themeColors:R(s)})}}),this._panel.onDidDispose(()=>this.dispose()),this._panel.iconPath=u.Uri.joinPath(o.extensionUri,"images","sidebar.svg")}static{this.OUTPUT_BUFFER_SIZE=5e4}static{this.CSI_U_ENABLE=/\x1b\[>[0-9]+u/}static{this.CSI_U_DISABLE=/\x1b\[<[0-9]*u/}static _getLog(){return a._log||(a._log=u.window.createOutputChannel("Terminal Grid")),a._log}static _getNodePty(){if(a._nodePty===void 0)try{a._nodePty=require("node-pty")}catch{a._nodePty=null}return a._nodePty}static getAvailableShells(){let e=[{name:"IDE Default",path:"",args:[]}];try{let n=function(g){try{if(/[/\\]/.test(g))return d.existsSync(g);let b=process.platform==="win32"?`where ${g}`:`which ${g}`;return r.execSync(b,{stdio:"ignore",timeout:500}),!0}catch{return!1}};var o=n;let d=require("fs"),r=require("child_process"),t=new Set,l=process.platform==="win32"?"windows":process.platform==="darwin"?"osx":"linux",s=u.workspace.getConfiguration(`terminal.integrated.profiles.${l}`);if(s)for(let g of Object.keys(s))try{let b=s.get(g);if(!b||typeof b!="object")continue;let w=Array.isArray(b.path)?b.path[0]:b.path;w&&n(w)&&(e.push({name:g,path:w,args:b.args||[]}),t.add(w.toLowerCase()))}catch{}let c=process.platform==="win32"?[{name:"PowerShell",path:"powershell.exe",args:["-NoLogo"]},{name:"PowerShell 7",path:"pwsh.exe",args:["-NoLogo"]},{name:"Command Prompt",path:"cmd.exe",args:[]},{name:"Git Bash",path:"C:\\Program Files\\Git\\bin\\bash.exe",args:["--login"]},{name:"WSL",path:"wsl.exe",args:[]}]:[{name:"Bash",path:"/bin/bash",args:["--login"]},{name:"Zsh",path:"/bin/zsh",args:["--login"]},{name:"Fish",path:"/usr/bin/fish",args:[]},{name:"sh",path:"/bin/sh",args:[]}];for(let g of c)!t.has(g.path.toLowerCase())&&n(g.path)&&(e.push(g),t.add(g.path.toLowerCase()))}catch{}return e}_resolveShell(e){if(!e)return process.platform==="win32"?a._getNodePty()?{path:"powershell.exe",args:["-NoLogo","-NoProfile"]}:{path:process.env.COMSPEC||"cmd.exe",args:[]}:{path:process.env.SHELL||"bash",args:[]};let d=a.getAvailableShells().find(t=>t.path===e||t.name===e);if(d&&d.path)return{path:d.path,args:d.args};let r=e.toLowerCase();return r.includes("powershell")||r.includes("pwsh")?{path:e,args:["-NoLogo"]}:r.includes("bash")||r.includes("zsh")?{path:e,args:["--login"]}:{path:e,args:[]}}static createOrShow(e,o,d){a.currentPanel&&a.currentPanel.dispose();let r=u.window.createWebviewPanel("terminalGrid",u.l10n.t("Terminal Grid {0}\xD7{1}",o,d),u.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[u.Uri.joinPath(e.extensionUri,"media")]});a.currentPanel=new a(r,e,o,d),e.globalState.update("lastGrid",{rows:o,cols:d}),u.commands.executeCommand("terminalGrid._refreshSidebar")}static revive(e,o,d,r){a.currentPanel&&a.currentPanel.dispose(),a.currentPanel=new a(e,o,d,r),o.globalState.update("lastGrid",{rows:d,cols:r}),u.commands.executeCommand("terminalGrid._refreshSidebar")}_enterSeq(e){return this._csiUMode[e]||this._insideLlm[e]?H:ue(this._cellShellType[e]||"")}broadcastInput(e){for(let o of this._terminals)if(!this._hiddenCells.has(o.id)){if(this._insideLlm[o.id])this._typeToCell(o.id,e).then(()=>L(50)).then(()=>{o.pty.write(this._enterSeq(o.id))});else{let r=/\r?\n/.test(e)?"\x1B[200~"+e+"\x1B[201~":e;o.pty.write(r+this._enterSeq(o.id))}G(e)&&(this._insideLlm[o.id]=!0),e.trim()==="exit"&&(this._insideLlm[o.id]=!1)}}sendToCell(e,o){let d=this._terminals[e];return d?(this._chunkedWrite(d.pty,o),!0):!1}sendInputToCell(e,o){let d=this._terminals[e];if(!d)return!1;if(this._insideLlm[e])this._typeToCell(e,o).then(()=>L(50)).then(()=>{d.pty.write(this._enterSeq(e))});else{let t=/\r?\n/.test(o)?"\x1B[200~"+o+"\x1B[201~":o;d.pty.write(t+this._enterSeq(e))}return G(o)&&(this._insideLlm[e]=!0),o.trim()==="exit"&&(this._insideLlm[e]=!1),!0}static _stripAnsi(e){return e.replace(/\x1b\[[0-9;?]*[a-zA-Z]/g,"").replace(/\x1b\][^\x07\x1b]*(?:\x07|\x1b\\)/g,"").replace(/\x1b[()][0-9A-Z]/g,"").replace(/\x1b[78DEHM]/g,"").replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`).replace(/\n{3,}/g,`

`)}readCell(e,o){if(this._hiddenCells.has(e))return null;let d=this._outputBuffers[e];if(d===void 0)return null;let r=a._stripAnsi(d);return o===void 0?r:o<=0?"":r.split(`
`).slice(-o).join(`
`)}getCellCount(){return this._terminals.length}getRows(){return this._rows}getCols(){return this._cols}getCellLabels(){let e=this._context.globalState.get("cellLabels",[]),o=this._rows*this._cols;return Array.from({length:o},(d,r)=>e[r]||String(r+1))}sendCellConfig(e,o,d,r,t,n){this._panel.webview.postMessage({type:"cellConfig",id:e,bgColor:o,fgColor:d,fontFamily:r,themeName:t??"",themeColors:n??null})}clearCellOverrides(){this._panel.webview.postMessage({type:"clearCellOverrides"})}sendLabels(){let e=this._context.globalState.get("cellLabels",[]);this._panel.webview.postMessage({type:"setLabels",labels:e})}loadCustomFonts(e){for(let o of e){let d=this._readFontBase64(o.path);if(d){let r=j.extname(o.path).toLowerCase();this._panel.webview.postMessage({type:"loadFont",name:o.name,data:d,format:J[r]||"truetype"})}}}_readFontBase64(e){try{return Z.readFileSync(e).toString("base64")}catch{return null}}_spawnPty(e,o,d,r,t){let n=this._resolveShell(t);if(e){let c=e.spawn(n.path,n.args,{name:"xterm-256color",cols:o,rows:d,cwd:r,env:process.env});return{onData:g=>{c.onData(g)},write:g=>c.write(g),resize:(g,b)=>c.resize(g,b),kill:()=>c.kill()}}let{spawn:l}=require("child_process"),s=l(n.path,n.args,{cwd:r,env:process.env,windowsHide:!0});return{onData:c=>{s.stdout?.on("data",g=>c(g.toString())),s.stderr?.on("data",g=>c(g.toString()))},write:c=>{s.stdin?.write(c)},resize:()=>{},kill:()=>s.kill()}}_createTerminals(e,o){let d=u.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",r=this._rows*this._cols,t=a._getNodePty();t||u.window.showWarningMessage(u.l10n.t("node-pty not available. Falling back to basic shell (limited features)."));let n=this._context.globalState.get("startupCommands",[]),l=[];for(let m of n)if(typeof m=="string")l.push(m);else if(m&&typeof m=="object"&&"command"in m){let C=m;for(let x=0;x<(C.count||1);x++)l.push(C.command)}let s=this._context.globalState.get("defaultCommand",""),c=this._context.globalState.get("defaultSteps",[]),g=e||80,b=o||24,w=u.workspace.getConfiguration("terminalGrid").get("shellType",""),_=this._context.globalState.get("cellOverrides",{});for(let m=0;m<r;m++){if(this._hiddenCells.has(m)){let E={onData(){},write(){},resize(){},kill(){}};this._terminals.push({id:m,pty:E}),this._outputBuffers[m]="",this._cellShellType[m]="",this._insideLlm[m]=!1,this._csiUMode[m]=!1;continue}let C=_[m]?.shellType||w||"",x=this._spawnPty(t,g,b,d,C||void 0),v=m,S=W(_,l,c,s,m);this._cellShellType[v]=C,this._insideLlm[v]=!1,this._outputBuffers[v]="",this._csiUMode[v]=!1;let T=!1;x.onData(E=>{this._disposed||(a.CSI_U_ENABLE.test(E)&&(this._csiUMode[v]=!0),a.CSI_U_DISABLE.test(E)&&(this._csiUMode[v]=!1),this._outputBuffers[v]=(this._outputBuffers[v]||"")+E,this._outputBuffers[v].length>a.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[v]=this._outputBuffers[v].slice(-a.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:v,data:E}),!T&&S.length>0&&(T=!0,this._executeSteps(v,S,this._cellShellType[v]||"")))}),this._terminals.push({id:m,pty:x})}this.sendLabels()}_restartTerminal(e){let o=this._terminals[e];if(!o)return;try{o.pty.kill()}catch{}this._panel.webview.postMessage({type:"reset",id:e});let d=u.workspace.workspaceFolders?.[0]?.uri.fsPath||process.env.USERPROFILE||process.env.HOME||".",r=u.workspace.getConfiguration("terminalGrid").get("shellType",""),t=this._context.globalState.get("cellOverrides",{}),n=t[e]?.shellType||r||"",l=this._spawnPty(a._getNodePty(),80,24,d,n||void 0),s=this._context.globalState.get("startupCommands",[]),c=[];for(let m of s)if(typeof m=="string")c.push(m);else if(m&&typeof m=="object"&&"command"in m){let C=m;for(let x=0;x<(C.count||1);x++)c.push(C.command)}let g=this._context.globalState.get("defaultCommand",""),b=this._context.globalState.get("defaultSteps",[]),w=W(t,c,b,g,e);this._cellShellType[e]=n,this._insideLlm[e]=!1;let _=!1;this._outputBuffers[e]="",this._csiUMode[e]=!1,l.onData(m=>{this._disposed||(a.CSI_U_ENABLE.test(m)&&(this._csiUMode[e]=!0),a.CSI_U_DISABLE.test(m)&&(this._csiUMode[e]=!1),this._outputBuffers[e]=(this._outputBuffers[e]||"")+m,this._outputBuffers[e].length>a.OUTPUT_BUFFER_SIZE&&(this._outputBuffers[e]=this._outputBuffers[e].slice(-a.OUTPUT_BUFFER_SIZE)),this._panel.webview.postMessage({type:"output",id:e,data:m}),!_&&w.length>0&&(_=!0,this._executeSteps(e,w,this._cellShellType[e]||"")))}),this._terminals[e]={id:e,pty:l}}static{this.CHUNK_SIZE=65536}_chunkedWrite(e,o){if(o.length<=a.CHUNK_SIZE){e.write(o);return}let d=0,r=()=>{if(d>=o.length)return;let t=o.slice(d,d+a.CHUNK_SIZE);d+=a.CHUNK_SIZE,e.write(t),d<o.length&&setTimeout(r,5)};r()}async _typeToCell(e,o){let d=this._terminals[e]?.pty;if(d)for(let r of o)d.write(r),await L(20)}static{this.LLM_TYPE_MAX_RETRIES=5}static{this.LLM_ECHO_WAIT=2e3}async _waitForLlmPrompt(e){let o=(this._outputBuffers[e]||"").length,d=Date.now()+de;for(;Date.now()<d;){await L(ce);let r=this._outputBuffers[e]||"",t=a._stripAnsi(r.slice(o));if(pe.some(n=>n.test(t)))return!0;if(this._disposed)return!1}return!1}async _typeWithRetry(e,o){let d=this._terminals[e]?.pty;if(!d)return!1;for(let r=0;r<a.LLM_TYPE_MAX_RETRIES;r++){let t=(this._outputBuffers[e]||"").length;await this._typeToCell(e,o);let n=Date.now()+a.LLM_ECHO_WAIT;for(;Date.now()<n;){await L(50);let l=this._outputBuffers[e]||"";if(a._stripAnsi(l.slice(t)).includes(o))return!0;if(this._disposed)return!1}for(let l=0;l<o.length;l++)d.write("\x7F");await L(300)}return!1}async _executeSteps(e,o,d){this._stepGeneration[e]||(this._stepGeneration[e]=0);let r=++this._stepGeneration[e],t=!1;for(let n=0;n<o.length;n++){if(this._disposed||this._stepGeneration[e]!==r)return;let l=o[n];if(l.type==="timeout")await L(l.ms);else if(l.type==="command"){if(n>0&&(t?await this._waitForLlmPrompt(e):o[n-1].type==="command"&&await L(le)),this._disposed||this._stepGeneration[e]!==r)return;let s=t?H:this._enterSeq(e);t?(await this._typeWithRetry(e,l.input),this._terminals[e]?.pty.write(s)):this._terminals[e]?.pty.write(l.input+s),G(l.input)&&(t=!0),l.input.trim()==="exit"&&(t=!1),this._insideLlm[e]=t}}}restartCell(e){this._restartTerminal(e)}restartAllCells(){for(let e of this._terminals)this._restartTerminal(e.id)}dispose(){this._disposed=!0,a.currentPanel=void 0,this._configListener?.dispose(),this._context.globalState.update("lastGrid",void 0);for(let e of this._terminals)try{e.pty.kill()}catch{}this._terminals=[],this._panel.dispose()}_buildCustomFontCss(){let e=this._context.globalState.get("customFonts",[]),o="";for(let d of e){let r=this._readFontBase64(d.path);if(!r)continue;let t=j.extname(d.path).toLowerCase(),n=J[t]||"truetype";o+=`@font-face { font-family: '${d.name}'; src: url(data:font/${t.slice(1)};base64,${r}) format('${n}'); font-display: swap; }
`}return o}_getHtml(){let e=this._panel.webview,o=e.asWebviewUri(u.Uri.joinPath(this._context.extensionUri,"media","gridTerminal.js")),d=e.asWebviewUri(u.Uri.joinPath(this._context.extensionUri,"media","xterm.css")),r=me(),t=this._buildCustomFontCss();return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="Content-Security-Policy"
        content="default-src 'none';
                 style-src ${e.cspSource} 'unsafe-inline';
                 script-src 'nonce-${r}';
                 font-src ${e.cspSource} data:;">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${d}">
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
    <div class="ctx-menu-item" data-action="copyPlain">${u.l10n.t("Copy (Plain)")}</div>
    <div class="ctx-menu-item" data-action="paste">${u.l10n.t("Paste")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="clear">${u.l10n.t("Clear")}</div>
    <div class="ctx-menu-item" data-action="restart">${u.l10n.t("Restart")}</div>
    <div class="ctx-menu-item" data-action="kill">${u.l10n.t("Kill")}</div>
    <div class="ctx-menu-sep"></div>
    <div class="ctx-menu-item" data-action="rename">${u.l10n.t("Rename")}</div>
  </div>
  <script nonce="${r}">
    var __GRID_ROWS = ${this._rows};
    var __GRID_COLS = ${this._cols};
    var __GRID_ZOOM = ${u.workspace.getConfiguration("terminalGrid").get("zoomPercent",100)};
    var __GRID_FONT_FAMILY = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("fontFamily",""))};
    var __GRID_BG_COLOR = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("backgroundColor",""))};
    var __GRID_FG_COLOR = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("foregroundColor",""))};
    var __GRID_THEME = ${JSON.stringify(u.workspace.getConfiguration("terminalGrid").get("colorTheme",""))};
    var __GRID_THEME_COLORS = ${JSON.stringify(R(u.workspace.getConfiguration("terminalGrid").get("colorTheme","")))};
    var __GRID_MERGE_REGIONS = ${JSON.stringify(this._context.globalState.get("mergedRegions",[]).filter(n=>n.startRow+n.rowSpan<=this._rows&&n.startCol+n.colSpan<=this._cols))};
  </script>
  <script nonce="${r}" src="${o}"></script>
</body>
</html>`}};function me(){let a="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<32;o++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}var fe=[".ttf",".otf",".woff",".woff2"];function ve(){try{return require("node-pty"),!0}catch{return!1}}function be(){return process.platform==="win32"?"npm.cmd":"npm"}function he(a){try{let o=JSON.parse(I.readFileSync(P.join(a,"package.json"),"utf-8")).dependencies?.["node-pty"];return o?`node-pty@${o}`:"node-pty"}catch{return"node-pty"}}function q(a,e,o){return new Promise((d,r)=>{let t=Y.spawn(a,e,{cwd:o,env:process.env}),n="";t.stdout?.on("data",l=>{n+=l.toString()}),t.stderr?.on("data",l=>{n+=l.toString()}),t.on("error",r),t.on("close",l=>{if(l===0){d();return}r(new Error(n.trim()||`${a} exited with code ${l??"unknown"}`))})})}var O=class{constructor(e){this._mcpPort=0;this._context=e}static{this.viewType="terminalGrid.sidebarView"}setMcpPort(e){this._mcpPort=e,this._view?.webview.postMessage({type:"mcpPort",port:e})}resolveWebviewView(e,o,d){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._context.extensionUri]},e.webview.html=this._getHtml(),e.webview.onDidReceiveMessage(async r=>{switch(r.type){case"openGrid":await i.commands.executeCommand("terminalGrid.openCustomGrid",r.rows,r.cols),this.sendConfig();break;case"reload":await i.commands.executeCommand("workbench.action.reloadWindow");break;case"setConfig":{let t=i.workspace.getConfiguration("terminalGrid");r.key&&r.value!==void 0&&await t.update(r.key,r.value,i.ConfigurationTarget.Global),r.key==="shellType"&&f.currentPanel&&f.currentPanel.restartAllCells();break}case"getConfig":{this.sendConfig();break}case"browseFont":{let t=await i.window.showOpenDialog({canSelectMany:!1,filters:{"Font Files":["ttf","otf","woff","woff2"]},title:i.l10n.t("Select Font File")});if(!t||t.length===0)break;let n=t[0].fsPath,l=P.extname(n).toLowerCase();if(!fe.includes(l)){i.window.showWarningMessage(i.l10n.t("Unsupported font format. Use .ttf, .otf, .woff, or .woff2"));break}try{I.accessSync(n,I.constants.R_OK)}catch{i.window.showErrorMessage(i.l10n.t("Cannot read font file."));break}let s=P.basename(n,l),c=this._context.globalState.get("customFonts",[]);c.some(g=>g.path===n)||(c.push({name:s,path:n}),await this._context.globalState.update("customFonts",c)),this.sendConfig(),f.currentPanel&&f.currentPanel.loadCustomFonts([{name:s,path:n}]);break}case"removeFont":{let n=this._context.globalState.get("customFonts",[]).filter(l=>l.name!==r.name);await this._context.globalState.update("customFonts",n),this.sendConfig();break}case"addStartupCommand":{let t=this._context.globalState.get("startupCommands",[]);t.push({command:r.command,count:1}),await this._context.globalState.update("startupCommands",t),this.sendConfig();break}case"removeStartupCommand":{let t=this._context.globalState.get("startupCommands",[]);t.splice(r.index,1),await this._context.globalState.update("startupCommands",t),this.sendConfig();break}case"updateCommandCount":{let t=this._context.globalState.get("startupCommands",[]);t[r.index]&&(t[r.index].count=Math.max(1,r.count),await this._context.globalState.update("startupCommands",t)),this.sendConfig();break}case"addStep":{if(r.target==="all"){let t=this._context.globalState.get("defaultSteps",[]);t.push(r.step),await this._context.globalState.update("defaultSteps",t);let n=t.find(l=>l.type==="command");await this._context.globalState.update("defaultCommand",n?.input||"")}else{let t=this._context.globalState.get("cellOverrides",{}),n=r.target;t[n]||(t[n]={}),Array.isArray(t[n].startupSteps)||(t[n].startupSteps=[]),t[n].startupSteps.push(r.step);let l=t[n].startupSteps.find(s=>s.type==="command");t[n].startupCommand=l?.input||"",await this._context.globalState.update("cellOverrides",t)}this.sendConfig();break}case"removeStep":{if(r.target==="all"){let t=this._context.globalState.get("defaultSteps",[]);t.splice(r.index,1),await this._context.globalState.update("defaultSteps",t);let n=t.find(l=>l.type==="command");await this._context.globalState.update("defaultCommand",n?.input||"")}else{let t=this._context.globalState.get("cellOverrides",{}),n=r.target;if(Array.isArray(t[n]?.startupSteps)){t[n].startupSteps.splice(r.index,1);let l=t[n].startupSteps.find(s=>s.type==="command");t[n].startupCommand=l?.input||"",await this._context.globalState.update("cellOverrides",t)}}this.sendConfig();break}case"reorderSteps":{if(r.target==="all"){await this._context.globalState.update("defaultSteps",r.steps);let t=r.steps.find(n=>n.type==="command");await this._context.globalState.update("defaultCommand",t?.input||"")}else{let t=this._context.globalState.get("cellOverrides",{}),n=r.target;t[n]||(t[n]={}),t[n].startupSteps=r.steps;let l=r.steps.find(s=>s.type==="command");t[n].startupCommand=l?.input||"",await this._context.globalState.update("cellOverrides",t)}this.sendConfig();break}case"updateStep":{if(r.target==="all"){let t=this._context.globalState.get("defaultSteps",[]);r.index>=0&&r.index<t.length&&(t[r.index]=r.step,await this._context.globalState.update("defaultSteps",t))}else{let t=this._context.globalState.get("cellOverrides",{}),n=r.target,l=t[n]?.startupSteps||[];r.index>=0&&r.index<l.length&&(l[r.index]=r.step,t[n]||(t[n]={}),t[n].startupSteps=l,await this._context.globalState.update("cellOverrides",t))}this.sendConfig();break}case"addProject":{let t=this._context.globalState.get("projects",[]);t.some(n=>n.path===r.path)||(t.push({name:r.name,path:r.path}),await this._context.globalState.update("projects",t)),this.sendConfig();break}case"removeProject":{let t=this._context.globalState.get("projects",[]);t.splice(r.index,1),await this._context.globalState.update("projects",t),this.sendConfig();break}case"openProject":{let t=i.Uri.file(r.path);await i.commands.executeCommand("vscode.openFolder",t,{forceNewWindow:!!r.newWindow});break}case"addCurrentProject":{let t=i.workspace.workspaceFolders?.[0];if(!t){i.window.showWarningMessage(i.l10n.t("No workspace folder open."));break}let n=this._context.globalState.get("projects",[]),l=t.uri.fsPath;n.some(s=>s.path===l)||(n.push({name:t.name,path:l}),await this._context.globalState.update("projects",n)),this.sendConfig();break}case"browseProject":{let t=await i.window.showOpenDialog({canSelectFiles:!1,canSelectFolders:!0,canSelectMany:!1,title:i.l10n.t("Select Project Folder")});if(!t||t.length===0)break;let n=t[0].fsPath,l=P.basename(n),s=this._context.globalState.get("projects",[]);s.some(c=>c.path===n)||(s.push({name:l,path:n}),await this._context.globalState.update("projects",s)),this.sendConfig();break}case"savePreset":{await this._savePreset(r.name),this.sendConfig();break}case"loadPreset":{let n=this._context.globalState.get("presets",[]).find(s=>s.name===r.name);if(!n)break;let l=i.workspace.getConfiguration("terminalGrid");if(await l.update("defaultRows",n.rows,i.ConfigurationTarget.Global),await l.update("defaultCols",n.cols,i.ConfigurationTarget.Global),await l.update("zoomPercent",n.zoomPercent,i.ConfigurationTarget.Global),await l.update("fontFamily",n.fontFamily,i.ConfigurationTarget.Global),await l.update("backgroundColor",n.bgColor,i.ConfigurationTarget.Global),await l.update("foregroundColor",n.fgColor,i.ConfigurationTarget.Global),await l.update("colorTheme",n.colorTheme||"",i.ConfigurationTarget.Global),await l.update("shellType",n.shellType||"",i.ConfigurationTarget.Global),await this._context.globalState.update("startupCommands",n.startupCommands||[]),await this._context.globalState.update("cellLabels",n.cellLabels||[]),await this._context.globalState.update("defaultCommand",n.defaultCommand||""),n.defaultSteps?await this._context.globalState.update("defaultSteps",n.defaultSteps):n.defaultCommand?await this._context.globalState.update("defaultSteps",[{type:"command",input:n.defaultCommand}]):await this._context.globalState.update("defaultSteps",[]),n.cellStepsOverrides){let s=this._context.globalState.get("cellOverrides",{});for(let[c,g]of Object.entries(n.cellStepsOverrides))s[Number(c)]||(s[Number(c)]={}),Array.isArray(g.startupSteps)&&(s[Number(c)].startupSteps=g.startupSteps);await this._context.globalState.update("cellOverrides",s)}await this._context.globalState.update("mergedRegions",n.mergedRegions||[]),f.createOrShow(this._context,n.rows,n.cols),this.sendConfig();break}case"deletePreset":{let n=this._context.globalState.get("presets",[]).filter(s=>s.name!==r.name);await this._context.globalState.update("presets",n);let l=this._context.globalState.get("projectPresets",{});for(let s of Object.keys(l))l[s]===r.name&&delete l[s];await this._context.globalState.update("projectPresets",l),this.sendConfig();break}case"linkPreset":{let t=this._context.globalState.get("projectPresets",{});r.presetName?t[r.projectPath]=r.presetName:delete t[r.projectPath],await this._context.globalState.update("projectPresets",t),this.sendConfig();break}case"broadcast":{f.currentPanel?f.currentPanel.broadcastInput(r.text):i.window.showWarningMessage(i.l10n.t("No terminal grid is open."));break}case"broadcastToCell":{if(f.currentPanel)for(let t of r.cellIds)f.currentPanel.sendInputToCell(t,r.text);else i.window.showWarningMessage(i.l10n.t("No terminal grid is open."));break}case"setCellConfig":{let t=this._context.globalState.get("cellOverrides",{});if(t[r.cellId]={bgColor:r.bgColor||"",fgColor:r.fgColor||"",fontFamily:r.fontFamily||"",themeName:r.themeName||"",shellType:t[r.cellId]?.shellType||""},await this._context.globalState.update("cellOverrides",t),f.currentPanel){let n=r.themeName?R(r.themeName):null;f.currentPanel.sendCellConfig(r.cellId,r.bgColor||"",r.fgColor||"",r.fontFamily||"",r.themeName||"",n)}break}case"setShellForCell":{let t=this._context.globalState.get("cellOverrides",{});t[r.cellId]||(t[r.cellId]={}),t[r.cellId].shellType=r.shellType||"",await this._context.globalState.update("cellOverrides",t),f.currentPanel&&f.currentPanel.restartCell(r.cellId);break}case"setDefaultCommand":{let t=r.command||"";await this._context.globalState.update("defaultCommand",t),await this._context.globalState.update("defaultSteps",t?[{type:"command",input:t}]:[]),this.sendConfig();break}case"setCellCommand":{let t=this._context.globalState.get("cellOverrides",{});t[r.cellId]||(t[r.cellId]={});let n=r.command||"";t[r.cellId].startupCommand=n,t[r.cellId].startupSteps=n?[{type:"command",input:n}]:[],await this._context.globalState.update("cellOverrides",t),this.sendConfig();break}case"clearAllCellOverrides":{await this._context.globalState.update("cellOverrides",{}),f.currentPanel&&f.currentPanel.clearCellOverrides();break}case"clearAllCellShells":{let t=this._context.globalState.get("cellOverrides",{});for(let n of Object.keys(t))t[parseInt(n)]&&(t[parseInt(n)].shellType="");await this._context.globalState.update("cellOverrides",t);break}case"saveMergeRegions":{let t=r.regions||[];await this._context.globalState.update("mergedRegions",t);let n=i.workspace.getConfiguration("terminalGrid").get("defaultCols",3),l=new Set;for(let s of t)for(let c=s.startRow;c<s.startRow+s.rowSpan;c++)for(let g=s.startCol;g<s.startCol+s.colSpan;g++)c===s.startRow&&g===s.startCol||l.add(c*n+g);if(l.size>0){let s=this._context.globalState.get("cellOverrides",{}),c=this._context.globalState.get("cellLabels",[]),g=!1;for(let b of l)s[String(b)]&&(delete s[String(b)],g=!0),c[b]&&(c[b]="",g=!0);g&&(await this._context.globalState.update("cellOverrides",s),await this._context.globalState.update("cellLabels",c))}this.sendConfig();break}case"saveSectionStates":{await this._context.globalState.update("sectionStates",r.states);break}case"installNodePty":{try{let t=process.versions.electron;if(!t)throw new Error(i.l10n.t("Unable to detect the editor Electron version."));let n=he(this._context.extensionPath),l=be();await i.window.withProgress({location:i.ProgressLocation.Notification,title:i.l10n.t("Installing node-pty for Electron {0}\u2026",t),cancellable:!1},async()=>{await q(l,["install","--no-save",n],this._context.extensionPath),await q(l,["rebuild","node-pty","--runtime=electron",`--target=${t}`,"--dist-url=https://electronjs.org/headers","--build-from-source"],this._context.extensionPath)}),this._view?.webview.postMessage({type:"ptyInstallResult",success:!0});let s=i.l10n.t("Reload Window");await i.window.showInformationMessage(i.l10n.t("node-pty rebuilt for Electron successfully. Reload window to activate."),s)===s&&i.commands.executeCommand("workbench.action.reloadWindow")}catch(t){let n=t instanceof Error?t.message:String(t);i.window.showErrorMessage(i.l10n.t("node-pty install failed: {0}",n)),this._view?.webview.postMessage({type:"ptyInstallResult",success:!1})}break}}}),i.workspace.onDidChangeConfiguration(r=>{r.affectsConfiguration("terminalGrid")&&this.sendConfig()})}async _savePreset(e){let o=i.workspace.getConfiguration("terminalGrid"),d={name:e,rows:o.get("defaultRows",2),cols:o.get("defaultCols",3),startupCommands:this._context.globalState.get("startupCommands",[]),cellLabels:this._context.globalState.get("cellLabels",[]),zoomPercent:o.get("zoomPercent",100),fontFamily:o.get("fontFamily",""),bgColor:o.get("backgroundColor",""),fgColor:o.get("foregroundColor",""),colorTheme:o.get("colorTheme",""),shellType:o.get("shellType",""),defaultCommand:this._context.globalState.get("defaultCommand",""),defaultSteps:this._context.globalState.get("defaultSteps",[]),cellStepsOverrides:this._context.globalState.get("cellOverrides",{}),mergedRegions:this._context.globalState.get("mergedRegions",[])},r=this._context.globalState.get("presets",[]),t=r.findIndex(n=>n.name===e);t>=0?r[t]=d:r.push(d),await this._context.globalState.update("presets",r)}async _migrateSteps(){let e=!1,o=this._context.globalState.get("defaultSteps",[]),d=this._context.globalState.get("defaultCommand","");d&&o.length===0?(await this._context.globalState.update("defaultSteps",[{type:"command",input:d}]),await this._context.globalState.update("defaultCommand",""),e=!0):d&&o.length>0&&(await this._context.globalState.update("defaultCommand",""),e=!0);let r=this._context.globalState.get("cellOverrides",{});for(let n of Object.keys(r)){let l=r[Number(n)];if(!l)continue;let s=l.startupCommand,c=l.startupSteps;s&&(!c||c.length===0)?(l.startupSteps=[{type:"command",input:s}],delete l.startupCommand,e=!0):s&&c&&c.length>0&&(delete l.startupCommand,e=!0)}this._context.globalState.get("startupCommands",[]).length>0&&(await this._context.globalState.update("startupCommands",[]),e=!0),e&&await this._context.globalState.update("cellOverrides",r)}sendConfig(){if(!this._view)return;this._migrateSteps();let e=i.workspace.getConfiguration("terminalGrid"),o=this._context.globalState.get("customFonts",[]),d=this._context.globalState.get("startupCommands",[]),r=this._context.globalState.get("projects",[]),t=this._context.globalState.get("presets",[]),n=this._context.globalState.get("projectPresets",{}),l=this._context.globalState.get("cellLabels",[]),s=this._context.globalState.get("cellOverrides",{}),c=this._context.globalState.get("defaultSteps",[]),g=this._context.globalState.get("sectionStates",{}),b=i.workspace.workspaceFolders?.[0]?.uri.fsPath||"",w=f.currentPanel,_=f.getAvailableShells();this._view.webview.postMessage({type:"configValues",zoom:e.get("zoomPercent",100),fontFamily:e.get("fontFamily",""),bgColor:e.get("backgroundColor",""),fgColor:e.get("foregroundColor",""),colorTheme:e.get("colorTheme",""),shellType:e.get("shellType",""),defaultCommand:this._context.globalState.get("defaultCommand",""),themeNames:$,availableShells:_.map(m=>({name:m.name,path:m.path})),customFonts:o.map(m=>m.name),startupCommands:d,projects:r,presets:t,projectPresets:n,cellLabels:l,cellOverrides:s,defaultSteps:c,sectionStates:g,workspacePath:b,gridRows:w?.getRows()??0,gridCols:w?.getCols()??0,mergedRegions:this._context.globalState.get("mergedRegions",[]),hiddenCells:(()=>{let m=this._context.globalState.get("mergedRegions",[]),C=e.get("defaultCols",3),x=[];for(let v of m)for(let S=v.startRow;S<v.startRow+v.rowSpan;S++)for(let T=v.startCol;T<v.startCol+v.colSpan;T++)S===v.startRow&&T===v.startCol||x.push(S*C+T);return x})()})}_getHtml(){let e=we();return`<!DOCTYPE html>
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

    /* \u2500\u2500 Cell Merge preview \u2500\u2500 */
    .merge-row {
      display: flex; align-items: flex-start; gap: 8px;
      justify-content: center;
      margin-bottom: 8px;
      overflow: hidden;
    }
    .merge-grid {
      display: inline-grid; gap: 3px; user-select: none;
      border: 1px solid rgba(255,255,255,.06); border-radius: 8px; padding: 6px;
      background: rgba(0,0,0,.15);
      min-width: 0; flex-shrink: 1;
    }
    .merge-cell {
      min-width: 22px; min-height: 22px;
      background: rgba(255,255,255,.04);
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 4px; cursor: crosshair;
      display: flex; align-items: center; justify-content: center;
      font-size: 8px; opacity: .5; transition: all .12s ease;
    }
    .merge-cell.selecting {
      background: linear-gradient(135deg,rgba(0,127,212,.35),rgba(0,200,255,.20));
      border-color: rgba(0,160,230,.5); opacity: 1;
    }
    .merge-cell.merged {
      background: linear-gradient(135deg,rgba(100,200,100,.20),rgba(60,180,60,.12));
      border-color: rgba(100,200,100,.4); opacity: 1;
    }
    .merge-cell.merged-origin { font-size: 9px; font-weight: 600; opacity: .8; }
    .merge-side {
      display: flex; flex-direction: column; gap: 4px; flex-shrink: 0;
    }
    .merge-side .glass-btn { font-size: 9px; padding: 5px 6px; min-width: 0; width: auto; }
    .merge-bottom {
      display: flex; align-items: center; justify-content: center; gap: 12px;
      margin-bottom: 12px;
    }
    .merge-legend {
      display: flex; gap: 10px; font-size: 9px; opacity: .5;
    }
    .merge-legend-item { display: flex; align-items: center; gap: 3px; }
    .merge-legend-swatch {
      width: 8px; height: 8px; border-radius: 2px; border: 1px solid rgba(255,255,255,.12);
    }
    .merge-legend-swatch.sel { background: linear-gradient(135deg,rgba(0,127,212,.35),rgba(0,200,255,.20)); }
    .merge-legend-swatch.mrg { background: linear-gradient(135deg,rgba(100,200,100,.20),rgba(60,180,60,.12)); }

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
    ${ve()?"":`
    <div class="pty-banner" id="ptyBanner">
      <span class="pty-banner-icon">\u26A0</span>
      <span class="pty-banner-text">${i.l10n.t("node-pty is required to use Terminal Grid.")}</span>
      <button class="pty-banner-btn" id="ptyInstallBtn">${i.l10n.t("Install")}</button>
    </div>
    `}
    <!-- Projects -->
    <div class="glass-card" data-section="projects">
      <div class="section-header collapsible">
        <div class="section-label">${i.l10n.t("Projects")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${i.l10n.t("Register projects and click to switch folders. Ctrl+Click to open in a new window. If a preset is linked, it will be auto-applied on switch.")}
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
            <span class="btn-icon" style="font-size: 12px;">+</span> ${i.l10n.t("Add Current Folder")}
          </button>
          <button class="glass-btn" id="browseProjectBtn" style="font-size: 11px; padding: 8px 10px;">
            <span class="btn-icon" style="font-size: 12px;">&#128193;</span> ${i.l10n.t("Browse Folder")}
          </button>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="gridSize">
      <div class="section-header collapsible">
        <div class="section-label">${i.l10n.t("Select Grid Size")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${i.l10n.t("Hover to select the desired rows\xD7cols size. Supports up to 4\xD75 (20 cells). Grid opens as an editor tab, each cell is an independent terminal. Drag cells below to merge them into one larger terminal.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="grid-selector-wrap">
          <div class="grid-selector" id="gridSelector"></div>
        </div>
        <div class="size-label" id="sizeLabel"></div>
        <div class="merge-row">
          <div class="merge-grid" id="mergeGrid"></div>
          <div class="merge-side">
            <button class="glass-btn" id="mergeBtn" disabled>${i.l10n.t("Merge")}</button>
            <button class="glass-btn" id="unmergeBtn" disabled>${i.l10n.t("Unmerge")}</button>
            <button class="glass-btn" id="mergeClearBtn">${i.l10n.t("Clear")}</button>
          </div>
        </div>
        <div class="merge-bottom">
          <div class="merge-legend">
            <div class="merge-legend-item"><div class="merge-legend-swatch sel"></div> ${i.l10n.t("Selection")}</div>
            <div class="merge-legend-item"><div class="merge-legend-swatch mrg"></div> ${i.l10n.t("Merged")}</div>
          </div>
        </div>
        <button class="glass-btn primary" id="openGridBtn">
          <span class="btn-icon">&#9654;</span> ${i.l10n.t("Open Grid")}
        </button>
      </div>
    </div>

    <div class="glass-card" data-section="settings">
      <div class="section-header collapsible">
        <div class="section-label">${i.l10n.t("Terminal Settings")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${i.l10n.t("Zoom: Global font size (50\u2013300%). Font/Color: Use tabs for global or per-cell settings. Changes in All tab apply to all cells. Set global first, then customize individual cells. Individual cells can be zoomed separately with Ctrl+Wheel.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="setting-row">
          <span class="setting-label">${i.l10n.t("Zoom")}</span>
          <div class="stepper">
            <button class="stepper-btn" id="zoomDown">\u2212</button>
            <span class="stepper-val" id="zoomVal">100%</span>
            <button class="stepper-btn" id="zoomUp">+</button>
          </div>
        </div>

        <div id="settingsTabs" class="settings-tabs hidden"></div>

        <div class="setting-row">
          <span class="setting-label">${i.l10n.t("Theme")}</span>
          <div class="font-picker" id="themePicker">
            <div class="font-display" id="themeDisplay">
              <span class="font-display-text" id="themeDisplayText">${i.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="themeDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${i.l10n.t("Font")}</span>
          <div class="font-picker" id="fontPicker">
            <div class="font-display" id="fontDisplay">
              <span class="font-display-text" id="fontDisplayText">${i.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="fontDropdown"></div>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${i.l10n.t("Back Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="bgSwatch">
              <div class="color-swatch-fill" id="bgSwatchFill"></div>
              <input type="color" id="bgColorInput" value="#1e1e1e">
            </div>
            <span class="color-val" id="bgVal">${i.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="bgReset" title="${i.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

        <div class="setting-row">
          <span class="setting-label">${i.l10n.t("Font Color")}</span>
          <div class="color-row">
            <div class="color-swatch" id="fgSwatch">
              <div class="color-swatch-fill" id="fgSwatchFill"></div>
              <input type="color" id="fgColorInput" value="#cccccc">
            </div>
            <span class="color-val" id="fgVal">${i.l10n.t("IDE Default")}</span>
            <button class="color-reset hidden" id="fgReset" title="${i.l10n.t("Reset to IDE Default")}">\xD7</button>
          </div>
        </div>

      </div>
    </div>

    <!-- Startup Commands -->
    <div class="glass-card" data-section="startup">
      <div class="section-header collapsible">
        <div class="section-label">${i.l10n.t("Startup Commands")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${i.l10n.t("Set shell type and startup command per cell. Use All tab for global defaults, or individual tabs for per-cell overrides.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="cmdTabs" class="settings-tabs hidden"></div>
        <div class="setting-row">
          <span class="setting-label">${i.l10n.t("Shell")}</span>
          <div class="font-picker" id="shellPicker">
            <div class="font-display" id="shellDisplay">
              <span class="font-display-text" id="shellDisplayText">${i.l10n.t("IDE Default")}</span>
              <span class="font-display-arrow">\u25B2</span>
            </div>
            <div class="font-dropdown" id="shellDropdown"></div>
          </div>
        </div>
        <div class="setting-row">
          <span class="setting-label">${i.l10n.t("Command")}</span>
          <select class="glass-select" id="cmdPreset" style="flex:1;min-width:0;">
            <option value="">${i.l10n.t("Select command\u2026")}</option>
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
            <option value="__custom__">${i.l10n.t("Custom command\u2026")}</option>
            <option value="__timeout__">${i.l10n.t("Timeout (ms)\u2026")}</option>
          </select>
        </div>
        <div class="cmd-add-row" id="cmdCustomRow" style="display:none;">
          <input class="glass-input" id="cmdCustom" placeholder="${i.l10n.t("Custom command\u2026")}" style="flex:1;min-width:0;" />
          <button class="stepper-btn" id="cmdApplyBtn" title="${i.l10n.t("Apply")}">&#10003;</button>
        </div>
        <div class="cmd-add-row" id="cmdTimeoutRow" style="display:none;">
          <input class="glass-input" type="number" id="cmdTimeoutMs" placeholder="${i.l10n.t("Milliseconds (e.g. 1500)")}" min="100" step="100" style="flex:1;min-width:0;" />
          <button class="stepper-btn" id="cmdTimeoutApplyBtn" title="${i.l10n.t("Apply")}">&#10003;</button>
        </div>
        <div class="cmd-summary-divider"></div>
        <div id="cmdSummaryList" class="cmd-summary-list"></div>
      </div>
    </div>

    <!-- Presets -->
    <div class="glass-card" data-section="presets">
      <div class="section-header collapsible">
        <div class="section-label">${i.l10n.t("Presets")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${i.l10n.t("Save and load current grid settings (size, zoom, font, color, commands, cell labels) as presets. Use Link to project for per-project auto-apply.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="cmd-add-row">
          <input class="glass-input" id="presetNameInput" placeholder="${i.l10n.t("Preset name\u2026")}" style="flex: 1;" />
        </div>
        <div class="cmd-add-row" style="margin-top: 4px;">
          <select class="glass-select" id="presetSelect" style="flex: 1;">
            <option value="">${i.l10n.t("Select preset\u2026")}</option>
          </select>
        </div>
        <div class="btn-group" style="gap: 6px; margin-top: 8px;">
          <div style="display: flex; gap: 6px;">
            <button class="glass-btn" id="presetSaveBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${i.l10n.t("Save")}</button>
            <button class="glass-btn primary" id="presetLoadBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${i.l10n.t("Load")}</button>
            <button class="glass-btn" id="presetDeleteBtn" style="font-size: 11px; padding: 8px 10px; flex: 1;">${i.l10n.t("Delete")}</button>
          </div>
          <div id="presetLinkRow" style="display: flex; align-items: center; gap: 6px; font-size: 11px; opacity: .7; margin-top: 4px;">
            <input type="checkbox" id="presetLinkCheck" style="margin: 0;" />
            <label id="presetLinkLabel" for="presetLinkCheck" style="cursor: pointer;">${i.l10n.t("Link to current project")}</label>
          </div>
        </div>
      </div>
    </div>

    <!-- Broadcast Input -->
    <div class="glass-card" data-section="broadcast">
      <div class="section-header collapsible">
        <div class="section-label">${i.l10n.t("Broadcast Input")}</div>
        <span class="tip-wrap">
          <span class="tip-icon">?</span>
          <div class="tip-bubble">
            ${i.l10n.t("Send text to selected terminals. Check All to send to all cells, uncheck for individual selection.")}
          </div>
        </span>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div id="broadcastTargets" class="broadcast-targets hidden"></div>
        <div class="cmd-add-row" style="flex-direction: column; gap: 4px;">
          <textarea class="glass-input" id="broadcastInput" placeholder="${i.l10n.t("Type command\u2026")}" rows="3" style="width: 100%; resize: vertical; font-family: var(--vscode-editor-fontFamily, monospace); font-size: 12px; line-height: 1.4;"></textarea>
          <div style="display: flex; justify-content: flex-end;">
            <button class="stepper-btn" id="broadcastSendBtn" title="${i.l10n.t("Send")}" style="width: 50px;">${i.l10n.t("Send")}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="glass-card" data-section="actions">
      <div class="section-header collapsible">
        <div class="section-label">${i.l10n.t("Actions")}</div>
        <span class="collapse-icon">\u25BE</span>
      </div>
      <div class="section-body">
        <div class="btn-group">
          <button class="glass-btn" id="reloadBtn">
            <span class="btn-icon">&#8635;</span> ${i.l10n.t("Reload Window")}
          </button>
        </div>
      </div>
    </div>

    <div class="hint">
      ${i.l10n.t(`Grid opens as an editor tab.
Ctrl+Wheel to zoom individual cells.`).replace(`
`,"<br>")}
    </div>
  </div>

  <script nonce="${e}">
    var __i18n = ${JSON.stringify({installing:i.l10n.t("Installing\u2026"),ideDefault:i.l10n.t("IDE Default"),remove:i.l10n.t("Remove"),addFontFile:i.l10n.t("Add font file\u2026"),all:i.l10n.t("All"),noStartupCommands:i.l10n.t("No startup commands configured"),noProjects:i.l10n.t("No projects registered"),linkedPrefix:i.l10n.t("Linked: {0}"),linkToProject:i.l10n.t("Link to current project"),selectPreset:i.l10n.t("Select preset\u2026"),reload:i.l10n.t("Reload"),retry:i.l10n.t("Retry"),ptyInstalled:i.l10n.t("node-pty installed successfully!"),ptyInstalledHint:i.l10n.t("Reload the window to activate."),theme:i.l10n.t("Theme"),shellAuto:i.l10n.t("IDE Default"),shell:i.l10n.t("Shell")})};
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

    // \u2500\u2500 Cell Merge preview grid \u2500\u2500
    var mergeGridEl = document.getElementById('mergeGrid');
    var mergeBtn = document.getElementById('mergeBtn');
    var unmergeBtn = document.getElementById('unmergeBtn');
    var mergeClearBtn = document.getElementById('mergeClearBtn');
    var mergeCells = [];       // { el, row, col }
    var mergedRegions = [];    // { startRow, startCol, rowSpan, colSpan }
    var mergeSelStart = null;  // { row, col }
    var mergeSelEnd = null;    // { row, col }
    var mergeDragging = false;
    var mergeRows = selectedRows, mergeCols = selectedCols;

    function buildMergeGrid() {
      mergeRows = selectedRows;
      mergeCols = selectedCols;
      mergeGridEl.innerHTML = '';
      mergeCells = [];
      mergeGridEl.style.gridTemplateColumns = 'repeat(' + mergeCols + ', 1fr)';
      for (var r = 0; r < mergeRows; r++) {
        for (var c = 0; c < mergeCols; c++) {
          (function(row, col) {
            var cell = document.createElement('div');
            cell.className = 'merge-cell';
            cell.textContent = String(row * mergeCols + col + 1);
            cell.addEventListener('mousedown', function(e) {
              e.preventDefault();
              mergeDragging = true;
              mergeSelStart = { row: row, col: col };
              mergeSelEnd = { row: row, col: col };
              renderMergeGrid();
            });
            cell.addEventListener('mouseenter', function() {
              if (mergeDragging && mergeSelStart) {
                mergeSelEnd = { row: row, col: col };
                renderMergeGrid();
              }
            });
            mergeGridEl.appendChild(cell);
            mergeCells.push({ el: cell, row: row, col: col });
          })(r, c);
        }
      }
      renderMergeGrid();
    }

    document.addEventListener('mouseup', function() {
      if (mergeDragging) {
        mergeDragging = false;
        renderMergeGrid();
      }
    });

    function getSelectionRect() {
      if (!mergeSelStart || !mergeSelEnd) return null;
      var r1 = Math.min(mergeSelStart.row, mergeSelEnd.row);
      var r2 = Math.max(mergeSelStart.row, mergeSelEnd.row);
      var c1 = Math.min(mergeSelStart.col, mergeSelEnd.col);
      var c2 = Math.max(mergeSelStart.col, mergeSelEnd.col);
      if (r1 === r2 && c1 === c2) return null; // single cell = no selection
      return { r1: r1, r2: r2, c1: c1, c2: c2 };
    }

    function getMergedRegionAt(row, col) {
      for (var i = 0; i < mergedRegions.length; i++) {
        var m = mergedRegions[i];
        if (row >= m.startRow && row < m.startRow + m.rowSpan &&
            col >= m.startCol && col < m.startCol + m.colSpan) {
          return m;
        }
      }
      return null;
    }

    // Returns { absorbed: [indices], conflicts: [indices] }
    // absorbed = fully inside selection \u2192 will be removed on merge
    // conflicts = partially overlapping \u2192 blocks merge
    function checkSelectionMergeCompat(rect) {
      var absorbed = [], conflicts = [];
      for (var i = 0; i < mergedRegions.length; i++) {
        var m = mergedRegions[i];
        var mR1 = m.startRow, mR2 = m.startRow + m.rowSpan - 1;
        var mC1 = m.startCol, mC2 = m.startCol + m.colSpan - 1;
        var overlaps = !(mR2 < rect.r1 || mR1 > rect.r2 || mC2 < rect.c1 || mC1 > rect.c2);
        if (!overlaps) continue;
        var fullyContained = mR1 >= rect.r1 && mR2 <= rect.r2 && mC1 >= rect.c1 && mC2 <= rect.c2;
        if (fullyContained) { absorbed.push(i); } else { conflicts.push(i); }
      }
      return { absorbed: absorbed, conflicts: conflicts };
    }

    function renderMergeGrid() {
      var sel = getSelectionRect();
      // Check if single selected cell is inside a merged region (for unmerge)
      var clickedRegion = null;
      if (!sel && mergeSelStart && !mergeDragging) {
        clickedRegion = getMergedRegionAt(mergeSelStart.row, mergeSelStart.col);
      }

      for (var i = 0; i < mergeCells.length; i++) {
        var mc = mergeCells[i];
        var el = mc.el;
        el.className = 'merge-cell';
        // Explicit grid position for every cell to prevent auto-placement issues
        el.style.gridColumn = String(mc.col + 1);
        el.style.gridRow = String(mc.row + 1);
        el.style.display = '';
        el.textContent = String(mc.row * mergeCols + mc.col + 1);

        // Mark merged cells
        var region = getMergedRegionAt(mc.row, mc.col);
        if (region) {
          if (mc.row === region.startRow && mc.col === region.startCol) {
            el.classList.add('merged', 'merged-origin');
            el.style.gridColumn = (mc.col + 1) + ' / span ' + region.colSpan;
            el.style.gridRow = (mc.row + 1) + ' / span ' + region.rowSpan;
            var cellNums = [];
            for (var rr = region.startRow; rr < region.startRow + region.rowSpan; rr++) {
              for (var cc = region.startCol; cc < region.startCol + region.colSpan; cc++) {
                cellNums.push(rr * mergeCols + cc + 1);
              }
            }
            el.textContent = cellNums.join('+');
          } else {
            el.style.display = 'none';
          }
        }

        // Mark selection
        if (sel && mc.row >= sel.r1 && mc.row <= sel.r2 && mc.col >= sel.c1 && mc.col <= sel.c2) {
          el.classList.add('selecting');
        }

        // Highlight clicked merged region for unmerge
        if (clickedRegion && region === clickedRegion) {
          el.classList.add('selecting');
        }
      }

      // Update buttons
      var compat = sel ? checkSelectionMergeCompat(sel) : null;
      var canMerge = sel && compat && compat.conflicts.length === 0;
      mergeBtn.disabled = !canMerge;
      unmergeBtn.disabled = !clickedRegion;
    }

    mergeBtn.addEventListener('click', function() {
      var sel = getSelectionRect();
      if (!sel) return;
      var compat = checkSelectionMergeCompat(sel);
      if (compat.conflicts.length > 0) return;
      // Remove absorbed regions (reverse order to keep indices valid)
      var toRemove = compat.absorbed.slice().sort(function(a, b) { return b - a; });
      for (var i = 0; i < toRemove.length; i++) {
        mergedRegions.splice(toRemove[i], 1);
      }
      mergedRegions.push({
        startRow: sel.r1, startCol: sel.c1,
        rowSpan: sel.r2 - sel.r1 + 1, colSpan: sel.c2 - sel.c1 + 1
      });
      mergeSelStart = null;
      mergeSelEnd = null;
      renderMergeGrid();
      vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions });
    });

    unmergeBtn.addEventListener('click', function() {
      if (!mergeSelStart) return;
      var region = getMergedRegionAt(mergeSelStart.row, mergeSelStart.col);
      if (!region) return;
      var idx = mergedRegions.indexOf(region);
      if (idx >= 0) mergedRegions.splice(idx, 1);
      mergeSelStart = null;
      mergeSelEnd = null;
      renderMergeGrid();
      vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions });
    });

    mergeClearBtn.addEventListener('click', function() {
      mergedRegions = [];
      mergeSelStart = null;
      mergeSelEnd = null;
      renderMergeGrid();
      vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions });
    });

    // Rebuild merge grid when grid size changes
    var origGridClick = null;
    function hookGridSizeChange() {
      var observer = new MutationObserver(function() {
        if (mergeRows !== selectedRows || mergeCols !== selectedCols) {
          mergedRegions = [];
          mergeSelStart = null;
          mergeSelEnd = null;
          buildMergeGrid();
          vscode.postMessage({ type: 'saveMergeRegions', regions: mergedRegions });
        }
      });
      observer.observe(document.getElementById('sizeLabel'), { childList: true, subtree: true });
    }
    hookGridSizeChange();
    buildMergeGrid();

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

    function buildSettingsTabs(total, labels, hidden) {
      var hiddenSet = {};
      if (hidden) for (var h = 0; h < hidden.length; h++) hiddenSet[hidden[h]] = true;
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
      // Per-cell tabs (skip hidden/merged cells)
      for (var i = 0; i < total; i++) {
        if (hiddenSet[i]) continue;
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

    function buildCmdTabs(total, labels, hidden) {
      var hiddenSet = {};
      if (hidden) for (var h = 0; h < hidden.length; h++) hiddenSet[hidden[h]] = true;
      var prevTab = activeCmdTab;
      cmdTabsEl.innerHTML = '';
      if (total <= 0) {
        cmdTabsEl.classList.add('hidden');
        activeCmdTab = 'all';
        return;
      }
      cmdTabsEl.classList.remove('hidden');
      // Check if previous tab still valid (and not hidden)
      var validPrev = prevTab === 'all' || (parseInt(prevTab, 10) < total && !hiddenSet[parseInt(prevTab, 10)]);
      var restoreTab = validPrev ? prevTab : 'all';
      var allBtn = document.createElement('button');
      allBtn.className = 'stab' + (restoreTab === 'all' ? ' active' : '');
      allBtn.dataset.tab = 'all';
      allBtn.textContent = __i18n.all;
      allBtn.addEventListener('click', function() { switchCmdTab('all'); });
      cmdTabsEl.appendChild(allBtn);
      for (var i = 0; i < total; i++) {
        if (hiddenSet[i]) continue;
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

    function buildBroadcastTargets(total, labels, hidden) {
      var hiddenSet = {};
      if (hidden) for (var h = 0; h < hidden.length; h++) hiddenSet[hidden[h]] = true;
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
      // Per-cell checkboxes (skip hidden/merged cells)
      for (var i = 0; i < total; i++) {
        if (hiddenSet[i]) continue;
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
        var curHiddenCells = msg.hiddenCells || [];
        buildBroadcastTargets(gridTotal, msg.cellLabels || [], curHiddenCells);
        buildSettingsTabs(gridTotal, msg.cellLabels || [], curHiddenCells);
        buildCmdTabs(gridTotal, msg.cellLabels || [], curHiddenCells);
        showCmdTabValues();
        applySectionStates(msg.sectionStates || {});
        // Restore merge regions
        if (msg.mergedRegions && msg.mergedRegions.length > 0) {
          mergedRegions = msg.mergedRegions;
          if (mergeRows !== selectedRows || mergeCols !== selectedCols) {
            buildMergeGrid();
          } else {
            renderMergeGrid();
          }
        }
      }
    });

    vscode.postMessage({ type: 'getConfig' });
  </script>
</body>
</html>`}};function we(){let a="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<32;o++)a+=e.charAt(Math.floor(Math.random()*e.length));return a}var K=k(require("http"));var F=class{constructor(e){this._server=null;this._port=e}start(e=10){return new Promise((o,d)=>{this._server=this._createServer();let r=t=>{this._server.removeAllListeners("error"),this._server.on("error",n=>{n.code==="EADDRINUSE"&&t<e?(this._port++,r(t+1)):d(n)}),this._server.listen(this._port,"127.0.0.1",()=>{let n=this._server.address();this._port=n.port,o(this._port)})};r(0)})}_createServer(){return K.createServer((e,o)=>{if(o.setHeader("Content-Type","application/json"),e.method==="OPTIONS"){o.writeHead(204),o.end();return}let d=new URL(e.url||"/",`http://127.0.0.1:${this._port}`);e.method==="GET"&&d.pathname==="/api/health"?(o.writeHead(200),o.end(JSON.stringify({status:"ok"}))):e.method==="GET"&&d.pathname==="/api/info"?this._handleInfo(o):e.method==="POST"&&d.pathname==="/api/send"?this._readBody(e).then(r=>this._handleSend(r,o)):e.method==="POST"&&d.pathname==="/api/read"?this._readBody(e).then(r=>this._handleRead(r,o)):e.method==="POST"&&d.pathname==="/api/broadcast"?this._readBody(e).then(r=>this._handleBroadcast(r,o)):(o.writeHead(404),o.end(JSON.stringify({error:"Not found"})))})}stop(){this._server?.close(),this._server=null}getPort(){return this._port}_handleInfo(e){let o=f.currentPanel;if(!o){e.writeHead(200),e.end(JSON.stringify({grid:null}));return}e.writeHead(200),e.end(JSON.stringify({grid:{rows:o.getRows(),cols:o.getCols(),cellCount:o.getCellCount(),cellLabels:o.getCellLabels()}}))}_handleSend(e,o){let d=f.currentPanel;if(!d){o.writeHead(200),o.end(JSON.stringify({success:!1,error:"No grid open"}));return}let r=typeof e.cellId=="number"?e.cellId:-1,t=typeof e.text=="string"?e.text:"",l=e.submit===!0?d.sendInputToCell(r,t):d.sendToCell(r,t);o.writeHead(200),o.end(JSON.stringify({success:l}))}_handleRead(e,o){let d=f.currentPanel;if(!d){o.writeHead(200),o.end(JSON.stringify({output:null,error:"No grid open"}));return}let r=typeof e.cellId=="number"?e.cellId:-1,t=typeof e.lines=="number"?e.lines:void 0,n=d.readCell(r,t);o.writeHead(200),o.end(JSON.stringify({output:n}))}_handleBroadcast(e,o){let d=f.currentPanel;if(!d){o.writeHead(200),o.end(JSON.stringify({success:!1,error:"No grid open"}));return}let r=typeof e.text=="string"?e.text:"",t=e.submit===!0,n=d.getCellCount();if(t)d.broadcastInput(r);else for(let l=0;l<n;l++)d.sendToCell(l,r);o.writeHead(200),o.end(JSON.stringify({success:!0,cellCount:n}))}_readBody(e){return new Promise(o=>{let d="";e.on("data",r=>{d+=r}),e.on("end",()=>{try{o(JSON.parse(d))}catch{o({})}})})}};function ye(a,e){return{command:"node",args:[y.join(a,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(e)}}}function X(a,e,o){try{let d=y.dirname(a);h.existsSync(d)||h.mkdirSync(d,{recursive:!0});let r={};h.existsSync(a)&&(r=JSON.parse(h.readFileSync(a,"utf-8"))),(!r.mcpServers||typeof r.mcpServers!="object")&&(r.mcpServers={}),r.mcpServers["terminal-grid"]=ye(e,o),h.writeFileSync(a,JSON.stringify(r,null,2),"utf-8")}catch{}}function xe(a,e,o){try{if(!h.existsSync(a))return;let d=JSON.parse(h.readFileSync(a,"utf-8")),r=d?.mcpServers;if(!r||typeof r!="object")return;let t=r["terminal-grid"];if(!t||!Array.isArray(t.args)||t.args.length===0)return;let n=y.join(e,"mcp-server.js");if(t.args[0]===n)return;t.args[0]=n,t.env={...t.env,TERMINAL_GRID_PORT:String(o)},h.writeFileSync(a,JSON.stringify(d,null,2),"utf-8")}catch{}}function Q(a,e){try{let o=y.join(D.homedir(),".codex","config.toml"),d=y.join(a,"mcp-server.js").replace(/\\/g,"\\\\");if(h.existsSync(o)){let n=h.readFileSync(o,"utf-8");if(n.includes("[mcp_servers.terminal-grid]")){let l=n.replace(/(\[mcp_servers\.terminal-grid\][\s\S]*?args\s*=\s*\[")([^"]*)("])/,`$1${d}$3`);l!==n&&h.writeFileSync(o,l,"utf-8");return}}let r=`
[mcp_servers.terminal-grid]
command = "node"
args = ["${d}"]

[mcp_servers.terminal-grid.env]
TERMINAL_GRID_PORT = "${e}"
`,t=y.dirname(o);h.existsSync(t)||h.mkdirSync(t,{recursive:!0}),h.appendFileSync(o,r,"utf-8")}catch{}}function ee(a,e){X(y.join(D.homedir(),".claude.json"),a,e);let o=process.platform==="win32"?process.env.APPDATA||y.join(D.homedir(),"AppData","Roaming"):process.platform==="darwin"?y.join(D.homedir(),"Library","Application Support"):y.join(D.homedir(),".config");X(y.join(o,"Claude","claude_desktop_config.json"),a,e);for(let d of p.workspace.workspaceFolders||[])xe(y.join(d.uri.fsPath,".mcp.json"),a,e)}var M,B;function Ce(a){let e=p.workspace.workspaceFolders?.[0]?.uri.fsPath;if(e){let n=a.globalState.get("projectPresets",{})[e];if(n){let s=a.globalState.get("presets",[]).find(c=>c.name===n);if(s){let c=p.workspace.getConfiguration("terminalGrid");if(c.update("defaultRows",s.rows,p.ConfigurationTarget.Global),c.update("defaultCols",s.cols,p.ConfigurationTarget.Global),c.update("zoomPercent",s.zoomPercent,p.ConfigurationTarget.Global),c.update("fontFamily",s.fontFamily,p.ConfigurationTarget.Global),c.update("backgroundColor",s.bgColor,p.ConfigurationTarget.Global),c.update("foregroundColor",s.fgColor,p.ConfigurationTarget.Global),c.update("colorTheme",s.colorTheme||"",p.ConfigurationTarget.Global),c.update("shellType",s.shellType||"",p.ConfigurationTarget.Global),a.globalState.update("startupCommands",s.startupCommands||[]),a.globalState.update("cellLabels",s.cellLabels||[]),a.globalState.update("defaultCommand",s.defaultCommand||""),s.defaultSteps?a.globalState.update("defaultSteps",s.defaultSteps):s.defaultCommand?a.globalState.update("defaultSteps",[{type:"command",input:s.defaultCommand}]):a.globalState.update("defaultSteps",[]),s.cellStepsOverrides){let g=a.globalState.get("cellOverrides",{});for(let[b,w]of Object.entries(s.cellStepsOverrides))g[Number(b)]||(g[Number(b)]={}),Array.isArray(w.startupSteps)&&(g[Number(b)].startupSteps=w.startupSteps);a.globalState.update("cellOverrides",g)}}}}let o=new O(a),d=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890);d>0&&(M=new F(d),M.start().then(t=>{B=p.window.createStatusBarItem(p.StatusBarAlignment.Right,50),B.text=`$(broadcast) TG :${t}`,B.tooltip=p.l10n.t("Terminal Grid API active on port {0}",t),B.command="terminalGrid.copyMcpConfig",B.show(),a.subscriptions.push(B),o.setMcpPort(t),ee(a.extensionPath,t),Q(a.extensionPath,t)}).catch(t=>{p.window.showWarningMessage(p.l10n.t("Terminal Grid API bridge failed to start: {0}",t.message))}));let r=p.lm;if(typeof r?.registerMcpServerDefinitionProvider=="function"){let t=new p.EventEmitter,n=d,l=r.registerMcpServerDefinitionProvider;a.subscriptions.push(l("terminalGrid",{onDidChangeMcpServerDefinitions:t.event,provideMcpServerDefinitions:async()=>{if(n<=0)return[];let s=p.McpStdioServerDefinition;return s?[new s("Terminal Grid","node",[y.join(a.extensionPath,"mcp-server.js")],{TERMINAL_GRID_PORT:String(n)},a.extension.packageJSON.version)]:[]}}),t),a.subscriptions.push(p.workspace.onDidChangeConfiguration(s=>{s.affectsConfiguration("terminalGrid.apiPort")&&(n=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890),t.fire())}))}a.subscriptions.push(p.workspace.onDidChangeConfiguration(t=>{if(t.affectsConfiguration("terminalGrid.apiPort")){let n=p.workspace.getConfiguration("terminalGrid").get("apiPort",7890);n>0&&(ee(a.extensionPath,n),Q(a.extensionPath,n))}})),a.subscriptions.push(p.window.registerWebviewViewProvider(O.viewType,o)),a.subscriptions.push(p.commands.registerCommand("terminalGrid._refreshSidebar",()=>{o.sendConfig()})),a.subscriptions.push(p.window.registerWebviewPanelSerializer("terminalGrid",{async deserializeWebviewPanel(t,n){let l=a.globalState.get("lastGrid");l?f.revive(t,a,l.rows,l.cols):t.dispose()}})),a.subscriptions.push(p.commands.registerCommand("terminalGrid.openGrid",()=>{let t=p.workspace.getConfiguration("terminalGrid"),n=t.get("defaultRows",2),l=t.get("defaultCols",3);f.createOrShow(a,n,l)}),p.commands.registerCommand("terminalGrid.openCustomGrid",(t,n)=>{f.createOrShow(a,t,n)}),p.commands.registerCommand("terminalGrid.open2x2",()=>f.createOrShow(a,2,2)),p.commands.registerCommand("terminalGrid.open2x3",()=>f.createOrShow(a,2,3)),p.commands.registerCommand("terminalGrid.open3x3",()=>f.createOrShow(a,3,3)),p.commands.registerCommand("terminalGrid.sendToCell",(t,n)=>f.currentPanel?.sendToCell(t,n)??!1),p.commands.registerCommand("terminalGrid.readCell",(t,n)=>f.currentPanel?.readCell(t,n)??null),p.commands.registerCommand("terminalGrid.getGridInfo",()=>{let t=f.currentPanel;return t?{rows:t.getRows(),cols:t.getCols(),cellCount:t.getCellCount(),cellLabels:t.getCellLabels()}:null}),p.commands.registerCommand("terminalGrid.testAPI",async()=>{let t=p.window.createOutputChannel("Terminal Grid Tests");t.show(),t.appendLine(`=== Terminal Grid API Tests ===
`);let n=0,l=0;function s(v,S,T){let E=S?"PASS":"FAIL";S?n++:l++,t.appendLine(`[${E}] ${v}${T?" \u2014 "+T:""}`)}let c=await p.commands.executeCommand("terminalGrid.getGridInfo");if(!c){t.appendLine("[FAIL] getGridInfo returned null. Open a grid first.");return}s("getGridInfo returns object",!!c,JSON.stringify(c)),s("rows is number",typeof c.rows=="number",`rows=${c.rows}`),s("cols is number",typeof c.cols=="number",`cols=${c.cols}`),s("cellCount = rows*cols",c.cellCount===c.rows*c.cols,`${c.cellCount}`),s("cellLabels is array",Array.isArray(c.cellLabels),`length=${c.cellLabels.length}`),s("cellLabels.length = cellCount",c.cellLabels.length===c.cellCount);let g=await p.commands.executeCommand("terminalGrid.sendToCell",0,"echo __API_TEST__\r");s("sendToCell(0) returns true",g===!0);let b=await p.commands.executeCommand("terminalGrid.sendToCell",999,"x\r");s("sendToCell(999) returns false",b===!1,`got ${b}`);let w=await p.commands.executeCommand("terminalGrid.sendToCell",0,"TYPED_ONLY");s("sendToCell without \\r returns true",w===!0),await new Promise(v=>setTimeout(v,2e3)),await p.commands.executeCommand("terminalGrid.sendToCell",0,"");let _=await p.commands.executeCommand("terminalGrid.readCell",0);s("readCell(0) returns string",typeof _=="string",`length=${_?.length??0}`),s("readCell(0) contains test marker",!!_&&_.includes("__API_TEST__"));let m=await p.commands.executeCommand("terminalGrid.readCell",0,3);s("readCell(0, 3) returns string",typeof m=="string");let C=await p.commands.executeCommand("terminalGrid.readCell",0,0);s("readCell(0, 0) returns empty",C==="",`got "${C}"`);let x=await p.commands.executeCommand("terminalGrid.readCell",999);if(s("readCell(999) returns null",x===null,`got ${x}`),c.cellCount>1){let v=await p.commands.executeCommand("terminalGrid.sendToCell",1,"echo CELL1_OK\r");s("sendToCell(1) returns true",v===!0),await new Promise(T=>setTimeout(T,1500));let S=await p.commands.executeCommand("terminalGrid.readCell",1);s("readCell(1) contains CELL1_OK",!!S&&S.includes("CELL1_OK"))}t.appendLine(`
=== ${n} passed, ${l} failed ===`),l===0?p.window.showInformationMessage(p.l10n.t("Terminal Grid API: All {0} tests passed!",n)):p.window.showWarningMessage(p.l10n.t("Terminal Grid API: {0} test(s) failed. See output.",l))}),p.commands.registerCommand("terminalGrid.copyMcpConfig",()=>{let t=M?.getPort()??7890,l={mcpServers:{"terminal-grid":{command:"node",args:[y.join(a.extensionPath,"mcp-server.js")],env:{TERMINAL_GRID_PORT:String(t)}}}};p.env.clipboard.writeText(JSON.stringify(l,null,2)),p.window.showInformationMessage(p.l10n.t("Terminal Grid MCP config copied to clipboard (port {0})",t))}))}function Se(){M?.stop(),M=void 0,f.currentPanel?.dispose()}0&&(module.exports={activate,deactivate});
