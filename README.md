<!-- Keywords: eBay MCP server, Amazon MCP server, Shopify MCP server, Etsy MCP server, Walmart MCP server, TikTok Shop MCP server, hosted MCP server for ecommerce, multichannel MCP server, Claude eBay integration, ChatGPT eBay connector, Cursor eBay, Claude Code eBay, eBay listing automation AI, Model Context Protocol ecommerce -->

<p align="center">
  <a href="https://www.3dsellers.com/channel-integration/3dsellers-mcp"><img src="docs/images/3dsellers-mcp-hero.png" alt="3Dsellers MCP server for eBay, Amazon, Walmart, Etsy, Shopify and TikTok Shop sellers" width="820" /></a>
</p>

# 3Dsellers MCP Server for eBay and Ecommerce Sellers

**The hosted eBay MCP server for ecommerce sellers. Connect Claude, ChatGPT, Cursor, VS Code or any MCP-compatible AI assistant to your eBay, Amazon, Walmart, Etsy, Shopify and TikTok Shop stores, and manage listings, products, inventory, orders and buyer messages from a chat. 120+ tools. Nothing to install, no code and no eBay developer account.**

[![Official MCP Registry](https://img.shields.io/badge/MCP%20Registry-com.3dsellers%2Fmcp-2D72E8)](https://registry.modelcontextprotocol.io/v0/servers?search=3dsellers)
[![Claude connector directory](https://img.shields.io/badge/Claude-connector%20directory-D97757)](https://claude.ai/new#directory/connectors/3dsellers-mcp)
[![Cursor Directory](https://img.shields.io/badge/Cursor-Directory-000000)](https://cursor.directory/plugins/3dsellers)
![eBay](https://img.shields.io/badge/eBay-MCP%20server-E53238)
![Ecommerce](https://img.shields.io/badge/ecommerce-eBay%20%7C%20Amazon%20%7C%20Walmart%20%7C%20Etsy%20%7C%20Shopify%20%7C%20TikTok%20Shop-2D72E8)
![Tools](https://img.shields.io/badge/tools-120%2B-8957e5)
![Transport](https://img.shields.io/badge/transport-streamable%20HTTP-blue)
![Auth](https://img.shields.io/badge/auth-OAuth%20%7C%20bearer%20token-green)

[![3Dsellers MCP connector on Glama](https://glama.ai/mcp/connectors/com.3dsellers/mcp/badges/score.svg)](https://glama.ai/mcp/connectors/com.3dsellers/mcp)

Server URL:

```
https://api.3dsellers.com/mcp
```

3Dsellers is a multichannel ecommerce platform for eBay sellers. It keeps one product catalog for every channel you sell on. Connect the MCP server once and your AI assistant can search and create products, publish listings to eBay and your other channels, update inventory and prices, manage orders, run bulk edits and CSV imports, and answer buyer messages, all through your own 3Dsellers account.

This repository holds the documentation and config examples. The server itself is hosted by 3Dsellers, so there is no code to run.

## Contents

- [Features](#features)
- [Demo](#demo)
- [Quick start](#quick-start)
- [Connect your AI assistant](#connect-your-ai-assistant)
- [Claude Code plugin](#claude-code-plugin)
- [MCP client compatibility](#mcp-client-compatibility)
- [What you can ask](#what-you-can-ask)
- [Channels](#channels)
- [Tools](#tools)
- [Hosted vs a local open-source server](#hosted-vs-a-local-open-source-server)
- [Security and permissions](#security-and-permissions)
- [Manage tokens, permissions and requests](#manage-tokens-permissions-and-requests)
- [Rate limits and pricing](#rate-limits-and-pricing)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Links](#links)

## Features

- **120+ ecommerce tools:** products, listings, item specifics, inventory, prices, orders, tracking, bulk actions, CSV imports, exports, automations, offer rules, listing templates and buyer messages.
- **eBay and five more channels:** eBay, Amazon, Walmart, Etsy, Shopify and TikTok Shop from one product catalog. Publish a product from one channel to another in one request.
- **Hosted, nothing to install:** no Node.js, no Docker, no eBay developer account and no marketplace API keys. 3Dsellers keeps the server up to date when marketplace APIs change.
- **Claude Code plugin:** one install adds the MCP server plus skills and slash commands for listings, orders, inventory, bulk edits and buyer messages. See [Claude Code plugin](#claude-code-plugin).
- **Works with any AI assistant:** Claude, ChatGPT, Grok, Claude Code, Cursor, VS Code, Cline, Gemini CLI, Kiro, Windsurf and any client that supports remote MCP servers.
- **Sign in with OAuth:** chat apps connect with your 3Dsellers login, with no token to copy. Developer tools can use a bearer token.
- **You stay in control:** scoped tokens, approval before any tool that changes data, a log of every call, and one-click revoke.
- **Rate limits handled for you:** clear limits shared by REST and MCP, with `Retry-After` headers and a live usage view.
- **REST API included:** the same account and token work with the [3Dsellers REST API](https://www.3dsellers.com/channel-integration/3dsellers-api).
- **Support included:** the 3Dsellers support team helps with setup on every plan.

## Demo

[![Watch: AI and your eBay store with the 3Dsellers MCP server](docs/images/demo-video.jpg)](https://www.youtube.com/watch?v=hqkb0MN3nak)

Watch [3Dsellers MCP in under eight minutes](https://www.youtube.com/watch?v=hqkb0MN3nak): connect Claude, ask about orders, and create and publish a listing.

## Quick start

1. Create a 3Dsellers account at [3dsellers.com](https://www.3dsellers.com) (free 7-day trial, no credit card) and connect your selling accounts.
2. Add the server URL `https://api.3dsellers.com/mcp` to your AI assistant.
3. Sign in with your 3Dsellers account (OAuth), or paste a token for developer tools.
4. Ask: *"What 3Dsellers tools do you have?"*

In 3Dsellers, **Settings > Profile > API / MCP > Connect MCP** shows the server URL and the steps for each assistant:

<p align="center"><img src="docs/images/mcp-dialog.png" alt="The 3Dsellers MCP dialog with the Connect in Claude button, the custom connector steps and the server URL" width="560" /></p>

## Connect your AI assistant

### Claude (claude.ai, Claude Desktop)

3Dsellers is listed in Claude's connector directory.

1. Open the [3Dsellers connector in Claude](https://claude.ai/new#directory/connectors/3dsellers-mcp) and click **Connect**.
2. Sign in to your 3Dsellers account and approve access.
3. In a chat, turn the connector on from the **+** menu.

Custom connector option: **Settings > Connectors > Add custom connector**, paste `https://api.3dsellers.com/mcp`, then sign in.

### ChatGPT

1. In ChatGPT, add a new app.
2. Paste `https://api.3dsellers.com/mcp` as the server URL and choose **OAuth**.
3. Sign in with your 3Dsellers account and click **Accept**.
4. Pick 3Dsellers from the **+** menu in any chat.

### Grok

1. Open [grok.com/connectors](https://grok.com/connectors).
2. Click **New Connector**, then **Custom**.
3. Paste `https://api.3dsellers.com/mcp` and save.
4. Sign in with your 3Dsellers account and approve access.

### Developer tools (Cursor, VS Code, Claude Code, Cline, Gemini CLI)

Developer tools connect with a bearer token.

**Get a token:** in 3Dsellers open **Settings > Profile > API / MCP** ([app.3dsellers.com/api-mcp](https://app.3dsellers.com/api-mcp)), click **Connect MCP**, then under **For developers** generate a token. The token is shown once. Replace `YOUR_TOKEN_HERE` below with it.

#### Cursor

One click: [3Dsellers on Cursor Directory](https://cursor.directory/plugins/3dsellers). Or add this to `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project):

```json
{
  "mcpServers": {
    "3dsellers": {
      "type": "http",
      "url": "https://api.3dsellers.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    }
  }
}
```

#### VS Code (GitHub Copilot agent mode)

Add this to `.vscode/mcp.json`, or run **MCP: Add Server** from the Command Palette:

```json
{
  "servers": {
    "3dsellers": {
      "type": "http",
      "url": "https://api.3dsellers.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    }
  }
}
```

#### Claude Code

Option 1, the plugin. It adds the MCP server and the skills and slash commands described in [Claude Code plugin](#claude-code-plugin):

```text
/plugin marketplace add 3dsellers/ebay-mcp-server
/plugin install 3dsellers@3dsellers
```

Then put your token in the `THREEDSELLERS_MCP_TOKEN` environment variable and restart Claude Code:

```bash
export THREEDSELLERS_MCP_TOKEN="YOUR_TOKEN_HERE"   # macOS / Linux, add it to ~/.zshrc or ~/.bashrc
setx THREEDSELLERS_MCP_TOKEN "YOUR_TOKEN_HERE"      # Windows, then open a new terminal
```

Option 2, the server only:

```bash
claude mcp add --transport http 3dsellers https://api.3dsellers.com/mcp --header "Authorization: Bearer YOUR_TOKEN_HERE"
```

#### Cline

Add this to `cline_mcp_settings.json` (Cline > MCP Servers > Configure):

```json
{
  "mcpServers": {
    "3dsellers": {
      "type": "streamableHttp",
      "url": "https://api.3dsellers.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_TOKEN_HERE"
      }
    }
  }
}
```

#### Gemini CLI

Install the extension, then sign in with your 3Dsellers account:

```bash
gemini extensions install https://github.com/3dsellers/ebay-mcp-server
```

In Gemini CLI, run `/mcp auth 3dsellers` to sign in. Or add the server with a token:

```bash
gemini mcp add --transport http --header "Authorization: Bearer YOUR_TOKEN_HERE" 3dsellers https://api.3dsellers.com/mcp
```

#### Kiro

Add this to `.kiro/settings/mcp.json` (one workspace) or `~/.kiro/settings/mcp.json` (all workspaces), then sign in with your 3Dsellers account:

```json
{
  "mcpServers": {
    "3dsellers": {
      "url": "https://api.3dsellers.com/mcp"
    }
  }
}
```

#### Other clients

Windsurf, Codex CLI, Perplexity, Mistral Le Chat and any client that supports remote MCP servers over streamable HTTP use the same URL, `https://api.3dsellers.com/mcp`, and either the OAuth sign-in or the `Authorization: Bearer` header.

Ready-to-copy files are in [`examples/`](examples/).

Step-by-step guide with screenshots: [How to connect AI agents to 3Dsellers using MCP](https://help.3dsellers.com/en/articles/15433466-how-to-connect-ai-agents-to-3dsellers-using-mcp).

## Claude Code plugin

The `plugins/3dsellers` folder of this repository is a [Claude Code plugin](https://code.claude.com/docs/en/plugins). It contains no code: a manifest, the MCP server entry, six skills and five slash commands, all plain Markdown and JSON. The skills tell Claude which 3Dsellers tools to call, in which order, and where to stop and ask you.

Install:

```text
/plugin marketplace add 3dsellers/ebay-mcp-server
/plugin install 3dsellers@3dsellers
```

Set `THREEDSELLERS_MCP_TOKEN` to a token from **Settings > Profile > API / MCP > Connect MCP** (see [Claude Code](#claude-code) above), restart Claude Code and run `/3dsellers:status`.

### Skills

Claude loads a skill on its own when your request matches it. You can also start one by name.

| Skill | What it does |
| --- | --- |
| `/3dsellers:create-listing` | Create a product and publish it to eBay or another channel, or cross-list existing products. Resolves the store, the category mapping and the required item specifics first. |
| `/3dsellers:daily-orders` | New orders per store, orders to ship, tracking numbers (dry run first), invoices and tags, then the buyer messages waiting. |
| `/3dsellers:bulk-edit` | Prices, item specifics, tags, policies, titles and quantities on many products or listings, with a dry run and a confirmed count before anything runs. |
| `/3dsellers:inventory-check` | Low-stock products, warehouse stock compared with each channel, and quantity fixes. |
| `/3dsellers:buyer-messages` | Unanswered buyer messages, returns and cases from the Helpdesk, with drafted replies that are sent only after your approval. |
| `/3dsellers:account-status` | Connection check, connected accounts and their health, and what a 401, 403 or 429 means. |

### Slash commands

| Command | Example |
| --- | --- |
| `/3dsellers:orders [since]` | `/3dsellers:orders yesterday` |
| `/3dsellers:messages [store]` | `/3dsellers:messages mystore_uk` |
| `/3dsellers:list <item> to <store>` | `/3dsellers:list the blue Nike Air Max size 10 in my catalog to mystore_us` |
| `/3dsellers:stock [threshold]` | `/3dsellers:stock 3` |
| `/3dsellers:status` | `/3dsellers:status` |

Every tool that changes data still asks for your approval before it runs, and every call is logged on the API / MCP page.

To try the plugin from a local clone without installing it: `claude --plugin-dir ./plugins/3dsellers`. To check the files after a change: `claude plugin validate ./plugins/3dsellers`.

## MCP client compatibility

| Client | How to connect | Sign-in |
| --- | --- | --- |
| Claude (claude.ai, Claude Desktop, Cowork) | Connector directory, or Settings > Connectors > Add custom connector | OAuth |
| ChatGPT | Add an app with the server URL | OAuth |
| Grok | grok.com/connectors > New Connector > Custom | OAuth |
| Claude Code | [Plugin](#claude-code-plugin) `/plugin install 3dsellers@3dsellers`, or `claude mcp add --transport http` | Bearer token |
| Cursor | [Cursor Directory](https://cursor.directory/plugins/3dsellers) or `~/.cursor/mcp.json` | Bearer token |
| VS Code (GitHub Copilot) | `.vscode/mcp.json` or MCP: Add Server | Bearer token |
| Cline | `cline_mcp_settings.json` | Bearer token |
| Gemini CLI | `gemini extensions install https://github.com/3dsellers/ebay-mcp-server` | OAuth or bearer token |
| Kiro | `.kiro/settings/mcp.json` | OAuth |
| Windsurf, Codex CLI, Perplexity, Mistral Le Chat | Server URL `https://api.3dsellers.com/mcp` | OAuth or bearer token |

The server uses streamable HTTP and supports OAuth 2.0 with dynamic client registration, so clients that support MCP sign-in find the login page by themselves.

## What you can ask

| Area | Example request |
| --- | --- |
| Listings | "Create a listing for this product and publish it to my eBay store." |
| Multichannel | "Publish my 20 best-selling eBay items to Amazon and Etsy." |
| Item specifics | "Find listings with missing brand or MPN and fill them in." |
| Inventory | "Which products are below 5 in stock? Set the Amazon quantity to match eBay." |
| Bulk edits | "Raise the price of every listing in the Shoes segment by 10%." |
| Orders | "Show unshipped orders from the last 3 days and add tracking for order 1234." |
| CSV import | "Import this supplier file, do a dry run first, then show me the rejected rows." |
| Helpdesk | "Show unread buyer messages and draft a reply to each one." |
| Automations | "Tag every order over $100 as VIP." |
| Reports | "Export all active listings with price and quantity every Monday." |

Tools that change data ask for your approval before they run.

## Channels

One connection covers every channel connected to your 3Dsellers account. The AI works through 3Dsellers, so you do not need a developer account or API keys for any marketplace.

- **eBay MCP server:** create, revise and publish listings, item specifics, business policies, store categories, offers to watchers, listing templates, orders and buyer messages.
- **Amazon MCP server:** publish catalog products to Amazon, update inventory and prices, and manage orders.
- **Walmart MCP server:** publish products to Walmart, update inventory and prices, and manage orders.
- **Etsy MCP server:** publish products to Etsy, update inventory and prices, and manage orders.
- **Shopify MCP server:** publish products to Shopify, update inventory and prices, and manage orders.
- **TikTok Shop MCP server:** publish products to TikTok Shop, update inventory and prices, and manage orders.
- **WooCommerce, BigCommerce and more:** every other channel connected to your 3Dsellers account.

## Tools

120+ tools, grouped by area. **Read** tools only look at your data. **Write** tools make changes, and the assistant asks for your approval before it runs them.

### Products & Catalog

| Tool | What it does | Type |
| --- | --- | --- |
| `get-products` | Search your catalog by SKU, title, tag or segment. | Read |
| `get-product` | Get every detail of one product, including variations and images. | Read |
| `create-product` | Create a product with variations, images, prices and identifiers. | Write |
| `update-product` | Replace a product's details in one step. | Write |
| `patch-product` | Change only the fields you name and leave the rest as is. | Write |
| `remove-products-from-catalog` | Remove products from your catalog. | Write |
| `set-product-tags` | Add or remove tags on products. | Write |
| `get-product-listings` | See where each product is listed and the status on every channel. | Read |
| `get-product-custom-attributes` | List the custom attributes used in your catalog. | Read |
| `delete-product-custom-attributes` | Remove custom attributes you no longer use. | Write |
| `sync-new-skus` | Pull new SKUs from your channels into the catalog. | Write |
| `link-skus-cross-account` | Link the same SKU across selling accounts so stock stays in sync. | Write |
| `get-sku-templates` | List your SKU templates. | Read |
| `get-sku-template` | Get one SKU template and its pattern. | Read |
| `create-sku-template` | Create a template that builds SKUs automatically. | Write |
| `delete-sku-template` | Delete a SKU template. | Write |
| `get-segments` | List your saved product segments. | Read |
| `create-segment` | Save a filter as a segment, for example all Nike shoes under $50. | Write |
| `update-segment` | Change the filter of a saved segment. | Write |
| `delete-segment` | Delete a saved segment. | Write |

### Listings & Publishing

| Tool | What it does | Type |
| --- | --- | --- |
| `publish-products-to-channel` | Publish products to eBay, Amazon, Walmart, Etsy, Shopify or TikTok Shop. | Write |
| `set-draft-details` | Fill in title, price, category and other listing details before you publish. | Write |
| `set-item-specifics` | Set brand, MPN, color, size and other item specifics on listings. | Write |
| `set-listing-tags` | Add or remove tags on listings. | Write |
| `apply-policies` | Apply shipping, return and payment policies to listings. | Write |
| `get-seller-policies` | List the business policies on your eBay account. | Read |
| `dismiss-listing-errors` | Clear listing errors you have already handled. | Write |
| `get-store-categories` | List the categories in your eBay store. | Read |
| `create-store-category` | Add a category to your eBay store. | Write |
| `update-store-category` | Rename or move an eBay store category. | Write |
| `delete-store-category` | Delete an eBay store category. | Write |

### Inventory

| Tool | What it does | Type |
| --- | --- | --- |
| `set-listing-inventory` | Set the available quantity on a listing. | Write |
| `set-variation-inventory` | Set the quantity of one variation, such as a size or color. | Write |
| `set-inventory-sync` | Turn inventory sync on or off for a selling account. | Write |

### Orders

| Tool | What it does | Type |
| --- | --- | --- |
| `get-orders` | Search and filter orders by status, channel, date or SKU. | Read |
| `set-order-tags` | Add or remove tags on orders. | Write |
| `set-order-tracking` | Send the carrier and tracking number to the marketplace. | Write |
| `generate-order-invoice` | Create an invoice for an order. | Write |
| `get-order-invoice` | Get the invoice of an order. | Read |

### Bulk Actions

| Tool | What it does | Type |
| --- | --- | --- |
| `get-action-catalog` | See every bulk action you can run on products and listings. | Read |
| `get-action-schema` | See which fields a bulk action needs before you run it. | Read |
| `create-action` | Change prices, item specifics, policies or tags on hundreds of listings at once. | Write |
| `get-actions` | List the bulk actions you ran and their status. | Read |
| `get-action` | Track one bulk action until it finishes. | Read |

### CSV Import

| Tool | What it does | Type |
| --- | --- | --- |
| `get-import-catalog` | See which CSV imports are available and their columns. | Read |
| `create-import-csv` | Import products or changes from a CSV file, with a dry run first. | Write |
| `get-import-csvs` | List your CSV imports and their status. | Read |
| `get-import-csv` | Get the result of one CSV import. | Read |
| `get-import-csv-errors` | See the errors of a CSV import, row by row. | Read |
| `retry-import-rows` | Fix and retry the rows that failed in an import. | Write |
| `get-import-schedules` | List imports that run on a schedule. | Read |
| `get-import-schedule` | Get one scheduled import and its settings. | Read |
| `create-import-schedule` | Import a supplier file from a link on a fixed schedule. | Write |
| `update-import-schedule` | Change the link, timing or mapping of a scheduled import. | Write |
| `delete-import-schedule` | Stop and delete a scheduled import. | Write |
| `run-import-schedule` | Run a scheduled import right away. | Write |

### Export & Reports

| Tool | What it does | Type |
| --- | --- | --- |
| `get-export-catalog` | See which reports and exports are available. | Read |
| `create-export` | Create a report of products, listings or orders. | Write |
| `get-exports` | List your exports and their download links. | Read |
| `get-export` | Get one export and its file. | Read |
| `delete-export` | Delete an export. | Write |
| `get-export-schedules` | List exports that run on a schedule. | Read |
| `get-export-schedule` | Get one scheduled export and its settings. | Read |
| `create-export-schedule` | Create a report that runs on a fixed schedule. | Write |
| `update-export-schedule` | Change the timing or content of a scheduled export. | Write |
| `delete-export-schedule` | Stop and delete a scheduled export. | Write |
| `run-export-schedule` | Run a scheduled export right away. | Write |

### Categories & Field Mapping

| Tool | What it does | Type |
| --- | --- | --- |
| `get-product-categories` | List the categories in your product catalog. | Read |
| `create-product-category` | Add a category to your product catalog. | Write |
| `get-category-mappings` | See which channel category each catalog category maps to. | Read |
| `set-category-mappings` | Map catalog categories to eBay, Amazon or other channel categories. | Write |
| `get-unmapped-categories` | Find catalog categories that have no channel category yet. | Read |
| `get-category-specifics` | See the item specifics a channel category requires. | Read |
| `get-channel-category-fields` | See every field a channel category accepts. | Read |
| `get-product-templates` | List your product templates. | Read |
| `get-product-template` | Get one product template and its fields. | Read |
| `get-product-template-mappings` | See how product fields map to each channel. | Read |
| `apply-product-template-mappings` | Apply field mappings to products in bulk. | Write |
| `delete-product-template-mapping` | Remove a field mapping. | Write |
| `get-product-template-mapping-job` | Track a mapping job until it finishes. | Read |
| `get-template-automap-fields` | See which fields are mapped automatically. | Read |
| `set-template-automap-fields` | Choose which fields map automatically. | Write |
| `get-mapping-rules` | List your mapping rules. | Read |
| `get-mapping-rule` | Get one mapping rule. | Read |
| `create-mapping-rule` | Create a rule, for example set Condition to New for every product in a segment. | Write |
| `update-mapping-rule` | Change a mapping rule. | Write |
| `delete-mapping-rule` | Delete a mapping rule. | Write |
| `preview-mapping-rule` | Preview what a rule will change before you apply it. | Read |
| `create-mapping-template` | Create a mapping template for a channel. | Write |
| `update-mapping-template` | Change a mapping template. | Write |
| `delete-mapping-template` | Delete a mapping template. | Write |
| `clone-mapping-template` | Copy a mapping template to start a new one. | Write |
| `validate-mapping-template` | Check a mapping template for missing or wrong fields. | Read |

### Helpdesk & Messages

| Tool | What it does | Type |
| --- | --- | --- |
| `get-helpdesk-tickets` | Search Helpdesk tickets by status, channel or buyer. | Read |
| `get-helpdesk-ticket` | Get one ticket and its details. | Read |
| `get-helpdesk-ticket-messages` | Read the full conversation of a ticket. | Read |
| `get-helpdesk-ticket-counts` | See how many tickets are open, unread or waiting. | Read |
| `reply-to-helpdesk-ticket` | Send a reply to the buyer. | Write |
| `add-helpdesk-ticket-note` | Add a note your team can see and the buyer cannot. | Write |
| `set-helpdesk-ticket-status` | Mark a ticket open, pending or closed. | Write |
| `set-helpdesk-ticket-read` | Mark a ticket read or unread. | Write |
| `get-auto-messages` | List your automatic post-sale messages. | Read |
| `get-auto-message` | Get one automatic message. | Read |
| `create-auto-message` | Send buyers a message after a sale, a shipment or a delivery. | Write |
| `update-auto-message` | Change the text or timing of an automatic message. | Write |
| `delete-auto-message` | Delete an automatic message. | Write |

### Automations

| Tool | What it does | Type |
| --- | --- | --- |
| `get-automation-catalog` | See every trigger and action you can automate. | Read |
| `get-automations` | List your automations and whether each one is on. | Read |
| `get-automation` | Get one automation and its rules. | Read |
| `create-automation` | Create an automation, for example tag every order over $100. | Write |
| `update-automation` | Change or pause an automation. | Write |
| `delete-automation` | Delete an automation. | Write |

### Offers

| Tool | What it does | Type |
| --- | --- | --- |
| `get-offer-rules` | List your rules for offers to watchers. | Read |
| `get-offer-rule` | Get one offer rule. | Read |
| `create-offer-rule` | Send automatic offers to buyers who watch your listings. | Write |
| `update-offer-rule` | Change the discount or timing of an offer rule. | Write |
| `delete-offer-rule` | Delete an offer rule. | Write |

### Listing Designer

| Tool | What it does | Type |
| --- | --- | --- |
| `get-listing-designer-templates` | List your listing description templates. | Read |
| `get-listing-designer-template` | Get one listing template and its HTML. | Read |
| `create-listing-designer-template` | Create a listing description template. | Write |
| `update-listing-designer-template` | Change a listing template. | Write |
| `get-listing-designer-auto-apply` | See which template applies to new listings in each store. | Read |
| `set-listing-designer-auto-apply` | Choose the template that applies to new listings in a store. | Write |

### Selling Accounts

| Tool | What it does | Type |
| --- | --- | --- |
| `get-sellers` | List the marketplace accounts connected to 3Dsellers. | Read |
| `get-seller` | Get the details of one connected account. | Read |
| `get-integration-status` | Check that each marketplace connection is working. | Read |

## Hosted vs a local open-source server

Some eBay MCP servers on GitHub run on your own computer and call the eBay API directly. Here is how the hosted 3Dsellers server compares.

| | 3Dsellers MCP | Local open-source eBay MCP |
| --- | --- | --- |
| Setup | Sign in to 3Dsellers. Nothing to install. | Install Node.js or Python and run it on your computer |
| eBay developer account | Not needed | Needed |
| eBay app keys, RuName and token refresh | Not needed | You create and maintain them |
| Sign in from a chat app (OAuth) | Yes | No |
| Works in ChatGPT and claude.ai on the web | Yes | No |
| Works in Claude Desktop, Cursor and VS Code | Yes | Yes |
| eBay | Yes | Yes |
| Amazon, Walmart, Etsy, Shopify, TikTok Shop, WooCommerce | Yes | No |
| One catalog for every channel | Yes | No |
| Bulk actions and CSV imports | Yes | No |
| Helpdesk and buyer messages | Yes | No |
| Automations and offer rules | Yes | No |
| Token scopes, request log and one-click revoke | Yes | No |
| Rate limits shown live, with `Retry-After` | Yes | Handle eBay `429` errors yourself |
| Updates when marketplace APIs change | Done by 3Dsellers | You update it yourself |
| Support | Included in your plan | Community only |

## Security and permissions

- The assistant never sees your marketplace passwords. It connects to 3Dsellers with OAuth or a token.
- Each token has a scope. `product:read` can only read products, `product:write` can change them, and Full access means every tool.
- Every REST and MCP call is logged under **Settings > Profile > API / MCP > Requests**: time, source, tool, status and duration. Values that look like secrets are shown as `[redacted]`.
- Revoke one token, or all tokens at once, on the same page.
- Never commit a token to a repository. If a token leaks, revoke it and create a new one.

## Manage tokens, permissions and requests

Every AI assistant and integration connects to 3Dsellers with a token. The **API / MCP** page in Settings shows every token, what it is allowed to do, every call it made, and how much of your rate limit is left.

### Connect and create tokens

Open **Settings > Profile > API / MCP**, or go to [app.3dsellers.com/api-mcp](https://app.3dsellers.com/api-mcp).

- **Add to Claude** connects Claude with a sign-in and no token to copy.
- **Get API token** creates a bearer token for your own script or integration.
- **Connect MCP** shows the server URL and a token for developer tools such as Cursor, VS Code and Claude Code.

A token is shown only once, when it is created. Copy it right away and keep it private.

<p align="center"><img src="docs/images/api-mcp-tokens-buttons.png" alt="The Tokens tab of the 3Dsellers API / MCP page with the Add to Claude, Get API token and Connect MCP buttons" width="700" /></p>

### See what each token is allowed to do

The **Issued tokens** list shows every token with its scope, status, request count, last use and expiry. The scope is the permission: `product:read` can only read products, `product:write` can change them, and **Full access** means every tool.

- **Revoke** stops one token on its next request.
- **Revoke all** cuts off every app and AI agent at once. Use it if a token leaked.

<p align="center"><img src="docs/images/api-mcp-issued-tokens.png" alt="The Issued tokens list with scope, status, requests, last used, expiry and the Requests and Revoke buttons" width="820" /></p>

### Review every call the AI made

The **Requests** tab logs every REST API call and every MCP tool call: time, source, tool name, status, duration and the error message when a call failed. Filter by token, source, status or date, and click a row for the full details. Values that look like secrets are shown as `[redacted]`, and only people in your 3Dsellers company can see the log.

<p align="center"><img src="docs/images/api-mcp-requests-log.png" alt="The Requests log with time, source, MCP tool name, status, duration, rate-limit window and error message" width="820" /></p>

### Watch your rate limits

The **Rate limits** tab shows each limit, how much of it you used this minute and today, and when it resets. REST and MCP calls share the same counters.

<p align="center"><img src="docs/images/api-mcp-rate-limits.png" alt="The Rate limits tab with per-minute and per-day usage for each limit and the reset time" width="820" /></p>

Full guide: [API / MCP page: tokens, request log and rate limits](https://help.3dsellers.com/en/articles/17582017-api-mcp-page-tokens-request-log-and-rate-limits).

## Rate limits and pricing

- **Included in every plan:** the MCP server is part of every 3Dsellers plan, including the free trial.
- **AI actions:** actions the AI runs use AI actions bought in advance: AI Lite, 2,000 actions for $9 a month; AI Pro, 5,000 for $20; AI Elite, 10,000 for $29. Reading your data is free.
- **Rate limits:** REST and MCP calls share the same counters. Paid plans get 600 calls a minute and 50,000 a day. Per-minute counters reset every 60 seconds, per-day counters at 00:00 UTC.

Current prices: [3dsellers.com/pricing](https://www.3dsellers.com/pricing).

## Troubleshooting

- **The 3Dsellers tools do not show up:** in a chat app, turn the connector on from the **+** menu. In a developer tool, reload the MCP servers or restart the app.
- **`401 Unauthorized`:** sign in again, or check on the API / MCP page that the token is active and not revoked or expired.
- **`403 subscription_required`:** the account needs an active 3Dsellers plan or free trial.
- **`429 Too Many Requests`:** you reached a rate limit. Wait for the time in the `Retry-After` header, and check the **Rate limits** tab.
- **A tool call failed:** open the **Requests** tab on the API / MCP page. The row shows the tool, the status and the error message.
- **The sign-in window does not open in a developer tool:** use a bearer token from **Connect MCP** instead.
- **Still stuck:** email support@3dsellers.com with the time of the call and the tool name.

## FAQ

**What is an MCP server for eBay sellers?**
A hosted connection that lets an AI assistant such as Claude or ChatGPT work inside your 3Dsellers account: search and create products, publish listings to eBay and your other channels, update inventory and prices, manage orders and answer buyers. You connect it once with `https://api.3dsellers.com/mcp` and sign in.

**Do I need an eBay developer account?**
No. 3Dsellers is already connected to your eBay account, so the AI works through 3Dsellers. There is nothing to install and no API keys to manage.

**Can ChatGPT list items on eBay for me?**
Yes. Add 3Dsellers as an app in ChatGPT with the server URL, sign in, and ask it to create and publish a listing. ChatGPT shows you the draft and publishes it after you approve.

**Can Claude create and publish eBay listings?**
Yes. Add 3Dsellers from Claude's connector directory, sign in, and ask Claude to create a product and publish it to your eBay store.

**Can one AI chat manage eBay, Amazon, Walmart and Shopify?**
Yes. 3Dsellers keeps one catalog for every channel, so one connection covers all of them, including publishing a product from one channel to another.

**Which AI assistants work with it?**
Any assistant that supports remote MCP servers: Claude, ChatGPT, Grok, Claude Code, Cursor, VS Code, Cline, Windsurf, Gemini CLI, Kiro, Codex CLI, Perplexity, Mistral Le Chat and others.

**Is there a REST API too?**
Yes. The same account and token work with the [3Dsellers REST API](https://www.3dsellers.com/channel-integration/3dsellers-api). Reference: [api.3dsellers.com/docs](https://api.3dsellers.com/docs).

**Is this repository the server's source code?**
No. The server is hosted and maintained by 3Dsellers. This repository contains documentation and config examples only.

## Links

- MCP server page: [3dsellers.com/channel-integration/3dsellers-mcp](https://www.3dsellers.com/channel-integration/3dsellers-mcp)
- Setup guide: [How to connect AI agents to 3Dsellers using MCP](https://help.3dsellers.com/en/articles/15433466-how-to-connect-ai-agents-to-3dsellers-using-mcp)
- Tokens, request log and rate limits: [Help Center article](https://help.3dsellers.com/en/articles/17582017-api-mcp-page-tokens-request-log-and-rate-limits)
- REST API: [api.3dsellers.com/docs](https://api.3dsellers.com/docs)
- Video: [3Dsellers MCP in under eight minutes](https://www.youtube.com/watch?v=hqkb0MN3nak)
- Official MCP Registry: `com.3dsellers/mcp`
- Support: support@3dsellers.com
- Privacy policy: [3dsellers.com/privacy-policy](https://www.3dsellers.com/privacy-policy)

## License

The documentation and examples in this repository are released under the [MIT License](LICENSE). The 3Dsellers service is subject to the [3Dsellers terms](https://www.3dsellers.com/legal).
