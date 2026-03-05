import * as http from "http";
import { TerminalGridPanel } from "./TerminalGridPanel";

export class McpBridge {
  private _server: http.Server | null = null;
  private _port: number;

  constructor(port: number) {
    this._port = port;
  }

  start(retries = 10): Promise<number> {
    return new Promise((resolve, reject) => {
      this._server = this._createServer();

      const tryListen = (attempt: number): void => {
        this._server!.removeAllListeners("error");
        this._server!.on("error", (err: NodeJS.ErrnoException) => {
          if (err.code === "EADDRINUSE" && attempt < retries) {
            this._port++;
            tryListen(attempt + 1);
          } else {
            reject(err);
          }
        });
        this._server!.listen(this._port, "127.0.0.1", () => {
          const addr = this._server!.address() as { port: number };
          this._port = addr.port;
          resolve(this._port);
        });
      };

      tryListen(0);
    });
  }

  private _createServer(): http.Server {
    return http.createServer((req, res) => {
      res.setHeader("Content-Type", "application/json");

      if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
      }

      const url = new URL(req.url || "/", `http://127.0.0.1:${this._port}`);

      if (req.method === "GET" && url.pathname === "/api/health") {
        res.writeHead(200);
        res.end(JSON.stringify({ status: "ok" }));
      } else if (req.method === "GET" && url.pathname === "/api/info") {
        this._handleInfo(res);
      } else if (req.method === "POST" && url.pathname === "/api/send") {
        this._readBody(req).then((body) => this._handleSend(body, res));
      } else if (req.method === "POST" && url.pathname === "/api/read") {
        this._readBody(req).then((body) => this._handleRead(body, res));
      } else if (req.method === "POST" && url.pathname === "/api/broadcast") {
        this._readBody(req).then((body) => this._handleBroadcast(body, res));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: "Not found" }));
      }
    });
  }

  stop(): void {
    this._server?.close();
    this._server = null;
  }

  getPort(): number {
    return this._port;
  }

  private _handleInfo(res: http.ServerResponse): void {
    const panel = TerminalGridPanel.currentPanel;
    if (!panel) {
      res.writeHead(200);
      res.end(JSON.stringify({ grid: null }));
      return;
    }
    res.writeHead(200);
    res.end(
      JSON.stringify({
        grid: {
          rows: panel.getRows(),
          cols: panel.getCols(),
          cellCount: panel.getCellCount(),
          cellLabels: panel.getCellLabels(),
        },
      })
    );
  }

  private _handleSend(
    body: Record<string, unknown>,
    res: http.ServerResponse
  ): void {
    const panel = TerminalGridPanel.currentPanel;
    if (!panel) {
      res.writeHead(200);
      res.end(JSON.stringify({ success: false, error: "No grid open" }));
      return;
    }
    const cellId = typeof body.cellId === "number" ? body.cellId : -1;
    const text = typeof body.text === "string" ? body.text : "";
    const submit = body.submit === true;
    const result = submit
      ? panel.sendInputToCell(cellId, text)
      : panel.sendToCell(cellId, text);
    res.writeHead(200);
    res.end(JSON.stringify({ success: result }));
  }

  private _handleRead(
    body: Record<string, unknown>,
    res: http.ServerResponse
  ): void {
    const panel = TerminalGridPanel.currentPanel;
    if (!panel) {
      res.writeHead(200);
      res.end(JSON.stringify({ output: null, error: "No grid open" }));
      return;
    }
    const cellId = typeof body.cellId === "number" ? body.cellId : -1;
    const lines = typeof body.lines === "number" ? body.lines : undefined;
    const output = panel.readCell(cellId, lines);
    res.writeHead(200);
    res.end(JSON.stringify({ output }));
  }

  private _handleBroadcast(
    body: Record<string, unknown>,
    res: http.ServerResponse
  ): void {
    const panel = TerminalGridPanel.currentPanel;
    if (!panel) {
      res.writeHead(200);
      res.end(JSON.stringify({ success: false, error: "No grid open" }));
      return;
    }
    const text = typeof body.text === "string" ? body.text : "";
    const submit = body.submit === true;
    const count = panel.getCellCount();
    if (submit) {
      panel.broadcastInput(text);
    } else {
      for (let i = 0; i < count; i++) {
        panel.sendToCell(i, text);
      }
    }
    res.writeHead(200);
    res.end(JSON.stringify({ success: true, cellCount: count }));
  }

  private _readBody(
    req: http.IncomingMessage
  ): Promise<Record<string, unknown>> {
    return new Promise((resolve) => {
      let data = "";
      req.on("data", (chunk: string) => {
        data += chunk;
      });
      req.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve({});
        }
      });
    });
  }
}
