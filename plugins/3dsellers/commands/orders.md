---
description: Daily order check across every connected store - new orders, orders to ship, messages waiting
argument-hint: [since, e.g. "yesterday" or "2026-10-20"]
---

Run the daily order check from the `daily-orders` skill of this plugin. Period: $ARGUMENTS (default: since yesterday 00:00 in the seller's time zone). List the stores with `get-sellers`, pull orders per store, then end with the buyer messages waiting for a reply. Report per store in a short table. Do not push tracking or send anything unless I ask.
