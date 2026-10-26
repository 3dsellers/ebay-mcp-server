---
description: Show buyer messages waiting for a reply and draft answers
argument-hint: [store username or "all"]
---

Follow the `buyer-messages` skill of this plugin. Store: $ARGUMENTS (default: all stores). List unanswered buyer messages with `get-helpdesk-tickets` (`isReplied: false`, `source: ["regular"]`), read each thread with `get-helpdesk-ticket-messages`, and draft a short reply for each one. Show all drafts and wait for my approval before you send any of them.
