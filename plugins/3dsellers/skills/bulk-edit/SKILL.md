---
name: bulk-edit
description: Change prices, item specifics, tags, policies, titles or quantities on many products or listings at once through 3Dsellers bulk actions, always with a dry run first. Use for "raise every price in X by 10%", "set Brand on all shoes", "end these listings".
---

# Bulk edits with 3Dsellers

A bulk action runs once over a selection and reports `done` whether it touched 3 records or 30,000. The dry run is the only moment to check the scope, so never skip it.

## 1. Pick the right tool

Prefer a dedicated tool when one exists:

- Item specifics on catalog products: `set-item-specifics` (`fields`, `productIds` or `selectAll` + `filters`, `dryRun: true` first). Every field name must already exist as a custom attribute; check with `get-product-custom-attributes`.
- Publishing: `publish-products-to-channel`.
- Tags: `set-product-tags`, `set-listing-tags`, `set-order-tags`.
- Business policies: `apply-policies`.
- One listing's quantity: `set-listing-inventory` or `set-variation-inventory`.
- One product's fields: `patch-product`.

For everything else use the raw bulk-action pattern:

1. `get-action-catalog` once. Keep `usage.filters` (the filter reference) and find the pattern. Common ones:
   - `node_product_catalog_new_update_attribute`: set or adjust a product attribute, including price by amount or percent.
   - `node_product_catalog_revise_price` / `node_product_catalog_revise_inventory`: push catalog price or stock to linked listings.
   - `node_listing_tool_big_bulk_action`: Quick Edit on listings (price, title, description, quantity and more).
   - `node_listing_tool_end_items`: end listings on the marketplace.
   - `node_listing_tool_find_and_replace`: text in titles or descriptions.
2. `get-action-schema` with that pattern to get the `config` schema and an example. Send only the forms the schema names.
3. `create-action` with `dryRun: true`. It returns the count and up to 10 ids. Show them to the seller.
4. After the seller confirms, call `create-action` again with the same selection and `confirmCount` set to the dry-run count. The action is refused if the selection moved.
5. Poll `get-action` until `status` is `done` or `error`.

## 2. Build the selection

- Explicit ids: `items: [id, id, ...]` from `get-products` or `get-product-listings`.
- A saved segment: `get-segments` returns the filter tree a seller already trusts. Pass it as `filters` with `selectAll: true`.
- A new filter: a condition is `{ property, type, option, value }`. `type` decides which `option` values are legal. Examples:
  - Active eBay listings over 50: `[{ "property": "listing_status", "type": "string", "option": "is", "value": "Active" }, { "property": "channel", "type": "string", "option": "is", "value": "ebay" }, { "property": "price", "type": "number", "option": "greater than", "value": 50 }]`
  - Products with no brand: `[{ "property": "brand", "type": "string", "option": "is empty", "value": "" }]`
- Negative operators such as `does not contain` exclude records whose field is empty. OR in an `is empty` condition when those should be included.

## 3. Report

- `errorsCount` counts failed items, not the action. Read `errors` from `get-action` and report the channel's own message per item.
- `totalCount` is 0 for a `selectAll` action until the worker resolves it. Never read that as "nothing happened".
- Do not verify by reading the field back from the listing right away: some fields sync later. The action record is the source of truth.

## Rules

- One dry run, one confirmation from the seller, one real run. No loops.
- Never widen a selection on your own. If the filter matches more than the seller expected, stop and show the count.
