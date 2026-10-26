---
description: Create a product and publish it to a marketplace through 3Dsellers
argument-hint: <what to list> to <store username>
---

Follow the `create-listing` skill of this plugin for: $ARGUMENTS. Resolve the store with `get-sellers` by username, ask me for any missing detail (price, quantity, condition, images) instead of inventing it, create the product, publish it with `publish-products-to-channel`, poll `get-action` until it finishes, and report the listing status and any channel errors.
