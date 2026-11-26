#!/usr/bin/env node
// 3dsellers-mcp: connects a stdio MCP client (Claude Desktop, Windsurf, Cline, Zed...)
// to the hosted 3Dsellers MCP server. It forwards MCP messages both ways and adds
// the user's 3Dsellers token. It has no tools of its own and keeps nothing on disk.
//
// stdout carries MCP messages only; every log line goes to stderr.

import { readFileSync } from 'node:fs';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const DEFAULT_URL = 'https://api.3dsellers.com/mcp';
const TOKEN_ENV = 'THREEDSELLERS_TOKEN';
const URL_ENV = 'THREEDSELLERS_MCP_URL';
const TOKEN_PAGE = 'https://app.3dsellers.com/api-mcp';

const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

const HELP = `3dsellers-mcp ${version}

Connects any stdio MCP client to the hosted 3Dsellers MCP server
(${DEFAULT_URL}) for eBay, Amazon, Walmart, Etsy, Shopify and TikTok Shop sellers.

Usage, in your MCP client's config:

  {
    "mcpServers": {
      "3dsellers": {
        "command": "npx",
        "args": ["-y", "3dsellers-mcp"],
        "env": { "${TOKEN_ENV}": "YOUR_TOKEN_HERE" }
      }
    }
  }

Get a token: ${TOKEN_PAGE} > Connect MCP > For developers.
Clients that support remote MCP servers can skip this package and use
${DEFAULT_URL} directly, with a sign-in instead of a token.
`;

function log(text) {
  process.stderr.write(`[3dsellers-mcp] ${text}\n`);
}

// The token is sent only to 3Dsellers over HTTPS, or to this computer for local testing.
function serverUrl() {
  const raw = (process.env[URL_ENV] || '').trim();
  if (!raw) return DEFAULT_URL;
  let url;
  try {
    url = new URL(raw);
  } catch {
    return null;
  }
  const local = url.protocol === 'http:' && (url.hostname === '127.0.0.1' || url.hostname === 'localhost');
  const ours = url.protocol === 'https:' && (url.hostname === '3dsellers.com' || url.hostname.endsWith('.3dsellers.com'));
  return local || ours ? url.href : null;
}
const SERVER_URL = serverUrl();

const arg = process.argv[2];
if (arg === '--help' || arg === '-h') {
  process.stdout.write(HELP);
  process.exit(0);
}
if (arg === '--version' || arg === '-v') {
  process.stdout.write(`${version}\n`);
  process.exit(0);
}

if (!SERVER_URL) {
  log(`${URL_ENV} must be an https://*.3dsellers.com address. Remove it to use ${DEFAULT_URL}.`);
  process.exit(1);
}

const token = (process.env[TOKEN_ENV] || '').trim();
if (!token) {
  log(`Missing ${TOKEN_ENV}. Create a token at ${TOKEN_PAGE} (Connect MCP > For developers)`);
  log(`and add it to the "env" block of this server in your MCP client's config.`);
  process.exit(1);
}

const remote = new StreamableHTTPClientTransport(new URL(SERVER_URL), {
  requestInit: {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': `3dsellers-mcp/${version} (node ${process.version})`,
    },
  },
});
const local = new StdioServerTransport();

// The remote transport needs the protocol version the server agreed on in the
// initialize answer, so it can send the MCP-Protocol-Version header afterwards.
const initializeIds = new Set();

function explain(error) {
  const text = error && error.message ? error.message : String(error);
  if (/\b401\b|unauthori[sz]ed/i.test(text)) {
    return `3Dsellers rejected the token. Check that ${TOKEN_ENV} holds an active token from ${TOKEN_PAGE}.`;
  }
  if (/\b403\b/.test(text)) {
    return 'The 3Dsellers account has no active plan or the token lacks the scope for this tool. See https://app.3dsellers.com/billing';
  }
  if (/\b429\b/.test(text)) {
    return '3Dsellers rate limit reached. Wait a minute and try again.';
  }
  return `Could not reach the 3Dsellers MCP server: ${text}`;
}

let closing = false;
async function shutdown(code) {
  if (closing) return;
  closing = true;
  try {
    await remote.terminateSession();
  } catch {
    // The server may not keep sessions; nothing to clean up then.
  }
  await Promise.allSettled([remote.close(), local.close()]);
  process.exit(code);
}

local.onmessage = async (message) => {
  if (message.method === 'initialize' && message.id !== undefined) {
    initializeIds.add(message.id);
  }
  try {
    await remote.send(message);
  } catch (error) {
    const reason = explain(error);
    log(reason);
    // Answer the request so the client does not wait forever. Notifications get no answer.
    if (message.id !== undefined && message.method) {
      await local.send({ jsonrpc: '2.0', id: message.id, error: { code: -32000, message: reason } });
    }
  }
};

remote.onmessage = async (message) => {
  if (message.id !== undefined && initializeIds.has(message.id)) {
    initializeIds.delete(message.id);
    const agreed = message.result && message.result.protocolVersion;
    if (agreed) remote.setProtocolVersion(agreed);
  }
  await local.send(message);
};

remote.onerror = (error) => log(explain(error));
local.onerror = (error) => log(`stdio error: ${error.message}`);
local.onclose = () => shutdown(0);
remote.onclose = () => shutdown(0);
process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

await remote.start();
await local.start();
