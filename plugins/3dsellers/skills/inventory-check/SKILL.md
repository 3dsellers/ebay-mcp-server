---
name: inventory-check
description: Find low-stock or out-of-stock products in 3Dsellers, compare warehouse stock with what each channel shows, and fix quantities. Use for "what is below 5", "sync Amazon quantity to eBay", or "set SKU X to 20".
---

# Inventory check with 3Dsellers

## 1. Find low stock

Call `get-products` with a `filters` tree and a small `fields` list, so the catalog join stays cheap:

```json
{
  "filters": [{ "property": "warehouses.on_hand_quantity", "type": "number", "option": "less than", "value": 5 }],
  "fields": ["sku", "title", "inventory", "price"],
  "limit": 100
}
```

Page until `metadata.total` is covered. Group the result by zero stock and low stock.

## 2. Compare with the channels

- Call `get-product-listings` with `productId` (or `sku`) for the products in question. Three numbers come back:
  - `warehouseQuantity`: the stock 3Dsellers holds behind the listing.
  - `quantity`: what the buyer sees on the channel.
  - `upToQuantity`: the Inventory Control cap, only active when `inventoryControl` is true.
- `quantity` lower than `warehouseQuantity` is normal when a cap is on. A real mismatch is a different `warehouseQuantity` across listings of the same SKU, or a stale `lastSyncDate`.
- For multi-variation listings pass `withVariations: true`, since stock lives per variation.

## 3. Fix quantities

- Product in the catalog: `patch-product` with `fields.inventory.onHandQuantity`. Linked listings follow through inventory sync.
- Listing that belongs to no product: `set-listing-inventory` with `listingId` and `warehouseQuantity`. Use `adjustBy` with an `idempotencyKey` (any unique string) for "add 20" or "remove 3".
- One variation: `set-variation-inventory`.
- Many products at once: the `bulk-edit` skill with `node_product_catalog_edit_quantity` (set the warehouse stock) and `node_product_catalog_revise_inventory` (push it to the channels).
- Inventory sync on or off for an account: `set-inventory-sync`.

## 4. Report

Short table: SKU, title, warehouse stock, stock on each channel, what you changed. Flag listings whose `lastSyncDate` is old, since their channel numbers may be stale.

## Rules

- A quantity write reaches the marketplace. Confirm the list with the seller before you write more than one product.
- Do not set stock below zero. `set-listing-inventory` refuses it rather than clamping.
