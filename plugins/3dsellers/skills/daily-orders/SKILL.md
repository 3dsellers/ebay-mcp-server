---
name: daily-orders
description: Daily order check across every connected store in 3Dsellers - new orders, orders waiting to ship, tracking numbers to push, and buyer messages waiting for a reply. Use for "what came in today", "ship these orders", or "add tracking".
---

# Daily orders with 3Dsellers

## 1. List the stores

Call `get-sellers` once and keep the list. `get-orders` needs a `sellerId`, so loop over the stores the seller cares about. Skip stores whose `tokenStatus` is `invalid` and mention them at the end.

## 2. Pull the orders

- For each store call `get-orders` with `sellerId`. Use `createdAfter` (ISO 8601) for "since yesterday" or "new since my last check". It filters on the import time, not the order date.
- Read the `status` values that come back on the first page and use the same spelling when you filter with `status`. Do not guess status names.
- Use `limit` up to 100 and page until `metadata.total` is covered.
- Summarize per store: count, total value, items, and anything unusual (high value, same buyer several times, notes from the buyer).

## 3. Push tracking numbers

When the seller gives you carrier and tracking numbers:

- Build `items` for `set-order-tracking` with `orderId` (or `externalOrderId`), `carrier` as the marketplace expects it (for example `USPS`, `UPS`, `FedEx`, `Royal Mail`) and `trackingNumber`. Up to 50 per call.
- Run it once with `dryRun: true` and show the seller which orders resolved. The real run emails the buyer and cannot be undone.
- Run the real call only after the seller confirms. Read `results` and report the rows the marketplace rejected, each with its reason.
- To mark an order shipped without a tracking number, queue `node_order_manager_mark_shipped` through `create-action` instead.

## 4. Invoices and tags

- `generate-order-invoice` then `get-order-invoice` gives a PDF link for one order.
- `set-order-tags` adds or removes tags, for example `VIP` or `gift`. It never replaces the full tag set.

## 5. Buyer messages

End with the messages queue: call `get-helpdesk-tickets` with `isReplied: false` and `source: ["regular"]`, and list the buyers waiting. Use the `buyer-messages` skill to draft replies.

## Rules

- Never send tracking, a reply or a refund without the seller's explicit yes for that batch.
- Report what you saw per store, in a short table: store, new orders, to ship, messages waiting.
