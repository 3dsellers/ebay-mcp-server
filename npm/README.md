# 3dsellers-mcp

Connect Claude Desktop, Windsurf, Cline, Zed or any stdio MCP client to the hosted [3Dsellers MCP server](https://github.com/3dsellers/ebay-mcp-server) for eBay, Amazon, Walmart, Etsy, Shopify and TikTok Shop sellers.

170+ tools for products, listings, inventory, orders, bulk edits, CSV imports, buyer messages and eBay Promoted Listings. No eBay developer account, no marketplace API keys.

## Setup

1. Create a 3Dsellers account at [3dsellers.com](https://www.3dsellers.com) (free 7-day trial) and connect your selling accounts.
2. Get a token: in 3Dsellers open **Settings > Profile > API / MCP** ([app.3dsellers.com/api-mcp](https://app.3dsellers.com/api-mcp)), click **Connect MCP**, then under **For developers** generate a token.
3. Add this to your MCP client's config and replace `YOUR_TOKEN_HERE`:

```json
{
  "mcpServers": {
    "3dsellers": {
      "command": "npx",
      "args": ["-y", "3dsellers-mcp"],
      "env": { "THREEDSELLERS_TOKEN": "YOUR_TOKEN_HERE" }
    }
  }
}
```

For Claude Desktop the file is `claude_desktop_config.json` (Settings > Developer > Edit Config). Restart the app, then ask: *"What 3Dsellers tools do you have?"*

## What this package does

It is a small bridge. It reads MCP messages from your client, sends them to `https://api.3dsellers.com/mcp` with your token, and returns the answers. It has no tools of its own, stores nothing on disk and talks to no other server. The source is one file, [`bin/3dsellers-mcp.mjs`](https://github.com/3dsellers/ebay-mcp-server/blob/main/npm/bin/3dsellers-mcp.mjs).

If your client supports remote MCP servers (claude.ai, ChatGPT, Cursor, VS Code, Claude Code), you do not need this package: add `https://api.3dsellers.com/mcp` directly and sign in. See the [main README](https://github.com/3dsellers/ebay-mcp-server#connect-your-ai-assistant).

## Errors

- **Missing THREEDSELLERS_TOKEN:** add the token to the `env` block of the server in your config.
- **3Dsellers rejected the token:** the token was revoked or expired. Create a new one on the API / MCP page.
- **No active plan:** the 3Dsellers account needs an active plan or free trial.
- **Rate limit reached:** wait a minute. Paid plans get 600 calls a minute and 50,000 a day.

Every call is logged under **Settings > Profile > API / MCP > Requests**, and you can revoke a token there at any time.

## Support

support@3dsellers.com

## License

MIT. The 3Dsellers service is subject to the [3Dsellers terms](https://www.3dsellers.com/legal).
