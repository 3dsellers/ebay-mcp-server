---
name: buyer-messages
description: Read buyer messages, returns, cancellations and cases in the 3Dsellers Helpdesk, draft replies and send them after approval. Use for "any messages waiting", "reply to this buyer", or "what is this return about".
---

# Buyer messages with 3Dsellers

## 1. Find what is waiting

- Call `get-helpdesk-ticket-counts` for the overview.
- Call `get-helpdesk-tickets` with `isReplied: false`, `source: ["regular"]` and `sortBy: "lastMessageDate"`. That is the queue of buyer messages with no answer. Add `status: ["new_ticket", "to_do"]` to match the inbox folders.
- Returns, cancellations, Item Not Received inquiries and cases come back by default with their eBay detail in `caseDetail`. Narrow with `source: ["ebay_return"]` and so on when the seller asks about them.
- Ticket bodies are not in the list. Call `get-helpdesk-ticket-messages` for the full thread before you draft anything.

## 2. Draft the reply

- Read the whole thread and the linked order (`get-orders` with `externalId` when you need the order details).
- Write a short, polite reply in the seller's voice: answer the question, say what happens next, no excuses. Plain text for eBay member messages, no links, since a link can get the message rejected by eBay.
- Show the draft to the seller. Do not send until they say yes.

## 3. Send

- `reply-to-helpdesk-ticket` with `id`, `body`, and `authorName` (for example "Claude via 3Dsellers") so teammates can tell it apart from an app reply. Add `markResolved: true` only when the seller said the ticket is done.
- Limits: 1 reply per minute and 10 per day per ticket. A refused send tells you how many seconds to wait. Never retry in a loop.
- `add-helpdesk-ticket-note` adds a note the team sees and the buyer never does. Use it to leave context, for example "buyer asked for a refund, waiting for the return".
- `set-helpdesk-ticket-status` moves a ticket to `to_do`, `waiting_for_reply`, `snoozed`, `resolved` or `archived`.

## 4. Automatic messages

For messages that should go out after every sale, shipment or delivery, use `get-auto-messages` and `create-auto-message` instead of replying by hand.

## Rules

- A reply is a real marketplace message from the seller's account. One wrong reply reaches a real buyer, so always show the draft first.
- Never promise a refund, a replacement or a date the seller did not confirm.
