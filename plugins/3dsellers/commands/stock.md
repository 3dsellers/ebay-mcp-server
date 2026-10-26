---
description: Find low-stock products and compare warehouse stock with each channel
argument-hint: [threshold, default 5]
---

Follow the `inventory-check` skill of this plugin with threshold $ARGUMENTS (default 5). Find products below the threshold with `get-products` and a `warehouses.on_hand_quantity` filter, compare with `get-product-listings`, and report a table of SKU, title, warehouse stock and channel stock. Do not change any quantity unless I ask.
