#!/usr/bin/env node
// Terminal Grid MCP Server
// Bridges MCP protocol (stdio) to Terminal Grid's HTTP API
//
// Usage:
//   node mcp-server.js [--port PORT]
//
// Environment:
//   TERMINAL_GRID_PORT - HTTP bridge port (default: 7890)

const http = require("http");
const readline = require("readline");

const PORT = (() => {
  const idx = process.argv.indexOf("--port");
  if (idx !== -1 && process.argv[idx + 1]) {
    return parseInt(process.argv[idx + 1], 10);
  }
  return parseInt(process.env.TERMINAL_GRID_PORT || "7890", 10);
})();

const TOOLS = [
  {
    name: "get_grid_info",
    description:
      "Get information about the current Terminal Grid (a VS Code tmux-like terminal multiplexer). Returns grid dimensions (rows x cols), total cell count, and cell labels. Call this first to discover the grid layout before sending commands. Returns null grid if no grid is open.",
    inputSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "send_to_cell",
    description:
      "Send text to a specific terminal cell in Terminal Grid. Each cell is an independent terminal (PTY). Always set submit=true when you want to execute a command — this automatically sends the correct Enter key for the environment (shell, PowerShell/PSReadLine, or LLM TUI like claude/codex). Do NOT manually append \\r or \\n. PSReadLine compatibility is handled automatically. Cell IDs are 0-based (use get_grid_info to see available cells).",
    inputSchema: {
      type: "object",
      properties: {
        cellId: {
          type: "number",
          description: "Cell index (0-based). Use get_grid_info to see available cells.",
        },
        text: {
          type: "string",
          description:
            "Text to send to the terminal. Do not include \\r or \\n — use submit=true instead.",
        },
        submit: {
          type: "boolean",
          description:
            "Set to true to execute the text as a command (presses Enter). Automatically detects whether the cell is running a shell or an LLM TUI app and sends the correct Enter key sequence. Default: false.",
        },
      },
      required: ["cellId", "text"],
    },
  },
  {
    name: "read_cell",
    description:
      "Read output from a specific terminal cell in Terminal Grid. Returns the terminal's recent output buffer as text. Useful for checking command results, monitoring processes, or reading LLM responses. Use the lines parameter to limit to the most recent N lines.",
    inputSchema: {
      type: "object",
      properties: {
        cellId: {
          type: "number",
          description: "Cell index (0-based). Use get_grid_info to see available cells.",
        },
        lines: {
          type: "number",
          description:
            "Number of recent lines to return. Omit to get the full buffer (up to 50KB).",
        },
      },
      required: ["cellId"],
    },
  },
  {
    name: "broadcast",
    description:
      "Send the same text to ALL terminal cells in Terminal Grid at once. Set submit=true to execute as a command in every cell. Useful for running the same command across multiple terminals simultaneously.",
    inputSchema: {
      type: "object",
      properties: {
        text: {
          type: "string",
          description:
            "Text to send to all cells. Do not include \\r or \\n — use submit=true instead.",
        },
        submit: {
          type: "boolean",
          description:
            "Set to true to execute in all cells (presses Enter). Automatically handles shell and LLM TUI apps. Default: false.",
        },
      },
      required: ["text"],
    },
  },
];

// Health check — exit if the HTTP bridge is unreachable
let healthFailCount = 0;
const HEALTH_MAX_FAILS = 3;
const HEALTH_INTERVAL_MS = 10000;

const healthTimer = setInterval(() => {
  const req = http.request(
    { hostname: "127.0.0.1", port: PORT, path: "/api/health", method: "GET", timeout: 3000 },
    (res) => {
      let d = "";
      res.on("data", (c) => { d += c; });
      res.on("end", () => {
        try {
          const j = JSON.parse(d);
          if (j.status === "ok") { healthFailCount = 0; return; }
        } catch { /* fall through */ }
        healthFailCount++;
        if (healthFailCount >= HEALTH_MAX_FAILS) { shutdown(); }
      });
    }
  );
  req.on("error", () => {
    healthFailCount++;
    if (healthFailCount >= HEALTH_MAX_FAILS) { shutdown(); }
  });
  req.on("timeout", () => { req.destroy(); });
  req.end();
}, HEALTH_INTERVAL_MS);

function shutdown() {
  clearInterval(healthTimer);
  process.exit(0);
}

function httpRequest(method, path, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "127.0.0.1",
      port: PORT,
      path,
      method,
      headers: { "Content-Type": "application/json" },
      timeout: 5000,
    };
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve({ error: "Invalid JSON response", raw: data });
        }
      });
    });
    req.on("error", (e) =>
      reject(
        new Error(
          `Cannot connect to Terminal Grid on port ${PORT}. Is VS Code running with the extension active? (${e.message})`
        )
      )
    );
    req.on("timeout", () => {
      req.destroy();
      reject(new Error("Request timed out"));
    });
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function handleToolCall(name, args) {
  try {
    switch (name) {
      case "get_grid_info": {
        const result = await httpRequest("GET", "/api/info");
        return {
          content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
        };
      }
      case "send_to_cell": {
        const result = await httpRequest("POST", "/api/send", {
          cellId: args.cellId,
          text: args.text,
          submit: args.submit || false,
        });
        return {
          content: [{ type: "text", text: JSON.stringify(result) }],
        };
      }
      case "read_cell": {
        const body = { cellId: args.cellId };
        if (args.lines !== undefined) body.lines = args.lines;
        const result = await httpRequest("POST", "/api/read", body);
        if (result.output === null) {
          return {
            content: [
              {
                type: "text",
                text: result.error
                  ? `Error: ${result.error}`
                  : `Cell ${args.cellId} not found`,
              },
            ],
            isError: true,
          };
        }
        return {
          content: [{ type: "text", text: result.output }],
        };
      }
      case "broadcast": {
        const result = await httpRequest("POST", "/api/broadcast", {
          text: args.text,
          submit: args.submit || false,
        });
        return {
          content: [{ type: "text", text: JSON.stringify(result) }],
        };
      }
      default:
        return {
          content: [{ type: "text", text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }
  } catch (e) {
    return {
      content: [{ type: "text", text: `Error: ${e.message}` }],
      isError: true,
    };
  }
}

function send(msg) {
  process.stdout.write(JSON.stringify(msg) + "\n");
}

const rl = readline.createInterface({ input: process.stdin, terminal: false });

rl.on("line", async (line) => {
  let msg;
  try {
    msg = JSON.parse(line.trim());
  } catch {
    return;
  }

  if (msg.method === "initialize") {
    send({
      jsonrpc: "2.0",
      id: msg.id,
      result: {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: {
          name: "terminal-grid-mcp",
          version: "1.0.0",
        },
        instructions: "You have access to Terminal Grid — a VS Code tmux-like terminal multiplexer. Use get_grid_info first to see the grid layout, then send_to_cell/broadcast to run commands (always use submit:true to execute). Use read_cell to check output. These tools work with both shell and LLM TUI apps (claude, codex) automatically.",
      },
    });
  } else if (msg.method === "notifications/initialized") {
    // Notification — no response
  } else if (msg.method === "tools/list") {
    send({
      jsonrpc: "2.0",
      id: msg.id,
      result: { tools: TOOLS },
    });
  } else if (msg.method === "tools/call") {
    const result = await handleToolCall(
      msg.params.name,
      msg.params.arguments || {}
    );
    send({
      jsonrpc: "2.0",
      id: msg.id,
      result,
    });
  } else if (msg.id !== undefined) {
    send({
      jsonrpc: "2.0",
      id: msg.id,
      error: {
        code: -32601,
        message: `Method not found: ${msg.method}`,
      },
    });
  }
});

// Exit when stdin closes (MCP client disconnected)
rl.on("close", () => { shutdown(); });
process.stdin.on("end", () => { shutdown(); });
