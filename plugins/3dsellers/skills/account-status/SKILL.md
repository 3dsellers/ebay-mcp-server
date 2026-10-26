---
name: account-status
description: Check that the 3Dsellers MCP connection works, which marketplace accounts are connected and healthy, and what the AI is allowed to do. Use first in a new session, or when a tool returns 401, 403 or 429.
---

# 3Dsellers connection and account status

## 1. Is the MCP server connected?

- Call `get-sellers`. A list of accounts means the token works.
- `401` or "unauthorized": the token is missing or expired. The seller creates one in 3Dsellers under **Settings > Profile > API / MCP**, then sets it in the environment variable `THREEDSELLERS_MCP_TOKEN` and restarts Claude Code. Alternative without the plugin's server entry: `claude mcp add --transport http 3dsellers https://api.3dsellers.com/mcp --header "Authorization: Bearer <token>"`.
- `403` with "Insufficient scope": the token was created with limited permissions. The seller creates a new token with the scopes the task needs (for example `order:write` for tracking, `helpdesk:write` for replies).
- `403` about the subscription: the 3Dsellers account has no active plan or trial.
- `429`: rate limit. Read `Retry-After`, wait that long, and do not retry sooner. Limits are shown live in the API / MCP page.

## 2. Which accounts are connected?

- `get-sellers` returns every marketplace account with `channel`, `username`, `sellerStatus` and `tokenStatus`.
- `get-integration-status` checks that each marketplace connection still works. Report any account with `tokenStatus: "invalid"`: the seller reconnects it in 3Dsellers under Selling Accounts.

## 3. What can the AI do here?

Group the tools for the seller in plain words: products and listings, inventory, orders, bulk actions, CSV imports, exports, helpdesk, automations, offers, listing templates. Read tools only look. Write tools make changes and ask for approval first.

## Rules

- Do not paste a token into chat or a file in the repo. It lives in the environment or in the user's own MCP config.
- Every call the AI makes is logged in 3Dsellers under API / MCP > Requests, so the seller can review what happened.
