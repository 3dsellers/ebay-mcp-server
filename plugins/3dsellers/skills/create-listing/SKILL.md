---
name: create-listing
description: Create a product in the 3Dsellers catalog and publish it to eBay, Amazon, Walmart, Etsy, Shopify or TikTok Shop. Use when the seller wants to list a new item, cross-list existing products to another channel, or asks "list this on eBay".
---

# Create a listing with 3Dsellers

Work through the 3Dsellers MCP tools. Every write tool asks the seller for approval before it runs. Never guess a store or a product: resolve ids first.

## 1. Find the store

- Call `get-sellers`. Match the store the seller named against `username` (the marketplace user id or shop name), never against `name` (that is the contact person).
- If nothing matches, show the usernames you found and stop. Publishing to the wrong store edits real listings.
- Check `tokenStatus` is `active`. If it is `invalid`, tell the seller to reconnect the account in 3Dsellers before you continue.

## 2. Get or create the catalog product

Skip this step when the seller wants to cross-list products that already exist: find them with `get-products` (by `sku`, `tags` or a `filters` tree) and go to step 3.

For a new item:

- Ask for anything you cannot infer: title, price and currency, quantity, condition, brand, and image URLs. Do not invent identifiers such as UPC or MPN.
- Call `get-product-categories`. Pick the matching catalog category id. If none fits, call `create-product-category` with a short name.
- Call `create-product` with `categoryId`, `sku` (or `skuTemplateId` from `get-sku-templates` when the seller uses SKU templates), `title`, `description`, `price`, `inventory`, `images`, `brand`, `condition` and `references` when known. Keep the response `id`.
- Make sure the catalog category maps to a channel category: call `get-unmapped-categories` for the target seller. If the category is unmapped, find the channel category with `get-channel-category-fields` or ask the seller for it, then call `set-category-mappings`.

## 3. Publish

- Call `publish-products-to-channel` with `sellerId` and `productIds`. Leave `templateId` and the policies out unless the seller named a template (`get-product-templates`) or specific business policies (`get-seller-policies`).
- Products already listed on that channel are skipped by default. Only pass `existingListingAction: "update"` when the seller explicitly wants a full revise of the existing listing.
- Publishing is asynchronous. Poll `get-action` with the returned `id` every few seconds until `status` is `done` or `error`.

## 4. Report the result

- `errorsCount` counts items that failed, not the whole action. Read `errors` and report the channel's own message per item, for example a missing required item specific.
- Call `get-product-listings` with `productId` and `sellerId` to show the listing status, item id and price.
- If the listing was created as a draft (status `Library`), fill missing item specifics with `set-draft-details` (merges only the aspects you name) and tell the seller how to publish it from Listings > Drafts or run `publish-products-to-channel` again.

## Rules

- Use `get-channel-category-fields` to see what one channel category requires. Do not call `get-category-specifics` more than once per session: it is capped at 3 calls per day.
- Up to 100 product ids per publish call. Split larger batches and report each batch.
- Do not retry a failed publish in a loop. Show the error and ask the seller how to proceed.
