# Terminal Grid

[English](../README.md) | [한국어](./README.ko.md) | [中文](./README.zh-CN.md) | [日本語](./README.ja.md) | [Português (Brasil)](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md) | [Deutsch](./README.de.md)

<p align="center">
  <img src="https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/icon.png" width="128" alt="Terminal Grid">
</p>

> 하나의 에디터 탭에 여러 터미널을 — xterm.js + node-pty 기반 tmux 스타일 패널

![Terminal Grid Screenshot](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/screenshot.png)

## 기능

### 그리드 레이아웃

최대 4x5 (20개) 터미널을 커스텀 가능한 그리드로 배치. 셀 경계를 드래그하여 크기 조절 — 엑셀처럼.

![Grid Layout](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-grid-open.gif)

### 시작 명령 & 프리셋

터미널 생성 시 자동 실행 명령 설정. 전체 그리드 구성을 프리셋으로 저장 — 프로젝트별 자동 로드 지원.

![Startup Commands](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-startup-commands.gif)

### 셀별 커스터마이징

셀마다 개별 배경색, 전경색, 폰트 설정. 전체 셀에 일괄 적용하거나 개별 커스터마이징 가능.

![Cell Customization](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-cell-customize.gif)

### 브로드캐스트 입력

전체 또는 선택한 셀에 명령 동시 전송. Claude Code, Codex 등 LLM CLI 도구를 위한 CSI u (Kitty 키보드 프로토콜) 지원.

![Broadcast](https://raw.githubusercontent.com/koenma-studio/terminal-grid/main/images/demo-broadcast.gif)

### MCP 서버 & Agent API

LLM 오케스트레이션을 위한 내장 HTTP 브릿지. Claude Code, Codex 또는 모든 MCP 클라이언트에서 프로그래밍 방식으로 터미널 제어.

### 기타 기능

- **셀 라벨** — 각 터미널에 이름 지정
- **컨텍스트 메뉴** — 우클릭으로 붙여넣기, 지우기, 재시작, 종료, 이름 변경
- **테마** — 8가지 내장 색상 테마
- **커스텀 폰트** — .ttf/.otf/.woff/.woff2 파일 로드
- **Remote-SSH 호환** — 바로 사용 가능
- **접이식 사이드바** — 모든 섹션 접기/펼치기, 상태 자동 저장

## 빠른 시작

1. 확장 설치
2. `Ctrl+Shift+P` → **Terminal Grid: Open Grid**
3. 에디터 영역에 터미널 그리드 표시

## 명령어

| 명령어 | 설명 |
|--------|------|
| `Terminal Grid: Open Grid` | 기본 크기로 그리드 열기 (설정 참조) |
| `Terminal Grid: Open 2x2` | 2x2 그리드 열기 |
| `Terminal Grid: Open 2x3` | 2x3 그리드 열기 |
| `Terminal Grid: Open 3x3` | 3x3 그리드 열기 |
| `Terminal Grid: Open Custom Grid` | 커스텀 크기 그리드 열기 |
| `Terminal Grid: Copy MCP Config` | MCP 서버 설정을 클립보드에 복사 |

## 설정

| 설정 | 기본값 | 설명 |
|------|--------|------|
| `terminalGrid.defaultRows` | `2` | 기본 행 수 (1–4) |
| `terminalGrid.defaultCols` | `3` | 기본 열 수 (1–5) |
| `terminalGrid.zoomPercent` | `100` | 전역 터미널 폰트 줌 (50–300%) |
| `terminalGrid.fontFamily` | `""` | 폰트 패밀리 오버라이드 (빈값 = IDE 테마) |
| `terminalGrid.backgroundColor` | `""` | 배경색 오버라이드 (빈값 = IDE 테마) |
| `terminalGrid.foregroundColor` | `""` | 전경색 오버라이드 (빈값 = IDE 테마) |
| `terminalGrid.apiPort` | `7890` | MCP HTTP 브릿지 포트 (0 = 비활성화) |

## MCP 연동

Terminal Grid에는 LLM 오케스트레이션을 위한 MCP (Model Context Protocol) 서버가 내장되어 있습니다.

### 설정 방법

1. `Ctrl+Shift+P` → **Terminal Grid: Copy MCP Config**
2. MCP 클라이언트 설정에 붙여넣기 (예: `~/.claude/settings.json`)

### MCP 도구

| 도구 | 설명 |
|------|------|
| `get_grid_info` | 그리드 크기, 셀 수, 라벨 조회 |
| `send_to_cell` | 특정 셀에 텍스트 전송 (`\r` 추가 시 실행) |
| `read_cell` | 셀의 터미널 출력 읽기 |
| `broadcast` | 모든 셀에 동시 전송 |

## Agent API

다른 확장에서 VS Code 명령으로 Terminal Grid를 프로그래밍 제어할 수 있습니다:

```typescript
// 그리드 정보 조회
const info = await vscode.commands.executeCommand('terminalGrid.getGridInfo');

// 셀 0에 명령 전송
await vscode.commands.executeCommand('terminalGrid.sendToCell', 0, 'echo hello\r');

// 셀 0 출력 읽기 (최근 10줄)
const output = await vscode.commands.executeCommand('terminalGrid.readCell', 0, 10);
```

## 요구사항

- VS Code 1.80.0+
- node-pty (첫 사용 시 자동 설치 안내)

## 라이선스

[MIT](../LICENSE)
