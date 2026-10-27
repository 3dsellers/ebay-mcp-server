# 3Dsellers plugin for Claude

Run your eBay, Amazon, Walmart, Etsy, Shopify and TikTok Shop stores from Claude. This plugin connects Claude to the hosted 3Dsellers MCP server and adds skills and slash commands for the everyday seller work: creating and publishing listings, checking today's orders, fixing low stock, editing many listings at once, and answering buyer messages.

You need a 3Dsellers account with your selling accounts connected. A free 7-day trial is available at [3dsellers.com](https://www.3dsellers.com).

## What the plugin contains

The plugin has no code. It is a manifest, one MCP server entry, six skills and five slash commands, all plain Markdown and JSON.

- **MCP server:** `https://api.3dsellers.com/mcp`, hosted by 3Dsellers, with more than 120 tools.
- **Skills:** `account-status`, `create-listing`, `daily-orders`, `bulk-edit`, `inventory-check` and `buyer-messages`. Each one tells Claude which 3Dsellers tools to call, in which order, and where to stop and ask you.
- **Slash commands:** `/3dsellers:status`, `/3dsellers:orders`, `/3dsellers:messages`, `/3dsellers:list` and `/3dsellers:stock`.

## Sign in

The server uses OAuth. The first time Claude calls a 3Dsellers tool, you sign in with your 3Dsellers login in the browser and approve the permissions. In Claude Code you can also run `/mcp`, pick `3dsellers` and choose Authenticate. The plugin never asks for a password or a token.

## What it sends and where

- The plugin talks to one service only: the 3Dsellers MCP server at `api.3dsellers.com`.
- Claude sends the tool calls you ask for, such as reading orders or updating a listing, to your own 3Dsellers account. 3Dsellers then calls the marketplaces you connected.
- Tools that change data ask for your approval first. Every call is logged in 3Dsellers under **Settings > Profile > API / MCP > Requests**, and you can revoke access there at any time.
- The plugin runs no local scripts, hooks or packages, and stores nothing on your computer.

Privacy policy: [www.3dsellers.com/privacy-policy](https://www.3dsellers.com/privacy-policy). Support: support@3dsellers.com.

## Install in Claude Code

```text
/plugin marketplace add 3dsellers/ebay-mcp-server
/plugin install 3dsellers@3dsellers
```

Then run `/3dsellers:status` to check the connection and see which stores are connected.

More setup guides for Claude, ChatGPT, Cursor, VS Code and other assistants are in the [repository README](https://github.com/3dsellers/ebay-mcp-server).

## License

MIT, see the `license` field in `.claude-plugin/plugin.json` and the [LICENSE](https://github.com/3dsellers/ebay-mcp-server/blob/main/LICENSE) file of the repository.
